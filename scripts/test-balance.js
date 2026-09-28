// v2.11 regressions: per-mode leaderboard cap, no score-based extra lives,
// boss checkpoints, and escort score decay.
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
      add: (...n) => n.forEach(x => this.classes.add(x)),
      remove: (...n) => n.forEach(x => this.classes.delete(x)),
      contains: n => this.classes.has(n),
      toggle: (n, force) => ((force ?? !this.classes.has(n)) ? this.classes.add(n) : this.classes.delete(n))
    };
    this.style = {}; this.listeners = {}; this.value = ''; this.textContent = ''; this.disabled = false;
  }
  addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); }
  click() { for (const fn of this.listeners.click || []) fn({ preventDefault() {}, target: this }); }
  appendChild(x) { return x; } append() {} querySelector() { return null; } querySelectorAll() { return []; }
  getBoundingClientRect() { return { left: 0, top: 0, width: 1080, height: 820 }; } focus() {}
}

async function main() {
  const ids = new Map();
  const el = id => ids.get(id) || (ids.set(id, new FakeElement(id)), ids.get(id));
  el('game').getContext = () => ({ setTransform() {}, imageSmoothingEnabled: true });
  const store = new Map();
  const localStorage = { getItem: k => store.has(k) ? store.get(k) : null, setItem: (k, v) => store.set(k, String(v)) };
  // Seed 60 saved scores: 45 Endless (all higher) and 15 Campaign.
  const seeded = [];
  for (let i = 0; i < 45; i++) seeded.push({ name: 'E' + i, score: 900000 - i, mode: 'ENDLESS', ts: i });
  for (let i = 0; i < 15; i++) seeded.push({ name: 'C' + i, score: 100000 - i, mode: 'CAMPAIGN', ts: i });
  store.set('starSquadronLeaderboardV1', JSON.stringify(seeded));
  const win = { devicePixelRatio: 1, addEventListener() {} };
  class FakeImage { set src(v) { this.url = v; queueMicrotask(() => this.onload?.()); } get src() { return this.url; } }
  const context = vm.createContext({
    window: win, document: { getElementById: el, createElement: t => new FakeElement(t), querySelectorAll: () => [] },
    localStorage, Image: FakeImage, performance: { now: () => 1000 }, console: { ...console, info() {} },
    Math, Date, Promise, setTimeout: () => 0, clearTimeout() {}, requestAnimationFrame() {}, queueMicrotask
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'score-rules.js'), 'utf8'), context);
  let source = fs.readFileSync(path.join(root, 'game.js'), 'utf8').replace(/\r\n/g, '\n');
  const tail = '  requestAnimationFrame(loop);\n})();';
  assert(source.includes(tail));
  source = source.replace(tail, `  window.__qa = {
    addScore: v => addScore(v), endGame: () => endGame(),
    setLevel: n => { level = n; }, beginUpgradeChoice: () => beginUpgradeChoice(), chooseUpgrade: k => chooseUpgrade(k),
    makeEscort: summons => { boss = { phase: 1, escortSummons: summons }; const e = makeEscortEnemy('gold', 0, 0, 1); boss = null; return e; },
    board: mode => combinedLeaderboard(mode), saved: () => customLeaderboard.length,
    state: () => ({ lives, score, level, eligible: leaderboardEligibleRun, checkpoint: runCheckpoint && { ...runCheckpoint } })
  };\n${tail}`);
  vm.runInContext(source, context, { filename: 'game.js' });
  await new Promise(r => setImmediate(r));
  const qa = win.__qa;

  // 1. Campaign scores survive a reload even when Endless has 40+ higher entries.
  assert.equal(qa.board('CAMPAIGN').some(e => e.name === 'C0'), true, 'Campaign saves must survive reload');
  assert.equal(qa.saved(), 55, '40 Endless + 15 Campaign kept');
  console.log('PASS: leaderboard keeps 40 per mode');

  // 2. Score alone no longer awards lives (lives come from drops and boss kills).
  el('startButton').click();
  assert.equal(qa.state().lives, 3);
  qa.addScore(500000); assert.equal(qa.state().lives, 3, 'Score does not award lives');
  console.log('PASS: no score-based extra lives');

  // 3. Clearing a boss level in an eligible campaign saves a checkpoint;
  //    continuing keeps the run leaderboard-eligible with half the score.
  el('gameOverRestartButton').click();
  el('startButton').click();
  qa.addScore(50000);
  qa.setLevel(5); qa.beginUpgradeChoice(); qa.chooseUpgrade('damage');
  const cp = qa.state().checkpoint;
  assert.equal(cp?.level, 6, 'Checkpoint at level after boss');
  qa.endGame();
  assert.equal(el('checkpointButton').classList.contains('hidden'), false, 'Continue button shown');
  el('checkpointButton').click();
  const after = qa.state();
  assert.equal(after.level, 6);
  assert.equal(after.eligible, true, 'Checkpoint continue stays eligible');
  assert.equal(after.score, Math.floor(cp.score / 2), 'Score halved');
  el('retryLevelButton').click();
  assert.equal(qa.state().eligible, false, 'Retry Level is still practice');
  console.log('PASS: boss checkpoint continue');

  // 4. Repeat escort summons are worth less (floor 25%).
  const first = qa.makeEscort(0).points, fifth = qa.makeEscort(4).points, late = qa.makeEscort(20).points;
  assert.ok(fifth < first && late >= Math.floor(first * 0.25) && late < fifth, 'Escort value decays to a floor');
  console.log('PASS: escort score decay');
}
main().catch(err => { console.error(err); process.exitCode = 1; });
