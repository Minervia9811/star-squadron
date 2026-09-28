const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const required = [
  'main.js',
  'game.js',
  'score-rules.js',
  'index.html',
  'styles.css',
  'assets/player.svg',
  'assets/enemy-blue.svg',
  'assets/enemy-red.svg',
  'assets/enemy-gold.svg',
  'assets/enemy-green.svg',
  'assets/enemy-purple.svg',
  'assets/enemy-teal.svg',
  'assets/enemy-orange.svg',
  'assets/enemy-white.svg',
  'assets/enemy-kamikaze.svg',
  'assets/powerup.svg',
  'assets/boss-warden.svg',
  'assets/boss-widow.svg',
  'assets/boss-maw.svg',
  'assets/boss-regent.svg',
  'assets/boss-bishop.svg',
  'assets/boss-vesper.svg'
];

console.log('[INSTALL CHECK] Node:', process.version, 'Platform:', process.platform, process.arch);
let failed = false;

for (const item of required) {
  const full = path.join(root, item);
  if (!fs.existsSync(full)) {
    failed = true;
    console.error('[INSTALL CHECK] MISSING:', item);
  }
}

for (const item of ['main.js', 'game.js', 'score-rules.js']) {
  try {
    new vm.Script(fs.readFileSync(path.join(root, item), 'utf8'), { filename: item });
    console.log('[INSTALL CHECK] JavaScript syntax OK:', item);
  } catch (error) {
    failed = true;
    console.error('[INSTALL CHECK] JavaScript syntax FAILED:', item);
    console.error(error.stack || error);
  }
}

try {
  const electronPkg = require('electron/package.json');
  console.log('[INSTALL CHECK] Electron:', electronPkg.version);
} catch (error) {
  failed = true;
  console.error('[INSTALL CHECK] Electron package unavailable:', error.message);
}

if (failed) {
  console.error('[INSTALL CHECK] FAILED');
  process.exitCode = 1;
} else {
  console.log('[INSTALL CHECK] OK - project files, syntax, and Electron dependency are present.');
}
