const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');

class FakeElement {
  constructor(id = '') {
    this.id = id;
    this.classes = new Set();
    this.classList = {
      add: (...names) => names.forEach(name => this.classes.add(name)),
      remove: (...names) => names.forEach(name => this.classes.delete(name)),
      contains: name => this.classes.has(name),
      toggle: (name, force) => (force === undefined ? (this.classes.has(name) ? this.classes.delete(name) && false : this.classes.add(name) && true) : force ? this.classes.add(name) && true : (this.classes.delete(name), false))
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
  appendChild(el) { this.children.push(el); return el; }
  append(...els) { this.children.push(...els); }
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
  const values = new Map();
  const localStorage = {
    getItem: key => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value))
  };
  const win = { devicePixelRatio: 1, addEventListener() {} };
  class FakeImage { set src(value) { this.url = value; queueMicrotask(() => this.onload && this.onload()); } }
  const context = vm.createContext({
    window: win, document, localStorage, Image: FakeImage,
    performance: { now: () => 1000 }, console: { ...console, info() {} },
    Math, Date, Promise, setTimeout, clearTimeout, requestAnimationFrame() {},
    queueMicrotask
  });
  const rules = fs.readFileSync(path.join(root, 'score-rules.js'), 'utf8');
  vm.runInContext(rules, context, { filename: 'score-rules.js' });
  let source = fs.readFileSync(path.join(root, 'game.js'), 'utf8').replace(/\r\n/g, '\n'); // tolerate Windows CRLF checkouts
  const end = '  requestAnimationFrame(loop);\n})();';
  assert(source.includes(end));
  source = source.replace(end, `  window.__qa = {
    addScore: value => addScore(value),
    gameOver: () => endGame(),
    victory: () => completeCampaign(),
    openLeaderboard: () => openLeaderboard('pause'),
    state: () => ({ score, runMode, leaderboardEligibleRun, lastRunResult: lastRunResult && { ...lastRunResult } })
  };\n${end}`);
  vm.runInContext(source, context, { filename: 'game.js' });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(el('startButton').disabled, false, 'Assets must finish loading before test starts');
  const qa = win.__qa;

  el('startButton').click();
  qa.addScore(60_000);
  assert.equal(el('debugNotice').classList.contains('hidden'), true, '60K points must not flash mid-run');
  assert.equal(qa.state().lastRunResult, null, 'Active runs have no final record');
  qa.gameOver();
  assert.equal(el('gameOverRecord').classList.contains('hidden'), true, '60K Game Over is below campaign record');

  el('gameOverRestartButton').click();
  qa.addScore(270_000);
  assert.equal(el('debugNotice').classList.contains('hidden'), true, '270K points cannot flash a mid-run record');
  el('pauseButton').click();
  el('pauseLeaderboardButton').click();
  assert.equal(el('leaderboardSaveButton').disabled, true, 'Saving is blocked while the run is active');
  el('leaderboardBackButton').click();
  el('resumeButton').click();
  qa.gameOver();
  assert.match(el('gameOverRecord').textContent, /NEW CAMPAIGN HIGH SCORE/, 'The record is shown on Game Over');
  el('gameOverLeaderboardButton').click();
  assert.equal(el('leaderboardSaveButton').disabled, false, 'Final record can be saved');
  el('leaderboardBackButton').click();
  el('gameOverMenuButton').click();
  el('leaderboardButton').click();
  assert.equal(el('leaderboardSaveButton').disabled, false, 'Finished but unsaved record remains available from the menu');
  el('leaderboardBackButton').click();

  win.__starSquadronDebug.startLevel(5);
  qa.addScore(300_000);
  qa.gameOver();
  assert.equal(qa.state().leaderboardEligibleRun, false, 'Level Select is a practice run');
  assert.equal(el('gameOverRecord').classList.contains('hidden'), true, 'Practice cannot claim high score');

  el('gameOverMenuButton').click();
  el('endlessButton').click();
  qa.addScore(400_000);
  qa.gameOver();
  assert.equal(el('gameOverRecord').classList.contains('hidden'), true, 'Endless uses its own higher baseline');
  el('gameOverRestartButton').click();
  qa.addScore(520_000);
  qa.gameOver();
  assert.match(el('gameOverRecord').textContent, /NEW ENDLESS HIGH SCORE/, 'Endless record is checked at Game Over');

  el('gameOverMenuButton').click();
  el('startButton').click();
  qa.addScore(280_000);
  assert.equal(el('victoryRecord').classList.contains('hidden'), true, 'No mid-run victory banner');
  qa.victory();
  assert.match(el('victoryRecord').textContent, /NEW CAMPAIGN HIGH SCORE/, 'Campaign victory evaluates the final score');
  console.log('PASS: 15 renderer state and leaderboard lifecycle checks');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
