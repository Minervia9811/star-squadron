const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { evaluateFinalScore } = require('../score-rules.js');

const campaign = [
  { name: 'ACE', score: 250000 },
  { name: 'VIPER', score: 220000 },
  { name: 'NOVA', score: 195000 }
];
const endless = [
  { name: 'ACE', score: 500000 },
  { name: 'VIPER', score: 440000 },
  { name: 'NOVA', score: 390000 }
];
const options = (score, board = campaign, eligible = true) => ({
  score, board, eligible
});
assert.equal(evaluateFinalScore(options(55000)).newRecord, false, 'Level 5-sized score must not trigger campaign record');
assert.equal(evaluateFinalScore(options(260000)).newRecord, true, 'Beating the top campaign score is a new record');
assert.equal(evaluateFinalScore(options(250000)).newRecord, false, 'Ties are not new records');
assert.equal(evaluateFinalScore(options(260000, campaign, false)).newRecord, false, 'Practice runs are excluded');
assert.equal(evaluateFinalScore(options(280000, [{ name: 'ACE', score: 250000 }, { name: 'OTHER', score: 300000 }])).newRecord, false, 'A saved player record supersedes defaults');
assert.equal(evaluateFinalScore(options(450000, endless)).newRecord, false, 'Endless uses its own higher threshold');
assert.equal(evaluateFinalScore(options(510000, endless)).newRecord, true, 'Endless record is judged against the endless board');

const source = fs.readFileSync(path.join(__dirname, '..', 'game.js'), 'utf8').replace(/\r\n/g, '\n');
const addScore = source.split('  function addScore(amount, x = null, y = null) {')[1].split('  let messageTimeout')[0];
assert.doesNotMatch(addScore, /showDebugNotice|finalizeRunRecord/, 'In-combat score changes must not trigger record messages');
const ending = source.split('  function endGame() {')[1].split('  function spawnPowerupDrop')[0];
const victory = source.split('  function completeCampaign() {')[1].split('  function saveProgress')[0];
assert.match(ending, /finalizeRunRecord\(\)/, 'Game Over evaluates the completed run');
assert.match(victory, /finalizeRunRecord\(\)/, 'Campaign victory evaluates the completed run');
console.log('PASS: 7 score-rule scenarios + 3 integration checks');
