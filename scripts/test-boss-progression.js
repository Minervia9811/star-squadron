// Regression: killing a boss's final escort must not complete a campaign wave
// or restart the boss. Also verifies the normal two pre-boss waves still advance.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

class FakeElement {
  constructor(id = '') {
    this.id = id;
    this.classes = new Set();
    this.classList = {
      add: (...names) => names.forEach(name => this.classes.add(name)),
      remove: (...names) => names.forEach(name => this.classes.delete(name)),
      contains: name => this.classes.has(name),
      toggle: (name, force) => force ? this.classes.add(name) : this.classes.delete(name)
    };
    this.style = {};
    this.children = [];
    this.listeners = {};
    this.value = '';
    this.textContent = '';
    this.disabled = false;
    this.width = 1080;
    this.height = 820;
  }
  addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); }
  click() { for (const fn of this.listeners.click || []) fn({ preventDefault() {}, target: this }); }
  appendChild(item) { this.children.push(item); return item; }
  append(...items) { this.children.push(...items); }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  getBoundingClientRect() { return { left: 0, top: 0, width: 1080, height: 820 }; }
  focus() {}
}

async function main() {
  const ids = new Map();
  const el = id => ids.get(id) || (ids.set(id, new FakeElement(id)), ids.get(id));
  el('game').getContext = () => ({ setTransform() {}, imageSmoothingEnabled: true });
  const document = {
    getElementById: el,
    createElement: tag => new FakeElement(tag),
    querySelectorAll: () => []
  };
  const store = new Map();
  const localStorage = {
    getItem: key => store.has(key) ? store.get(key) : null,
    setItem: (key, value) => store.set(key, String(value))
  };
  const window = { devicePixelRatio: 1, addEventListener() {} };
  class FakeImage {
    set src(value) { this.url = value; queueMicrotask(() => this.onload?.()); }
  }
  const logs = [];
  const context = vm.createContext({
    window, document, localStorage, Image: FakeImage,
    performance: { now: () => 1000 },
    console: { ...console, info: (...args) => logs.push(args.join(' ')) },
    Math, Date, Promise, setTimeout, clearTimeout, requestAnimationFrame() {}, queueMicrotask
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'score-rules.js'), 'utf8'), context, { filename: 'score-rules.js' });
  let source = fs.readFileSync(path.join(root, 'game.js'), 'utf8').replace(/\r\n/g, '\n'); // tolerate Windows CRLF checkouts
  const tail = '  requestAnimationFrame(loop);\n})();';
  assert(source.includes(tail), 'Renderer source has an unexpected ending');
  source = source.replace(tail, `  window.__bossQA = {
    startBoss: n => startGame(n, 'boss-select:regression', false, 'campaign'),
    startMission: n => startGame(n, 'mission-select', false, 'campaign'),
    step: dt => update(dt),
    eliminateEscorts: () => [...enemies].filter(e => e.bossEscort).forEach(killEnemy),
    eliminateWave: () => [...enemies].filter(e => !e.bossEscort).forEach(killEnemy),
    defeatBoss: () => destroyBoss(),
    snapshot: () => ({
      level, boss: boss?.def.id ?? null, bossHp: boss?.hp ?? null,
      bossCombat: boss?.state === 'combat', escorts: enemies.filter(e => e.bossEscort).length,
      otherEnemies: enemies.filter(e => !e.bossEscort).length,
      currentWave, totalWaves, waveTransitionTimer, pendingWaveAction,
      nextLevelTimer, upgradePending, campaignComplete, running
    })
  };\n${tail}`);
  vm.runInContext(source, context, { filename: 'game.js' });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(el('startButton').disabled, false, 'Assets should finish loading');
  const qa = window.__bossQA;
  const step = (seconds) => {
    for (let i = 0; i < Math.ceil(seconds / 0.25); i++) qa.step(0.25);
  };
  const ensureBossReady = (level) => {
    window.__starSquadronDebug.setInvulnerable(600);
    step(12); // up to ten-second first-time briefing, ~1.15-second entry, first escort deployment
    const state = qa.snapshot();
    assert.equal(state.bossCombat, true, `L${level} boss must be in combat`);
    assert.ok(state.escorts > 0, `L${level} boss must have spawned escorts`);
  };

  for (const level of [5, 10, 15, 20, 25, 30]) {
    qa.startBoss(level);
    ensureBossReady(level);
    const initial = qa.snapshot();
    qa.eliminateEscorts();
    const after = qa.snapshot();
    assert.equal(after.escorts, 0, `L${level} escorts must be removable`);
    assert.equal(after.boss, initial.boss, `L${level} boss must persist when the last escort dies`);
    assert.equal(after.pendingWaveAction, null, `L${level} escort death must not queue a wave`);
    assert.equal(after.waveTransitionTimer, 0, `L${level} escort death must not start a wave countdown`);
    assert.equal(after.currentWave, initial.currentWave, `L${level} escort death must not advance the stage`);
    step(6);
    const later = qa.snapshot();
    assert.equal(later.boss, initial.boss, `L${level} boss must not restart after escort removal`);
    assert.equal(later.pendingWaveAction, null, `L${level} must not schedule a new wave later`);
    assert.ok(later.escorts > 0, `L${level} may replenish its guards without restarting`);
    console.log(`PASS: Level ${level} ${initial.boss} escorts defeated without restarting boss`);
  }

  // Practice (level-selected) bosses progress to the next level only after their defeat.
  qa.startBoss(5);
  ensureBossReady(5);
  qa.defeatBoss();
  assert.equal(qa.snapshot().boss, null);
  assert.ok(qa.snapshot().nextLevelTimer > 0, 'Boss defeat should queue level completion');
  step(5); // death animation (up to 3.8 s) plays before the upgrade screen
  assert.equal(qa.snapshot().upgradePending, true, 'Boss defeat should open the upgrade screen');
  assert.equal(qa.snapshot().level, 5, 'Level advances on upgrade selection, not escort deaths');
  console.log('PASS: Actual boss defeat advances to level upgrade screen');

  // The two regular escort waves before a boss must *still* progress normally.
  qa.startMission(5);
  assert.equal(qa.snapshot().currentWave, 1);
  qa.eliminateWave();
  assert.equal(qa.snapshot().pendingWaveAction, 'next-wave', 'First pre-boss wave should queue second');
  step(1.5);
  assert.equal(qa.snapshot().currentWave, 2);
  assert.ok(qa.snapshot().otherEnemies > 0);
  qa.eliminateWave();
  assert.equal(qa.snapshot().pendingWaveAction, 'boss', 'Second pre-boss wave should queue boss');
  step(1.75);
  assert.equal(qa.snapshot().boss, 'warden', 'Pre-boss waves should lead to boss intro');
  ensureBossReady(5);
  qa.eliminateEscorts();
  assert.equal(qa.snapshot().pendingWaveAction, null, 'Boss guards cannot restart the pre-boss wave sequence');
  console.log('PASS: Normal Level 5 pre-boss waves advance, then boss escorts stay independent');
  console.log('PASS: 8 boss progression scenarios');
}

main().catch(err => { console.error(err); process.exitCode = 1; });
