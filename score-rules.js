// Shared, deterministic final-score evaluation. Called only after a run ends.
(function (host) {
  'use strict';

  function evaluateFinalScore(options) {
    const { score, eligible, board = [] } = options || {};
    const finalScore = Math.max(0, Math.floor(Number(score) || 0));
    const previousBest = board.reduce((highest, entry) => {
      const value = Math.max(0, Math.floor(Number(entry && entry.score) || 0));
      return Math.max(highest, value);
    }, 0);
    const newRecord = Boolean(eligible) && finalScore > 0 && finalScore > previousBest;
    return {
      score: finalScore,
      eligible: Boolean(eligible),
      previousBest,
      newRecord
    };
  }

  if (typeof module === 'object' && module.exports) module.exports = { evaluateFinalScore };
  else host.StarSquadronScoreRules = { evaluateFinalScore };
})(typeof window !== 'undefined' ? window : this);
