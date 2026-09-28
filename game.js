(() => {
  'use strict';

  const LOGICAL_W = 1080;
  const LOGICAL_H = 820;
  const DPR_CAP = 2;
  const TAU = Math.PI * 2;

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d', { alpha: false });
  const gameOverRecord = document.getElementById('gameOverRecord');
  const victoryRecord = document.getElementById('victoryRecord');
  const overlay = document.getElementById('startOverlay');
  const startButton = document.getElementById('startButton');
  const messageEl = document.getElementById('message');
  const pauseOverlay = document.getElementById('pauseOverlay');
  const pauseButton = document.getElementById('pauseButton');
  const resumeButton = document.getElementById('resumeButton');
  const restartButton = document.getElementById('restartButton');
  const quickRestartButton = document.getElementById('quickRestartButton');
  const missionSelectButton = document.getElementById('missionSelectButton');
  const bossArchiveButton = document.getElementById('bossArchiveButton');
  const enemyArchiveButton = document.getElementById('enemyArchiveButton');
  const controlsButton = document.getElementById('controlsButton');
  const endlessButton = document.getElementById('endlessButton');
  const leaderboardButton = document.getElementById('leaderboardButton');
  const gameOverOverlay = document.getElementById('gameOverOverlay');
  const gameOverScore = document.getElementById('gameOverScore');
  const gameOverLevel = document.getElementById('gameOverLevel');
  const gameOverBossLine = document.getElementById('gameOverBossLine');
  const retryLevelButton = document.getElementById('retryLevelButton');
  const checkpointButton = document.getElementById('checkpointButton');
  const upgradeCopy = document.getElementById('upgradeCopy');
  const gameOverStats = document.getElementById('gameOverStats');
  const victoryStats = document.getElementById('victoryStats');
  const gameOverRestartButton = document.getElementById('gameOverRestartButton');
  const gameOverMissionSelectButton = document.getElementById('gameOverMissionSelectButton');
  const gameOverEnemyArchiveButton = document.getElementById('gameOverEnemyArchiveButton');
  const gameOverLeaderboardButton = document.getElementById('gameOverLeaderboardButton');
  const gameOverMenuButton = document.getElementById('gameOverMenuButton');
  const pauseMissionSelectButton = document.getElementById('pauseMissionSelectButton');
  const pauseEnemyArchiveButton = document.getElementById('pauseEnemyArchiveButton');
  const pauseLeaderboardButton = document.getElementById('pauseLeaderboardButton');
  const pauseControlsButton = document.getElementById('pauseControlsButton');
  const pauseLoreButton = document.getElementById('pauseLoreButton');
  const missionOverlay = document.getElementById('missionOverlay');
  const missionGrid = document.getElementById('missionGrid');
  const missionCloseButton = document.getElementById('missionCloseButton');
  const missionMenuButton = document.getElementById('missionMenuButton');
  const missionBossArchiveButton = document.getElementById('missionBossArchiveButton');
  const missionEnemyArchiveButton = document.getElementById('missionEnemyArchiveButton');
  const bossOverlay = document.getElementById('bossOverlay');
  const bossGrid = document.getElementById('bossGrid');
  const bossCloseButton = document.getElementById('bossCloseButton');
  const bossMenuButton = document.getElementById('bossMenuButton');
  const bossMissionSelectButton = document.getElementById('bossMissionSelectButton');
  const bossEnemyArchiveButton = document.getElementById('bossEnemyArchiveButton');
  const enemyOverlay = document.getElementById('enemyOverlay');
  const enemyGrid = document.getElementById('enemyGrid');
  const enemyCloseButton = document.getElementById('enemyCloseButton');
  const enemyMenuButton = document.getElementById('enemyMenuButton');
  const enemyMissionSelectButton = document.getElementById('enemyMissionSelectButton');
  const enemyBossArchiveButton = document.getElementById('enemyBossArchiveButton');
  const controlsOverlay = document.getElementById('controlsOverlay');
  const controlsCloseButton = document.getElementById('controlsCloseButton');
  const leaderboardOverlay = document.getElementById('leaderboardOverlay');
  const leaderboardList = document.getElementById('leaderboardList');
  const leaderboardCloseButton = document.getElementById('leaderboardCloseButton');
  const leaderboardBackButton = document.getElementById('leaderboardBackButton');
  const leaderboardMenuButton = document.getElementById('leaderboardMenuButton');
  const leaderboardCurrentScore = document.getElementById('leaderboardCurrentScore');
  const leaderboardCurrentMode = document.getElementById('leaderboardCurrentMode');
  const leaderboardName = document.getElementById('leaderboardName');
  const leaderboardSaveButton = document.getElementById('leaderboardSaveButton');
  const leaderboardStatus = document.getElementById('leaderboardStatus');
  const leaderboardCampaignTab = document.getElementById('leaderboardCampaignTab');
  const leaderboardEndlessTab = document.getElementById('leaderboardEndlessTab');
  const debugOverlay = document.getElementById('debugOverlay');
  const debugAnimGrid = document.getElementById('debugAnimGrid');
  const viewerHint = document.getElementById('viewerHint');
  const viewerName = document.getElementById('viewerName');
  const loreButton = document.getElementById('loreButton');
  const loreOverlay = document.getElementById('loreOverlay');
  const loreIntro = document.getElementById('loreIntro');
  const loreList = document.getElementById('loreList');
  const loreEnding = document.getElementById('loreEnding');
  const loreCloseButton = document.getElementById('loreCloseButton');
  const loreBackButton = document.getElementById('loreBackButton');
  const loreBossArchiveButton = document.getElementById('loreBossArchiveButton');
  const loreEnemyArchiveButton = document.getElementById('loreEnemyArchiveButton');
  const debugCloseButton = document.getElementById('debugCloseButton');
  const debugBackButton = document.getElementById('debugBackButton');
  const debugAssaultButton = document.getElementById('debugAssaultButton');
  const debugHudButton = document.getElementById('debugHudButton');
  const debugAssaultStatus = document.getElementById('debugAssaultStatus');
  const debugModeStatus = document.getElementById('debugModeStatus');
  const debugResult = document.getElementById('debugResult');
  const debugHud = document.getElementById('debugHud');
  const bossIntroOverlay = document.getElementById('bossIntroOverlay');
  const bossIntroImage = document.getElementById('bossIntroImage');
  const bossIntroLevel = document.getElementById('bossIntroLevel');
  const bossIntroName = document.getElementById('bossIntroName');
  const bossIntroTitle = document.getElementById('bossIntroTitle');
  const bossIntroLore = document.getElementById('bossIntroLore');
  const bossIntroCountdown = document.getElementById('bossIntroCountdown');
  const contactIntroOverlay = document.getElementById('contactIntroOverlay');
  const contactIntroImage = document.getElementById('contactIntroImage');
  const contactIntroLevel = document.getElementById('contactIntroLevel');
  const contactIntroName = document.getElementById('contactIntroName');
  const contactIntroRole = document.getElementById('contactIntroRole');
  const contactIntroCombat = document.getElementById('contactIntroCombat');
  const contactIntroLore = document.getElementById('contactIntroLore');
  const contactIntroCountdown = document.getElementById('contactIntroCountdown');
  const pickupNotice = document.getElementById('pickupNotice');
  const debugNotice = document.getElementById('debugNotice');
  const upgradeOverlay = document.getElementById('upgradeOverlay');
  const upgradeGrid = document.getElementById('upgradeGrid');
  const upgradeNextLevel = document.getElementById('upgradeNextLevel');
  const victoryOverlay = document.getElementById('victoryOverlay');
  const victoryScore = document.getElementById('victoryScore');
  const victoryUpgrades = document.getElementById('victoryUpgrades');
  const victoryRestartButton = document.getElementById('victoryRestartButton');
  const victoryMissionSelectButton = document.getElementById('victoryMissionSelectButton');
  const victoryBossArchiveButton = document.getElementById('victoryBossArchiveButton');
  const victoryLeaderboardButton = document.getElementById('victoryLeaderboardButton');
  const victoryEndlessButton = document.getElementById('victoryEndlessButton');
  const victoryMenuButton = document.getElementById('victoryMenuButton');

  const BOSS_DEFS = [
    {
      id: 'warden', level: 5, name: 'THE WARDEN', title: 'Scarlet Gatekeeper', sprite: 'bossWarden',
      image: 'assets/boss-warden.svg', hp: 110, points: 6500, color: '#f97316', pattern: 'Gate Barrage — fortress sweeps, shield-gate volleys, and escort guards', phaseTwo: 'LOCKDOWN',
      lore: 'Grown around the wreck of Bastion Station, the Lantern Line\'s first defense. The Hive kept the station\'s shield gates and turned them around: the Warden now holds the Outer Gate open for the swarm and shut to everyone else.'
    },
    {
      id: 'widow', level: 10, name: 'WIDOW VECTOR', title: 'The Violet Hunter', sprite: 'bossWidow',
      image: 'assets/boss-widow.svg', hp: 150, points: 9000, color: '#8b5cf6', pattern: 'Vector Web — figure-eight hunts and predictive crossfire with escort pairs', phaseTwo: 'BLACK WIDOW',
      lore: 'When the Hive took the Drift Lanes it swallowed VECTOR, the traffic intelligence that routed every colony ship. It still knows which lane a pilot will choose, so now it waits in that lane first.'
    },
    {
      id: 'maw', level: 15, name: 'IRON MAW', title: 'Breaker of Convoys', sprite: 'bossMaw',
      image: 'assets/boss-maw.svg', hp: 205, points: 12000, color: '#06b6d4', pattern: 'Maw Breaker — crushing dives and lane fire reinforced by ram escorts', phaseTwo: 'FEEDING FRENZY',
      lore: 'The evacuation convoys never got out. Iron Maw ate them, wears their hull plating as armor, and throws their wreckage at anyone who tries the same route.'
    },
    {
      id: 'regent', level: 20, name: 'SOLAR REGENT', title: 'Crown of the Burning Fleet', sprite: 'bossRegent',
      image: 'assets/boss-regent.svg', hp: 270, points: 16000, color: '#facc15', pattern: 'Solar Halo — orbital crown patterns supported by bomber escorts', phaseTwo: 'CORONATION',
      lore: 'The Regent has rooted itself inside a star and is drinking it dry. Every Sun Bomber in the Reach is filled from its halo; while it burns, the Hive never runs out of fire.'
    },
    {
      id: 'bishop', level: 25, name: 'NULL BISHOP', title: 'Oracle of the Silent Orbit', sprite: 'bossBishop',
      image: 'assets/boss-bishop.svg', hp: 340, points: 20500, color: '#10b981', pattern: 'Null Spiral — blink shifts, spiral pressure, and silent sentries', phaseTwo: 'FALSE FUTURE',
      lore: 'Grown inside the colony\'s deep-space observatory, the Bishop hears the Signal before anything else in the Hive. It reads your next move through the array\'s old telescopes a moment before you make it.'
    },
    {
      id: 'vesper', level: 30, name: 'QUEEN VESPER', title: 'Voice of the Hive', sprite: 'bossVesper',
      image: 'assets/boss-vesper.svg', hp: 450, points: 30000, color: '#ec4899', pattern: 'Royal Hunt — sweeping queen charges while royal guards screen the hive', phaseTwo: 'HIVE ASCENDANT',
      lore: 'Vesper is the Signal. Every scout, beetle and command ship you have fought was carrying her voice. Silence her and the Hive falls quiet, for a while. Somewhere in the swarm, a new queen is already growing.'
    }
  ];


  const ENEMY_DEFS = {
    blue: {
      name: 'SKITTER SCOUT', role: 'Probe Diver', firstLevel: 1, image: 'assets/enemy-blue.svg',
      baseHp: 1, points: 100, glow: 'rgba(96,165,250,.58)',
      combat: 'Signature: Probe Run. Scouts test open lanes alone or in loose pairs, then peel away before heavier attackers commit.',
      lore: 'The Hive\'s simplest organism: two fins and just enough nerve to hear the Signal. Skitters are grown by the thousand to find open lanes before the heavier castes commit.'
    },
    red: {
      name: 'CRIMSON MANTIS', role: 'Scissor Striker', firstLevel: 1, image: 'assets/enemy-red.svg',
      baseHp: 2, points: 200, glow: 'rgba(251,113,133,.58)',
      combat: 'Signature: Scissor Strike. Mantises attack from opposite sides and cross near the player, creating pressure without sealing every exit.',
      lore: 'Mantises are bred for a single reflex: close the distance. They answer the Signal in pairs, crossing in front of their prey from opposite sides.'
    },
    gold: {
      name: 'CROWN BEETLE', role: 'Escort Guard', firstLevel: 1, image: 'assets/enemy-gold.svg',
      baseHp: 3, points: 400, glow: 'rgba(251,191,36,.65)',
      combat: 'Signature: Crown Spear. A Beetle leads the center while lighter escorts hook around its flanks. Slow, armored, and worth breaking early.',
      lore: 'Beetles carry the Signal. Their crowns relay the Queen\'s orders to every wing in range, which is why formations close ranks around them and why the Hive guards them so heavily.'
    },
    green: {
      name: 'NEEDLEWING', role: 'Lane Sniper', firstLevel: 4, image: 'assets/enemy-green.svg',
      baseHp: 2, points: 260, glow: 'rgba(74,222,128,.62)',
      combat: 'Signature: Needle Trap. One ship pressures the player while a Needlewing drops through the likely escape lane with fast precision fire.',
      lore: 'First sighted at the Outer Gate. A Needlewing is grown around one long spine that fires plasma needles, and it waits in the lanes damaged ships use to escape.'
    },
    purple: {
      name: 'VOID WEAVER', role: 'Pincer Coordinator', firstLevel: 7, image: 'assets/enemy-purple.svg',
      baseHp: 2, points: 320, glow: 'rgba(192,132,252,.62)',
      combat: 'Signature: Void Weave. Two Weavers descend on mirrored paths, pull toward the center, and overlap their fire while leaving a readable escape corridor.',
      lore: 'Weavers appeared in the Drift Lanes after VECTOR was absorbed. They talk to each other in short gravity pulses and herd prey into lanes the Widow has already mapped.'
    },
    teal: {
      name: 'RIFT RAMMER', role: 'Pincer Rammer', firstLevel: 12, image: 'assets/enemy-teal.svg',
      baseHp: 3, points: 450, glow: 'rgba(45,212,191,.62)',
      combat: 'Signature: Rift Pincer. Rammers strike from both sides at fixed offsets around the player. They are fast, but commit early enough to dodge.',
      lore: 'Grown in the Convoy Graveyard from salvaged hull plate. Rammers have almost no survival instinct; the prow only has to last one collision.'
    },
    orange: {
      name: 'SUN BOMBER', role: 'Area-Denial Bomber', firstLevel: 17, image: 'assets/enemy-orange.svg',
      baseHp: 4, points: 600, glow: 'rgba(251,146,60,.65)',
      combat: 'Signature: Solar Screen. A Bomber sweeps a broad lane with fan fire while a lighter attacker threatens the opposite side.',
      lore: 'Filled from the Solar Regent\'s halo in the Burning Reach. Bombers glow brighter as their wing sacs load with stellar plasma, then vent it in a wide fan.'
    },
    white: {
      name: 'PHANTOM WASP', role: 'Feint Hunter', firstLevel: 23, image: 'assets/enemy-white.svg',
      baseHp: 4, points: 750, glow: 'rgba(226,232,240,.68)',
      combat: 'Signature: Phantom Hunt. One Wasp feints to pull movement; its partner attacks the expected escape lane a moment later.',
      lore: 'Vesper\'s personal guard, first seen in the Silent Orbit. Their pale armor bends sensor light, so all you see before they strike is a flash of cyan eyes.'
    },
    kamikaze: {
      name: 'SHRAPNEL KAMIKAZE', role: 'Burst Sacrifice', firstLevel: 14, image: 'assets/enemy-kamikaze.svg',
      baseHp: 2, points: 360, glow: 'rgba(244,114,182,.68)',
      combat: 'Signature: Death Bloom. It dives to a detonation point above the player, flashes before exploding, then throws shrapnel plasma in a ring with one intentional escape wedge. Shooting it early reduces the burst.',
      lore: 'The Graveyard\'s other harvest. The Hive wraps a plasma sac in convoy scrap and grows a pilot with no return instinct, only enough to carry it into a firing lane and burst.'
    }
  };
  // The campaign's six sectors, five levels each, each held by one command ship.
  const SECTORS = [
    { name: 'THE OUTER GATE',       brief: 'The Hive has sealed the entrance to the Lantern Line. Break through the blockade.' },
    { name: 'THE DRIFT LANES',      brief: 'The colony shipping lanes are hunting grounds now, and something is predicting your route.' },
    { name: 'THE CONVOY GRAVEYARD', brief: 'The wrecks of the evacuation fleet. The Hive is feeding here and growing new castes from the scrap.' },
    { name: 'THE BURNING REACH',    brief: 'The Hive has nested inside a living star and is arming itself with its fire.' },
    { name: 'THE SILENT ORBIT',     brief: 'The deep-space observatory went dark first. Something is still watching from it.' },
    { name: 'THE HIVE HEART',       brief: 'The source of the Signal. Queen Vesper is waiting.' }
  ];
  const REGROWN_SECTOR = { name: 'THE REGROWN HIVE', brief: 'The Signal is back. A new queen is growing, and the command ships have grown back with her.' };
  function sectorIndex(value = level) { return Math.floor((Math.max(1, value) - 1) / 5); }
  function sectorForLevel(value = level) { return value > 30 ? REGROWN_SECTOR : SECTORS[sectorIndex(value)]; }

  const ENEMY_ARCHIVE_ORDER = ['blue', 'red', 'gold', 'green', 'purple', 'teal', 'kamikaze', 'orange', 'white'];

  // Compact arcade identification: shape and movement first, color last.
  // These cues appear in the archive and are also implemented in drawEnemies().
  const ENEMY_VISUALS = {
    blue:     { silhouette: 'SWEPT DART',        motion: 'Quick lateral twitch before a probing dive',  shot: 'Compact plasma pellet' },
    red:      { silhouette: 'OPEN SCYTHE ARMS',   motion: 'Claws flex wider as a scissor attack begins', shot: 'Split scissor bolt' },
    gold:     { silhouette: 'ARMORED CROWN',     motion: 'Slow, weighty shell bob and armor glint',     shot: 'Heavy hex-plasma' },
    green:    { silhouette: 'LONG NEEDLE SPINE', motion: 'Almost still while taking a firing line',   shot: 'Thin high-speed needle' },
    purple:   { silhouette: 'FOUR X-SHAPED LEGS',motion: 'Leg span contracts before a paired pincer', shot: 'Crossed gravity pulse' },
    teal:     { silhouette: 'TRIANGULAR RAM',   motion: 'Prow pitches forward and twin thrusters flare',shot: 'Forward-pointing wedge' },
    orange:   { silhouette: 'TWIN PLASMA PODS', motion: 'Outboard charge sacs pulse as volleys build',shot: 'Wide burning plasma orb' },
    white:    { silhouette: 'GHOST WINGS + TAIL',motion: 'Subtle flicker and a thin stinger trail',    shot: 'Pale tapered stinger' },
    kamikaze: { silhouette: 'CRACKED BURST MINE',motion: 'Core swells and flashes before detonation', shot: 'Jagged shrapnel fragments' }
  };

  const ENEMY_BULLET_COLORS = {
    blue: '#60a5fa',
    red: '#fb7185',
    gold: '#fbbf24',
    green: '#4ade80',
    purple: '#c084fc',
    teal: '#2dd4bf',
    orange: '#fb923c',
    white: '#e2e8f0',
    kamikaze: '#f472b6'
  };

  const DEFAULT_LEADERBOARDS = {
    CAMPAIGN: [
      { name: 'ACE', score: 250000, mode: 'CAMPAIGN', seeded: true },
      { name: 'VIPER', score: 220000, mode: 'CAMPAIGN', seeded: true },
      { name: 'NOVA', score: 195000, mode: 'CAMPAIGN', seeded: true }
    ],
    ENDLESS: [
      { name: 'ACE', score: 500000, mode: 'ENDLESS', seeded: true },
      { name: 'VIPER', score: 440000, mode: 'ENDLESS', seeded: true },
      { name: 'NOVA', score: 390000, mode: 'ENDLESS', seeded: true }
    ]
  };
  const LEADERBOARD_KEY = 'starSquadronLeaderboardV1';
  const CALLSIGN_KEY = 'starSquadronCallsign';


  const UPGRADE_DEFS = {
    damage: {
      name: 'LASER STRENGTH', icon: '◆', max: 8,
      effect: 'Increases damage dealt by every player laser.'
    },
    fire: {
      name: 'FIRE CONTROL', icon: '»', max: 8,
      effect: 'Faster firing cycle and higher projectile velocity.'
    },
    shield: {
      name: 'SHIELD MATRIX', icon: '◉', max: 5,
      effect: 'Adds one shield charge. Shields recharge every level.'
    },
    health: {
      name: 'HULL HEALTH', icon: '✚', max: 5,
      effect: 'Adds one hull hit point to every ship life.'
    },
    engine: {
      name: 'THRUSTERS', icon: '▲', max: 5,
      effect: 'Raises movement speed for tighter dodging.'
    }
  };
  const UPGRADE_ORDER = ['damage', 'fire', 'shield', 'health', 'engine'];
  const runUpgrades = { damage: 0, fire: 0, shield: 0, health: 0, engine: 0 };

  // v2.11 balance knobs. Adjust here instead of hunting through the file.
  const TUNING = {
    baseHull: 2,                 // hull points per life before upgrades (was 1)
    maxLives: 5,
    bossKillLife: true,          // defeating a command ship restores one life
    forwardAssaultMinLevel: 8,   // was 4
    secondDiveShotMinLevel: 6,   // was 3
    earlyArmorPerLevel: 0.045,   // levels 1-10 (was 0.072 throughout)
    lateArmorPerLevel: 0.072,    // levels 11-30
    formationFireSlow: 1.35,     // seconds between formation shots at level 1
    formationFireFast: 0.50,     // seconds between formation shots at level 30
    formationFireJitter: 0.45,
    briefingSeconds: 10,         // NEW CONTACT and boss briefings (Space skips)
    twinFireSeconds: 7,          // was 9 (12 during bosses)
    twinFireBossSeconds: 9,
    twinFireRateBoost: 1.0,      // 1.0 = same fire rate as normal, just two bolts (was ~2x rate + two bolts)
    enemyDropBase: 0.04,         // normal-enemy drop chance: base + level * perLevel, capped
    enemyDropPerLevel: 0.0025,
    enemyDropCap: 0.09,          // was 0.14
    escortTwinFireShare: 0.30,   // share of escort drops that are Twin Fire (was 0.48)
    fullHealthBonus: 500,        // what a surplus pickup gives instead of Twin Fire
    escortValueDecay: 0.15,      // points lost per extra escort summon
    escortValueFloor: 0.25
  };

  const keys = new Set();
  const sprites = {};
  const stars = [];
  const particles = [];
  const bullets = [];
  const enemyBullets = [];
  const enemies = [];
  const powerups = [];
  const scorePops = [];

  let lastTime = performance.now();
  let elapsed = 0;
  let score = 0;
  let level = 1;
  let lives = 3;
  let runCheckpoint = null;
  const runStats = { shots: 0, hits: 0, kills: 0, streak: 0, bestStreak: 0 };
  function resetRunStats() {
    runStats.shots = 0; runStats.hits = 0; runStats.kills = 0; runStats.streak = 0; runStats.bestStreak = 0;
  }          // { level, score, upgrades } after each boss in an eligible campaign
  let restartArmedUntil = 0;         // R must be pressed twice during combat
  let audioMaster = null;
  let audioMuted = localStorage.getItem('starSquadronMuted') === '1';
  let running = false;
  let paused = false;
  let gameOver = false;
  let assetsReady = false;
  let enemyShotTimer = 0;
  let diveTimer = 0;
  let pressureRecoveryTimer = 0;
  let teamAttackCooldown = 0;
  let lastPressureEvent = 'none';
  let nextLevelTimer = 0;
  let audioCtx = null;
  let screenShake = 0;
  let shakeStrength = 0;
  let formationPhase = 0;
  let formationMotion = 'drift';
  let formationMotionTimer = 0;
  let formationMotionSeed = Math.random() * TAU;
  const pendingAttackQueue = [];
  let lastTeamTactic = '';
  let boss = null;
  let bossIntroTimer = 0;
  let combatReady = false;
  let formationReadyTimer = 0;
  let menuInputLockUntil = 0;
  let maxUnlockedLevel = Math.max(1, Number(localStorage.getItem('starSquadronMaxLevel') || 1));
  let runStartLevel = 1;
  let selectorReturn = 'menu';
  let controlsReturn = 'menu';
  let leaderboardReturn = 'menu';
  let debugReturn = 'controls';
  let runMode = 'campaign';
  let scoreSubmittedForRun = false;
  let lastRunResult = null;
  let leaderboardViewMode = 'CAMPAIGN';
  let leaderboardEligibleRun = true;
  let customLeaderboard = [];
  let debugHudEnabled = false;
  let debugRefreshTimer = 0;
  let debugNoticeTimeout = null;
  let encounterClearQueued = false;
  let upgradePending = false;
  let campaignComplete = false;
  let pendingAdvanceLevel = 0;
  let currentWave = 1;
  let totalWaves = 1;
  let waveTransitionTimer = 0;
  let pendingWaveAction = null;
  let directBossStart = false;
  let contactIntroTimer = 0;
  let pendingEncounterStart = false;
  let currentContactKey = null;
  let forwardAssaultPlanned = false;
  let forwardAssaultTimer = 0;
  let forwardAssaultCountdown = 0;
  let forwardAssaultCountdownShown = 0;
  let forwardAssaultActive = false;
  let forwardAssaultUsed = false;

  const player = {
    x: LOGICAL_W / 2,
    y: LOGICAL_H - 72,
    w: 48,
    h: 48,
    speed: 420,
    baseSpeed: 420,
    hull: 1,
    maxHull: TUNING.baseHull,
    shield: 0,
    maxShield: 0,
    fireCooldown: 0,
    rapidTimer: 0,
    invulnerable: 0,
    respawnTimer: 0,
    deathTimer: 0,
    state: 'alive',
    bank: 0
  };

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function smoothstep(t) {
    t = clamp(t, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function cubicBezier(p0, p1, p2, p3, t) {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;
    return {
      x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
      y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y
    };
  }

  function resizeBackingStore() {
    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    canvas.width = Math.round(LOGICAL_W * dpr);
    canvas.height = Math.round(LOGICAL_H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    glowCache.clear();
    renderCache.dpr = dpr;
    backdropCache.clear();
    for (const c of celestials) c.sprite = null;
  }

  // Canvas shadowBlur is expensive. Each sprite+glow combination is rendered
  // once to an offscreen canvas and then blitted with a plain drawImage.
  const glowCache = new Map();
  const renderCache = { dpr: 1, gradients: null };
  function glowSprite(img, size, blur, color) {
    const key = `${img.src}|${size}|${blur}|${color}`;
    let entry = glowCache.get(key);
    if (!entry) {
      const pad = Math.ceil(blur * 1.6);
      const full = size + pad * 2;
      const scale = renderCache.dpr;
      const off = document.createElement('canvas');
      off.width = Math.ceil(full * scale);
      off.height = Math.ceil(full * scale);
      const octx = off.getContext('2d');
      octx.scale(scale, scale);
      octx.shadowBlur = blur;
      octx.shadowColor = color;
      octx.drawImage(img, pad, pad, size, size);
      entry = { canvas: off, pad, full };
      glowCache.set(key, entry);
    }
    return entry;
  }
  function drawGlowSprite(img, size, blur, color) {
    const g = glowSprite(img, size, blur, color);
    ctx.drawImage(g.canvas, -size / 2 - g.pad, -size / 2 - g.pad, g.full, g.full);
  }
  // Additive re-draw: a cheap replacement for ctx.filter = 'brightness(...)'.
  function drawHighlight(img, size, alpha) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
    ctx.restore();
  }
  function cachedGradients() {
    if (renderCache.gradients) return renderCache.gradients;
    const vignette = ctx.createRadialGradient(LOGICAL_W / 2, LOGICAL_H / 2, 230, LOGICAL_W / 2, LOGICAL_H / 2, 620);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,.42)');
    // Player laser gradient in bolt-local space; drawn with a translate.
    const laser = ctx.createLinearGradient(0, -13, 0, 12);
    laser.addColorStop(0, '#ffffff');
    laser.addColorStop(0.35, '#67e8f9');
    laser.addColorStop(1, 'rgba(34,211,238,.05)');
    renderCache.gradients = { vignette, laser };
    return renderCache.gradients;
  }

  function loadImage(name, src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        sprites[name] = img;
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  async function loadAssets() {
    await Promise.all([
      loadImage('player', 'assets/player.svg'),
      loadImage('blue', 'assets/enemy-blue.svg'),
      loadImage('red', 'assets/enemy-red.svg'),
      loadImage('gold', 'assets/enemy-gold.svg'),
      loadImage('green', 'assets/enemy-green.svg'),
      loadImage('purple', 'assets/enemy-purple.svg'),
      loadImage('teal', 'assets/enemy-teal.svg'),
      loadImage('orange', 'assets/enemy-orange.svg'),
      loadImage('white', 'assets/enemy-white.svg'),
      loadImage('kamikaze', 'assets/enemy-kamikaze.svg'),
      loadImage('powerup', 'assets/powerup.svg'),
      loadImage('bossWarden', 'assets/boss-warden.svg'),
      loadImage('bossWidow', 'assets/boss-widow.svg'),
      loadImage('bossMaw', 'assets/boss-maw.svg'),
      loadImage('bossRegent', 'assets/boss-regent.svg'),
      loadImage('bossBishop', 'assets/boss-bishop.svg'),
      loadImage('bossVesper', 'assets/boss-vesper.svg')
    ]);
    assetsReady = true;
    startButton.disabled = false;
    missionSelectButton.disabled = false;
    bossArchiveButton.disabled = false;
    enemyArchiveButton.disabled = false;
    controlsButton.disabled = false;
  loreButton.disabled = false;
    endlessButton.disabled = false;
    leaderboardButton.disabled = false;
    startButton.textContent = 'START CAMPAIGN';
    refreshMenuProgress();
    renderBossArchive();
    renderEnemyArchive();
  }

  function initStars() {
    stars.length = 0;
    for (let i = 0; i < 165; i++) {
      const layer = i % 3;
      stars.push({
        x: Math.random() * LOGICAL_W,
        y: Math.random() * LOGICAL_H,
        speed: [18, 38, 76][layer] + Math.random() * 20,
        size: [0.7, 1.15, 1.8][layer] + Math.random() * 0.8,
        alpha: [0.35, 0.55, 0.8][layer] * (0.55 + Math.random() * 0.6),
        layer,
        twinkle: Math.random() * TAU
      });
    }
  }

  function loadCustomLeaderboard() {
    try {
      const raw = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]');
      if (!Array.isArray(raw)) return [];
      return capLeaderboardPerMode(raw.map(entry => ({
        name: String(entry?.name || 'PLAYER').toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 10) || 'PLAYER',
        score: Math.max(0, Math.floor(Number(entry?.score) || 0)),
        mode: String(entry?.mode || 'CAMPAIGN').toUpperCase().slice(0, 10),
        seeded: false,
        ts: Number(entry?.ts) || 0
      })).filter(entry => entry.score > 0));
    } catch (err) {
      console.warn('[LEADERBOARD] could not read saved scores', err);
      return [];
    }
  }

  // Keep the best 40 saved scores per mode so Endless can never push Campaign out.
  function capLeaderboardPerMode(list) {
    const byMode = mode => list
      .filter(entry => (entry.mode || 'CAMPAIGN') === mode)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40);
    return [...byMode('CAMPAIGN'), ...byMode('ENDLESS')];
  }

  function combinedLeaderboard(mode = leaderboardViewMode) {
    const normalized = mode === 'ENDLESS' ? 'ENDLESS' : 'CAMPAIGN';
    const defaults = DEFAULT_LEADERBOARDS[normalized] || [];
    const saved = customLeaderboard.filter(entry => (entry.mode || 'CAMPAIGN') === normalized);
    return [...defaults, ...saved]
      .sort((a, b) => (b.score - a.score) || ((a.seeded ? 0 : 1) - (b.seeded ? 0 : 1)) || ((a.ts || 0) - (b.ts || 0)))
      .slice(0, 10);
  }

  function currentRunBoardMode() {
    return runMode === 'endless' ? 'ENDLESS' : 'CAMPAIGN';
  }

  function currentScoreQualifies() {
    if (score <= 0 || !leaderboardEligibleRun) return false;
    if (!lastRunResult) return false;
    const board = combinedLeaderboard(currentRunBoardMode());
    return board.length < 10 || score > board[board.length - 1].score;
  }

  function finalizeRunRecord() {
    if (lastRunResult) return lastRunResult;
    const mode = currentRunBoardMode();
    const board = combinedLeaderboard(mode);
    lastRunResult = window.StarSquadronScoreRules.evaluateFinalScore({
      score,
      eligible: leaderboardEligibleRun,
      board
    });
    console.info(`[LEADERBOARD] run-finished mode=${mode} score=${score} eligible=${leaderboardEligibleRun} previousBest=${lastRunResult.previousBest} newRecord=${lastRunResult.newRecord}`);
    return lastRunResult;
  }

  function renderRunRecord(element) {
    const result = lastRunResult;
    if (!result || !result.newRecord) {
      element.textContent = '';
      element.classList.add('hidden');
      return;
    }
    const mode = currentRunBoardMode();
    element.textContent = `NEW ${mode} HIGH SCORE`;
    element.classList.remove('hidden');
  }

  function setLeaderboardView(mode) {
    leaderboardViewMode = mode === 'ENDLESS' ? 'ENDLESS' : 'CAMPAIGN';
    leaderboardCampaignTab.classList.toggle('active', leaderboardViewMode === 'CAMPAIGN');
    leaderboardEndlessTab.classList.toggle('active', leaderboardViewMode === 'ENDLESS');
    renderLeaderboard();
  }

  function renderLeaderboard() {
    leaderboardCampaignTab.classList.toggle('active', leaderboardViewMode === 'CAMPAIGN');
    leaderboardEndlessTab.classList.toggle('active', leaderboardViewMode === 'ENDLESS');
    leaderboardList.textContent = '';
    const board = combinedLeaderboard(leaderboardViewMode);
    board.forEach((entry, index) => {
      const row = document.createElement('div');
      row.className = 'leaderboard-row';
      const rank = document.createElement('span');
      rank.className = 'leaderboard-rank';
      rank.textContent = String(index + 1).padStart(2, '0');
      const name = document.createElement('span');
      name.className = 'leaderboard-name';
      name.textContent = entry.name;
      const pts = document.createElement('span');
      pts.className = 'leaderboard-score';
      pts.textContent = entry.score.toLocaleString();
      const mode = document.createElement('span');
      mode.className = 'leaderboard-mode';
      mode.textContent = leaderboardViewMode;
      row.append(rank, name, pts, mode);
      leaderboardList.appendChild(row);
    });

    const runBoard = currentRunBoardMode();
    leaderboardCurrentScore.textContent = score.toLocaleString();
    leaderboardCurrentMode.textContent = leaderboardEligibleRun
      ? `${runBoard} • LV ${level}`
      : `PRACTICE • LV ${level}`;
    leaderboardName.value = (localStorage.getItem(CALLSIGN_KEY) || leaderboardName.value || 'PLAYER').toUpperCase().slice(0, 10);
    const wrongBoard = leaderboardViewMode !== runBoard;
    leaderboardSaveButton.disabled = score <= 0 || scoreSubmittedForRun || !leaderboardEligibleRun || wrongBoard || !lastRunResult;
    leaderboardSaveButton.textContent = scoreSubmittedForRun ? 'SCORE SAVED' : 'SAVE SCORE';
    if (!leaderboardEligibleRun) leaderboardStatus.textContent = 'Practice runs cannot post leaderboard scores.';
    else if (score > 0 && !lastRunResult) leaderboardStatus.textContent = 'Finish your run before saving a score.';
    else if (scoreSubmittedForRun) leaderboardStatus.textContent = 'This run is already on its leaderboard.';
    else if (score <= 0) leaderboardStatus.textContent = `Viewing ${leaderboardViewMode.toLowerCase()} records.`;
    else if (wrongBoard) leaderboardStatus.textContent = `Switch to ${runBoard} to save the current run.`;
    else if (currentScoreQualifies()) leaderboardStatus.textContent = 'Current score qualifies for this local top ten.';
    else leaderboardStatus.textContent = 'You can save it, but it is currently below this top ten.';
  }

  function submitLeaderboardScore() {
    if (score <= 0 || scoreSubmittedForRun || !leaderboardEligibleRun || !lastRunResult) return;
    const runBoard = currentRunBoardMode();
    if (leaderboardViewMode !== runBoard) return;
    const clean = String(leaderboardName.value || 'PLAYER').toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 10) || 'PLAYER';
    leaderboardName.value = clean;
    localStorage.setItem(CALLSIGN_KEY, clean);
    customLeaderboard.push({
      name: clean,
      score: Math.floor(score),
      mode: runBoard,
      seeded: false,
      ts: Date.now()
    });
    customLeaderboard = capLeaderboardPerMode(customLeaderboard);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(customLeaderboard));
    scoreSubmittedForRun = true;
    leaderboardStatus.textContent = `${clean} — ${score.toLocaleString()} saved to ${runBoard}.`;
    console.info(`[LEADERBOARD] saved name=${clean} score=${score} mode=${runBoard}`);
    renderLeaderboard();
  }

  function showDebugNotice(text, seconds = 1.35) {
    debugNotice.textContent = text;
    debugNotice.classList.remove('hidden');
    clearTimeout(debugNoticeTimeout);
    debugNoticeTimeout = setTimeout(() => debugNotice.classList.add('hidden'), Math.max(0.25, seconds) * 1000);
  }

  function tickDebugPanel(dt) {
    debugRefreshTimer -= dt;
    if (debugRefreshTimer <= 0) {
      debugRefreshTimer = 0.25;
      refreshDebugPanel();
    }
  }

  function refreshDebugPanel() {
    if (!debugAssaultStatus) return;
    let assault = 'IDLE';
    if (boss) assault = 'BOSS — UNAVAILABLE';
    else if (forwardAssaultCountdown > 0) assault = `COUNTDOWN ${Math.max(1, Math.ceil(forwardAssaultCountdown))}`;
    else if (forwardAssaultActive) assault = 'ACTIVE';
    else if (forwardAssaultPlanned && !forwardAssaultUsed) assault = 'PLANNED';
    else if (forwardAssaultUsed) assault = 'USED THIS WAVE';
    else if (combatReady && enemies.length >= 8) assault = 'READY';
    debugAssaultStatus.textContent = assault;
    debugModeStatus.textContent = runMode.toUpperCase();
    if (debugHudEnabled) {
      debugHud.textContent = `DBG  ${runMode.toUpperCase()}  LV ${level}  W ${boss ? 'BOSS' : `${currentWave}/${totalWaves}`}\nASSAULT ${assault}`;
    }
  }

  function toggleDebugHud() {
    debugHudEnabled = !debugHudEnabled;
    debugHud.classList.toggle('hidden', !debugHudEnabled);
    refreshDebugPanel();
    console.info(`[DEBUG] hud=${debugHudEnabled ? 'on' : 'off'}`);
  }

  function forceForwardAssault(reason = 'debug') {
    if (!running || gameOver || upgradePending || campaignComplete) return { ok: false, message: 'Start a live combat run first.' };
    if (boss || isBossLevel(level) && pendingWaveAction === 'boss') return { ok: false, message: 'Forward Assault is unavailable during a boss fight.' };
    if (enemies.length < 8) return { ok: false, message: 'Not enough formation ships are alive.' };
    forwardAssaultPlanned = true;
    forwardAssaultUsed = false;
    forwardAssaultActive = false;
    forwardAssaultCountdown = 0;
    forwardAssaultCountdownShown = 0;
    forwardAssaultTimer = 0;
    console.info(`[DEBUG] forward-assault forced reason=${reason} level=${level} wave=${currentWave}/${totalWaves}`);
    refreshDebugPanel();
    return { ok: true, message: paused ? 'Forward Assault queued. Resume to launch.' : 'Forward Assault queued for the next clear formation moment.' };
  }

  function isBossLevel(value) {
    return value > 0 && value % 5 === 0;
  }

  function getBossDefForLevel(value) {
    if (!isBossLevel(value)) return null;
    const slot = ((Math.floor(value / 5) - 1) % BOSS_DEFS.length + BOSS_DEFS.length) % BOSS_DEFS.length;
    return BOSS_DEFS[slot];
  }

  function bossCycleForLevel(value) {
    return Math.floor((Math.max(5, value) - 5) / (BOSS_DEFS.length * 5));
  }

  function wavesForLevel(value = level) {
    // Regular missions grow from two to four waves. Boss missions use two escort
    // waves before the command ship so the boss still feels like a finale.
    if (isBossLevel(value)) return 2;
    if (value >= 20) return 4;
    if (value >= 10) return 3;
    return 2;
  }

  function waveArmorMultiplier(wave = currentWave) {
    return 1 + Math.max(0, wave - 1) * 0.085;
  }



  function enemyArmorScale(value = level) {
    const v = Math.max(1, value);
    const early = Math.min(v, 10) - 1;
    const late = clamp(v - 10, 0, 20);
    const campaign = 1 + early * TUNING.earlyArmorPerLevel + late * TUNING.lateArmorPerLevel;
    if (v <= 30) return campaign;
    // Endless mode keeps climbing, but much more slowly after the campaign cap.
    return campaign + (v - 30) * 0.020;
  }

  function enemyShotSpeedForLevel(value = level) {
    return Math.min(485, 220 + Math.max(0, value - 1) * 7.1);
  }

  function bulletDamage() {
    return 1 + runUpgrades.damage * 0.5;
  }

  function playerBulletSpeed() {
    return 635 * (1 + runUpgrades.fire * 0.075);
  }

  function playerShotCooldown() {
    // Twin fire doubles the bolts; it no longer also doubles the fire rate,
    // which made it roughly 4x damage and snowballed with Fire Control upgrades.
    const normal = Math.max(0.075, 0.17 * Math.pow(0.92, runUpgrades.fire));
    return player.rapidTimer > 0 ? normal / TUNING.twinFireRateBoost : normal;
  }

  function totalUpgradeRanks() {
    return UPGRADE_ORDER.reduce((sum, key) => sum + runUpgrades[key], 0);
  }

  function refreshDerivedPlayerStats(refill = false) {
    player.speed = player.baseSpeed * (1 + runUpgrades.engine * 0.065);
    player.maxHull = TUNING.baseHull + runUpgrades.health;
    player.maxShield = runUpgrades.shield;
    if (refill) {
      player.hull = player.maxHull;
      player.shield = player.maxShield;
    } else {
      player.hull = clamp(player.hull, 0, player.maxHull);
      player.shield = clamp(player.shield, 0, player.maxShield);
    }
  }

  function initializeRunUpgrades(startLevel = 1) {
    for (const key of UPGRADE_ORDER) runUpgrades[key] = 0;
    const earnedBeforeStart = clamp(Math.floor(startLevel) - 1, 0, 29);
    let remaining = earnedBeforeStart;
    let cursor = 0;
    let guard = 0;
    while (remaining > 0 && guard < 200) {
      const key = UPGRADE_ORDER[cursor % UPGRADE_ORDER.length];
      if (runUpgrades[key] < UPGRADE_DEFS[key].max) {
        runUpgrades[key]++;
        remaining--;
      }
      cursor++;
      guard++;
    }
    refreshDerivedPlayerStats(true);
    console.info(`[GAME] loadout-initialized startLevel=${startLevel} earned=${earnedBeforeStart} ranks=${JSON.stringify(runUpgrades)}`);
  }

  function nextUpgradeText(key) {
    const rank = runUpgrades[key];
    if (key === 'damage') return `Damage ${bulletDamage().toFixed(1)} → ${(1 + (rank + 1) * 0.5).toFixed(1)}`;
    if (key === 'fire') {
      const nowSpeed = Math.round(playerBulletSpeed());
      const nextSpeed = Math.round(635 * (1 + (rank + 1) * 0.075));
      const base = 0.17;
      const nowCd = Math.round(Math.max(0.075, base * Math.pow(0.92, rank)) * 1000);
      const nextCd = Math.round(Math.max(0.075, base * Math.pow(0.92, rank + 1)) * 1000);
      return `Laser speed ${nowSpeed} → ${nextSpeed} • cooldown ${nowCd} → ${nextCd} ms`;
    }
    if (key === 'shield') return `Shield charges ${player.maxShield} → ${player.maxShield + 1}`;
    if (key === 'health') return `Hull health ${player.maxHull} → ${player.maxHull + 1}`;
    if (key === 'engine') return `Move speed ${Math.round(player.speed)} → ${Math.round(player.baseSpeed * (1 + (rank + 1) * 0.065))}`;
    return '';
  }

  function newContactKeyForLevel(value = level) {
    if (value <= 1) return null;
    return ENEMY_ARCHIVE_ORDER.find(key => ENEMY_DEFS[key].firstLevel === value) || null;
  }

  function showContactBriefing(key) {
    const def = ENEMY_DEFS[key];
    if (!def) return false;
    currentContactKey = key;
    pendingEncounterStart = true;
    contactIntroTimer = TUNING.briefingSeconds;
    combatReady = false;
    keys.clear();
    bullets.length = 0;
    enemyBullets.length = 0;
    hideMessage();
    hidePickup();
    contactIntroImage.src = def.image;
    contactIntroImage.alt = `${def.name} enemy sprite`;
    contactIntroLevel.textContent = `LEVEL ${level} // ${sectorForLevel().name} // NEW CONTACT`;
    contactIntroName.textContent = def.name;
    contactIntroRole.textContent = `${def.role} // ${ENEMY_VISUALS[key].silhouette}`;
    contactIntroCombat.textContent = def.combat;
    contactIntroLore.textContent = def.lore;
    contactIntroCountdown.textContent = `DEPLOYMENT IN ${Math.ceil(contactIntroTimer)} • SPACE TO SKIP`;
    contactIntroOverlay.classList.remove('hidden');
    console.info(`[GAME] new-contact-briefing level=${level} enemy=${def.name}`);
    return true;
  }


  function campaignPressureTarget() {
    // 0..1 pacing target. It climbs smoothly across the campaign rather than
    // jumping when several independent random systems happen to align.
    const levelPart = clamp((level - 1) / 29, 0, 1);
    const wavePart = totalWaves > 1 ? clamp((currentWave - 1) / (totalWaves - 1), 0, 1) : 0;
    return clamp(0.18 + levelPart * 0.62 + wavePart * 0.12, 0.18, 0.92);
  }

  function startRecoveryWindow(seconds, reason = 'pressure') {
    pressureRecoveryTimer = Math.max(pressureRecoveryTimer, seconds);
    teamAttackCooldown = Math.max(teamAttackCooldown, Math.min(5.5, seconds + 1.2));
    lastPressureEvent = reason;
    console.info(`[GAME] pacing-recovery reason=${reason} seconds=${pressureRecoveryTimer.toFixed(2)} level=${level} wave=${currentWave}/${totalWaves}`);
  }

  function maxSimultaneousDivers() {
    if (level < 5) return 1;
    if (level < 12) return 2;
    if (level < 22) return 3;
    return 4;
  }

  function resetForwardAssaultState() {
    forwardAssaultPlanned = false;
    forwardAssaultTimer = 0;
    forwardAssaultCountdown = 0;
    forwardAssaultCountdownShown = 0;
    forwardAssaultActive = false;
    forwardAssaultUsed = false;
    messageEl.classList.remove('assault-warning');
  }

  function planForwardAssault() {
    resetForwardAssaultState();
    if (level < TUNING.forwardAssaultMinLevel || enemies.length < 8) return;
    const chance = clamp(0.055 + level * 0.0025 + (currentWave - 1) * 0.012, 0.06, 0.145);
    forwardAssaultPlanned = Math.random() < chance;
    if (forwardAssaultPlanned) {
      forwardAssaultTimer = 15 + Math.random() * 12;
      console.info(`[GAME] forward-assault-planned level=${level} wave=${currentWave}/${totalWaves} delay=${forwardAssaultTimer.toFixed(1)} chance=${chance.toFixed(2)}`);
    }
  }

  function startForwardAssaultCountdown() {
    if (forwardAssaultUsed || forwardAssaultActive || forwardAssaultCountdown > 0 || enemies.length < 8 || pressureRecoveryTimer > 0 || teamAttackCooldown > 0) return false;
    const allReady = enemies.every(e => e.state === 'formation');
    if (!allReady || pendingAttackQueue.length) return false;
    forwardAssaultUsed = true;
    forwardAssaultCountdown = 3.05;
    forwardAssaultCountdownShown = 3;
    messageEl.classList.add('assault-warning');
    showMessage('FORWARD ASSAULT\n3', 0);
    enemyShotTimer = Math.max(enemyShotTimer, 3.2);
    diveTimer = Math.max(diveTimer, 4.0);
    console.info(`[GAME] forward-assault-countdown level=${level} wave=${currentWave}/${totalWaves} enemies=${enemies.length}`);
    return true;
  }

  function launchForwardAssault() {
    const formation = enemies.filter(e => e.state === 'formation').sort((a, b) => (a.row - b.row) || (a.col - b.col));
    if (formation.length < 6) {
      forwardAssaultActive = false;
      hideMessage();
      messageEl.classList.remove('assault-warning');
      return;
    }

    forwardAssaultActive = true;
    const escapeDirection = Math.random() < 0.5 ? -1 : 1;
    const escapeX = clamp(player.x + escapeDirection * (185 + Math.random() * 80), 145, LOGICAL_W - 145);
    const corridorHalf = 78;

    formation.forEach((enemy, index) => {
      let targetX = enemy.baseX;
      if (Math.abs(targetX - escapeX) < corridorHalf) {
        targetX = escapeX + (targetX < escapeX ? -corridorHalf - 30 : corridorHalf + 30);
      }
      targetX = clamp(targetX + (enemy.col % 2 ? 18 : -18), 70, LOGICAL_W - 70);
      const delay = enemy.row * 0.17 + (enemy.col % 3) * 0.045 + index * 0.006;
      const allowShot = ((enemy.col + enemy.row * 2) % 4 === 0) && enemy.type !== 'kamikaze';
      queueEnemyAttack(enemy, delay, 'assault', enemy.side, 0, {
        tactic: 'forward-assault',
        role: 'assault-line',
        targetX,
        tracking: false,
        aimSpread: 0,
        shot1At: 0.58,
        shot2At: 2,
        suppressFire: !allowShot,
        durationMult: 1.0,
        attackAmp: 42
      });
    });

    showMessage('FORWARD ASSAULT', 0.58);
    console.info(`[GAME] forward-assault-launch level=${level} wave=${currentWave}/${totalWaves} ships=${formation.length} escapeX=${Math.round(escapeX)}`);
  }

  function renderUpgradeChoices(nextLevel) {
    upgradeGrid.textContent = '';
    upgradeNextLevel.textContent = isBossLevel(nextLevel) ? `NEXT: BOSS ${nextLevel}` : `NEXT: LEVEL ${nextLevel}`;
    const newSector = nextLevel % 5 === 1;
    const sector = sectorForLevel(nextLevel);
    upgradeCopy.textContent = newSector
      ? `Sector cleared. Next: ${sector.name}. ${sector.brief}`
      : isBossLevel(nextLevel)
        ? `One permanent upgrade per cleared level. The command ship holding ${sector.name} is next.`
        : 'One permanent upgrade per cleared level.';
    const systemsMaxed = UPGRADE_ORDER.every(key => runUpgrades[key] >= UPGRADE_DEFS[key].max);
    if (runMode === 'endless' && systemsMaxed) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'upgrade-card veteran-card';
      const icon = document.createElement('span'); icon.className = 'upgrade-icon'; icon.textContent = '★';
      const name = document.createElement('span'); name.className = 'upgrade-name'; name.textContent = 'VETERAN RESUPPLY';
      const rankEl = document.createElement('span'); rankEl.className = 'upgrade-rank'; rankEl.textContent = 'ENDLESS BONUS';
      const effect = document.createElement('span'); effect.className = 'upgrade-effect'; effect.textContent = 'Refills hull and shields, restores one life up to 5, and awards 5,000 points.';
      const next = document.createElement('span'); next.className = 'upgrade-next'; next.textContent = 'Keeps late Endless runs sustainable after all systems are maxed.';
      button.append(icon, name, rankEl, effect, next);
      button.addEventListener('click', chooseVeteranResupply);
      upgradeGrid.appendChild(button);
      return;
    }
    for (const key of UPGRADE_ORDER) {
      const def = UPGRADE_DEFS[key];
      const rank = runUpgrades[key];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'upgrade-card';
      const maxed = rank >= def.max;
      if (maxed) button.classList.add('maxed');
      button.disabled = maxed;

      const icon = document.createElement('span');
      icon.className = 'upgrade-icon';
      icon.textContent = def.icon;
      const name = document.createElement('span');
      name.className = 'upgrade-name';
      name.textContent = def.name;
      const rankEl = document.createElement('span');
      rankEl.className = 'upgrade-rank';
      rankEl.textContent = maxed ? `RANK ${rank}/${def.max} • MAXED` : `RANK ${rank}/${def.max}`;
      const effect = document.createElement('span');
      effect.className = 'upgrade-effect';
      effect.textContent = def.effect;
      const next = document.createElement('span');
      next.className = 'upgrade-next';
      next.textContent = maxed ? 'Maximum system capacity reached.' : nextUpgradeText(key);
      button.append(icon, name, rankEl, effect, next);
      if (!maxed) button.addEventListener('click', () => chooseUpgrade(key));
      upgradeGrid.appendChild(button);
    }
  }

  function beginUpgradeChoice() {
    if (runMode === 'campaign' && level >= 30) {
      completeCampaign();
      return;
    }
    upgradePending = true;
    combatReady = false;
    waveTransitionTimer = 0;
    pendingWaveAction = null;
    pendingAdvanceLevel = level + 1;
    keys.clear();
    bullets.length = 0;
    enemyBullets.length = 0;
    renderUpgradeChoices(pendingAdvanceLevel);
    upgradeOverlay.classList.remove('hidden');
    menuInputLockUntil = performance.now() + 550;
    ensureKeyboardSelection(upgradeOverlay, '.upgrade-card:not(:disabled)');
    console.info(`[GAME] upgrade-choice clearedLevel=${level} nextLevel=${pendingAdvanceLevel} ranks=${JSON.stringify(runUpgrades)}`);
  }

  function chooseUpgrade(key) {
    if (!upgradePending || !UPGRADE_DEFS[key]) return;
    const def = UPGRADE_DEFS[key];
    if (runUpgrades[key] >= def.max) return;
    runUpgrades[key]++;
    refreshDerivedPlayerStats(true);
    upgradePending = false;
    upgradeOverlay.classList.add('hidden');
    const nextLevel = pendingAdvanceLevel;
    pendingAdvanceLevel = 0;
    console.info(`[GAME] upgrade-selected type=${key} rank=${runUpgrades[key]} nextLevel=${nextLevel} ranks=${JSON.stringify(runUpgrades)}`);
    level = nextLevel;
    if (runMode === 'campaign' && leaderboardEligibleRun && isBossLevel(nextLevel - 1)) {
      runCheckpoint = { level: nextLevel, score, upgrades: { ...runUpgrades } };
      console.info(`[GAME] checkpoint-saved level=${nextLevel} score=${score}`);
    }
    player.invulnerable = 1.8;
    startEncounter();
    updateHud();
    lastTime = performance.now();
  }

  function continueFromCheckpoint() {
    const cp = runCheckpoint;
    if (!cp || runMode !== 'campaign') return;
    for (const key of UPGRADE_ORDER) runUpgrades[key] = cp.upgrades[key] || 0;
    startGame(cp.level, 'checkpoint-continue', true, 'campaign');
    score = Math.floor(cp.score / 2);
    runCheckpoint = { ...cp, score };
    showPickup(`CHECKPOINT • SCORE HALVED TO ${score.toLocaleString()}`, 1.8);
    updateHud();
    console.info(`[GAME] checkpoint-continue level=${cp.level} score=${score}`);
  }

  function chooseVeteranResupply() {
    if (!upgradePending || runMode !== 'endless') return;
    lives = Math.min(5, lives + 1);
    refreshDerivedPlayerStats(true);
    addScore(5000);
    upgradePending = false;
    upgradeOverlay.classList.add('hidden');
    const nextLevel = pendingAdvanceLevel;
    pendingAdvanceLevel = 0;
    level = nextLevel;
    player.invulnerable = 1.8;
    console.info(`[GAME] endless-veteran-resupply nextLevel=${nextLevel} lives=${lives}`);
    startEncounter();
    updateHud();
    lastTime = performance.now();
  }

  function formatRunTime(seconds) {
    const total = Math.max(0, Math.floor(seconds));
    const h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), sec = total % 60;
    return h ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
  }

  function renderRunStats(container) {
    const accuracy = runStats.shots ? Math.round((runStats.hits / runStats.shots) * 100) : 0;
    const cells = [
      ['ACCURACY', `${accuracy}%`],
      ['DESTROYED', runStats.kills.toLocaleString()],
      ['BEST STREAK', runStats.bestStreak.toLocaleString()],
      ['TIME', formatRunTime(elapsed)]
    ];
    container.textContent = '';
    for (const [label, value] of cells) {
      const cell = document.createElement('div');
      const l = document.createElement('span'); l.textContent = label;
      const v = document.createElement('strong'); v.textContent = value;
      cell.append(l, v);
      container.appendChild(cell);
    }
    console.info(`[GAME] run-stats shots=${runStats.shots} hits=${runStats.hits} accuracy=${accuracy}% kills=${runStats.kills} bestStreak=${runStats.bestStreak} time=${elapsed.toFixed(1)}s`);
  }

  function completeCampaign() {
    campaignComplete = true;
    running = false;
    paused = false;
    upgradePending = false;
    pendingAdvanceLevel = 0;
    screenShake = 0;
    shakeStrength = 0;
    enemyBullets.length = 0;
    bullets.length = 0;
    keys.clear();
    saveProgress(30);
    try { localStorage.setItem('starSquadronCampaignCleared', '1'); } catch {}
    pauseButton.classList.add('hidden');
    quickRestartButton.classList.add('hidden');
    upgradeOverlay.classList.add('hidden');
    victoryScore.textContent = score.toLocaleString();
    victoryUpgrades.textContent = String(totalUpgradeRanks());
    renderRunStats(victoryStats);
    finalizeRunRecord();
    renderRunRecord(victoryRecord);
    victoryOverlay.classList.remove('hidden');
    console.info(`[GAME] campaign-complete score=${score} upgrades=${totalUpgradeRanks()} ranks=${JSON.stringify(runUpgrades)}`);
  }

  function saveProgress(unlockedLevel) {
    const next = Math.max(maxUnlockedLevel, Math.max(1, Math.floor(unlockedLevel)));
    if (next !== maxUnlockedLevel) {
      maxUnlockedLevel = next;
      localStorage.setItem('starSquadronMaxLevel', String(maxUnlockedLevel));
      console.info(`[GAME] campaign-progress unlockedLevel=${maxUnlockedLevel}`);
    }
    refreshMenuProgress();
  }

  function resetGame(startLevel = 1, preserveLoadout = false) {
    const requested = Math.max(1, Math.floor(Number(startLevel) || 1));
    score = 0;
    level = requested;
    lives = 3;
    resetRunStats();
    scoreSubmittedForRun = false;
    lastRunResult = null;
    gameOverRecord.textContent = '';
    gameOverRecord.classList.add('hidden');
    victoryRecord.textContent = '';
    victoryRecord.classList.add('hidden');
    clearTimeout(debugNoticeTimeout);
    debugNotice.classList.add('hidden');
    if (!preserveLoadout) initializeRunUpgrades(requested);
    else refreshDerivedPlayerStats(true);
    gameOver = false;
    paused = false;
    elapsed = 0;
    nextLevelTimer = 0;
    bossIntroTimer = 0;
    contactIntroTimer = 0;
    pendingEncounterStart = false;
    currentContactKey = null;
    resetForwardAssaultState();
    encounterClearQueued = false;
    upgradePending = false;
    campaignComplete = false;
    pendingAdvanceLevel = 0;
    currentWave = 1;
    totalWaves = wavesForLevel(level);
    waveTransitionTimer = 0;
    pendingWaveAction = null;
    boss = null;
    bossDeathFx = null;
    bullets.length = 0;
    enemyBullets.length = 0;
    enemies.length = 0;
    particles.length = 0;
    powerups.length = 0;
    scorePops.length = 0;
    screenShake = 0;
    shakeStrength = 0;
    player.x = LOGICAL_W / 2;
    player.y = LOGICAL_H - 72;
    player.fireCooldown = 0;
    player.rapidTimer = 0;
    player.invulnerable = 2;
    player.respawnTimer = 0;
    player.deathTimer = 0;
    player.state = 'alive';
    player.bank = 0;
    player.hull = player.maxHull;
    player.shield = player.maxShield;
    pauseOverlay.classList.add('hidden');
    gameOverOverlay.classList.add('hidden');
    missionOverlay.classList.add('hidden');
    bossOverlay.classList.add('hidden');
    enemyOverlay.classList.add('hidden');
    bossIntroOverlay.classList.add('hidden');
    contactIntroOverlay.classList.add('hidden');
    upgradeOverlay.classList.add('hidden');
    victoryOverlay.classList.add('hidden');
    pauseButton.classList.remove('hidden');
    quickRestartButton.classList.remove('hidden');
    pauseButton.textContent = 'PAUSE';
    startEncounter();
    updateHud();
  }

  function startEncounter() {
    combatReady = false;
    formationReadyTimer = 0;
    boss = null;
    enemies.length = 0;
    bullets.length = 0;
    enemyBullets.length = 0;
    powerups.length = 0;
    nextLevelTimer = 0;
    waveTransitionTimer = 0;
    pendingWaveAction = null;
    encounterClearQueued = false;
    currentWave = 1;
    totalWaves = wavesForLevel(level);
    player.x = LOGICAL_W / 2;
    player.y = LOGICAL_H - 72;
    refreshDerivedPlayerStats(true);
    player.invulnerable = Math.max(player.invulnerable, 1.7);
    resetForwardAssaultState();
    hideMessage();
    hidePickup();

    const newContactKey = !directBossStart ? newContactKeyForLevel(level) : null;
    if (newContactKey && showContactBriefing(newContactKey)) {
      updateHud();
      return;
    }

    beginEncounterGameplay();
  }

  function beginEncounterGameplay() {
    pendingEncounterStart = false;
    currentContactKey = null;
    contactIntroTimer = 0;
    contactIntroOverlay.classList.add('hidden');
    keys.clear();
    combatReady = false;
    formationReadyTimer = 0;

    if (isBossLevel(level) && directBossStart) {
      directBossStart = false;
      spawnBossEncounter();
    } else {
      directBossStart = false;
      spawnFormation();
    }
    updateHud();
    lastTime = performance.now();
  }


  function enemyTypeForSlot(row, col) {
    // Kamikaze craft stay uncommon: usually one or two per late-game wave.
    if (level >= 14 && row >= 2 && (row * 5 + col + currentWave * 3 + level) % 13 === 0) return 'kamikaze';
    // Keep the classic three castes visible throughout the campaign while
    // mixing in specialist enemies as new sectors are reached.
    if (row === 0) {
      if (level >= 23 && (col + currentWave) % 5 === 2) return 'white';
      if (level >= 17 && (col + currentWave) % 3 === 1) return 'orange';
      return 'gold';
    }
    if (row === 1) {
      if (level >= 17 && (col + level) % 5 === 0) return 'orange';
      if (level >= 7 && (col + currentWave) % 2 === 0) return 'purple';
      return 'red';
    }
    if (row === 2) {
      if (level >= 23 && (col + currentWave) % 6 === 1) return 'white';
      if (level >= 12 && (col + currentWave) % 3 === 0) return 'teal';
      if (level >= 4 && (col + level) % 2 === 0) return 'green';
      return 'red';
    }
    if (level >= 23 && (row + col + currentWave) % 7 === 0) return 'white';
    if (level >= 17 && (row * 2 + col) % 6 === 1) return 'orange';
    if (level >= 12 && (row + col + currentWave) % 4 === 0) return 'teal';
    if (level >= 7 && (row + col) % 5 === 1) return 'purple';
    if (level >= 4 && (row + col + level) % 3 === 0) return 'green';
    return 'blue';
  }

  function spawnFormation() {
    combatReady = false;
    formationReadyTimer = 0;
    pressureRecoveryTimer = 0;
    teamAttackCooldown = 1.25;
    lastPressureEvent = 'wave-start';
    enemies.length = 0;
    enemyBullets.length = 0;
    bullets.length = 0;

    // Keep individual waves shorter than the old single giant formation, then
    // build pressure through additional waves as the campaign progresses.
    const rows = Math.min(3 + Math.floor((level - 1) / 8) + Math.floor((currentWave - 1) / 2), 5);
    const cols = Math.min(7 + Math.floor((level - 1) / 10) + (currentWave >= 3 ? 1 : 0), 10);
    const spacingX = 82;
    const spacingY = 60;
    const startX = (LOGICAL_W - (cols - 1) * spacingX) / 2;
    const startY = 92;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const type = enemyTypeForSlot(row, col);
        const enemyDef = ENEMY_DEFS[type] || ENEMY_DEFS.blue;
        const hp = Math.max(1, Math.round(enemyDef.baseHp * enemyArmorScale(level) * waveArmorMultiplier()));
        const points = Math.round(enemyDef.points * (1 + (level - 1) * 0.025) * (1 + (currentWave - 1) * 0.08));

        const baseX = startX + col * spacingX;
        const baseY = startY + row * spacingY;
        const leftHalf = col < cols / 2;
        const side = leftHalf ? -1 : 1;
        const pairCol = leftHalf ? col : cols - 1 - col;

        enemies.push({
          baseX,
          baseY,
          x: side < 0 ? -90 - pairCol * 18 : LOGICAL_W + 90 + pairCol * 18,
          y: -65 - row * 28,
          prevX: baseX,
          prevY: baseY,
          w: 46,
          h: 44,
          type,
          hp,
          maxHp: hp,
          points,
          state: 'entering',
          row,
          col,
          side,
          entryDelay: 0.08 + row * 0.13 + pairCol * 0.08 + Math.random() * 0.14,
          entryTime: 0,
          entryDuration: (1.42 + row * 0.06) * (0.90 + Math.random() * 0.22),
          entryVariant: Math.floor(Math.random() * 3),
          entrySeed: Math.random() * TAU,
          diveTime: 0,
          diveDuration: 2.85,
          diveStartX: baseX,
          diveStartY: baseY,
          targetX: baseX,
          diveSide: side,
          diveShot1: false,
          diveShot2: false,
          attackPattern: 'swoop',
          attackSeed: Math.random() * TAU,
          attackAmp: 110,
          attackShot1At: 0.46,
          attackShot2At: 0.68,
          attackTracksPlayer: false,
          returnTime: 0,
          returnDuration: 1.3,
          returnStartX: baseX,
          returnStartY: -70,
          angle: 0,
          wing: Math.random() * TAU,
          glow: Math.random() * TAU
        });
      }
    }

    enemyShotTimer = Math.max(0.30, 1.25 - level * 0.035 - (currentWave - 1) * 0.08);
    diveTimer = Math.max(0.68, 2.65 - level * 0.06 - (currentWave - 1) * 0.13);
    formationPhase = Math.random() * TAU;
    formationMotionSeed = Math.random() * TAU;
    formationMotion = ['drift', 'ripple', 'split', 'orbit', 'compress'][Math.floor(Math.random() * 5)];
    formationMotionTimer = 2.8 + Math.random() * 3.6;
    pendingAttackQueue.length = 0;
    lastTeamTactic = '';
    planForwardAssault();
    const enteringSector = currentWave === 1 && (level === 1 || level % 5 === 1);
    if (enteringSector) {
      const sector = sectorForLevel();
      const label = level > 30 ? 'ENDLESS' : `SECTOR ${sectorIndex() + 1}`;
      showMessage(`${label}  •  ${sector.name}\nLEVEL ${level}  •  WAVE 1/${totalWaves}`, 2.2);
    } else {
      showMessage(`LEVEL ${level}  •  WAVE ${currentWave}/${totalWaves}
FORMATION INBOUND`, 1.0);
    }
    const enemyMix = enemies.reduce((mix, enemy) => { mix[enemy.type] = (mix[enemy.type] || 0) + 1; return mix; }, {});
    console.info(`[GAME] wave-start level=${level} wave=${currentWave}/${totalWaves} enemies=${enemies.length} mix=${JSON.stringify(enemyMix)} armorWaveMult=${waveArmorMultiplier().toFixed(2)}`);
    updateHud();
  }

  function showBossIntro(def) {
    bossIntroImage.src = def.image;
    bossIntroImage.alt = def.name;
    bossIntroLevel.textContent = `LEVEL ${level} // ${sectorForLevel().name} // COMMAND SHIP`;
    bossIntroName.textContent = def.name;
    bossIntroTitle.textContent = def.title;
    bossIntroLore.textContent = def.lore;
    bossIntroTimer = TUNING.briefingSeconds; // Space skips
    bossIntroCountdown.textContent = `BATTLE BEGINS IN ${Math.ceil(bossIntroTimer)} • SPACE TO SKIP`;
    bossIntroOverlay.classList.remove('hidden');
    combatReady = false;
    bullets.length = 0;
    enemyBullets.length = 0;
  }

  function spawnBossEncounter() {
    combatReady = false;
    formationReadyTimer = 0;
    const def = getBossDefForLevel(level);
    if (!def) {
      spawnFormation();
      return;
    }

    const cycle = bossCycleForLevel(level);
    const campaignLevels = Math.min(29, Math.max(0, level - 1));
    const endlessLevels = Math.max(0, level - 30);
    const hpScale = 1 + cycle * 0.22 + campaignLevels * 0.035 + endlessLevels * 0.015;
    const hp = Math.round(def.hp * hpScale);
    boss = {
      def,
      x: LOGICAL_W / 2,
      y: -100,
      w: 132,
      h: 112,
      hp,
      maxHp: hp,
      state: 'entering',
      stateTime: 0,
      combatTime: 0,
      shotTimer: 0.9,
      burstTimer: 2.4,
      spiralAngle: 0,
      phase: 1,
      flash: 0,
      angle: 0,
      cycle,
      escortTimer: 4.2,
      escortSummons: 0,
      maxEscorts: def.id === 'vesper' ? 6 : def.id === 'regent' ? 5 : 4,
      moveMode: 'sweep',
      moveTimer: 0,
      moveDuration: 2.8,
      moveT: 0,
      moveSeed: Math.random() * TAU,
      moveSide: Math.random() < 0.5 ? -1 : 1,
      startX: LOGICAL_W / 2,
      startY: 142,
      targetX: LOGICAL_W / 2,
      targetY: 142,
      prevDrawX: LOGICAL_W / 2
    };
    enemyBullets.length = 0;
    console.info(`[GAME] boss-start level=${level} boss=${def.name} hp=${hp} cycle=${cycle + 1}`);
    showBossIntro(def);
  }

  function queueWaveTransition(action, delay = 1.45) {
    if (waveTransitionTimer > 0 || nextLevelTimer > 0 || gameOver) return;
    if (boss) {
      console.warn(`[GAME] blocked wave transition during boss combat action=${action} boss=${boss.def.name}`);
      return;
    }
    pendingWaveAction = action;
    waveTransitionTimer = delay;
    combatReady = false;
    resetForwardAssaultState();
    enemyBullets.length = 0;
    bullets.length = 0;
  }

  function finishFormationWave() {
    // A boss's summoned escorts are combat support, not campaign waves.
    // Clearing the last escort must never advance the stage or summon another boss.
    if (boss || pendingWaveAction === 'boss' || encounterClearQueued) return;
    if (currentWave < totalWaves) {
      showMessage(`WAVE ${currentWave} CLEARED\nWAVE ${currentWave + 1} INBOUND`, 1.05);
      queueWaveTransition('next-wave', 1.35);
      return;
    }

    if (isBossLevel(level)) {
      showMessage(`ESCORTS DESTROYED\nCOMMAND SHIP INBOUND`, 1.2);
      queueWaveTransition('boss', 1.65);
      return;
    }

    showMessage(`LEVEL ${level} CLEARED`, 1.15);
    queueNextEncounter(1.65);
  }

  function queueNextEncounter(delay = 1.8) {
    if (encounterClearQueued) return;
    encounterClearQueued = true;
    nextLevelTimer = delay;
    combatReady = false;
    enemyBullets.length = 0;
    bullets.length = 0;
    if (runMode === 'campaign') saveProgress(Math.min(30, level + 1));
  }

  function fireBossBullet(x, y, vx, vy, radius = 6, color = '#fb7185', kind = 'orb') {
    enemyBullets.push({
      x, y, vx, vy, r: radius, phase: Math.random() * TAU, color, kind
    });
  }


  function makeEscortEnemy(type, baseX, baseY, side, row = 0, col = 0) {
    const enemyDef = ENEMY_DEFS[type] || ENEMY_DEFS.blue;
    const hpScale = boss && boss.phase === 2 ? 1.15 : 1;
    // Each repeat summon is worth less so stalling a boss cannot farm score.
    const escortValue = Math.max(TUNING.escortValueFloor, 1 - (boss?.escortSummons || 0) * TUNING.escortValueDecay);
    const hp = Math.max(1, Math.round(enemyDef.baseHp * enemyArmorScale(level) * waveArmorMultiplier() * hpScale));
    return {
      baseX,
      baseY,
      x: side < 0 ? -90 : LOGICAL_W + 90,
      y: -60 - row * 24,
      prevX: baseX,
      prevY: baseY,
      w: 46,
      h: 44,
      type,
      hp,
      maxHp: hp,
      points: Math.round(enemyDef.points * (1 + level * 0.03) * escortValue),
      escortValue,
      state: 'entering',
      row,
      col,
      side,
      entryDelay: 0.05 + col * 0.08,
      entryTime: 0,
      entryDuration: 1.15 + Math.random() * 0.25,
      entryVariant: Math.floor(Math.random() * 3),
      entrySeed: Math.random() * TAU,
      diveTime: 0,
      diveDuration: 2.6,
      diveStartX: baseX,
      diveStartY: baseY,
      targetX: baseX,
      diveSide: side,
      diveShot1: false,
      diveShot2: false,
      attackPattern: type === 'white' ? 'feint' : type === 'teal' ? 'pincer' : type === 'purple' ? 'weave' : 'hook',
      attackSeed: Math.random() * TAU,
      attackAmp: 100,
      attackShot1At: 0.45,
      attackShot2At: 0.66,
      attackTracksPlayer: type === 'white' || type === 'green',
      returnTime: 0,
      returnDuration: 1.15,
      returnStartX: baseX,
      returnStartY: -70,
      angle: 0,
      wing: Math.random() * TAU,
      glow: Math.random() * TAU,
      bossEscort: true
    };
  }

  function spawnBossEscorts() {
    if (!boss || boss.state !== 'combat') return;
    const activeEscorts = enemies.filter(e => e.bossEscort).length;
    if (activeEscorts >= boss.maxEscorts) return;

    const configs = {
      warden: ['gold', 'red'],
      widow: ['purple', 'white'],
      maw: ['teal', 'gold'],
      regent: ['orange', 'gold'],
      bishop: ['purple', 'green'],
      vesper: ['white', 'white', 'red', 'gold']
    };
    const types = (configs[boss.def.id] || ['red', 'blue']).slice();
    const spacing = boss.def.id === 'vesper' ? 76 : 88;
    const count = Math.min(types.length, boss.maxEscorts - activeEscorts);
    const startX = LOGICAL_W / 2 - ((count - 1) * spacing) / 2;
    const topY = boss.def.id === 'vesper' ? 88 : 96;
    const newEscorts = [];
    for (let i = 0; i < count; i++) {
      const baseX = startX + i * spacing;
      const side = i < count / 2 ? -1 : 1;
      newEscorts.push(makeEscortEnemy(types[i], baseX, topY + (i % 2) * 42, side, 0, i));
    }
    enemies.push(...newEscorts);
    formationMotion = boss.def.id === 'vesper' ? 'orbit' : boss.def.id === 'warden' ? 'compress' : formationMotion;
    formationMotionTimer = 3.5;
    showMessage(boss.def.id === 'vesper' ? 'ROYAL GUARD INBOUND' : 'ESCORTS INBOUND', 0.7);
    console.info(`[GAME] boss-escorts boss=${boss.def.name} count=${newEscorts.length}`);
  }

  function fireBossAtPlayer(speed, spread = 0, originX = boss?.x, originY = boss?.y, targetX = player.x) {
    if (!boss) return;
    const dx = targetX - originX;
    const dy = player.y - originY;
    const base = Math.atan2(dy, dx);
    const angle = base + spread;
    fireBossBullet(originX, originY + 28, Math.cos(angle) * speed, Math.sin(angle) * speed, 6, boss.def.color, 'boss');
  }

  function bossFirePattern() {
    if (!boss || boss.state !== 'combat') return;
    const idx = BOSS_DEFS.indexOf(boss.def);
    const rage = boss.phase === 2 ? 1.18 : 1;
    const speed = (215 + level * 2.3) * rage;

    if (idx === 0) {
      // The Warden: a gate-shaped fan that always leaves one wider lane.
      const gap = player.x < LOGICAL_W / 2 ? 0.17 : -0.17;
      for (const spread of [-0.42, -0.25, -0.08, 0.08, 0.25, 0.42]) {
        if (Math.abs(spread - gap) < 0.09) continue;
        fireBossAtPlayer(speed, spread);
      }
      boss.shotTimer = boss.phase === 2 ? 0.66 : 0.88;
    } else if (idx === 1) {
      // Widow Vector: predicts horizontal movement and fires crossed solutions.
      const moveDir = (keys.has('ArrowRight') || keys.has('KeyD') ? 1 : 0) - (keys.has('ArrowLeft') || keys.has('KeyA') ? 1 : 0);
      const predictedX = clamp(player.x + moveDir * 115, 75, LOGICAL_W - 75);
      fireBossAtPlayer(speed * 1.15, -0.10, boss.x - 48, boss.y, predictedX);
      fireBossAtPlayer(speed * 1.15, 0.10, boss.x + 48, boss.y, predictedX);
      for (const vx of [-150, 150]) fireBossBullet(boss.x, boss.y + 30, vx, speed * 0.90, 5.2, boss.def.color, 'dart');
      boss.shotTimer = boss.phase === 2 ? 0.58 : 0.78;
    } else if (idx === 2) {
      // Iron Maw: staggered heavy lanes instead of a solid unavoidable wall.
      const lanes = [-250, -165, -82, 0, 82, 165, 250];
      const gapIndex = Math.round(clamp(player.x / LOGICAL_W, 0, 1) * (lanes.length - 1));
      for (let i = 0; i < lanes.length; i++) {
        if (Math.abs(i - gapIndex) <= 0) continue;
        fireBossBullet(boss.x, boss.y + 34, lanes[i], speed * 0.98, 6.8, boss.def.color, 'heavy');
      }
      boss.shotTimer = boss.phase === 2 ? 0.78 : 1.02;
    } else if (idx === 3) {
      const count = boss.phase === 2 ? 18 : 14;
      for (let i = 0; i < count; i++) {
        const angle = (TAU * i) / count + boss.combatTime * 0.42;
        fireBossBullet(boss.x, boss.y, Math.cos(angle) * speed * 0.82, Math.sin(angle) * speed * 0.82, 5.2, boss.def.color, 'solar');
      }
      boss.shotTimer = boss.phase === 2 ? 0.82 : 1.05;
    } else if (idx === 4) {
      boss.spiralAngle += boss.phase === 2 ? 0.62 : 0.48;
      for (let i = 0; i < 4; i++) {
        const angle = boss.spiralAngle + i * Math.PI / 2;
        fireBossBullet(boss.x, boss.y + 12, Math.cos(angle) * speed, Math.sin(angle) * speed, 5.5, boss.def.color, 'spiral');
      }
      fireBossAtPlayer(speed * 1.16, 0);
      boss.shotTimer = boss.phase === 2 ? 0.34 : 0.46;
    } else {
      // Queen Vesper alternates royal fan pressure with two hunter darts.
      const phaseOffset = Math.sin(boss.combatTime * 0.9) * 0.08;
      for (const spread of [-0.40, -0.24, -0.08, 0.08, 0.24, 0.40]) fireBossAtPlayer(speed * 1.00, spread + phaseOffset);
      fireBossAtPlayer(speed * 1.38, -0.045, boss.x - 54, boss.y + 8);
      fireBossAtPlayer(speed * 1.38, 0.045, boss.x + 54, boss.y + 8);
      boss.shotTimer = boss.phase === 2 ? 0.48 : 0.64;
    }
    beep(125 + idx * 18, 0.05, 'square', 0.018, 82);
  }


  function pickBossMovement() {
    if (!boss) return;
    const tables = {
      warden: [
        { mode: 'fortify', dur: 2.6 },
        { mode: 'sweep', dur: 3.4 },
        { mode: 'drop-wall', dur: 2.5 }
      ],
      widow: [
        { mode: 'weave', dur: 3.1 },
        { mode: 'cross-hunt', dur: 2.8 },
        { mode: 'lurk', dur: 2.3 }
      ],
      maw: [
        { mode: 'crusher-dive', dur: 2.7 },
        { mode: 'bulldoze', dur: 2.9 },
        { mode: 'stalk', dur: 2.5 }
      ],
      regent: [
        { mode: 'halo', dur: 3.5 },
        { mode: 'sunrise', dur: 2.7 },
        { mode: 'flare', dur: 2.9 }
      ],
      bishop: [
        { mode: 'orbit', dur: 3.0 },
        { mode: 'blink', dur: 2.2 },
        { mode: 'diamond', dur: 3.2 }
      ],
      vesper: [
        { mode: 'queen-weave', dur: 3.2 },
        { mode: 'royal-dash', dur: 2.6 },
        { mode: 'descend', dur: 2.4 }
      ]
    };
    const moves = tables[boss.def.id] || [{ mode: 'sweep', dur: 3 }];
    let pick = boss.phase === 2 && Math.random() < 0.45 ? moves[0] : moves[Math.floor(Math.random() * moves.length)];
    if (moves.length > 1 && pick.mode === boss.moveMode) {
      const currentIndex = moves.findIndex(m => m.mode === pick.mode);
      pick = moves[(currentIndex + 1 + Math.floor(Math.random() * (moves.length - 1))) % moves.length];
    }
    boss.moveMode = pick.mode;
    boss.moveDuration = pick.dur * (boss.phase === 2 ? 0.88 : 1);
    boss.moveTimer = boss.moveDuration;
    boss.moveT = 0;
    boss.moveSeed = Math.random() * TAU;
    boss.moveSide = Math.random() < 0.5 ? -1 : 1;
    boss.startX = boss.x;
    boss.startY = boss.y;
    const margin = 170;
    boss.targetX = margin + Math.random() * (LOGICAL_W - margin * 2);
    boss.targetY = 112 + Math.random() * 110;
  }

  function updateBossMotion(dt, idx) {
    boss.moveTimer -= dt;
    boss.moveT += dt;
    if (boss.moveTimer <= 0) pickBossMovement();
    const t = clamp(boss.moveT / Math.max(0.001, boss.moveDuration), 0, 1);
    const q = smoothstep(t);
    const centerX = LOGICAL_W / 2;
    const x0 = boss.startX;
    const y0 = boss.startY;
    const tx = boss.targetX;
    const ty = boss.targetY;
    const side = boss.moveSide;
    const seed = boss.moveSeed;

    switch (boss.moveMode) {
      case 'fortify':
        boss.x = centerX + Math.sin((boss.combatTime * 0.8) + seed) * 115;
        boss.y = 116 + Math.sin((boss.combatTime * 1.2) + seed * 0.7) * 16;
        break;
      case 'drop-wall':
        boss.x = lerp(x0, tx, q) + Math.sin(t * Math.PI) * 55 * side;
        boss.y = 126 + Math.sin(t * Math.PI) * 92;
        break;
      case 'weave':
        boss.x = centerX + Math.sin(t * TAU + seed) * 255;
        boss.y = 132 + Math.sin(t * TAU * 2 + seed * 0.6) * 48;
        break;
      case 'cross-hunt':
        boss.x = lerp(x0, tx, q) + Math.sin(t * Math.PI) * 95 * side;
        boss.y = lerp(y0, ty, q) + Math.sin(t * TAU) * 24;
        break;
      case 'lurk':
        boss.x = lerp(x0, tx, q);
        boss.y = 104 + Math.sin(t * Math.PI) * 34;
        break;
      case 'crusher-dive':
        boss.x = lerp(x0, tx, q);
        boss.y = 118 + Math.sin(t * Math.PI) * 175;
        break;
      case 'bulldoze':
        boss.x = lerp(x0, tx, q);
        boss.y = 168 + Math.sin(t * TAU + seed) * 18;
        break;
      case 'stalk':
        boss.x = centerX + Math.sin((boss.combatTime * 0.9) + seed) * 165;
        boss.y = 126 + Math.cos((boss.combatTime * 1.15) + seed) * 22;
        break;
      case 'halo':
        boss.x = centerX + Math.cos((t * TAU * side) + seed) * 235;
        boss.y = 132 + Math.sin((t * TAU * side) + seed) * 64;
        break;
      case 'sunrise':
        boss.x = lerp(x0, tx, q) + Math.sin(t * Math.PI) * 80 * side;
        boss.y = 202 - Math.sin(t * Math.PI) * 88;
        break;
      case 'flare':
        boss.x = centerX + Math.sin(t * TAU * 1.5 + seed) * 185;
        boss.y = 112 + (1 - Math.cos(t * TAU)) * 24;
        break;
      case 'orbit':
        boss.x = centerX + Math.cos((t * TAU) + seed) * 215;
        boss.y = 132 + Math.sin((t * TAU * 2) + seed) * 32;
        break;
      case 'blink': {
        if (t < 0.48) {
          const a = smoothstep(t / 0.48);
          boss.x = lerp(x0, x0 + side * 30, a);
          boss.y = lerp(y0, y0 - 16, a);
        } else if (t < 0.52) {
          boss.x = tx;
          boss.y = ty;
        } else {
          const a = smoothstep((t - 0.52) / 0.48);
          boss.x = lerp(tx, tx + side * -24, a);
          boss.y = lerp(ty, ty + 18, a);
        }
        break;
      }
      case 'diamond':
        if (t < 0.25) {
          const a = smoothstep(t / 0.25); boss.x = lerp(centerX, centerX + 170, a); boss.y = lerp(110, 150, a);
        } else if (t < 0.5) {
          const a = smoothstep((t - 0.25) / 0.25); boss.x = lerp(centerX + 170, centerX, a); boss.y = lerp(150, 210, a);
        } else if (t < 0.75) {
          const a = smoothstep((t - 0.5) / 0.25); boss.x = lerp(centerX, centerX - 170, a); boss.y = lerp(210, 150, a);
        } else {
          const a = smoothstep((t - 0.75) / 0.25); boss.x = lerp(centerX - 170, centerX, a); boss.y = lerp(150, 110, a);
        }
        break;
      case 'queen-weave':
        boss.x = centerX + Math.sin(t * TAU + seed) * 290;
        boss.y = 124 + Math.sin(t * TAU * 2 + 0.7 + seed * 0.3) * 56;
        break;
      case 'royal-dash':
        if (t < 0.5) {
          const a = smoothstep(t / 0.5); boss.x = lerp(x0, tx, a); boss.y = lerp(y0, 155, a) + Math.sin(a * Math.PI) * 25;
        } else {
          const a = smoothstep((t - 0.5) / 0.5); boss.x = lerp(tx, centerX - (tx - centerX), a); boss.y = lerp(155, 120, a);
        }
        break;
      case 'descend':
        boss.x = lerp(x0, tx, q) + Math.sin(t * Math.PI) * 65 * side;
        boss.y = 120 + Math.sin(t * Math.PI) * 118;
        break;
      case 'sweep':
      default:
        boss.x = centerX + Math.sin((boss.combatTime * (0.62 + idx * 0.035)) + seed) * ([310, 350, 270, 330, 300, 365][idx] || 320);
        boss.y = 138 + Math.sin((boss.combatTime * (1.05 + idx * 0.06)) + seed * 0.4) * (18 + idx * 2);
        break;
    }

    const dx = boss.x - boss.prevDrawX;
    boss.angle = Math.max(-0.18, Math.min(0.18, dx * 0.0028));
    boss.prevDrawX = boss.x;
  }


  function triggerBossPhaseTwo() {
    if (!boss) return;
    boss.phase = 2;
    boss.shotTimer = Math.min(boss.shotTimer, 0.38);
    boss.burstTimer = Math.min(boss.burstTimer, 1.0);
    boss.escortTimer = Math.min(boss.escortTimer, 0.75);
    pickBossMovement();

    // Each command ship changes the encounter in a recognizable way at 50% HP.
    switch (boss.def.id) {
      case 'warden':
        boss.moveMode = 'fortify';
        boss.moveDuration = 3.0;
        boss.moveTimer = 3.0;
        // Lockdown: immediately rebuild a heavier defensive screen.
        boss.maxEscorts = Math.max(boss.maxEscorts, 5);
        break;
      case 'widow':
        boss.moveMode = 'weave';
        boss.moveDuration = 2.55;
        boss.moveTimer = 2.55;
        // Black Widow: faster feints and an immediate hunter pair.
        boss.maxEscorts = Math.max(boss.maxEscorts, 5);
        break;
      case 'maw':
        boss.moveMode = 'crusher-dive';
        boss.moveDuration = 2.15;
        boss.moveTimer = 2.15;
        // Feeding Frenzy: stays lower and commits to repeated crushing dives.
        boss.maxEscorts = Math.max(boss.maxEscorts, 5);
        break;
      case 'regent':
        boss.moveMode = 'halo';
        boss.moveDuration = 2.75;
        boss.moveTimer = 2.75;
        // Coronation: bomber screen becomes denser while the Regent orbits.
        boss.maxEscorts = Math.max(boss.maxEscorts, 6);
        break;
      case 'bishop':
        boss.moveMode = 'blink';
        boss.moveDuration = 1.85;
        boss.moveTimer = 1.85;
        // False Future: short blink cycles become the dominant movement tell.
        boss.maxEscorts = Math.max(boss.maxEscorts, 5);
        break;
      case 'vesper':
        boss.moveMode = 'royal-dash';
        boss.moveDuration = 2.05;
        boss.moveTimer = 2.05;
        // Hive Ascendant: the Queen calls a larger guard and attacks more often.
        boss.maxEscorts = Math.max(boss.maxEscorts, 8);
        break;
    }

    spawnBossEscorts();
    dropBossPhaseReward();
    screenShake = Math.max(screenShake, 0.38);
    shakeStrength = Math.max(shakeStrength, 6);
    showMessage(`${boss.def.name}\n${boss.def.phaseTwo}`, 1.15);
    console.info(`[GAME] boss-phase-two boss=${boss.def.name} identity=${boss.def.phaseTwo} hp=${boss.hp}/${boss.maxHp}`);
  }

  function updateBoss(dt) {
    if (!boss) return;
    boss.flash = Math.max(0, boss.flash - dt);
    boss.stateTime += dt;

    if (boss.state === 'entering') {
      const t = clamp(boss.stateTime / 1.15, 0, 1);
      boss.y = lerp(-105, 142, easeOutCubic(t));
      boss.x = LOGICAL_W / 2 + Math.sin(t * Math.PI * 2) * 70 * (1 - t);
      if (t >= 1) {
        boss.state = 'combat';
        boss.stateTime = 0;
        boss.shotTimer = 0.95;
        combatReady = true;
        boss.prevDrawX = boss.x;
        pickBossMovement();
        showMessage('ENGAGE', 0.42);
        spawnBossEscorts();
        console.info(`[GAME] boss-combat-ready boss=${boss.def.name}`);
      }
      return;
    }

    boss.combatTime += dt;
    boss.escortTimer -= dt;
    if (boss.escortTimer <= 0) {
      spawnBossEscorts();
      boss.escortSummons++;
      const baseTimer = boss.def.id === 'vesper' ? 6.8 : boss.def.id === 'regent' ? 8.2 : 9.4;
      boss.escortTimer = (boss.phase === 2 ? baseTimer * 0.82 : baseTimer) + Math.random() * 1.4;
    }
    const idx = BOSS_DEFS.indexOf(boss.def);
    const hpRatio = boss.hp / boss.maxHp;
    if (hpRatio <= 0.5 && boss.phase === 1) {
      triggerBossPhaseTwo();
    }

    updateBossMotion(dt, idx);
    if (boss.phase === 2 && boss.moveTimer > 0) {
      boss.moveTimer -= dt * 0.12;
    }

    boss.shotTimer -= dt;
    if (boss.shotTimer <= 0) bossFirePattern();

    boss.burstTimer -= dt;
    if (boss.burstTimer <= 0) {
      if (idx === 0 || idx === 5) {
        for (let i = -2; i <= 2; i++) fireBossBullet(boss.x + i * 28, boss.y + 38, i * 38, 300 + level * 3, 7, boss.def.color, 'burst');
      } else if (idx === 1) {
        for (let i = 0; i < 8; i++) {
          const angle = Math.PI * 0.2 + (Math.PI * 0.6 * i) / 7;
          fireBossBullet(boss.x, boss.y + 20, Math.cos(angle) * 270, Math.sin(angle) * 270, 5, boss.def.color, 'web');
        }
      } else if (idx === 2) {
        fireBossBullet(boss.x - 52, boss.y + 20, -90, 360, 9, boss.def.color, 'heavy');
        fireBossBullet(boss.x + 52, boss.y + 20, 90, 360, 9, boss.def.color, 'heavy');
      } else if (idx === 3) {
        for (let i = 0; i < 20; i++) {
          const angle = (TAU * i) / 20;
          fireBossBullet(boss.x, boss.y, Math.cos(angle) * 245, Math.sin(angle) * 245, 5.5, boss.def.color, 'solar');
        }
      } else if (idx === 4) {
        for (let i = 0; i < 10; i++) {
          const angle = boss.spiralAngle + i * (TAU / 10);
          fireBossBullet(boss.x, boss.y, Math.cos(angle) * 230, Math.sin(angle) * 230, 5.5, boss.def.color, 'spiral');
        }
      }
      boss.burstTimer = boss.phase === 2 ? 2.1 : 3.0;
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      if (bulletHitsRect(bullet, boss, 13)) {
        bullets.splice(i, 1);
        boss.hp -= bullet.damage || bulletDamage();
        runStats.hits++;
        boss.flash = 0.07;
        spawnExplosion(bullet.x, bullet.y, 4, 0.28);
        if (boss.hp <= 0) {
          destroyBoss();
          return;
        }
        if (Math.random() < 0.18) beep(205, 0.026, 'square', 0.014, 150);
      }
    }
  }

  function destroyBoss() {
    if (!boss) return;
    const defeated = boss;
    const gained = Math.round(defeated.def.points * (1 + defeated.cycle * 0.5));
    addScore(gained, defeated.x, defeated.y);
    runStats.kills++;
    if (TUNING.bossKillLife && lives < TUNING.maxLives) {
      lives++;
      showPickup('COMMAND BOUNTY +1 LIFE', 1.2);
    }
    beep(150, 0.7, 'sawtooth', 0.06, 42);
    screenShake = 0.5;
    shakeStrength = 8;
    console.info(`[GAME] boss-defeated level=${level} boss=${defeated.def.name} score=${score}`);
    boss = null;
    // Escorts die with their command ship.
    for (let i = enemies.length - 1; i >= 0; i--) {
      if (!enemies[i].bossEscort) continue;
      spawnExplosion(enemies[i].x, enemies[i].y, 14, 0.9);
      enemies.splice(i, 1);
    }
    bossIntroTimer = 0;
    waveTransitionTimer = 0;
    pendingWaveAction = null;
    bossIntroOverlay.classList.add('hidden');
    const duration = startBossDeath(defeated, gained);
    queueNextEncounter(duration + 0.9);
  }

  // ---------- Boss death animations: one signature sequence per command ship ----------
  const BOSS_DEATH_DURATION = { warden: 2.6, widow: 2.6, maw: 2.8, regent: 2.8, bishop: 2.6, vesper: 3.8 };
  let bossDeathFx = null;

  function rand(min, max) { return min + Math.random() * (max - min); }

  function burst(x, y, { count = 12, colors = ['#ffffff'], speed = [60, 220], life = [0.4, 0.9], size = [2, 5], angle = [0, TAU], glow = 0.5 } = {}) {
    for (let i = 0; i < count; i++) {
      const a = rand(angle[0], angle[1]);
      const sp = rand(speed[0], speed[1]);
      const l = rand(life[0], life[1]);
      particles.push({
        x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: l, maxLife: l,
        size: rand(size[0], size[1]), color: colors[Math.floor(Math.random() * colors.length)], glow: Math.random() < glow
      });
    }
  }

  function startBossDeath(defeated, gained) {
    const id = defeated.def.id;
    const duration = BOSS_DEATH_DURATION[id] || 2.6;
    bossDeathFx = {
      id, duration, gained, t: 0,
      x: defeated.x, y: defeated.y, angle: defeated.angle || 0,
      img: sprites[defeated.def.sprite], color: defeated.def.color, name: defeated.def.name,
      rings: [], flash: 0, flashColor: '#ffffff', nextPop: 0.05, events: new Set()
    };
    console.info(`[GAME] boss-death-animation boss=${id} duration=${duration}`);
    return duration;
  }

  function fxOnce(fx, key, at) {
    if (fx.t < at || fx.events.has(key)) return false;
    fx.events.add(key);
    return true;
  }

  function fxRing(fx, color, speed, width = 4, life = 0.8, r = 10) {
    fx.rings.push({ r, speed, width, color, life, maxLife: life });
  }

  function fxHullPops(fx, until, every, scale, colors) {
    if (fx.t >= until) return;
    while (fx.t >= fx.nextPop) {
      fx.nextPop += every;
      const px = fx.x + rand(-48, 48), py = fx.y + rand(-42, 42);
      spawnExplosion(px, py, 10, scale);
      burst(px, py, { count: 6, colors, speed: [40, 160], life: [0.3, 0.6], size: [2, 4] });
      beep(rand(110, 190), 0.08, 'square', 0.02, 60);
    }
  }

  function fxFinale(fx, colors, { rings = 2, count = 60, shake = 16, flash = 0.75 } = {}) {
    burst(fx.x, fx.y, { count, colors, speed: [80, 420], life: [0.6, 1.3], size: [2.5, 7], glow: 0.7 });
    for (let i = 0; i < rings; i++) fxRing(fx, colors[i % colors.length], 380 + i * 160, 6 - i, 0.9 + i * 0.15);
    fx.flash = flash;
    fx.flashColor = colors[0];
    screenShake = 0.9;
    shakeStrength = shake;
    beep(90, 0.9, 'sawtooth', 0.07, 30);
    showMessage(`${fx.name} DESTROYED\n+${fx.gained.toLocaleString()}`, 1.6);
  }

  function updateBossDeath(dt) {
    const fx = bossDeathFx;
    if (!fx) return;
    fx.t += dt;
    fx.flash = Math.max(0, fx.flash - dt * 2.2);
    for (let i = fx.rings.length - 1; i >= 0; i--) {
      const ring = fx.rings[i];
      ring.r = Math.max(0, ring.r + ring.speed * dt);
      ring.life -= dt;
      if (ring.life <= 0) fx.rings.splice(i, 1);
    }
    const t = fx.t;
    switch (fx.id) {
      case 'warden': { // Gate Collapse: the fortress cracks down its seam and splits in two.
        const orange = ['#fb923c', '#fdba74', '#fff7ed', '#f97316'];
        fxHullPops(fx, 1.4, 0.16, 0.9, orange);
        if (t < 1.4 && Math.random() < 0.7) {
          const side = Math.random() < 0.5 ? -1 : 1;
          burst(fx.x, fx.y + rand(-55, 55), { count: 1, colors: orange, speed: [120, 260], angle: side < 0 ? [Math.PI * 0.9, Math.PI * 1.1] : [-0.1, 0.1], life: [0.2, 0.4], size: [1.5, 3] });
        }
        if (fxOnce(fx, 'split', 1.4)) {
          burst(fx.x, fx.y, { count: 40, colors: orange, speed: [60, 300], angle: [-Math.PI * 0.15, Math.PI * 0.15], life: [0.4, 0.9] });
          burst(fx.x, fx.y, { count: 40, colors: orange, speed: [60, 300], angle: [Math.PI * 0.85, Math.PI * 1.15], life: [0.4, 0.9] });
          screenShake = 0.5; shakeStrength = 12; beep(120, 0.5, 'sawtooth', 0.06, 40);
        }
        if (fxOnce(fx, 'finale', 2.2)) fxFinale(fx, orange, { rings: 1, count: 40, shake: 12, flash: 0.35 });
        break;
      }
      case 'widow': { // Web Snap: the Vector's lattice snaps strand by strand and it implodes.
        const violet = ['#c4b5fd', '#8b5cf6', '#ede9fe', '#a78bfa'];
        fxHullPops(fx, 1.8, 0.22, 0.8, violet);
        const snapped = Math.floor(t / 0.22);
        if (snapped > (fx.snapped || 0) && snapped <= 8) {
          fx.snapped = snapped;
          const a = (snapped / 8) * TAU;
          burst(fx.x + Math.cos(a) * 90, fx.y + Math.sin(a) * 90, { count: 8, colors: violet, speed: [40, 140], life: [0.3, 0.6] });
          beep(900 - snapped * 60, 0.05, 'triangle', 0.02, 400);
        }
        if (fxOnce(fx, 'implode', 2.0)) fxRing(fx, '#c4b5fd', -260, 5, 0.5, 140);
        if (fxOnce(fx, 'finale', 2.3)) fxFinale(fx, violet, { rings: 2, count: 50, shake: 12, flash: 0.45 });
        break;
      }
      case 'maw': { // Hull Breach: explosions chew through the armor while it sinks and breaks up.
        const cyan = ['#67e8f9', '#06b6d4', '#ecfeff', '#94a3b8'];
        fxHullPops(fx, 2.3, 0.12, 1.2, cyan);
        if (t < 2.3 && Math.random() < 0.25) {
          burst(fx.x + rand(-40, 40), fx.y + t * t * 18, { count: 1, colors: ['#475569', '#94a3b8', '#164e63'], speed: [60, 180], angle: [Math.PI * 0.2, Math.PI * 0.8], life: [0.6, 1.1], size: [5, 9], glow: 0 });
        }
        if (fxOnce(fx, 'finale', 2.35)) fxFinale(fx, cyan, { rings: 2, count: 70, shake: 20, flash: 0.4 });
        break;
      }
      case 'regent': { // Solar Collapse: the reactor halo overloads into a white-gold nova.
        const gold = ['#fef3c7', '#facc15', '#f59e0b', '#ffffff'];
        fxHullPops(fx, 1.9, 0.25, 0.7, gold);
        if (t < 2.1 && Math.random() < 0.5) {
          const a = Math.random() * TAU;
          burst(fx.x + Math.cos(a) * 130, fx.y + Math.sin(a) * 130, { count: 1, colors: gold, speed: [120, 200], angle: [a + Math.PI - 0.1, a + Math.PI + 0.1], life: [0.5, 0.7], size: [2, 3.5] });
        }
        if (fxOnce(fx, 'finale', 2.1)) fxFinale(fx, gold, { rings: 3, count: 90, shake: 18, flash: 1 });
        break;
      }
      case 'bishop': { // Null Collapse: the oracle is pulled into a point and switches off.
        const green = ['#6ee7b7', '#10b981', '#ecfdf5', '#d1fae5'];
        if (t < 2.0 && Math.random() < 0.8) {
          const a = Math.random() * TAU, r = rand(110, 160);
          const px = fx.x + Math.cos(a) * r, py = fx.y + Math.sin(a) * r;
          const inward = Math.atan2(fx.y - py, fx.x - px) + 0.55;
          particles.push({ x: px, y: py, vx: Math.cos(inward) * r * 1.6, vy: Math.sin(inward) * r * 1.6, life: 0.6, maxLife: 0.6, size: rand(2, 4), color: green[Math.floor(Math.random() * 4)], glow: true });
        }
        if (fxOnce(fx, 'off', 2.0)) { beep(1400, 0.4, 'sine', 0.03, 60); screenShake = 0.3; shakeStrength = 6; }
        if (fxOnce(fx, 'finale', 2.35)) fxFinale(fx, green, { rings: 1, count: 30, shake: 8, flash: 0.25 });
        break;
      }
      default: { // Queen Vesper — Hive Death: crown shatters, the hive signal screams, then silence.
        const pink = ['#f9a8d4', '#ec4899', '#fdf2f8', '#ffffff'];
        if (fxOnce(fx, 'crown', 0.3)) {
          burst(fx.x, fx.y - 40, { count: 30, colors: ['#fbcfe8', '#f472b6'], speed: [180, 360], angle: [-Math.PI * 0.95, -Math.PI * 0.05], life: [0.8, 1.4], size: [4, 8], glow: 0.8 });
          screenShake = 0.4; shakeStrength = 8;
        }
        fxHullPops(fx, 3.0, Math.max(0.07, 0.2 - t * 0.04), 1.1, pink);
        if (fxOnce(fx, 'finale', 3.0)) fxFinale(fx, pink, { rings: 3, count: 110, shake: 24, flash: 1 });
        if (fxOnce(fx, 'echo1', 3.2)) fxRing(fx, '#fdf2f8', 520, 3, 0.8, 40);
        if (fxOnce(fx, 'echo2', 3.45)) fxRing(fx, '#ec4899', 620, 2, 0.8, 40);
        break;
      }
    }
    if (t >= fx.duration + 1.2 && !fx.rings.length) bossDeathFx = null;
  }

  function drawBossDeath() {
    const fx = bossDeathFx;
    if (!fx || !fx.img) return;
    const t = fx.t, size = BOSS_DRAW_SIZE;
    const smooth = v => { const c = clamp(v, 0, 1); return c * c * (3 - 2 * c); };
    const shake = amount => [(Math.random() - 0.5) * amount, (Math.random() - 0.5) * amount];
    ctx.save();
    ctx.translate(fx.x, fx.y);
    ctx.rotate(fx.angle);

    switch (fx.id) {
      case 'warden': {
        if (t < 1.4) {
          const [sx, sy] = shake(2 + t * 6);
          ctx.translate(sx, sy);
          drawGlowSprite(fx.img, size, 24, fx.color);
          drawHighlight(fx.img, size, 0.15 + t * 0.25);
          ctx.strokeStyle = `rgba(255,237,213,${0.5 + Math.random() * 0.5})`;
          ctx.lineWidth = 2 + t * 2;
          ctx.beginPath();
          ctx.moveTo(0, -60); ctx.lineTo(4, -20); ctx.lineTo(-4, 10); ctx.lineTo(3, 60);
          ctx.stroke();
        } else {
          const k = t - 1.4;
          ctx.globalAlpha = clamp(1 - k / 1.1, 0, 1);
          for (const side of [-1, 1]) {
            ctx.save();
            ctx.translate(side * k * 110, k * k * 140);
            ctx.rotate(side * k * 0.9);
            ctx.beginPath();
            ctx.rect(side < 0 ? -size : 0, -size, size, size * 2);
            ctx.clip();
            drawGlowSprite(fx.img, size, 16, fx.color);
            ctx.restore();
          }
        }
        break;
      }
      case 'widow': {
        const strands = 8;
        ctx.lineWidth = 2;
        for (let i = 0; i < strands; i++) {
          if (i < (fx.snapped || 0)) continue;
          const a = (i / strands) * TAU + t * 0.4;
          ctx.strokeStyle = `rgba(196,181,253,${0.35 + Math.random() * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(a) * (70 + t * 30), Math.sin(a) * (70 + t * 30));
          ctx.stroke();
        }
        if (t < 2.0) {
          const k = 1 - smooth(t / 2.0) * 0.9;
          ctx.rotate(t * t * 2.2);
          ctx.scale(k, k);
          drawGlowSprite(fx.img, size, 28, fx.color);
          drawHighlight(fx.img, size, t * 0.3);
        }
        break;
      }
      case 'maw': {
        if (t < 2.45) {
          const [sx, sy] = shake(3 + t * 5);
          ctx.translate(sx, sy + t * t * 18);
          ctx.rotate(t * 0.22);
          ctx.globalAlpha = t > 2.3 ? clamp(1 - (t - 2.3) / 0.15, 0, 1) : 1;
          drawGlowSprite(fx.img, size, 24, fx.color);
          // Scorch the hull as it breaks up: multiplying the sprite onto itself
          // darkens only the ship's own pixels.
          ctx.globalCompositeOperation = 'multiply';
          ctx.globalAlpha *= Math.min(0.9, t * 0.4);
          ctx.drawImage(fx.img, -size / 2, -size / 2, size, size);
          ctx.drawImage(fx.img, -size / 2, -size / 2, size, size);
        }
        break;
      }
      case 'regent': {
        if (t < 2.1) {
          ctx.save();
          ctx.rotate(t * 0.8);
          const rays = 12, len = 60 + t * 110;
          for (let i = 0; i < rays; i++) {
            const a = (i / rays) * TAU;
            ctx.strokeStyle = `rgba(254,243,199,${0.15 + t * 0.2})`;
            ctx.lineWidth = 3 + t * 3;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * 40, Math.sin(a) * 40);
            ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
            ctx.stroke();
          }
          ctx.restore();
          const swell = 1 + smooth(t / 2.1) * 0.18;
          ctx.scale(swell, swell);
          drawGlowSprite(fx.img, size, 34, fx.color);
          drawHighlight(fx.img, size, Math.min(1, t / 2.1));
          drawHighlight(fx.img, size, Math.min(1, t / 2.1) * 0.7);
        }
        break;
      }
      case 'bishop': {
        if (t < 2.0) {
          const k = smooth(t / 2.0);
          ctx.rotate(t * t * 3.5);
          ctx.scale(Math.max(0.03, 1 - k), 1 + k * 0.25);
          drawGlowSprite(fx.img, size, 24, fx.color);
          drawHighlight(fx.img, size, k * 0.6);
        } else if (t < 2.4) {
          // Old-CRT switch-off: a bright line that collapses to a dot.
          const k = (t - 2.0) / 0.4;
          const w = 260 * (1 - k);
          ctx.fillStyle = '#ecfdf5';
          ctx.fillRect(-w / 2, -1.5, w, 3);
          ctx.beginPath();
          ctx.arc(0, 0, 4 + (1 - k) * 3, 0, TAU);
          ctx.fill();
        }
        break;
      }
      default: {
        if (t < 3.0) {
          const [sx, sy] = shake(1 + t * 4);
          ctx.translate(sx, sy);
          const pulse = 1 + Math.sin(t * (10 + t * 6)) * 0.03 * t;
          ctx.scale(pulse, pulse);
          drawGlowSprite(fx.img, size, 34, fx.color);
          drawHighlight(fx.img, size, 0.2 + (t / 3) * 0.6);
          // Cracks spreading through the carapace.
          ctx.strokeStyle = 'rgba(253,242,248,.85)';
          ctx.lineWidth = 2;
          const cracks = Math.floor(t * 3);
          for (let i = 0; i < cracks; i++) {
            const a = i * 2.39996;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(a) * 22, Math.sin(a) * 22);
            ctx.lineTo(Math.cos(a + 0.35) * 40, Math.sin(a + 0.35) * 40);
            ctx.lineTo(Math.cos(a + 0.1) * 58, Math.sin(a + 0.1) * 58);
            ctx.stroke();
          }
        }
        break;
      }
    }
    ctx.restore();

    for (const ring of fx.rings) {
      ctx.save();
      ctx.globalAlpha = clamp(ring.life / ring.maxLife, 0, 1);
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = ring.width;
      ctx.beginPath();
      ctx.arc(fx.x, fx.y, ring.r, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawBossDeathFlash() {
    const fx = bossDeathFx;
    if (!fx || fx.flash <= 0) return;
    ctx.save();
    ctx.globalAlpha = Math.min(0.85, fx.flash);
    ctx.fillStyle = fx.flashColor;
    ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);
    ctx.restore();
  }

  function updateHud() {
    // The in-canvas HUD is redrawn every frame; nothing in the DOM needs syncing.
  }

  function addScore(amount, x = null, y = null) {
    score += amount;
    // Never evaluate a high score during gameplay. The end-of-run result owns records.
    if (x !== null && y !== null) {
      scorePops.push({ x, y, text: `+${amount}`, life: 0.7, maxLife: 0.7 });
    }
    updateHud();
  }

  let messageTimeout = null;
  function showMessage(text, seconds = 1) {
    messageEl.textContent = text;
    messageEl.classList.remove('hidden');
    clearTimeout(messageTimeout);
    if (seconds > 0) {
      messageTimeout = setTimeout(() => messageEl.classList.add('hidden'), seconds * 1000);
    }
  }

  function hideMessage() {
    clearTimeout(messageTimeout);
    messageEl.classList.add('hidden');
    messageEl.classList.remove('assault-warning');
  }

  let pickupTimeout = null;
  function showPickup(text, seconds = 0.85) {
    pickupNotice.textContent = text;
    pickupNotice.classList.remove('hidden');
    clearTimeout(pickupTimeout);
    pickupTimeout = setTimeout(() => pickupNotice.classList.add('hidden'), Math.max(0.15, seconds) * 1000);
  }

  function hidePickup() {
    clearTimeout(pickupTimeout);
    pickupNotice.classList.add('hidden');
  }

  function ensureAudio() {
    if (!audioCtx) {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (AudioContextCtor) {
        audioCtx = new AudioContextCtor();
        audioMaster = audioCtx.createGain();
        audioMaster.gain.value = audioMuted ? 0 : 1;
        audioMaster.connect(audioCtx.destination);
      }
    }
    if (audioCtx?.state === 'suspended') audioCtx.resume().catch(() => {});
  }

  function toggleMute() {
    audioMuted = !audioMuted;
    localStorage.setItem('starSquadronMuted', audioMuted ? '1' : '0');
    if (audioMaster) audioMaster.gain.value = audioMuted ? 0 : 1;
    showPickup(audioMuted ? 'SOUND OFF' : 'SOUND ON', 0.8);
    console.info(`[GAME] audio-muted=${audioMuted}`);
  }

  function beep(freq = 440, duration = 0.05, type = 'square', gain = 0.03, endFreq = null) {
    if (!audioCtx || audioMuted) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const amp = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + duration);
    amp.gain.setValueAtTime(gain, now);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(amp).connect(audioMaster || audioCtx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  function firePlayerBullet() {
    const cooldown = playerShotCooldown();
    if (player.fireCooldown > 0 || !running || paused || gameOver || upgradePending || campaignComplete || bossIntroTimer > 0 || !combatReady || player.state !== 'alive') return;
    player.fireCooldown = cooldown;
    const speed = playerBulletSpeed();
    const damage = bulletDamage();

    if (player.rapidTimer > 0) {
      bullets.push({ x: player.x - 9, y: player.y - 24, vx: -22, vy: -speed * 1.045, r: 4, damage });
      bullets.push({ x: player.x + 9, y: player.y - 24, vx: 22, vy: -speed * 1.045, r: 4, damage });
      runStats.shots += 2;
    } else {
      bullets.push({ x: player.x, y: player.y - 27, vx: 0, vy: -speed, r: 4, damage });
      runStats.shots++;
    }
    beep(720, 0.045, 'square', 0.024, 1040);
  }

  function pushEnemyProjectile(enemy, spread = 0, speedMultiplier = 1) {
    const dx = player.x - enemy.x;
    const dy = Math.max(80, player.y - enemy.y);
    const len = Math.hypot(dx, dy) || 1;
    const speed = enemyShotSpeedForLevel(level) * speedMultiplier;
    enemyBullets.push({
      x: enemy.x,
      y: enemy.y + 18,
      vx: (dx / len) * speed * 0.55 + spread,
      vy: Math.abs(dy / len) * speed,
      r: 5,
      phase: Math.random() * TAU,
      color: ENEMY_BULLET_COLORS[enemy.type] || '#fb7185',
      kind: enemy.type || 'enemy'
    });
  }

  function fireEnemyBullet(enemy, spread = 0) {
    if (!running || paused || gameOver || !enemy) return;
    const type = enemy.type || 'blue';
    if (type === 'kamikaze') return;
    if (type === 'purple') {
      pushEnemyProjectile(enemy, spread - 28, 0.96);
      pushEnemyProjectile(enemy, spread + 28, 0.96);
      return;
    }
    if (type === 'orange') {
      pushEnemyProjectile(enemy, spread - 42, 0.88);
      pushEnemyProjectile(enemy, spread, 0.92);
      pushEnemyProjectile(enemy, spread + 42, 0.88);
      return;
    }
    if (type === 'green') {
      pushEnemyProjectile(enemy, spread, 1.30);
      return;
    }
    if (type === 'white') {
      pushEnemyProjectile(enemy, spread + (Math.random() - 0.5) * 18, 1.22);
      return;
    }
    pushEnemyProjectile(enemy, spread, type === 'teal' ? 1.08 : 1);
  }

  function angleDistance(a, b) {
    let d = (a - b) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return Math.abs(d);
  }

  function releaseKamikazeBurst(x, y, reduced = false) {
    const count = reduced ? 10 : 18;
    const speed = reduced ? 215 : 255;
    const safeCenter = Math.PI / 2 + (Math.random() < 0.5 ? -0.48 : 0.48);
    const safeHalfWidth = reduced ? 0.46 : 0.38;
    const offset = Math.random() * TAU;
    let emitted = 0;
    for (let i = 0; i < count; i++) {
      const angle = offset + (TAU * i) / count;
      if (angleDistance(angle, safeCenter) < safeHalfWidth) continue;
      fireBossBullet(x, y, Math.cos(angle) * speed, Math.sin(angle) * speed, reduced ? 4.8 : 5.8, ENEMY_BULLET_COLORS.kamikaze, 'shrapnel');
      emitted++;
    }
    console.info(`[GAME] kamikaze-burst reduced=${reduced} projectiles=${emitted}`);
  }

  function selfDestructKamikaze(enemy) {
    const idx = enemies.indexOf(enemy);
    if (idx === -1) return;
    enemies.splice(idx, 1);
    releaseKamikazeBurst(enemy.x, enemy.y, false);
    spawnExplosion(enemy.x, enemy.y, 28, 1.2, 'enemy');
    beep(105, 0.22, 'sawtooth', 0.05, 58);
    screenShake = Math.max(screenShake, 0.20);
    shakeStrength = Math.max(shakeStrength, 5);
    if (!boss && enemies.length === 0 && nextLevelTimer <= 0 && waveTransitionTimer <= 0 && !gameOver) finishFormationWave();
  }

  function hitbox(a, b, insetA = 0, insetB = 0) {
    return (
      Math.abs(a.x - b.x) * 2 < (a.w - insetA) + (b.w - insetB) &&
      Math.abs(a.y - b.y) * 2 < (a.h - insetA) + (b.h - insetB)
    );
  }

  function bulletHitsRect(bullet, rect, inset = 4) {
    return (
      bullet.x >= rect.x - rect.w / 2 + inset &&
      bullet.x <= rect.x + rect.w / 2 - inset &&
      bullet.y >= rect.y - rect.h / 2 + inset &&
      bullet.y <= rect.y + rect.h / 2 - inset
    );
  }

  function spawnExplosion(x, y, amount = 16, scale = 1, kind = 'enemy') {
    const colors = kind === 'player'
      ? ['#e0f2fe', '#38bdf8', '#f59e0b', '#ffffff']
      : ['#f8fafc', '#fbbf24', '#fb7185', '#60a5fa'];

    for (let i = 0; i < amount; i++) {
      const angle = Math.random() * TAU;
      const speed = (45 + Math.random() * 185) * scale;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.32 + Math.random() * 0.58,
        maxLife: 0.9,
        size: (1.5 + Math.random() * 4.5) * scale,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() < 0.4
      });
    }
  }

  function spawnTrail(x, y, color = '#60a5fa', amount = 1) {
    for (let i = 0; i < amount; i++) {
      particles.push({
        x: x + (Math.random() - 0.5) * 7,
        y: y + (Math.random() - 0.5) * 7,
        vx: (Math.random() - 0.5) * 35,
        vy: 45 + Math.random() * 80,
        life: 0.16 + Math.random() * 0.2,
        maxLife: 0.36,
        size: 1.5 + Math.random() * 3.2,
        color,
        glow: true
      });
    }
  }

  function damagePlayer(source = 'unknown') {
    if (player.state !== 'alive' || player.invulnerable > 0 || gameOver || upgradePending || campaignComplete) return false;
    runStats.streak = 0;

    if (player.shield > 0) {
      player.shield--;
      player.invulnerable = 0.65;
      enemyBullets.length = 0;
      screenShake = 0.16;
      shakeStrength = 5;
      spawnExplosion(player.x, player.y, 12, 0.55, 'player');
      beep(440, 0.14, 'sine', 0.04, 820);
      showPickup(`SHIELD ABSORBED • ${player.shield}/${player.maxShield} REMAIN`, 0.8);
      startRecoveryWindow(2.0, 'shield-hit');
      console.info(`[GAME] shield-hit source=${source} shield=${player.shield}/${player.maxShield} hull=${player.hull}/${player.maxHull} lives=${lives}`);
      updateHud();
      return true;
    }

    player.hull--;
    if (player.hull > 0) {
      player.invulnerable = 0.8;
      enemyBullets.length = 0;
      screenShake = 0.22;
      shakeStrength = 7;
      spawnExplosion(player.x, player.y, 18, 0.7, 'player');
      beep(235, 0.18, 'sawtooth', 0.045, 110);
      showPickup(`HULL HIT • ${player.hull}/${player.maxHull} HEALTH`, 0.8);
      startRecoveryWindow(2.8, 'hull-hit');
      console.info(`[GAME] hull-hit source=${source} hull=${player.hull}/${player.maxHull} shield=${player.shield}/${player.maxShield} lives=${lives}`);
      updateHud();
      return true;
    }

    lives--;
    console.info(`[GAME] player-hit source=${source} lives=${lives} hull=0/${player.maxHull} shield=${player.shield}/${player.maxShield} score=${score} enemies=${enemies.length} enemyBullets=${enemyBullets.length}`);
    spawnExplosion(player.x, player.y, 42, 1.4, 'player');
    beep(180, 0.3, 'sawtooth', 0.055, 55);
    screenShake = 0.45;
    shakeStrength = 12;
    updateHud();

    if (lives <= 0) {
      endGame();
      return true;
    }

    startRecoveryWindow(4.0, 'ship-lost');
    player.state = 'exploding';
    player.deathTimer = 0.48;
    player.respawnTimer = 0;
    player.invulnerable = 0;
    player.fireCooldown = 0.25;
    enemyBullets.length = 0;
    keys.clear();
    showPickup('SHIP LOST', 0.75);
    return true;
  }

  function endGame() {
    const bossDef = isBossLevel(level) ? getBossDefForLevel(level) : null;
    console.info(`[GAME] game-over score=${score} level=${level} boss=${bossDef ? bossDef.name : 'none'}`);
    gameOver = true;
    running = false;
    paused = false;
    keys.clear();

    // Important: never leave the final impact shake active after simulation stops.
    screenShake = 0;
    shakeStrength = 0;
    bossIntroTimer = 0;
    contactIntroTimer = 0;
    pendingEncounterStart = false;
    resetForwardAssaultState();
    bossIntroOverlay.classList.add('hidden');
    contactIntroOverlay.classList.add('hidden');
    enemyBullets.length = 0;
    hideMessage();
    hidePickup();

    pauseOverlay.classList.add('hidden');
    pauseButton.classList.add('hidden');
    quickRestartButton.classList.add('hidden');
    gameOverScore.textContent = score.toLocaleString();
    gameOverLevel.textContent = runMode === 'endless' ? `ENDLESS • LEVEL ${level}` : `LEVEL ${level}`;
    renderRunStats(gameOverStats);
    finalizeRunRecord();
    renderRunRecord(gameOverRecord);
    if (bossDef) {
      gameOverBossLine.textContent = `Command encounter: ${bossDef.name} — ${bossDef.title}`;
      gameOverBossLine.classList.remove('hidden');
    } else {
      gameOverBossLine.textContent = '';
      gameOverBossLine.classList.add('hidden');
    }
    const canContinue = Boolean(runCheckpoint && leaderboardEligibleRun && runMode === 'campaign');
    checkpointButton.classList.toggle('hidden', !canContinue);
    if (canContinue) checkpointButton.textContent = `CONTINUE FROM LEVEL ${runCheckpoint.level} (½ SCORE)`;
    gameOverOverlay.classList.remove('hidden');
    ensureKeyboardSelection(gameOverOverlay, canContinue ? '#checkpointButton' : '#retryLevelButton');
  }


  function spawnPowerupDrop(x, y, kind = 'adaptive', source = 'enemy') {
    powerups.push({
      x, y, w: 32, h: 32, vy: 120, spin: 0, bob: Math.random() * TAU,
      kind, source
    });
    console.info(`[GAME] powerup-drop kind=${kind} source=${source} level=${level}`);
  }

  function weightedBossDropKind() {
    const roll = Math.random();
    const twin = TUNING.escortTwinFireShare;
    const rest = (1 - twin) / 0.52; // keep shield/repair/life in their old proportions
    if (roll < twin) return 'rapid';
    if (roll < twin + 0.24 * rest) return 'shield';
    if (roll < twin + 0.44 * rest) return 'repair';
    return 'life';
  }

  function dropBossPhaseReward() {
    if (!boss) return;
    // A guaranteed Twin Fire drop makes the second phase feel like a resource
    // checkpoint rather than depending on the normal low-probability drop table.
    spawnPowerupDrop(boss.x, Math.min(boss.y + 48, LOGICAL_H * 0.38), 'rapid', 'boss-phase');
  }

  function maybeDropPowerup(enemy) {
    // Boss escorts are worth engaging: they have a substantially higher drop
    // chance and favor useful combat resources, especially Twin Fire.
    if (enemy.bossEscort) {
      if (Math.random() < 0.30 * Math.max(0.4, enemy.escortValue ?? 1)) spawnPowerupDrop(enemy.x, enemy.y, weightedBossDropKind(), 'boss-escort');
      return;
    }
    const chance = Math.min(TUNING.enemyDropCap, TUNING.enemyDropBase + level * TUNING.enemyDropPerLevel);
    if (Math.random() < chance) spawnPowerupDrop(enemy.x, enemy.y, 'adaptive', 'enemy');
  }

  function killEnemy(enemy) {
    const idx = enemies.indexOf(enemy);
    if (idx === -1) return;
    enemies.splice(idx, 1);
    if (enemy.type === 'kamikaze') releaseKamikazeBurst(enemy.x, enemy.y, true);

    runStats.kills++;
    runStats.streak++;
    runStats.bestStreak = Math.max(runStats.bestStreak, runStats.streak);
    const diveBonus = enemy.state === 'diving' ? 100 : 0;
    const gained = enemy.points + diveBonus;
    addScore(gained, enemy.x, enemy.y);
    spawnExplosion(enemy.x, enemy.y, enemy.type === 'gold' ? 24 : 17, enemy.type === 'gold' ? 1.18 : 1);
    maybeDropPowerup(enemy);
    beep(enemy.type === 'gold' ? 260 : 330, 0.08, 'square', 0.034, 120);

    if (!boss && enemies.length === 0 && nextLevelTimer <= 0 && waveTransitionTimer <= 0 && !gameOver) {
      finishFormationWave();
    }
  }

  function availableAttackPatterns(enemy) {
    const base = ['swoop', 'hook', 'zigzag', 'charge'];
    if (level >= 5) base.push('sweep');
    if (level >= 8) base.push('spiral');
    if (level >= 11) base.push('feint');
    if (enemy.type === 'kamikaze') return ['kamikaze'];
    if (enemy.type === 'green') base.push('lane');
    if (enemy.type === 'purple') base.push('weave');
    if (enemy.type === 'teal') base.push('pincer');

    // Species have preferences, but never a single fixed path.
    if (enemy.type === 'teal') base.push('charge', 'charge', 'zigzag');
    if (enemy.type === 'purple') base.push('hook', 'sweep', 'spiral');
    if (enemy.type === 'white') base.push('spiral', 'feint', 'charge');
    if (enemy.type === 'green') base.push('zigzag', 'charge', 'hook');
    if (enemy.type === 'orange') base.push('sweep', 'swoop', 'hook');
    if (enemy.type === 'gold') base.push('swoop', 'hook');
    return base;
  }

  function pickAttackPattern(enemy) {
    const pool = availableAttackPatterns(enemy);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function formationCandidates(type = null, preferredSide = 0, excluded = new Set()) {
    let candidates = enemies.filter(e => e.state === 'formation' && !excluded.has(e));
    if (type) candidates = candidates.filter(e => e.type === type);
    if (preferredSide) {
      const sided = candidates.filter(e => preferredSide < 0 ? e.x < LOGICAL_W * 0.52 : e.x > LOGICAL_W * 0.48);
      if (sided.length) candidates = sided;
    }
    return candidates;
  }

  function selectFormationEnemy(type = null, preferredSide = 0, excluded = new Set()) {
    const candidates = formationCandidates(type, preferredSide, excluded);
    if (!candidates.length) return null;
    const weighted = candidates.map(enemy => ({
      enemy,
      weight: 1 + enemy.row * 0.45 + Math.random() * 2.1
    })).sort((a, b) => b.weight - a.weight);
    const poolSize = Math.min(weighted.length, Math.max(4, Math.ceil(weighted.length * 0.5)));
    return weighted[Math.floor(Math.random() * poolSize)].enemy;
  }

  function beginDive(enemy, pattern = null, preferredSide = 0, targetOffset = 0, options = {}) {
    if (!enemy || !enemies.includes(enemy) || !['formation', 'queued'].includes(enemy.state)) return false;

    enemy.state = 'diving';
    enemy.diveTime = 0;
    enemy.diveStartX = enemy.x;
    enemy.diveStartY = enemy.y;
    enemy.diveSide = preferredSide || enemy.side || (Math.random() < 0.5 ? -1 : 1);
    enemy.attackPattern = pattern || pickAttackPattern(enemy);
    enemy.attackSeed = Math.random() * TAU;
    enemy.attackAmp = options.attackAmp ?? (72 + Math.random() * 118);
    const defaultTracking = enemy.type === 'kamikaze' ? false : Math.random() < (enemy.type === 'white' ? 0.62 : enemy.type === 'green' ? 0.42 : 0.22);
    enemy.attackTracksPlayer = options.tracking ?? defaultTracking;
    enemy.attackShot1At = options.shot1At ?? (0.32 + Math.random() * 0.23);
    enemy.attackShot2At = options.shot2At ?? (0.56 + Math.random() * 0.26);
    enemy.teamTactic = options.tactic || 'probe';
    enemy.teamRole = options.role || 'solo';
    enemy.suppressDiveFire = Boolean(options.suppressFire);

    const aimSpread = options.aimSpread ?? (enemy.type === 'teal' ? 55 : enemy.type === 'white' ? 72 : 150);
    if (Number.isFinite(options.targetX)) {
      enemy.targetX = clamp(options.targetX, 72, LOGICAL_W - 72);
    } else {
      enemy.targetX = clamp(player.x + targetOffset + (Math.random() - 0.5) * aimSpread, 72, LOGICAL_W - 72);
    }
    enemy.diveShot1 = false;
    enemy.diveShot2 = false;

    const typeMult = enemy.type === 'kamikaze' ? 0.94 : enemy.type === 'teal' ? 0.82 : enemy.type === 'green' ? 0.90 : enemy.type === 'white' ? 0.88 : enemy.type === 'orange' ? 1.08 : 1;
    const durationByPattern = {
      swoop: [2.05, 2.95],
      hook: [2.25, 3.25],
      zigzag: [2.15, 3.05],
      charge: [1.65, 2.40],
      sweep: [2.55, 3.55],
      spiral: [2.45, 3.45],
      feint: [2.70, 3.75],
      weave: [2.35, 3.05],
      pincer: [1.90, 2.60],
      lane: [1.95, 2.65],
      assault: [1.85, 2.35],
      kamikaze: [2.15, 2.55]
    };
    const range = durationByPattern[enemy.attackPattern] || durationByPattern.swoop;
    enemy.diveDuration = (range[0] + Math.random() * (range[1] - range[0])) * typeMult * (options.durationMult || 1);
    return true;
  }

  function queueEnemyAttack(enemy, delay, pattern, preferredSide, targetOffset = 0, options = {}) {
    if (!enemy || enemy.state !== 'formation') return false;
    enemy.state = 'queued';
    pendingAttackQueue.push({
      enemy,
      delay: Math.max(0, delay),
      pattern,
      preferredSide,
      targetOffset,
      options
    });
    return true;
  }

  function queueAttack(delay, pattern = null, preferredSide = 0, targetOffset = 0, options = {}) {
    const enemy = selectFormationEnemy(options.type || null, preferredSide, options.excluded || new Set());
    if (!enemy) return false;
    return queueEnemyAttack(enemy, delay, pattern, preferredSide, targetOffset, options);
  }

  function mirroredPair(type, excluded = new Set()) {
    const left = selectFormationEnemy(type, -1, excluded);
    if (!left) return null;
    const nextExcluded = new Set(excluded);
    nextExcluded.add(left);
    const right = selectFormationEnemy(type, 1, nextExcluded);
    if (!right) return null;
    return [left, right];
  }

  function fairPairTargets(gap = 120) {
    // Keep paired attacks away from the screen walls so clamping never turns
    // two intended lanes into one unavoidable lane.
    const anchor = clamp(player.x, 190, LOGICAL_W - 190);
    return [anchor - gap, anchor + gap];
  }

  function logTeamTactic(name, members) {
    const roster = members.filter(Boolean).map(e => `${ENEMY_DEFS[e.type]?.name || e.type}@${e.col}`).join(',');
    console.info(`[GAME] team-tactic=${name} members=${roster}`);
  }

  function scheduleTeamTactic(room) {
    const available = enemies.filter(e => e.state === 'formation');
    if (!available.length) return false;
    const byType = type => available.filter(e => e.type === type);
    const tactics = [];

    if (room >= 2 && byType('purple').length >= 2) tactics.push('void-weave');
    if (room >= 2 && byType('teal').length >= 2) tactics.push('rift-pincer');
    if (room >= 2 && byType('red').length >= 2) tactics.push('mantis-scissor');
    if (room >= 2 && byType('white').length >= 2) tactics.push('phantom-hunt');
    if (room >= 2 && byType('green').length >= 1 && available.some(e => ['red', 'blue', 'teal'].includes(e.type))) tactics.push('needle-trap');
    if (room >= 2 && byType('orange').length >= 1 && available.some(e => ['blue', 'red', 'green'].includes(e.type))) tactics.push('solar-screen');
    if (room >= 3 && byType('gold').length >= 1 && available.filter(e => ['blue', 'red'].includes(e.type)).length >= 2) tactics.push('crown-spear');

    if (!tactics.length) return false;
    const choices = tactics.length > 1 ? tactics.filter(t => t !== lastTeamTactic) : tactics;
    const tactic = choices[Math.floor(Math.random() * choices.length)] || tactics[0];
    lastTeamTactic = tactic;
    const excluded = new Set();

    if (tactic === 'void-weave') {
      const pair = mirroredPair('purple', excluded);
      if (!pair) return false;
      const anchor = lerp(player.x, LOGICAL_W / 2, 0.55);
      queueEnemyAttack(pair[0], 0.22, 'weave', -1, 0, { tactic, role: 'left-thread', targetX: anchor - 58, tracking: false, shot1At: 0.40, shot2At: 0.64, attackAmp: 105 });
      queueEnemyAttack(pair[1], 0.30 + Math.random() * 0.08, 'weave', 1, 0, { tactic, role: 'right-thread', targetX: anchor + 58, tracking: false, shot1At: 0.43, shot2At: 0.67, attackAmp: 105 });
      logTeamTactic(tactic, pair);
      return true;
    }

    if (tactic === 'rift-pincer') {
      const pair = mirroredPair('teal', excluded);
      if (!pair) return false;
      const [leftTarget, rightTarget] = fairPairTargets(118);
      queueEnemyAttack(pair[0], 0.20, 'pincer', -1, 0, { tactic, role: 'left-pincer', targetX: rightTarget, tracking: false, aimSpread: 0, durationMult: 1.04 });
      queueEnemyAttack(pair[1], 0.34 + Math.random() * 0.08, 'pincer', 1, 0, { tactic, role: 'right-pincer', targetX: leftTarget, tracking: false, aimSpread: 0, durationMult: 1.04 });
      logTeamTactic(tactic, pair);
      return true;
    }

    if (tactic === 'mantis-scissor') {
      const pair = mirroredPair('red', excluded);
      if (!pair) return false;
      const [leftTarget, rightTarget] = fairPairTargets(88);
      queueEnemyAttack(pair[0], 0.22, 'hook', -1, 0, { tactic, role: 'left-blade', targetX: rightTarget, tracking: false, shot1At: 0.50, durationMult: 1.06 });
      queueEnemyAttack(pair[1], 0.34 + Math.random() * 0.11, 'hook', 1, 0, { tactic, role: 'right-blade', targetX: leftTarget, tracking: false, shot1At: 0.54, durationMult: 1.06 });
      logTeamTactic(tactic, pair);
      return true;
    }

    if (tactic === 'phantom-hunt') {
      const pair = mirroredPair('white', excluded);
      if (!pair) return false;
      const evadeSide = player.x < LOGICAL_W / 2 ? 1 : -1;
      queueEnemyAttack(pair[0], 0.20, 'feint', pair[0].side, 0, { tactic, role: 'decoy', targetX: player.x, tracking: true, shot2At: 0.72, durationMult: 1.08 });
      queueEnemyAttack(pair[1], 0.54, 'charge', pair[1].side, 0, { tactic, role: 'hunter', targetX: clamp(player.x + evadeSide * 135, 90, LOGICAL_W - 90), tracking: false, shot1At: 0.52, durationMult: 1.08 });
      logTeamTactic(tactic, pair);
      return true;
    }

    if (tactic === 'needle-trap') {
      const needle = selectFormationEnemy('green', 0, excluded);
      if (!needle) return false;
      excluded.add(needle);
      const pressurePool = available.filter(e => !excluded.has(e) && ['red', 'blue', 'teal'].includes(e.type));
      if (!pressurePool.length) return false;
      const pressure = pressurePool[Math.floor(Math.random() * pressurePool.length)];
      const escapeSide = player.x < LOGICAL_W / 2 ? 1 : -1;
      queueEnemyAttack(pressure, 0.18, pressure.type === 'teal' ? 'charge' : 'swoop', pressure.side, 0, { tactic, role: 'pressure', targetX: player.x - escapeSide * 65, tracking: false });
      queueEnemyAttack(needle, 0.45, 'lane', needle.side, 0, { tactic, role: 'sniper', targetX: clamp(player.x + escapeSide * 120, 90, LOGICAL_W - 90), tracking: false, shot1At: 0.30, shot2At: 0.50, durationMult: 1.10 });
      logTeamTactic(tactic, [pressure, needle]);
      return true;
    }

    if (tactic === 'solar-screen') {
      const bomber = selectFormationEnemy('orange', 0, excluded);
      if (!bomber) return false;
      excluded.add(bomber);
      const supportPool = available.filter(e => !excluded.has(e) && ['blue', 'red', 'green'].includes(e.type));
      if (!supportPool.length) return false;
      const support = supportPool[Math.floor(Math.random() * supportPool.length)];
      const screenSide = bomber.x < LOGICAL_W / 2 ? -1 : 1;
      queueEnemyAttack(bomber, 0.20, 'sweep', screenSide, 0, { tactic, role: 'screen', targetX: clamp(player.x + screenSide * 145, 100, LOGICAL_W - 100), tracking: false, shot1At: 0.34, shot2At: 0.56, durationMult: 1.10 });
      queueEnemyAttack(support, 0.52, 'zigzag', -screenSide, 0, { tactic, role: 'opposite-pressure', targetX: clamp(player.x - screenSide * 105, 90, LOGICAL_W - 90), tracking: false, durationMult: 1.08 });
      logTeamTactic(tactic, [bomber, support]);
      return true;
    }

    if (tactic === 'crown-spear') {
      const crown = selectFormationEnemy('gold', 0, excluded);
      if (!crown) return false;
      excluded.add(crown);
      const escortPool = available.filter(e => !excluded.has(e) && ['blue', 'red'].includes(e.type));
      if (escortPool.length < 2) return false;
      escortPool.sort((a, b) => a.x - b.x);
      const left = escortPool[0];
      const right = escortPool[escortPool.length - 1];
      const [leftTarget, rightTarget] = fairPairTargets(125);
      queueEnemyAttack(crown, 0.30, 'charge', crown.side, 0, { tactic, role: 'spear', targetX: player.x, tracking: false, shot1At: 0.52, durationMult: 1.18 });
      queueEnemyAttack(left, 0.18, 'hook', -1, 0, { tactic, role: 'left-escort', targetX: leftTarget, tracking: false, durationMult: 1.12 });
      queueEnemyAttack(right, 0.38, 'hook', 1, 0, { tactic, role: 'right-escort', targetX: rightTarget, tracking: false, durationMult: 1.12 });
      logTeamTactic(tactic, [crown, left, right]);
      return true;
    }

    return false;
  }

  function scheduleAttackBurst() {
    const activeDivers = enemies.filter(e => e.state === 'diving' || e.state === 'queued').length;
    const maxDivers = maxSimultaneousDivers();
    const room = Math.max(0, maxDivers - activeDivers);
    if (!room) return;

    // Recovery periods still allow a readable solo probe so the game does not
    // become dead air, but coordinated pressure is temporarily suppressed.
    const pressure = campaignPressureTarget();
    const recoveryActive = pressureRecoveryTimer > 0;
    const teamChance = recoveryActive || teamAttackCooldown > 0
      ? 0
      : clamp(0.20 + pressure * 0.38 + (currentWave - 1) * 0.018, 0.20, 0.52);
    if (room >= 2 && Math.random() < teamChance && scheduleTeamTactic(room)) {
      teamAttackCooldown = 3.8 + (1 - pressure) * 1.2;
      lastPressureEvent = 'team-attack';
      return;
    }

    const typePreference = ['blue', 'red', 'gold', 'green', 'purple', 'teal', 'kamikaze', 'orange', 'white']
      .filter(type => ENEMY_DEFS[type].firstLevel <= level && formationCandidates(type).length);
    const kamikazeAvailable = !recoveryActive && formationCandidates('kamikaze').length > 0;
    const type = kamikazeAvailable && Math.random() < 0.14
      ? 'kamikaze'
      : typePreference.length && Math.random() < 0.62
        ? typePreference[Math.floor(Math.random() * typePreference.length)]
        : null;
    const patternByType = {
      blue: ['swoop', 'zigzag'], red: ['hook', 'swoop'], gold: ['charge', 'hook'],
      green: ['lane', 'zigzag'], purple: ['weave', 'sweep'], teal: ['pincer', 'charge'],
      orange: ['sweep', 'hook'], white: ['feint', 'charge'], kamikaze: ['kamikaze']
    };
    const pool = type ? patternByType[type] : null;
    const pattern = pool ? pool[Math.floor(Math.random() * pool.length)] : null;
    queueAttack(0.10, pattern, 0, 0, { type, tactic: 'probe', role: 'solo' });
  }

  function updateAttackQueue(dt) {
    for (let i = pendingAttackQueue.length - 1; i >= 0; i--) {
      const item = pendingAttackQueue[i];
      item.delay -= dt;
      if (item.delay <= 0) {
        if (item.enemy && enemies.includes(item.enemy) && item.enemy.state === 'queued') {
          beginDive(item.enemy, item.pattern, item.preferredSide, item.targetOffset, item.options || {});
        }
        pendingAttackQueue.splice(i, 1);
      }
    }
  }

  function startReturn(enemy) {
    enemy.state = 'returning';
    enemy.returnTime = 0;
    enemy.returnDuration = Math.max(0.9, 1.35 - level * 0.02);
    enemy.returnStartX = clamp(enemy.x, 70, LOGICAL_W - 70);
    enemy.returnStartY = -70;
    enemy.x = enemy.returnStartX;
    enemy.y = enemy.returnStartY;
  }

  function chooseFormationMotion() {
    const modes = ['drift', 'ripple', 'split', 'orbit', 'compress'];
    let next = modes[Math.floor(Math.random() * modes.length)];
    if (next === formationMotion && modes.length > 1) next = modes[(modes.indexOf(next) + 1 + Math.floor(Math.random() * (modes.length - 1))) % modes.length];
    formationMotion = next;
    formationMotionSeed = Math.random() * TAU;
    formationMotionTimer = 2.6 + Math.random() * 4.2;
  }

  function formationTarget(enemy) {
    const phase = formationPhase + formationMotionSeed;
    const colPhase = enemy.col * 0.54 + enemy.row * 0.31;
    const center = LOGICAL_W / 2;
    let x = enemy.baseX;
    let y = enemy.baseY;

    if (formationMotion === 'ripple') {
      x += Math.sin(phase * 1.15 + colPhase) * 24;
      y += Math.sin(phase * 1.75 + enemy.col * 0.72 + enemy.row * 0.45) * 12;
    } else if (formationMotion === 'split') {
      const side = enemy.baseX < center ? -1 : 1;
      const spread = (0.5 + 0.5 * Math.sin(phase * 0.92)) * 38;
      x += side * spread + Math.sin(phase * 1.6 + colPhase) * 8;
      y += Math.cos(phase * 1.25 + enemy.row * 0.8) * 7;
    } else if (formationMotion === 'orbit') {
      x += Math.cos(phase * 1.35 + colPhase) * (16 + enemy.row * 2);
      y += Math.sin(phase * 1.7 + enemy.col * 0.36) * 10;
    } else if (formationMotion === 'compress') {
      const scale = 0.92 + 0.08 * (0.5 + 0.5 * Math.sin(phase));
      x = center + (enemy.baseX - center) * scale;
      x += Math.sin(phase * 1.5 + colPhase) * 7;
      y += Math.sin(phase * 1.1 + enemy.row * 0.9) * 8;
    } else {
      x += Math.sin(phase) * Math.min(64, 30 + level * 1.5);
      y += Math.sin(elapsed * 1.55 + colPhase) * 5;
    }

    return { x, y };
  }

  function updatePlayer(dt) {
    player.fireCooldown = Math.max(0, player.fireCooldown - dt);
    player.rapidTimer = Math.max(0, player.rapidTimer - dt);
    player.invulnerable = Math.max(0, player.invulnerable - dt);

    if (player.state === 'exploding') {
      player.deathTimer = Math.max(0, player.deathTimer - dt);
      if (player.deathTimer <= 0) {
        player.state = 'respawning';
        console.info(`[GAME] respawn-stage lives=${lives}`);
        player.x = LOGICAL_W / 2;
        player.y = LOGICAL_H - 78;
        player.bank = 0;
        player.hull = player.maxHull;
        player.respawnTimer = 0.58;
        player.invulnerable = 2.4;
        showPickup('READY', 0.6);
        updateHud();
      }
      return;
    }

    if (player.state === 'respawning') {
      player.respawnTimer = Math.max(0, player.respawnTimer - dt);
      if (player.respawnTimer <= 0) {
        player.state = 'alive';
        player.respawnTimer = 0;
        console.info(`[GAME] player-ready lives=${lives} invulnerable=${player.invulnerable.toFixed(2)}`);
      }
      return;
    }

    let dx = 0;
    let dy = 0;
    if (keys.has('ArrowLeft') || keys.has('KeyA')) dx -= 1;
    if (keys.has('ArrowRight') || keys.has('KeyD')) dx += 1;
    if (keys.has('ArrowUp') || keys.has('KeyW')) dy -= 1;
    if (keys.has('ArrowDown') || keys.has('KeyS')) dy += 1;

    if (dx && dy) {
      const inv = Math.SQRT1_2;
      dx *= inv;
      dy *= inv;
    }

    player.bank += (dx * 0.24 - player.bank) * Math.min(1, dt * 8);
    player.x += dx * player.speed * dt;
    player.y += dy * player.speed * dt;
    player.x = clamp(player.x, 38, LOGICAL_W - 38);
    player.y = clamp(player.y, LOGICAL_H * 0.54, LOGICAL_H - 48);

    if (Math.random() < dt * 42) spawnTrail(player.x, player.y + 24, '#38bdf8', 1);
    if (keys.has('Space') || keys.has('Enter')) firePlayerBullet();
  }

  // ---------- Sector backdrops: each sector of the Lantern Line looks like its lore ----------
  // 0 Outer Gate, 1 Drift Lanes, 2 Convoy Graveyard, 3 Burning Reach, 4 Silent Orbit, 5 Hive Heart, 6 Regrown Hive (Endless)
  const SECTOR_STAR_COLORS = [
    ['#bfdbfe', '#dbeafe'], ['#ddd6fe', '#f5f3ff'], ['#a5f3fc', '#e2e8f0'],
    ['#fed7aa', '#fef3c7'], ['#a7f3d0', '#d1fae5'], ['#fbcfe8', '#fdf2f8'], ['#e9d5ff', '#fbcfe8']
  ];
  const SECTOR_STAR_ALPHA = [1, 0.9, 0.75, 0.6, 0.55, 0.7, 0.7];
  let bgTime = 0;
  let bgSector = 0;
  let bgPrevSector = -1;
  let bgFade = 0;
  const ambient = { sector: -1, items: [] };

  function backdropSectorForLevel(value = level) {
    return value > 30 ? 6 : clamp(sectorIndex(value), 0, 5);
  }

  function seedAmbient(sector) {
    ambient.sector = sector;
    ambient.items = [];
    const R = rand;
    if (sector === 2) {
      // Drifting convoy wreckage.
      for (let i = 0; i < 7; i++) ambient.items.push({ x: R(0, LOGICAL_W), y: R(-200, LOGICAL_H), vy: R(10, 26), rot: R(0, TAU), vr: R(-0.25, 0.25), size: R(18, 46), shape: Math.floor(R(0, 3)), lit: Math.random() < 0.5 });
    } else if (sector === 3) {
      // Embers blown off the star.
      for (let i = 0; i < 46; i++) ambient.items.push({ x: R(0, LOGICAL_W), y: R(0, LOGICAL_H), vx: R(8, 34), vy: R(20, 60), size: R(1, 2.8), phase: R(0, TAU) });
    } else if (sector >= 5) {
      // Hive spores.
      for (let i = 0; i < 34; i++) ambient.items.push({ x: R(0, LOGICAL_W), y: R(0, LOGICAL_H), vy: R(12, 34), sway: R(8, 26), size: R(2, 5.5), phase: R(0, TAU) });
    }
  }

  // ---------- Celestial layer: planets, moons, comets, asteroid fields, galaxies ----------
  // Each sector has its own kinds of world drifting past. Sprites are painted
  // lazily (once per object) at draw time; the update below is plain math.
  const SECTOR_CELESTIALS = [
    { planets: ['colony', 'rocky', 'ice'],          comet: '#e0f2fe', cometEvery: [9, 18],  asteroidEvery: [26, 40], galaxyEvery: [45, 70] },
    { planets: ['gasRinged', 'gas', 'gasRinged'],   comet: '#ddd6fe', cometEvery: [10, 20], asteroidEvery: [30, 45], galaxyEvery: [40, 60] },
    { planets: ['shattered', 'rocky', 'shattered'], comet: '#a5f3fc', cometEvery: [12, 22], asteroidEvery: [9, 16],  galaxyEvery: [60, 90] },
    { planets: ['lava', 'lava', 'rocky'],           comet: '#fdba74', cometEvery: [5, 11],  asteroidEvery: [20, 34], galaxyEvery: [90, 120] },
    { planets: ['ice', 'ice', 'gas'],               comet: '#a7f3d0', cometEvery: [14, 26], asteroidEvery: [28, 42], galaxyEvery: [25, 40] },
    { planets: ['hive', 'hive', 'rocky'],           comet: '#f9a8d4', cometEvery: [9, 18],  asteroidEvery: [24, 38], galaxyEvery: [60, 90] },
    { planets: ['hive', 'gasRinged', 'hive'],       comet: '#e9d5ff', cometEvery: [8, 16],  asteroidEvery: [22, 34], galaxyEvery: [50, 80] }
  ];
  const celestials = [];
  const celestialTimers = { planet: 0, comet: 0, asteroid: 0, galaxy: 0 };
  let celestialSector = -1;
  let celestialSeed = 1;

  function spawnPlanet(sector, startOnScreen = false) {
    const cfg = SECTOR_CELESTIALS[sector];
    const kind = cfg.planets[Math.floor(Math.random() * cfg.planets.length)];
    const r = kind === 'gas' || kind === 'gasRinged' ? rand(70, 120) : rand(45, 95);
    const side = Math.random() < 0.5 ? rand(0.08, 0.3) : rand(0.7, 0.92); // keep the centre lane clearer
    const planet = {
      type: 'planet', kind, r, x: LOGICAL_W * side, y: startOnScreen ? rand(120, 380) : -r * 0.7, // enters already peeking in
      vy: rand(7, 13), vx: rand(-2, 2), seed: celestialSeed++, sprite: null, sector
    };
    celestials.push(planet);
    // Some worlds bring a moon along.
    if (Math.random() < 0.55) {
      celestials.push({ type: 'moon', kind: 'moon', parent: planet, r: rand(9, 16), orbit: r * rand(1.5, 2.1), angle: rand(0, TAU), speed: rand(0.15, 0.3) * (Math.random() < 0.5 ? -1 : 1), seed: celestialSeed++, sprite: null, x: planet.x, y: planet.y, sector });
    }
  }

  function spawnComet(sector) {
    const fromLeft = Math.random() < 0.5;
    const speed = rand(170, 260);
    const angle = fromLeft ? rand(0.35, 0.75) : Math.PI - rand(0.35, 0.75);
    celestials.push({
      type: 'comet', x: fromLeft ? rand(-60, LOGICAL_W * 0.4) : rand(LOGICAL_W * 0.6, LOGICAL_W + 60), y: -40,
      vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, tail: rand(110, 200), size: rand(2.2, 3.6),
      color: SECTOR_CELESTIALS[sector].comet
    });
  }

  function spawnAsteroidField(sector) {
    const cx = rand(80, LOGICAL_W - 80), vy = rand(26, 44), vx = rand(-8, 8);
    const count = sector === 2 ? 9 : 6;
    for (let i = 0; i < count; i++) {
      const size = rand(5, 16);
      const pts = [];
      const n = 7;
      for (let k = 0; k < n; k++) pts.push(rand(0.65, 1.05));
      celestials.push({ type: 'asteroid', x: cx + rand(-120, 120), y: rand(-260, -20), vx, vy: vy * rand(0.85, 1.15), rot: rand(0, TAU), vr: rand(-0.9, 0.9), size, pts, lava: sector === 3 && Math.random() < 0.4 });
    }
  }

  function spawnGalaxy(sector, startOnScreen = false) {
    celestials.push({ type: 'galaxy', x: rand(120, LOGICAL_W - 120), y: startOnScreen ? rand(80, 300) : -120, vy: rand(2.5, 4.5), rot: rand(0, TAU), vr: rand(-0.02, 0.02) || 0.01, r: rand(55, 90), seed: celestialSeed++, sprite: null, sector });
  }

  function resetCelestials(sector) {
    celestialSector = sector;
    // Let objects already on screen drift off; stop new spawns from the old sector.
    const cfg = SECTOR_CELESTIALS[sector];
    const firstTime = !celestials.length;
    // Worlds from the previous sector speed up and clear out (as if we're leaving them behind).
    for (const c of celestials) if ((c.type === 'planet' || c.type === 'galaxy') && c.sector !== sector) c.vy = Math.max(c.vy, 90);
    celestialTimers.planet = firstTime ? 25 : rand(2, 4);
    celestialTimers.comet = rand(cfg.cometEvery[0] * 0.3, cfg.cometEvery[0]);
    celestialTimers.asteroid = rand(cfg.asteroidEvery[0] * 0.4, cfg.asteroidEvery[0]);
    celestialTimers.galaxy = rand(cfg.galaxyEvery[0] * 0.5, cfg.galaxyEvery[0]);
    if (firstTime) spawnPlanet(sector, true);
  }

  function updateCelestials(dt) {
    if (celestialSector !== bgSector) resetCelestials(bgSector);
    const cfg = SECTOR_CELESTIALS[bgSector];
    if ((celestialTimers.planet -= dt) <= 0) {
      if (celestials.filter(c => c.type === 'planet' && c.sector === bgSector).length < 2) spawnPlanet(bgSector);
      celestialTimers.planet = rand(22, 40);
    }
    if ((celestialTimers.comet -= dt) <= 0) { spawnComet(bgSector); celestialTimers.comet = rand(cfg.cometEvery[0], cfg.cometEvery[1]); }
    if ((celestialTimers.asteroid -= dt) <= 0) { spawnAsteroidField(bgSector); celestialTimers.asteroid = rand(cfg.asteroidEvery[0], cfg.asteroidEvery[1]); }
    if ((celestialTimers.galaxy -= dt) <= 0) {
      if (!celestials.some(c => c.type === 'galaxy')) spawnGalaxy(bgSector);
      celestialTimers.galaxy = rand(cfg.galaxyEvery[0], cfg.galaxyEvery[1]);
    }
    for (let i = celestials.length - 1; i >= 0; i--) {
      const c = celestials[i];
      if (c.type === 'moon') {
        c.angle += c.speed * dt;
        c.x = c.parent.x + Math.cos(c.angle) * c.orbit;
        c.y = c.parent.y + Math.sin(c.angle) * c.orbit * 0.45;
        if (!celestials.includes(c.parent)) celestials.splice(i, 1);
        continue;
      }
      c.x += (c.vx || 0) * dt;
      c.y += c.vy * dt;
      if (c.vr) c.rot += c.vr * dt;
      const margin = c.type === 'planet' ? c.r * 2.4 : c.type === 'comet' ? c.tail + 40 : 140;
      if (c.y > LOGICAL_H + margin || c.x < -margin - 200 || c.x > LOGICAL_W + margin + 200) celestials.splice(i, 1);
    }
  }

  function updateBackdrop(dt) {
    bgTime += dt;
    const target = backdropSectorForLevel();
    if (target !== bgSector) {
      bgPrevSector = bgSector;
      bgSector = target;
      bgFade = 1;
    }
    bgFade = Math.max(0, bgFade - dt / 1.6);
    if (ambient.sector !== bgSector) seedAmbient(bgSector);
    for (const it of ambient.items) {
      if (bgSector === 2) { it.y += it.vy * dt; it.rot += it.vr * dt; }
      else if (bgSector === 3) { it.x += it.vx * dt; it.y += it.vy * dt; it.phase += dt * 5; }
      else { it.y += it.vy * dt; it.phase += dt * 1.3; }
      if (it.y > LOGICAL_H + 60) { it.y = -60; it.x = rand(0, LOGICAL_W); }
      if (it.x > LOGICAL_W + 20) it.x = -20;
    }
    updateCelestials(dt);
  }

  function updateStars(dt) {
    updateBackdrop(dt);
    for (const star of stars) {
      star.y += star.speed * dt;
      star.twinkle += dt * (1.1 + star.layer * 0.35);
      if (star.y > LOGICAL_H + 6) {
        star.y = -6;
        star.x = Math.random() * LOGICAL_W;
      }
    }
  }

  function updateBullets(dt) {
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.y < -28 || b.x < -20 || b.x > LOGICAL_W + 20) bullets.splice(i, 1);
    }

    for (let i = enemyBullets.length - 1; i >= 0; i--) {
      const b = enemyBullets[i];
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.phase += dt * 11;
      if (b.y > LOGICAL_H + 60 || b.y < -60 || b.x < -60 || b.x > LOGICAL_W + 60) {
        enemyBullets.splice(i, 1);
        continue;
      }
      if (player.state === 'alive' && player.invulnerable <= 0 && bulletHitsRect(b, player, 12)) {
        enemyBullets.splice(i, 1);
        // damagePlayer clears the remaining enemyBullets. Stop this loop now so
        // the next iteration cannot dereference an index from the cleared array.
        if (damagePlayer('enemy-bullet')) return;
      }
    }
  }

  function enemyTrailColor(type) {
    const colors = {
      blue: '#60a5fa', red: '#fb7185', gold: '#fbbf24', green: '#4ade80',
      purple: '#c084fc', teal: '#2dd4bf', orange: '#fb923c', white: '#e2e8f0', kamikaze: '#f472b6'
    };
    return colors[type] || colors.blue;
  }

  function updateEntering(enemy, dt) {
    enemy.entryTime += dt;
    const raw = (enemy.entryTime - enemy.entryDelay) / enemy.entryDuration;
    if (raw <= 0) return;

    const t = clamp(raw, 0, 1);
    const target = formationTarget(enemy);
    const startSideX = enemy.side < 0 ? -90 : LOGICAL_W + 90;
    let p0;
    let p1;
    let p2;

    p0 = { x: startSideX, y: -85 - enemy.row * 18 };
    if (enemy.entryVariant === 1) {
      p1 = { x: LOGICAL_W * (0.38 + ((Math.sin(enemy.entrySeed) + 1) * 0.12)), y: -20 + enemy.row * 20 };
      p2 = { x: target.x + enemy.side * 145, y: target.y + 105 };
    } else if (enemy.entryVariant === 2) {
      p1 = { x: centerForEntry(enemy.side), y: 110 + enemy.row * 22 };
      p2 = { x: target.x - enemy.side * 165, y: target.y - 45 };
    } else {
      p1 = { x: enemy.side < 0 ? LOGICAL_W * 0.23 : LOGICAL_W * 0.77, y: 18 + enemy.row * 16 };
      p2 = { x: target.x - enemy.side * (120 + enemy.row * 6), y: target.y + 125 };
    }

    const point = cubicBezier(p0, p1, p2, target, easeOutCubic(t));
    enemy.prevX = enemy.x;
    enemy.prevY = enemy.y;
    enemy.x = point.x;
    enemy.y = point.y;
    enemy.angle = Math.atan2(enemy.y - enemy.prevY, enemy.x - enemy.prevX) - Math.PI / 2;

    if (Math.random() < dt * 14) spawnTrail(enemy.x, enemy.y + 13, enemyTrailColor(enemy.type), 1);

    if (t >= 1) {
      enemy.state = 'formation';
      enemy.x = target.x;
      enemy.y = target.y;
      enemy.angle = 0;
    }
  }

  function centerForEntry(side) {
    return side < 0 ? LOGICAL_W * 0.66 : LOGICAL_W * 0.34;
  }

  function updateDiving(enemy, dt) {
    enemy.diveTime += dt;
    const t = clamp(enemy.diveTime / enemy.diveDuration, 0, 1);
    if (enemy.attackTracksPlayer && t < 0.58) {
      const trackingRate = enemy.type === 'white' ? 1.9 : 1.2;
      enemy.targetX += (player.x - enemy.targetX) * Math.min(1, dt * trackingRate);
      enemy.targetX = clamp(enemy.targetX, 68, LOGICAL_W - 68);
    }

    const sx = enemy.diveStartX;
    const sy = enemy.diveStartY;
    const side = enemy.diveSide;
    const tx = enemy.targetX;
    const amp = enemy.attackAmp;
    const seed = enemy.attackSeed;
    let point;

    if (enemy.attackPattern === 'assault') {
      const q = smoothstep(t);
      const laneWave = Math.sin(t * Math.PI) * enemy.diveSide * amp * 0.42;
      point = {
        x: lerp(sx, tx, q) + laneWave,
        y: lerp(sy, LOGICAL_H + 100, Math.pow(t, 1.12))
      };
    } else if (enemy.attackPattern === 'kamikaze') {
      const q = smoothstep(t);
      const detonateY = LOGICAL_H * 0.46;
      point = cubicBezier(
        { x: sx, y: sy },
        { x: sx + side * 150, y: sy + 90 },
        { x: tx - side * 95, y: detonateY - 100 },
        { x: tx, y: detonateY }, q
      );
    } else if (enemy.attackPattern === 'weave') {
      // Mirrored Weavers descend wide, compress toward their shared center lane,
      // then peel apart. Two ships using opposite diveSide values form a readable X.
      if (t < 0.42) {
        const q = smoothstep(t / 0.42);
        point = cubicBezier(
          { x: sx, y: sy },
          { x: sx + side * 175, y: sy + 35 },
          { x: tx + side * 150, y: LOGICAL_H * 0.38 },
          { x: tx + side * 72, y: LOGICAL_H * 0.51 }, q);
      } else if (t < 0.72) {
        const q = smoothstep((t - 0.42) / 0.30);
        point = cubicBezier(
          { x: tx + side * 72, y: LOGICAL_H * 0.51 },
          { x: tx + side * 38, y: LOGICAL_H * 0.58 },
          { x: tx - side * 20, y: LOGICAL_H * 0.67 },
          { x: tx, y: LOGICAL_H * 0.73 }, q);
      } else {
        const q = smoothstep((t - 0.72) / 0.28);
        point = cubicBezier(
          { x: tx, y: LOGICAL_H * 0.73 },
          { x: tx - side * 55, y: LOGICAL_H * 0.80 },
          { x: tx - side * 145, y: LOGICAL_H * 0.91 },
          { x: tx - side * 185, y: LOGICAL_H + 92 }, q);
      }
    } else if (enemy.attackPattern === 'pincer') {
      const q = smoothstep(t);
      point = cubicBezier(
        { x: sx, y: sy },
        { x: sx + side * 185, y: sy + 75 },
        { x: tx + side * 165, y: LOGICAL_H * 0.58 },
        { x: tx, y: LOGICAL_H + 96 }, q);
    } else if (enemy.attackPattern === 'lane') {
      if (t < 0.30) {
        const q = smoothstep(t / 0.30);
        point = cubicBezier(
          { x: sx, y: sy },
          { x: sx + side * 95, y: sy + 20 },
          { x: tx - side * 45, y: LOGICAL_H * 0.31 },
          { x: tx, y: LOGICAL_H * 0.40 }, q);
      } else {
        const q = (t - 0.30) / 0.70;
        point = {
          x: tx + Math.sin(seed + q * Math.PI * 2.2) * 22 * (1 - q),
          y: lerp(LOGICAL_H * 0.40, LOGICAL_H + 94, Math.pow(q, 1.05))
        };
      }
    } else if (enemy.attackPattern === 'zigzag') {
      const q = smoothstep(t);
      const centerX = lerp(sx, tx, q);
      point = {
        x: centerX + Math.sin(seed + t * TAU * 2.45) * amp * (0.95 - t * 0.38),
        y: lerp(sy, LOGICAL_H + 92, Math.pow(t, 1.08))
      };
    } else if (enemy.attackPattern === 'charge') {
      const q = t * t * (3 - 2 * t);
      point = {
        x: lerp(sx, tx, q) + Math.sin(seed + t * TAU * 1.55) * amp * 0.18 * (1 - t),
        y: lerp(sy, LOGICAL_H + 100, Math.pow(t, 1.42))
      };
    } else if (enemy.attackPattern === 'sweep') {
      if (t < 0.33) {
        const q = smoothstep(t / 0.33);
        point = cubicBezier(
          { x: sx, y: sy },
          { x: sx + side * 160, y: sy - 55 },
          { x: side < 0 ? 85 : LOGICAL_W - 85, y: LOGICAL_H * 0.30 },
          { x: side < 0 ? 120 : LOGICAL_W - 120, y: LOGICAL_H * 0.40 }, q);
      } else if (t < 0.70) {
        const q = smoothstep((t - 0.33) / 0.37);
        point = {
          x: lerp(side < 0 ? 120 : LOGICAL_W - 120, side < 0 ? LOGICAL_W - 135 : 135, q),
          y: LOGICAL_H * 0.40 + Math.sin(seed + q * Math.PI) * 70
        };
      } else {
        const q = smoothstep((t - 0.70) / 0.30);
        const fromX = side < 0 ? LOGICAL_W - 135 : 135;
        point = cubicBezier(
          { x: fromX, y: LOGICAL_H * 0.40 },
          { x: fromX - side * 100, y: LOGICAL_H * 0.60 },
          { x: tx + side * 100, y: LOGICAL_H * 0.78 },
          { x: tx, y: LOGICAL_H + 92 }, q);
      }
    } else if (enemy.attackPattern === 'spiral') {
      const q = smoothstep(t);
      const radius = amp * (0.92 - t * 0.54);
      const angle = seed + t * TAU * (2.0 + (enemy.col % 3) * 0.18) * side;
      point = {
        x: lerp(sx, tx, q) + Math.cos(angle) * radius,
        y: lerp(sy, LOGICAL_H + 90, q) + Math.sin(angle) * radius * 0.34
      };
    } else if (enemy.attackPattern === 'feint') {
      if (t < 0.36) {
        const q = smoothstep(t / 0.36);
        point = cubicBezier(
          { x: sx, y: sy },
          { x: sx + side * 120, y: sy + 80 },
          { x: tx - side * 90, y: LOGICAL_H * 0.48 },
          { x: tx, y: LOGICAL_H * 0.54 }, q);
      } else if (t < 0.62) {
        const q = smoothstep((t - 0.36) / 0.26);
        point = cubicBezier(
          { x: tx, y: LOGICAL_H * 0.54 },
          { x: tx + side * 170, y: LOGICAL_H * 0.38 },
          { x: sx - side * 120, y: LOGICAL_H * 0.22 },
          { x: sx - side * 65, y: LOGICAL_H * 0.28 }, q);
      } else {
        const q = smoothstep((t - 0.62) / 0.38);
        point = cubicBezier(
          { x: sx - side * 65, y: LOGICAL_H * 0.28 },
          { x: sx + side * 130, y: LOGICAL_H * 0.42 },
          { x: tx - side * 115, y: LOGICAL_H * 0.78 },
          { x: tx, y: LOGICAL_H + 92 }, q);
      }
    } else if (enemy.attackPattern === 'hook') {
      if (t < 0.43) {
        const q = smoothstep(t / 0.43);
        point = cubicBezier(
          { x: sx, y: sy },
          { x: sx + side * 225, y: sy - 82 },
          { x: sx + side * 250, y: sy + 155 },
          { x: sx + side * 145, y: sy + 250 }, q);
      } else {
        const q = smoothstep((t - 0.43) / 0.57);
        point = cubicBezier(
          { x: sx + side * 145, y: sy + 250 },
          { x: sx - side * 125, y: LOGICAL_H * 0.50 },
          { x: tx + side * 135, y: LOGICAL_H * 0.78 },
          { x: tx, y: LOGICAL_H + 92 }, q);
      }
    } else {
      // Classic swoop, with randomized control points so even this familiar path varies.
      if (t < 0.30) {
        const q = smoothstep(t / 0.30);
        point = cubicBezier(
          { x: sx, y: sy },
          { x: sx + side * (120 + amp * 0.35), y: sy - (40 + amp * 0.2) },
          { x: sx + side * (155 + amp * 0.4), y: sy + 95 + amp * 0.25 },
          { x: sx + side * (90 + amp * 0.22), y: sy + 165 + amp * 0.18 }, q);
      } else {
        const q = smoothstep((t - 0.30) / 0.70);
        const midX = sx + side * (90 + amp * 0.22);
        point = cubicBezier(
          { x: midX, y: sy + 165 + amp * 0.18 },
          { x: midX + side * (80 + amp * 0.25), y: LOGICAL_H * 0.50 },
          { x: tx + side * (45 + amp * 0.28), y: LOGICAL_H * 0.76 },
          { x: tx, y: LOGICAL_H + 92 }, q);
      }
    }

    enemy.prevX = enemy.x;
    enemy.prevY = enemy.y;
    enemy.x = point.x;
    enemy.y = point.y;
    enemy.angle = Math.atan2(enemy.y - enemy.prevY, enemy.x - enemy.prevX) - Math.PI / 2;

    if (enemy.attackPattern === 'kamikaze') {
      if (t >= 0.82) {
        selfDestructKamikaze(enemy);
        return;
      }
      if (Math.random() < dt * 34) spawnTrail(enemy.x, enemy.y + 13, ENEMY_BULLET_COLORS.kamikaze, 1);
      return;
    }

    if (!enemy.suppressDiveFire && !enemy.diveShot1 && t > enemy.attackShot1At) {
      enemy.diveShot1 = true;
      const tacticSpread = enemy.teamTactic === 'void-weave' ? -enemy.diveSide * 34
        : enemy.teamTactic === 'needle-trap' && enemy.teamRole === 'sniper' ? enemy.diveSide * 10
        : (Math.random() - 0.5) * 20;
      fireEnemyBullet(enemy, tacticSpread);
    }
    const aggressiveDiver = enemy.type === 'teal' || enemy.type === 'white' || enemy.type === 'purple';
    if (!enemy.suppressDiveFire && !enemy.diveShot2 && t > enemy.attackShot2At) {
      // Roll once per dive. The old check re-rolled every frame until it passed,
      // so the "chance" was effectively 100%.
      enemy.diveShot2 = true;
      const secondShot = level >= TUNING.secondDiveShotMinLevel
        && (aggressiveDiver || Math.random() < Math.min(0.74, 0.20 + level * 0.035));
      if (secondShot) fireEnemyBullet(enemy, enemy.diveSide * (14 + Math.random() * 28));
    }

    if (Math.random() < dt * 24) spawnTrail(enemy.x, enemy.y + 13, enemyTrailColor(enemy.type), 1);
    if (t >= 1 || enemy.y > LOGICAL_H + 88) startReturn(enemy);
  }

  function updateReturning(enemy, dt) {
    enemy.returnTime += dt;
    const t = clamp(enemy.returnTime / enemy.returnDuration, 0, 1);
    const target = formationTarget(enemy);
    const p0 = { x: enemy.returnStartX, y: enemy.returnStartY };
    const p1 = { x: enemy.returnStartX + enemy.side * 105, y: 35 };
    const p2 = { x: target.x - enemy.side * 85, y: target.y + 75 };
    const p3 = target;
    const point = cubicBezier(p0, p1, p2, p3, smoothstep(t));

    enemy.prevX = enemy.x;
    enemy.prevY = enemy.y;
    enemy.x = point.x;
    enemy.y = point.y;
    enemy.angle = Math.atan2(enemy.y - enemy.prevY, enemy.x - enemy.prevX) - Math.PI / 2;

    if (t >= 1) {
      enemy.state = 'formation';
      enemy.x = target.x;
      enemy.y = target.y;
      enemy.angle = 0;
    }
  }

  function updateEnemies(dt) {
    formationPhase += dt * (0.68 + Math.min(0.34, level * 0.014));
    pressureRecoveryTimer = Math.max(0, pressureRecoveryTimer - dt);
    teamAttackCooldown = Math.max(0, teamAttackCooldown - dt);

    // During the gap between waves the enemy array is intentionally empty.
    // Never arm ENGAGE or attack timers until the next formation actually exists.
    if (enemies.length === 0) {
      formationReadyTimer = 0;
      if (!boss) combatReady = false;
      return;
    }

    const formationCount = enemies.filter(e => e.state === 'formation' || e.state === 'queued').length;
    const enteringCount = enemies.filter(e => e.state === 'entering').length;
    const activeAttackers = enemies.filter(e => ['queued', 'diving', 'returning'].includes(e.state)).length;

    if (combatReady && forwardAssaultPlanned && !forwardAssaultUsed && !forwardAssaultActive && forwardAssaultCountdown <= 0 && pressureRecoveryTimer <= 0 && teamAttackCooldown <= 0) {
      forwardAssaultTimer -= dt;
      if (forwardAssaultTimer <= 0 && activeAttackers === 0) startForwardAssaultCountdown();
    }

    if (forwardAssaultCountdown > 0) {
      forwardAssaultCountdown = Math.max(0, forwardAssaultCountdown - dt);
      const shown = Math.max(1, Math.ceil(forwardAssaultCountdown));
      if (shown !== forwardAssaultCountdownShown && forwardAssaultCountdown > 0) {
        forwardAssaultCountdownShown = shown;
        showMessage(`FORWARD ASSAULT\n${shown}`, 0);
      }
      if (forwardAssaultCountdown <= 0) launchForwardAssault();
    }

    if (forwardAssaultActive) {
      const assaultStillMoving = enemies.some(e => e.teamTactic === 'forward-assault' && ['queued', 'diving', 'returning'].includes(e.state));
      const assaultQueued = pendingAttackQueue.some(item => item.options?.tactic === 'forward-assault');
      if (!assaultStillMoving && !assaultQueued) {
        forwardAssaultActive = false;
        hideMessage();
        diveTimer = Math.max(diveTimer, 1.25);
        enemyShotTimer = Math.max(enemyShotTimer, 0.85);
        startRecoveryWindow(2.8, 'forward-assault');
        console.info(`[GAME] forward-assault-complete level=${level} wave=${currentWave}/${totalWaves}`);
      }
    }

    if (enteringCount === 0) {
      formationMotionTimer -= dt;
      if (formationMotionTimer <= 0) chooseFormationMotion();

      if (!combatReady) {
        formationReadyTimer += dt;
        if (formationReadyTimer >= 0.55) {
          combatReady = true;
          diveTimer = Math.max(diveTimer, 0.75);
          enemyShotTimer = Math.max(enemyShotTimer, 0.70);
          showMessage('ENGAGE', 0.42);
          console.info(`[GAME] combat-ready level=${level} wave=${currentWave}/${totalWaves}`);
        }
      } else if (!forwardAssaultActive && forwardAssaultCountdown <= 0) {
        diveTimer -= dt;
        if (diveTimer <= 0 && formationCount > 0) {
          scheduleAttackBurst();
          // Wide timing variance prevents a fixed attack rhythm.
          const pressure = campaignPressureTarget();
          const recoveryBonus = pressureRecoveryTimer > 0 ? 0.65 : 0;
          diveTimer = 1.05 + recoveryBonus + Math.random() * (1.05 - pressure * 0.34);
        }
      }
    } else {
      formationReadyTimer = 0;
    }

    if (combatReady) updateAttackQueue(dt);

    if (combatReady && !forwardAssaultActive && forwardAssaultCountdown <= 0) enemyShotTimer -= dt;
    if (combatReady && !forwardAssaultActive && forwardAssaultCountdown <= 0 && enemyShotTimer <= 0 && enemies.length > 0) {
      const shooters = enemies.filter(e => e.state === 'formation' && e.y < LOGICAL_H * 0.58 && e.type !== 'kamikaze');
      if (shooters.length) {
        const pressure = campaignPressureTarget();
        const shotCount = 1 + ((!pressureRecoveryTimer && level >= 12 && Math.random() < 0.24 + pressure * 0.12) ? 1 : 0) + ((!pressureRecoveryTimer && level >= 25 && Math.random() < 0.08) ? 1 : 0);
        const used = new Set();
        for (let i = 0; i < shotCount; i++) {
          const available = shooters.filter(e => !used.has(e));
          if (!available.length) break;
          const shooter = available[Math.floor(Math.random() * available.length)];
          used.add(shooter);
          fireEnemyBullet(shooter, (Math.random() - 0.5) * (18 + i * 20));
        }
      }
      const ramp = clamp((level - 1) / 29, 0, 1);
      const thinned = clamp(enemies.length / 20, 0.5, 1); // fewer ships -> slower fire
      const interval = lerp(TUNING.formationFireSlow, TUNING.formationFireFast, ramp)
        + (pressureRecoveryTimer > 0 ? 0.55 : 0)
        + Math.random() * TUNING.formationFireJitter;
      enemyShotTimer = interval / thinned;
    }

    for (const enemy of [...enemies]) {
      enemy.wing += dt * (enemy.state === 'diving' ? 16 : 8);
      enemy.glow += dt * 3;
      if (enemy.flash > 0) enemy.flash = Math.max(0, enemy.flash - dt);

      if (enemy.state === 'entering') {
        updateEntering(enemy, dt);
      } else if (enemy.state === 'formation' || enemy.state === 'queued') {
        const target = formationTarget(enemy);
        enemy.prevX = enemy.x;
        enemy.prevY = enemy.y;
        enemy.x += (target.x - enemy.x) * Math.min(1, dt * 7.5);
        enemy.y += (target.y - enemy.y) * Math.min(1, dt * 7.5);
        enemy.angle += (0 - enemy.angle) * Math.min(1, dt * 8.5);
      } else if (enemy.state === 'diving') {
        updateDiving(enemy, dt);
      } else if (enemy.state === 'returning') {
        updateReturning(enemy, dt);
      }

      if (
        player.state === 'alive' &&
        player.invulnerable <= 0 &&
        enemy.y > LOGICAL_H * 0.48 &&
        hitbox(player, enemy, 14, 10)
      ) {
        enemy.hp = 0;
        damagePlayer('diving-enemy');
        if (gameOver) {
          const idx = enemies.indexOf(enemy);
          if (idx !== -1) enemies.splice(idx, 1);
          spawnExplosion(enemy.x, enemy.y, 14, 0.85, 'enemy');
        } else {
          killEnemy(enemy);
        }
        break;
      }
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      // Safe without copying: the loop breaks immediately after any kill.
      for (const enemy of enemies) {
        if (bulletHitsRect(bullet, enemy, 5)) {
          bullets.splice(i, 1);
          enemy.hp -= bullet.damage || bulletDamage();
          enemy.flash = 0.12;
          runStats.hits++;
          spawnExplosion(bullet.x, bullet.y, 6, 0.38);
          if (enemy.hp <= 0) killEnemy(enemy);
          else beep(195, 0.035, 'square', 0.018, 128);
          break;
        }
      }
    }
  }


  function updatePowerups(dt) {
    for (let i = powerups.length - 1; i >= 0; i--) {
      const p = powerups[i];
      p.y += p.vy * dt;
      p.spin += dt * 3.2;
      p.bob += dt * 5;
      p.x += Math.sin(p.bob) * 18 * dt;
      if (p.y > LOGICAL_H + 30) {
        powerups.splice(i, 1);
        continue;
      }
      if (player.state === 'alive' && hitbox(player, p, 14, 2)) {
        powerups.splice(i, 1);
        let surplus = 0;
        const scoreBonus = () => { surplus = TUNING.fullHealthBonus; showPickup('SCORE BONUS', 2.2); };
        if (p.kind === 'rapid') {
          player.rapidTimer = Math.max(player.rapidTimer, boss ? TUNING.twinFireBossSeconds : TUNING.twinFireSeconds);
          showPickup('TWIN RAPID FIRE', 2.2);
        } else if (p.kind === 'shield') {
          if (player.maxShield > 0 && player.shield < player.maxShield) { player.shield++; showPickup('SHIELD +1', 2.2); }
          else scoreBonus();
        } else if (p.kind === 'repair') {
          if (player.hull < player.maxHull) { player.hull++; showPickup('HULL REPAIRED', 2.2); }
          else scoreBonus();
        } else if (p.kind === 'life') {
          if (lives < 5) { lives++; showPickup('+1 LIFE', 2.2); }
          else scoreBonus();
        } else if (player.maxShield > 0 && player.shield < player.maxShield) {
          player.shield++;
          showPickup('SHIELD +1', 2.2);
        } else if (player.hull < player.maxHull) {
          player.hull++;
          showPickup('HULL REPAIRED', 2.2);
        } else if (lives < 5 && Math.random() < 0.22) {
          lives++;
          showPickup('+1 LIFE', 2.2);
        } else if (Math.random() < 0.2) {
          // Only a minority of surplus pickups roll into a short Twin Fire.
          player.rapidTimer = Math.max(player.rapidTimer, TUNING.twinFireSeconds - 2);
          showPickup('TWIN RAPID FIRE', 2.2);
        } else {
          scoreBonus();
        }
        const bonus = (p.source && p.source.startsWith('boss') ? 100 : 250) + surplus;
        addScore(bonus);
        // Show what was collected right where it was collected, not just "+250".
        const label = pickupNotice.textContent || 'POWER-UP';
        scorePops.push({ x: p.x, y: p.y - 6, text: label, sub: `+${bonus}`, color: PICKUP_COLORS[label] || '#a7f3d0', big: true, life: 1.6, maxLife: 1.6 });
        updateHud();
        beep(650, 0.18, 'sine', 0.045, 1250);
      }
    }
  }

  function updateParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vx *= Math.pow(0.984, dt * 60);
      p.vy *= Math.pow(0.984, dt * 60);
    }
  }

  function updateScorePops(dt) {
    for (let i = scorePops.length - 1; i >= 0; i--) {
      const pop = scorePops[i];
      pop.life -= dt;
      pop.y -= 35 * dt;
      if (pop.life <= 0) scorePops.splice(i, 1);
    }
  }

  function update(dt) {
    // A real pause freezes all simulation state, including stars and timers.
    if (paused) return;

    updateStars(dt);
    tickDebugPanel(dt);
    updateParticles(dt);
    updateBossDeath(dt);
    updateViewer(dt);
    updateScorePops(dt);

    // Visual impact state must decay even after a run has ended. This prevents
    // the final hit from leaving the canvas permanently shaking at GAME OVER.
    screenShake = Math.max(0, screenShake - dt);
    if (screenShake <= 0) shakeStrength = 0;

    if (!running || gameOver || upgradePending || campaignComplete) return;

    elapsed += dt;

    if (contactIntroTimer > 0) {
      contactIntroTimer = Math.max(0, contactIntroTimer - dt);
      contactIntroCountdown.textContent = contactIntroTimer > 0.8 ? `DEPLOYMENT IN ${Math.max(1, Math.ceil(contactIntroTimer))} • SPACE TO SKIP` : 'DEPLOY';
      if (contactIntroTimer <= 0) {
        contactIntroOverlay.classList.add('hidden');
        if (pendingEncounterStart) beginEncounterGameplay();
      }
      return;
    }

    if (bossIntroTimer > 0) {
      bossIntroTimer = Math.max(0, bossIntroTimer - dt);
      bossIntroCountdown.textContent = bossIntroTimer > 0.8 ? `BATTLE BEGINS IN ${Math.max(1, Math.ceil(bossIntroTimer))} • SPACE TO SKIP` : 'PREPARE';
      if (bossIntroTimer <= 0) {
        bossIntroOverlay.classList.add('hidden');
        lastTime = performance.now();
      }
      return;
    }

    updatePlayer(dt);
    updateBullets(dt);
    if (gameOver) return;
    if (boss) {
      updateBoss(dt);
      if (enemies.length > 0) updateEnemies(dt);
    } else updateEnemies(dt);
    if (gameOver) return;
    updatePowerups(dt);

    if (waveTransitionTimer > 0) {
      waveTransitionTimer -= dt;
      if (waveTransitionTimer <= 0) {
        waveTransitionTimer = 0;
        const action = pendingWaveAction;
        pendingWaveAction = null;
        if (action === 'next-wave') {
          currentWave++;
          player.invulnerable = Math.max(player.invulnerable, 0.8);
          spawnFormation();
        } else if (action === 'boss') {
          boss = null;
          spawnBossEncounter();
          updateHud();
        }
      }
    }

    if (nextLevelTimer > 0) {
      nextLevelTimer -= dt;
      if (nextLevelTimer <= 0) {
        nextLevelTimer = 0;
        encounterClearQueued = false;
        beginUpgradeChoice();
      }
    }
  }

  // Static art for each sector is painted once to an offscreen canvas.
  const backdropCache = new Map();

  function paintBackdrop(g, sector) {
    const W = LOGICAL_W, H = LOGICAL_H;
    const fill = (style) => { g.fillStyle = style; g.fillRect(0, 0, W, H); };
    const linear = (stops) => { const gr = g.createLinearGradient(0, 0, 0, H); stops.forEach(([o, c]) => gr.addColorStop(o, c)); return gr; };
    const radial = (x, y, r0, r1, stops) => { const gr = g.createRadialGradient(x, y, r0, x, y, r1); stops.forEach(([o, c]) => gr.addColorStop(o, c)); return gr; };

    if (sector === 0) { // THE OUTER GATE — the ruined Bastion ring the Warden holds open
      fill(linear([[0, '#030616'], [0.5, '#070b20'], [1, '#02040c']]));
      fill(radial(170, 150, 20, 430, [[0, 'rgba(56,189,248,.16)'], [0.5, 'rgba(59,130,246,.06)'], [1, 'rgba(2,6,23,0)']]));
      fill(radial(820, 170, 60, 420, [[0, 'rgba(249,115,22,.10)'], [1, 'rgba(2,6,23,0)']]));
      const cx = 820, cy = 170, r = 300;
      g.lineCap = 'butt';
      for (let i = 0; i < 28; i++) {
        if (i === 5 || i === 6 || i === 17) continue; // blown-out segments
        const a0 = (i / 28) * TAU + 0.02, a1 = ((i + 1) / 28) * TAU - 0.02;
        g.strokeStyle = i % 2 ? 'rgba(71,85,105,.42)' : 'rgba(100,116,139,.36)';
        g.lineWidth = 26;
        g.beginPath(); g.arc(cx, cy, r, a0, a1); g.stroke();
        g.strokeStyle = 'rgba(15,23,42,.8)';
        g.lineWidth = 6;
        g.beginPath(); g.arc(cx, cy, r - 6, a0, a1); g.stroke();
      }
      g.strokeStyle = 'rgba(148,163,184,.12)';
      g.lineWidth = 2;
      g.beginPath(); g.arc(cx, cy, r + 22, 0, TAU); g.stroke();
    } else if (sector === 1) { // THE DRIFT LANES — colony shipping lanes, now hunting grounds
      fill(linear([[0, '#07051a'], [0.55, '#0e0826'], [1, '#04030d']]));
      fill(radial(540, 320, 40, 560, [[0, 'rgba(139,92,246,.16)'], [0.6, 'rgba(76,29,149,.07)'], [1, 'rgba(2,6,23,0)']]));
      fill(radial(120, 700, 20, 380, [[0, 'rgba(236,72,153,.07)'], [1, 'rgba(2,6,23,0)']]));
      g.strokeStyle = 'rgba(196,181,253,.05)';
      g.lineWidth = 34;
      for (const x of [220, 540, 860]) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    } else if (sector === 2) { // THE CONVOY GRAVEYARD — the evacuation fleet's wreckage
      fill(linear([[0, '#03080c'], [0.5, '#071217'], [1, '#020507']]));
      fill(radial(300, 260, 30, 520, [[0, 'rgba(34,211,238,.09)'], [1, 'rgba(2,6,23,0)']]));
      fill(radial(860, 560, 30, 420, [[0, 'rgba(148,163,184,.07)'], [1, 'rgba(2,6,23,0)']]));
      // A broken freighter hull in the far distance.
      g.save();
      g.translate(860, 250); g.rotate(-0.35);
      g.fillStyle = 'rgba(30,41,59,.75)';
      g.beginPath();
      g.moveTo(-260, -34); g.lineTo(40, -44); g.lineTo(70, -20); g.lineTo(95, -52); g.lineTo(120, -14);
      g.lineTo(130, 30); g.lineTo(60, 38); g.lineTo(30, 18); g.lineTo(-240, 40); g.closePath(); g.fill();
      g.strokeStyle = 'rgba(148,163,184,.18)'; g.lineWidth = 2; g.stroke();
      g.fillStyle = 'rgba(15,23,42,.9)';
      for (let i = 0; i < 6; i++) g.fillRect(-220 + i * 42, -26, 30, 50);
      g.fillStyle = 'rgba(103,232,249,.35)';
      for (const [wx, wy] of [[-200, -6], [-120, 4], [-40, -10], [10, 6]]) g.fillRect(wx, wy, 4, 3);
      g.restore();
    } else if (sector === 3) { // THE BURNING REACH — the star the Solar Regent is drinking
      fill(linear([[0, '#1a0708'], [0.45, '#12050a'], [1, '#050206']]));
      fill(radial(150, -110, 40, 640, [[0, 'rgba(255,251,235,.95)'], [0.12, 'rgba(253,224,71,.8)'], [0.3, 'rgba(249,115,22,.45)'], [0.6, 'rgba(185,28,28,.16)'], [1, 'rgba(20,2,4,0)']]));
      fill(radial(980, 720, 20, 380, [[0, 'rgba(239,68,68,.08)'], [1, 'rgba(20,2,4,0)']]));
      g.strokeStyle = 'rgba(253,186,116,.10)';
      g.lineWidth = 3;
      for (let i = 0; i < 5; i++) { // solar prominences
        const a = 0.15 + i * 0.28;
        g.beginPath();
        g.arc(150 + Math.cos(a) * 250, -110 + Math.sin(a) * 250, 60 + i * 12, Math.PI * 0.9, Math.PI * 1.9);
        g.stroke();
      }
    } else if (sector === 4) { // THE SILENT ORBIT — the dark observatory world
      fill(linear([[0, '#01040a'], [0.6, '#030a0c'], [1, '#010304']]));
      fill(radial(760, 160, 10, 420, [[0, 'rgba(16,185,129,.06)'], [1, 'rgba(1,4,10,0)']]));
      // Planet limb along the bottom with a thin atmosphere line.
      g.fillStyle = '#020806';
      g.beginPath(); g.arc(540, 1640, 960, 0, TAU); g.fill();
      g.strokeStyle = 'rgba(52,211,153,.30)'; g.lineWidth = 3;
      g.beginPath(); g.arc(540, 1640, 962, Math.PI * 1.2, Math.PI * 1.8); g.stroke();
      g.strokeStyle = 'rgba(52,211,153,.08)'; g.lineWidth = 14;
      g.beginPath(); g.arc(540, 1640, 972, Math.PI * 1.2, Math.PI * 1.8); g.stroke();
      // Observatory dishes on the horizon.
      g.fillStyle = '#030a08';
      for (const [dx, sz] of [[250, 18], [300, 12], [760, 22], [820, 14]]) {
        const dy = 1640 - Math.sqrt(960 * 960 - (dx - 540) ** 2);
        g.fillRect(dx - 1.5, dy - sz, 3, sz);
        g.beginPath(); g.arc(dx, dy - sz, sz * 0.7, Math.PI * 1.05, Math.PI * 1.95); g.fill();
      }
    } else { // THE HIVE HEART (5) / THE REGROWN HIVE (6) — living membrane
      const regrown = sector === 6;
      fill(linear(regrown ? [[0, '#0d0414'], [0.5, '#16061c'], [1, '#050208']] : [[0, '#16030f'], [0.5, '#1f0616'], [1, '#080207']]));
      const tint = regrown ? '168,85,247' : '236,72,153';
      for (const [x, y, r] of [[160, 180, 380], [900, 120, 320], [780, 640, 420], [200, 720, 300]]) {
        fill(radial(x, y, 10, r, [[0, `rgba(${tint},.14)`], [0.6, `rgba(${tint},.04)`], [1, 'rgba(8,2,7,0)']]));
      }
      g.strokeStyle = regrown ? 'rgba(126,34,206,.20)' : 'rgba(157,23,77,.24)';
      g.lineCap = 'round';
      const veins = [[[0, 90], [260, 160], [420, 60]], [[1080, 260], [820, 300], [700, 180]], [[0, 520], [200, 470], [330, 600]], [[1080, 700], [900, 610], [760, 760]], [[480, 0], [520, 120], [610, 150]]];
      for (const [a, c, b] of veins) {
        for (const [w, alpha] of [[9, 0.5], [3, 1]]) {
          g.globalAlpha = alpha; g.lineWidth = w;
          g.beginPath(); g.moveTo(a[0], a[1]); g.quadraticCurveTo(c[0], c[1], b[0], b[1]); g.stroke();
        }
      }
      g.globalAlpha = 1;
    }
  }

  function backdropCanvas(sector) {
    const key = `${sector}|${renderCache.dpr}`;
    let c = backdropCache.get(key);
    if (!c) {
      c = document.createElement('canvas');
      c.width = Math.round(LOGICAL_W * renderCache.dpr);
      c.height = Math.round(LOGICAL_H * renderCache.dpr);
      const g = c.getContext('2d');
      g.scale(renderCache.dpr, renderCache.dpr);
      paintBackdrop(g, sector);
      backdropCache.set(key, c);
    }
    return c;
  }

  // Lightweight animated layer drawn over the cached art each frame.
  function drawSectorAmbient(sector) {
    const t = bgTime;
    ctx.save();
    if (sector === 0) {
      // Warning lights blinking around the Bastion ring.
      for (let i = 0; i < 28; i += 3) {
        const a = (i / 28) * TAU;
        const on = Math.sin(t * 2.2 + i) > 0.55;
        ctx.fillStyle = on ? 'rgba(251,146,60,.85)' : 'rgba(251,146,60,.18)';
        ctx.fillRect(820 + Math.cos(a) * 300 - 2, 170 + Math.sin(a) * 300 - 2, 4, 4);
      }
    } else if (sector === 1) {
      // Lane beacons pulse down each lane in sequence.
      for (const [li, x] of [[0, 220], [1, 540], [2, 860]]) {
        for (let k = 0; k < 7; k++) {
          const y = ((k * 130 + t * 90 + li * 40) % (LOGICAL_H + 130)) - 65;
          const pulse = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t * 4 - k * 0.9 + li));
          ctx.fillStyle = `rgba(196,181,253,${pulse})`;
          ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x + 4, y); ctx.lineTo(x, y + 5); ctx.lineTo(x - 4, y); ctx.fill();
          ctx.fillStyle = `rgba(196,181,253,${pulse * 0.25})`;
          ctx.fillRect(x - 17, y - 0.5, 34, 1);
        }
      }
    } else if (sector === 2) {
      for (const it of ambient.items) {
        ctx.save();
        ctx.translate(it.x, it.y); ctx.rotate(it.rot);
        const sz = it.size;
        ctx.fillStyle = 'rgba(30,41,59,.85)';
        ctx.strokeStyle = 'rgba(148,163,184,.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        if (it.shape === 0) { ctx.moveTo(-sz, -sz * 0.4); ctx.lineTo(sz * 0.8, -sz * 0.5); ctx.lineTo(sz, sz * 0.3); ctx.lineTo(-sz * 0.6, sz * 0.5); }
        else if (it.shape === 1) { ctx.moveTo(-sz * 0.5, -sz); ctx.lineTo(sz * 0.6, -sz * 0.7); ctx.lineTo(sz * 0.4, sz); ctx.lineTo(-sz * 0.7, sz * 0.6); }
        else { ctx.moveTo(0, -sz); ctx.lineTo(sz, sz * 0.2); ctx.lineTo(sz * 0.2, sz * 0.4); ctx.lineTo(-sz * 0.8, sz * 0.9); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
        if (it.lit && Math.sin(t * 3 + it.x) > 0) { ctx.fillStyle = 'rgba(103,232,249,.7)'; ctx.fillRect(-2, -2, 3, 3); }
        ctx.restore();
      }
    } else if (sector === 3) {
      // The star breathes, and embers stream off it.
      ctx.globalAlpha = 0.10 + 0.06 * Math.sin(t * 1.3);
      ctx.fillStyle = cachedSolarGlow();
      ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H * 0.7);
      ctx.globalAlpha = 1;
      for (const it of ambient.items) {
        ctx.fillStyle = `rgba(253,186,116,${0.35 + 0.35 * Math.sin(it.phase)})`;
        ctx.fillRect(it.x, it.y, it.size, it.size);
      }
    } else if (sector === 4) {
      // A slow aurora over the dark world.
      for (let band = 0; band < 3; band++) {
        ctx.strokeStyle = `rgba(52,211,153,${0.05 + band * 0.015})`;
        ctx.lineWidth = 18 - band * 5;
        ctx.beginPath();
        for (let x = 0; x <= LOGICAL_W; x += 40) {
          const y = 150 + band * 26 + Math.sin(x * 0.006 + t * 0.35 + band) * 34 + Math.sin(x * 0.017 - t * 0.2) * 10;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      // The observatory's one remaining light.
      const on = Math.sin(t * 0.9) > 0.3;
      ctx.fillStyle = on ? 'rgba(110,231,183,.8)' : 'rgba(110,231,183,.15)';
      ctx.fillRect(758, 1640 - Math.sqrt(960 * 960 - 218 * 218) - 26, 3, 3);
    } else {
      // Heartbeat pulse (double beat) and drifting spores.
      const beat = (t % 1.25);
      const pulse = Math.max(0, Math.sin(Math.min(1, beat / 0.18) * Math.PI)) + 0.6 * Math.max(0, Math.sin(Math.min(1, Math.max(0, beat - 0.26) / 0.18) * Math.PI));
      ctx.globalAlpha = 0.07 * pulse;
      ctx.fillStyle = sector === 6 ? '#a855f7' : '#ec4899';
      ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);
      ctx.globalAlpha = 1;
      for (const it of ambient.items) {
        ctx.fillStyle = sector === 6 ? 'rgba(216,180,254,.28)' : 'rgba(249,168,212,.28)';
        ctx.beginPath();
        ctx.arc(it.x + Math.sin(it.phase) * it.sway, it.y, it.size, 0, TAU);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  // Deterministic random for sprite painting, so a planet looks the same every frame.
  function seededRandom(seed) {
    let t = seed * 9301 + 49297;
    return () => { t = (t * 9301 + 49297) % 233280; return t / 233280; };
  }

  const PLANET_PALETTES = {
    colony:    { light: '#7dd3fc', mid: '#1d4ed8', dark: '#0b1a3a', atmo: 'rgba(125,211,252,.35)', accent: '#4ade80' },
    rocky:     { light: '#cbd5e1', mid: '#64748b', dark: '#1e293b', atmo: 'rgba(203,213,225,.18)', accent: '#94a3b8' },
    ice:       { light: '#ecfeff', mid: '#67e8f9', dark: '#164e63', atmo: 'rgba(167,243,208,.30)', accent: '#ffffff' },
    gas:       { light: '#fde68a', mid: '#b45309', dark: '#3b1604', atmo: 'rgba(253,230,138,.22)', accent: '#fcd34d' },
    gasRinged: { light: '#e9d5ff', mid: '#7c3aed', dark: '#2e1065', atmo: 'rgba(233,213,255,.25)', accent: '#f0abfc' },
    shattered: { light: '#a5b4fc', mid: '#475569', dark: '#0f172a', atmo: 'rgba(165,180,252,.15)', accent: '#67e8f9' },
    lava:      { light: '#fb923c', mid: '#7c2d12', dark: '#1c0a05', atmo: 'rgba(251,146,60,.35)', accent: '#fde047' },
    hive:      { light: '#f9a8d4', mid: '#9d174d', dark: '#2a0615', atmo: 'rgba(249,168,212,.35)', accent: '#f472b6' },
    moon:      { light: '#e2e8f0', mid: '#94a3b8', dark: '#1e293b', atmo: 'rgba(0,0,0,0)', accent: '#cbd5e1' }
  };

  function paintPlanet(c) {
    const pal = PLANET_PALETTES[c.kind] || PLANET_PALETTES.rocky;
    const R = seededRandom(c.seed);
    const r = c.r;
    const ringed = c.kind === 'gasRinged';
    const pad = ringed ? r * 1.1 : r * 0.35;
    const size = Math.ceil((r + pad) * 2);
    const off = document.createElement('canvas');
    const dpr = renderCache.dpr;
    off.width = Math.ceil(size * dpr); off.height = Math.ceil(size * dpr);
    const g = off.getContext('2d');
    g.scale(dpr, dpr);
    const cx = size / 2, cy = size / 2;
    const tilt = -0.35 + R() * 0.2;
    const ring = (from, to) => {
      g.save();
      g.strokeStyle = 'rgba(233,213,255,.38)'; g.lineWidth = r * 0.16;
      g.beginPath(); g.ellipse(cx, cy, r * 1.85, r * 0.42, tilt, from, to); g.stroke();
      g.strokeStyle = 'rgba(192,132,252,.28)'; g.lineWidth = r * 0.06;
      g.beginPath(); g.ellipse(cx, cy, r * 2.08, r * 0.5, tilt, from, to); g.stroke();
      g.restore();
    };
    if (ringed) ring(Math.PI, TAU); // back half of the ring

    // Atmosphere glow.
    if (c.kind !== 'moon') {
      const atmo = g.createRadialGradient(cx, cy, r * 0.9, cx, cy, r * 1.3);
      atmo.addColorStop(0, pal.atmo); atmo.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = atmo; g.beginPath(); g.arc(cx, cy, r * 1.3, 0, TAU); g.fill();
    }

    g.save();
    g.beginPath(); g.arc(cx, cy, r, 0, TAU); g.clip();
    const body = g.createRadialGradient(cx - r * 0.4, cy - r * 0.45, r * 0.1, cx, cy, r * 1.05);
    body.addColorStop(0, pal.light); body.addColorStop(0.45, pal.mid); body.addColorStop(1, pal.dark);
    g.fillStyle = body; g.fillRect(cx - r, cy - r, r * 2, r * 2);

    if (c.kind === 'gas' || c.kind === 'gasRinged') {
      for (let i = 0; i < 9; i++) {
        g.fillStyle = i % 2 ? 'rgba(255,255,255,.10)' : 'rgba(0,0,0,.14)';
        const y = cy - r + (i + R() * 0.6) * (r * 2 / 9);
        g.beginPath(); g.ellipse(cx, y, r * 1.2, r * (0.05 + R() * 0.06), tilt * 0.3, 0, TAU); g.fill();
      }
      if (c.kind === 'gas') { g.fillStyle = 'rgba(127,29,29,.35)'; g.beginPath(); g.ellipse(cx + r * 0.3, cy + r * 0.25, r * 0.22, r * 0.12, 0, 0, TAU); g.fill(); }
    } else if (c.kind === 'colony') {
      for (let i = 0; i < 7; i++) { // continents
        g.fillStyle = 'rgba(74,222,128,.22)';
        g.beginPath(); g.ellipse(cx + (R() - 0.5) * r * 1.4, cy + (R() - 0.5) * r * 1.4, r * (0.15 + R() * 0.25), r * (0.08 + R() * 0.15), R() * 3, 0, TAU); g.fill();
      }
    } else if (c.kind === 'lava') {
      g.strokeStyle = 'rgba(253,224,71,.55)'; g.lineWidth = 1.6;
      for (let i = 0; i < 9; i++) {
        let x = cx + (R() - 0.5) * r * 1.6, y = cy + (R() - 0.5) * r * 1.6;
        g.beginPath(); g.moveTo(x, y);
        for (let k = 0; k < 4; k++) { x += (R() - 0.5) * r * 0.5; y += (R() - 0.5) * r * 0.5; g.lineTo(x, y); }
        g.stroke();
      }
    } else if (c.kind === 'hive') {
      g.strokeStyle = 'rgba(244,114,182,.45)'; g.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        g.beginPath();
        g.moveTo(cx + (R() - 0.5) * r * 2, cy + (R() - 0.5) * r * 2);
        g.quadraticCurveTo(cx + (R() - 0.5) * r, cy + (R() - 0.5) * r, cx + (R() - 0.5) * r * 2, cy + (R() - 0.5) * r * 2);
        g.stroke();
      }
      for (let i = 0; i < 10; i++) { g.fillStyle = 'rgba(253,242,248,.55)'; g.beginPath(); g.arc(cx + (R() - 0.5) * r * 1.6, cy + (R() - 0.5) * r * 1.6, 1 + R() * 2.2, 0, TAU); g.fill(); }
    } else if (c.kind === 'ice') {
      for (let i = 0; i < 6; i++) { g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 1; g.beginPath(); g.moveTo(cx + (R() - 0.5) * r * 2, cy + (R() - 0.5) * r * 2); g.lineTo(cx + (R() - 0.5) * r * 2, cy + (R() - 0.5) * r * 2); g.stroke(); }
      g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(cx, cy - r * 0.92, r * 0.5, r * 0.14, 0, 0, TAU); g.fill();
    }
    if (c.kind === 'rocky' || c.kind === 'moon' || c.kind === 'shattered' || c.kind === 'ice') {
      const craters = c.kind === 'moon' ? 5 : 9;
      for (let i = 0; i < craters; i++) {
        const x = cx + (R() - 0.5) * r * 1.5, y = cy + (R() - 0.5) * r * 1.5, cr = r * (0.06 + R() * 0.12);
        g.fillStyle = 'rgba(0,0,0,.22)'; g.beginPath(); g.arc(x, y, cr, 0, TAU); g.fill();
        g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 1; g.beginPath(); g.arc(x - 0.5, y - 0.5, cr, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
      }
    }
    // Night side.
    const night = g.createLinearGradient(cx - r * 0.3, cy - r * 0.3, cx + r, cy + r);
    night.addColorStop(0, 'rgba(0,0,0,0)'); night.addColorStop(0.55, 'rgba(0,0,0,.45)'); night.addColorStop(1, 'rgba(0,0,0,.85)');
    g.fillStyle = night; g.fillRect(cx - r, cy - r, r * 2, r * 2);
    if (c.kind === 'colony') { // city lights on the night side
      for (let i = 0; i < 16; i++) { g.fillStyle = 'rgba(253,224,71,.7)'; g.fillRect(cx + r * (0.15 + R() * 0.55), cy + r * (0.1 + R() * 0.55), 1.4, 1.4); }
    }
    if (c.kind === 'lava') { // cracks glow through the dark side
      g.globalCompositeOperation = 'lighter'; g.fillStyle = 'rgba(249,115,22,.12)'; g.fillRect(cx - r, cy - r, r * 2, r * 2); g.globalCompositeOperation = 'source-over';
    }
    g.restore();

    if (c.kind === 'shattered') {
      // A chunk of the world is missing, with debris drifting out of the wound.
      g.save();
      g.globalCompositeOperation = 'destination-out';
      g.beginPath();
      g.moveTo(cx + r * 0.1, cy - r * 1.2); g.lineTo(cx + r * 0.35, cy - r * 0.2); g.lineTo(cx + r * 0.05, cy + r * 0.15);
      g.lineTo(cx + r * 0.45, cy + r * 0.6); g.lineTo(cx + r * 1.3, cy + r * 0.4); g.lineTo(cx + r * 1.3, cy - r * 1.2); g.closePath(); g.fill();
      g.restore();
      g.strokeStyle = 'rgba(103,232,249,.55)'; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(cx + r * 0.1, cy - r * 0.99); g.lineTo(cx + r * 0.35, cy - r * 0.2); g.lineTo(cx + r * 0.05, cy + r * 0.15); g.lineTo(cx + r * 0.45, cy + r * 0.6); g.stroke();
      g.fillStyle = '#334155';
      for (let i = 0; i < 7; i++) { g.save(); g.translate(cx + r * (0.6 + R() * 0.6), cy + r * (-0.6 + R() * 0.9)); g.rotate(R() * 3); g.fillRect(-r * 0.07, -r * 0.05, r * (0.08 + R() * 0.1), r * (0.06 + R() * 0.08)); g.restore(); }
    }
    if (ringed) ring(0, Math.PI); // front half of the ring
    return { canvas: off, size };
  }

  function paintGalaxy(c) {
    const R = seededRandom(c.seed);
    const size = Math.ceil(c.r * 2.4);
    const off = document.createElement('canvas');
    const dpr = renderCache.dpr;
    off.width = Math.ceil(size * dpr); off.height = Math.ceil(size * dpr);
    const g = off.getContext('2d');
    g.scale(dpr, dpr);
    const cx = size / 2, cy = size / 2;
    const tints = ['rgba(196,181,253,', 'rgba(147,197,253,', 'rgba(249,168,212,'];
    const tint = tints[c.sector % 3];
    const core = g.createRadialGradient(cx, cy, 0, cx, cy, c.r * 0.35);
    core.addColorStop(0, tint + '.55)'); core.addColorStop(1, tint + '0)');
    g.fillStyle = core; g.fillRect(0, 0, size, size);
    for (let arm = 0; arm < 2; arm++) {
      for (let i = 0; i < 140; i++) {
        const t = i / 140;
        const a = arm * Math.PI + t * 4.2;
        const d = t * c.r;
        const x = cx + Math.cos(a) * d + (R() - 0.5) * 10 * t;
        const y = cy + Math.sin(a) * d * 0.45 + (R() - 0.5) * 6 * t;
        g.fillStyle = tint + (0.35 * (1 - t) + 0.05) + ')';
        g.fillRect(x, y, 1.6, 1.6);
      }
    }
    return { canvas: off, size };
  }

  function drawCelestials() {
    // Far to near: galaxies, planets and moons, asteroids, comets.
    for (const pass of ['galaxy', 'planet', 'asteroid', 'comet']) {
      for (const c of celestials) {
        const kind = c.type === 'moon' ? 'planet' : c.type;
        if (kind !== pass) continue;
        if (c.type === 'galaxy') {
          c.sprite ||= paintGalaxy(c);
          ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(c.rot); ctx.globalAlpha = 0.7;
          ctx.drawImage(c.sprite.canvas, -c.sprite.size / 2, -c.sprite.size / 2, c.sprite.size, c.sprite.size);
          ctx.restore();
        } else if (c.type === 'planet' || c.type === 'moon') {
          c.sprite ||= paintPlanet(c);
          // Moons pass behind their planet on the far half of the orbit.
          if (c.type === 'moon' && Math.sin(c.angle) < 0) ctx.globalAlpha = 0.45;
          else ctx.globalAlpha = 0.82;
          ctx.drawImage(c.sprite.canvas, c.x - c.sprite.size / 2, c.y - c.sprite.size / 2, c.sprite.size, c.sprite.size);
          ctx.globalAlpha = 1;
        } else if (c.type === 'asteroid') {
          ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(c.rot);
          ctx.fillStyle = c.lava ? '#2a1208' : '#3f3a36';
          ctx.strokeStyle = c.lava ? 'rgba(251,146,60,.55)' : 'rgba(168,162,158,.35)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          c.pts.forEach((k, i) => { const a = (i / c.pts.length) * TAU; const px = Math.cos(a) * c.size * k, py = Math.sin(a) * c.size * k; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
          ctx.closePath(); ctx.fill(); ctx.stroke();
          ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.arc(c.size * 0.2, c.size * 0.1, c.size * 0.22, 0, TAU); ctx.fill();
          ctx.restore();
        } else if (c.type === 'comet') {
          const len = Math.hypot(c.vx, c.vy);
          const ux = c.vx / len, uy = c.vy / len;
          const tx = c.x - ux * c.tail, ty = c.y - uy * c.tail;
          const grad = ctx.createLinearGradient(c.x, c.y, tx, ty);
          grad.addColorStop(0, c.color); grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.save();
          ctx.globalAlpha = 0.75;
          ctx.fillStyle = grad;
          const nx = -uy, ny = ux, w = c.size * 2.4;
          ctx.beginPath(); ctx.moveTo(c.x + nx * w, c.y + ny * w); ctx.lineTo(tx, ty); ctx.lineTo(c.x - nx * w, c.y - ny * w); ctx.closePath(); ctx.fill();
          ctx.globalAlpha = 1;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath(); ctx.arc(c.x, c.y, c.size, 0, TAU); ctx.fill();
          ctx.globalAlpha = 0.35; ctx.fillStyle = c.color;
          ctx.beginPath(); ctx.arc(c.x, c.y, c.size * 3, 0, TAU); ctx.fill();
          ctx.restore();
        }
      }
    }
  }

  let solarGlowGradient = null;
  function cachedSolarGlow() {
    if (!solarGlowGradient) {
      solarGlowGradient = ctx.createRadialGradient(150, -110, 40, 150, -110, 700);
      solarGlowGradient.addColorStop(0, 'rgba(253,224,71,1)');
      solarGlowGradient.addColorStop(0.4, 'rgba(249,115,22,.5)');
      solarGlowGradient.addColorStop(1, 'rgba(249,115,22,0)');
    }
    return solarGlowGradient;
  }

  function drawBackground() {
    ctx.drawImage(backdropCanvas(bgSector), 0, 0, LOGICAL_W, LOGICAL_H);
    if (bgFade > 0 && bgPrevSector >= 0) {
      ctx.globalAlpha = bgFade;
      ctx.drawImage(backdropCanvas(bgPrevSector), 0, 0, LOGICAL_W, LOGICAL_H);
      ctx.globalAlpha = 1;
    }
    drawSectorAmbient(bgSector);

    const starColors = SECTOR_STAR_COLORS[bgSector];
    const starAlpha = SECTOR_STAR_ALPHA[bgSector];
    for (const star of stars) {
      const twinkle = 0.78 + Math.sin(star.twinkle) * 0.22;
      ctx.globalAlpha = clamp(star.alpha * twinkle * starAlpha, 0.06, 1);
      ctx.fillStyle = star.layer === 2 ? starColors[1] : starColors[0];
      if (star.layer === 2) {
        ctx.fillRect(star.x, star.y, star.size, star.size * 2.2);
      } else {
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
    }
    ctx.globalAlpha = 1;
    drawCelestials();
  }

  function drawPlayer() {
    if (!sprites.player || player.state === 'exploding') return;
    if (player.invulnerable > 0 && Math.floor(player.invulnerable * 12) % 2 === 0) return;

    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.bank);

    const engine = ctx.createRadialGradient(0, 25, 1, 0, 25, 29);
    engine.addColorStop(0, 'rgba(255,255,255,.92)');
    engine.addColorStop(0.28, 'rgba(56,189,248,.75)');
    engine.addColorStop(1, 'rgba(56,189,248,0)');
    ctx.fillStyle = engine;
    ctx.beginPath();
    ctx.ellipse(0, 25, 13, 28 + Math.sin(elapsed * 24) * 4, 0, 0, TAU);
    ctx.fill();

    if (player.shield > 0) {
      ctx.save();
      ctx.globalAlpha = 0.34 + Math.sin(elapsed * 7) * 0.06;
      ctx.strokeStyle = '#67e8f9';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#22d3ee';
      ctx.beginPath();
      ctx.arc(0, 0, 39, -Math.PI * 0.9, Math.PI * 0.9);
      ctx.stroke();
      ctx.restore();
    }

    if (player.rapidTimer > 0) {
      ctx.globalAlpha = 0.28 + Math.sin(elapsed * 10) * 0.07;
      ctx.strokeStyle = '#4ade80';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 35, 0, TAU);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    drawGlowSprite(sprites.player, 68, 16, 'rgba(56, 189, 248, .55)');
    ctx.restore();
  }

  function enemyGlowColor(type) {
    return (ENEMY_DEFS[type] && ENEMY_DEFS[type].glow) || ENEMY_DEFS.blue.glow;
  }

  // Sprites are square (64x64 enemies, 96x96 bosses), so draw them square.
  const ENEMY_DRAW_SIZE = 56;
  const BOSS_DRAW_SIZE = 128;

  function drawEnemies() {
    for (const enemy of enemies) {
      const img = sprites[enemy.type];
      if (!img) continue;

      ctx.save();
      ctx.translate(enemy.x, enemy.y);
      ctx.rotate(enemy.angle);

      // Species-specific animation silhouettes. The old version used one
      // horizontal "flap" for every sprite, making even unique art look alike.
      const tick = enemy.wing;
      const active = enemy.state === 'diving' || enemy.state === 'queued';
      let sx = 1, sy = 1, swayX = 0, swayY = 0, tilt = 0, opacity = 1;
      switch (enemy.type) {
        case 'blue':
          swayX = Math.sin(tick * 2.1) * (active ? 1.0 : 2.0);
          tilt = Math.sin(tick * 1.2) * 0.027;
          break;
        case 'red':
          sx = 1 + Math.sin(tick) * (active ? 0.095 : 0.045);
          sy = 1 - Math.sin(tick) * 0.016;
          break;
        case 'gold':
          swayY = Math.sin(tick * 0.22) * 1.2;
          sx = 1 + Math.sin(tick * 0.32) * 0.011;
          break;
        case 'green':
          // The sniper is deliberately steady; no generic wing-flap.
          tilt = active ? Math.sin(tick * 0.5) * 0.01 : 0;
          break;
        case 'purple':
          sx = 1 - Math.sin(tick * 0.73) * (active ? 0.07 : 0.033);
          sy = 1 + Math.sin(tick * 0.73) * 0.022;
          break;
        case 'teal':
          sy = active ? 1.05 + Math.sin(tick * 1.0) * 0.018 : 1;
          swayY = active ? Math.sin(tick * 1.4) * 0.6 : 0;
          break;
        case 'orange':
          tilt = Math.sin(tick * 0.29) * 0.023;
          swayY = Math.sin(tick * 0.31) * 0.85;
          break;
        case 'white':
          opacity = 0.89 + 0.11 * (0.5 + 0.5 * Math.sin(tick * 1.28));
          tilt = Math.sin(tick * 0.45) * 0.025;
          break;
        case 'kamikaze':
          sx = sy = 1 + Math.sin(tick * (active ? 1.5 : 0.68)) * (active ? 0.058 : 0.025);
          break;
      }
      const damagePulse = enemy.hp < enemy.maxHp ? 1 + Math.sin(elapsed * 20) * 0.035 : 1;
      ctx.translate(swayX, swayY);
      ctx.rotate(tilt);
      ctx.scale(sx * damagePulse, sy * damagePulse);
      ctx.globalAlpha = opacity;
      const blur = enemy.state === 'diving' ? 24 : enemy.state === 'queued' ? 26 : 12;
      drawGlowSprite(img, ENEMY_DRAW_SIZE, blur, enemyGlowColor(enemy.type));
      ctx.globalAlpha = 1;

      // Distinct in-flight motion tells, kept INSIDE the artwork rather than
      // introducing rectangles, arrows or hitbox-looking debug markers.
      if (enemy.type === 'teal' && enemy.state === 'diving') {
        ctx.fillStyle = `rgba(94,234,212,${0.44 + 0.30 * (0.5 + 0.5 * Math.sin(tick * 1.8))})`;
        ctx.beginPath();
        ctx.moveTo(-16, 18); ctx.lineTo(-12, 30); ctx.lineTo(-10, 18);
        ctx.moveTo(10, 18); ctx.lineTo(12, 30); ctx.lineTo(16, 18);
        ctx.fill();
      }
      if (enemy.type === 'orange') {
        ctx.fillStyle = `rgba(255,247,174,${0.35 + 0.45 * (0.5 + 0.5 * Math.sin(tick * 0.55))})`;
        ctx.beginPath(); ctx.arc(-18, 2, 3.0, 0, TAU); ctx.arc(18, 2, 3.0, 0, TAU); ctx.fill();
      }
      if (enemy.type === 'purple' && enemy.state === 'queued') {
        ctx.strokeStyle = 'rgba(221,214,254,.82)';
        ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(-19, -18); ctx.lineTo(-10, -7);
        ctx.moveTo(19, -18); ctx.lineTo(10, -7); ctx.stroke();
      }
      if (enemy.type === 'green' && enemy.state === 'queued') {
        ctx.fillStyle = 'rgba(220,252,231,.85)'; ctx.fillRect(-1, -24, 2, 9);
      }

      // A very short species-colored pulse telegraphs a coordinated launch.
      // It gives the player a reaction cue without drawing paths or UI markers.
      if (enemy.state === 'queued') {
        drawHighlight(img, ENEMY_DRAW_SIZE, 0.16 + (0.5 + 0.5 * Math.sin(elapsed * 26 + enemy.glow)) * 0.16);
      }
      // Hit flash, same treatment as the bosses.
      if (enemy.flash > 0) {
        drawHighlight(img, ENEMY_DRAW_SIZE, Math.min(0.9, 0.35 + enemy.flash * 5.5));
        drawHighlight(img, ENEMY_DRAW_SIZE, Math.min(0.6, enemy.flash * 5));
      }

      if (enemy.type === 'kamikaze' && enemy.state === 'diving') {
        const t = clamp(enemy.diveTime / Math.max(0.01, enemy.diveDuration), 0, 1);
        if (t > 0.48) {
          ctx.globalAlpha = 0.22 + 0.34 * (0.5 + 0.5 * Math.sin(elapsed * (20 + t * 18)));
          ctx.strokeStyle = '#f9a8d4';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(0, 0, 28 + t * 14, 0, TAU);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      if (enemy.type === 'gold' && enemy.hp > 1) {
        ctx.globalAlpha = 0.3 + Math.sin(enemy.glow) * 0.08;
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, TAU);
        ctx.stroke();
      }
      ctx.restore();

      // Armored enemies show a small health bar once they have been damaged.
      if (enemy.maxHp > 1 && enemy.hp > 0 && enemy.hp < enemy.maxHp) {
        const ratio = clamp(enemy.hp / enemy.maxHp, 0, 1);
        const w = 34, x = enemy.x - w / 2, y = enemy.y + 30;
        ctx.fillStyle = 'rgba(2,6,23,.8)';
        ctx.fillRect(x - 1, y - 1, w + 2, 5);
        ctx.fillStyle = ratio > 0.5 ? '#4ade80' : ratio > 0.25 ? '#facc15' : '#f87171';
        ctx.fillRect(x, y, w * ratio, 3);
      }
    }
  }

  function drawBoss() {
    if (!boss) return;
    const img = sprites[boss.def.sprite];
    if (!img) return;

    ctx.save();
    ctx.translate(boss.x, boss.y);
    ctx.rotate(boss.angle);
    const pulse = 1 + Math.sin(elapsed * 5.5) * 0.025;
    ctx.scale(pulse, pulse);
    drawGlowSprite(img, BOSS_DRAW_SIZE, boss.phase === 2 ? 34 : 24, boss.def.color);
    if (boss.flash > 0) {
      // Flash only the boss sprite, additively, instead of a slow canvas filter.
      drawHighlight(img, BOSS_DRAW_SIZE, Math.min(0.75, 0.3 + boss.flash * 5));
    }
    ctx.restore();

    const ratio = clamp(boss.hp / boss.maxHp, 0, 1);
    const barW = 510;
    const x = (LOGICAL_W - barW) / 2;
    const y = 28;
    ctx.save();
    ctx.fillStyle = 'rgba(2,6,23,.82)';
    ctx.fillRect(x - 5, y - 5, barW + 10, 28);
    ctx.strokeStyle = 'rgba(226,232,240,.28)';
    ctx.strokeRect(x - 5, y - 5, barW + 10, 28);
    ctx.fillStyle = 'rgba(71,85,105,.55)';
    ctx.fillRect(x, y, barW, 18);
    ctx.fillStyle = boss.def.color;
    ctx.fillRect(x, y, barW * ratio, 18);
    // Phase-two threshold marker (boss enrages at 50% HP).
    if (boss.phase === 1) {
      const mx = x + barW * 0.5;
      ctx.fillStyle = 'rgba(248,250,252,.9)';
      ctx.fillRect(mx - 1, y - 4, 2, 26);
      ctx.beginPath();
      ctx.moveTo(mx - 5, y - 5); ctx.lineTo(mx + 5, y - 5); ctx.lineTo(mx, y);
      ctx.fill();
    }
    ctx.font = '800 12px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#f8fafc';
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#000000';
    ctx.fillText(`${boss.def.name}  ${Math.max(0, Math.ceil(boss.hp))}/${boss.maxHp}${boss.phase === 2 ? '  // ENRAGED' : ''}`, LOGICAL_W / 2, y + 9);
    ctx.restore();
  }

  function drawProjectiles() {
    ctx.save();
    ctx.shadowBlur = 15;

    const { laser } = cachedGradients();
    ctx.fillStyle = laser;
    ctx.shadowColor = '#22d3ee';
    for (const b of bullets) {
      ctx.translate(b.x, b.y);
      ctx.fillRect(-2.5, -13, 5, 24);
      ctx.translate(-b.x, -b.y);
    }

    for (const b of enemyBullets) {
      const bulletColor = b.color || '#fb7185';
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.fillStyle = bulletColor;
      ctx.strokeStyle = bulletColor;
      ctx.shadowColor = bulletColor;
      const r = b.r;
      switch (b.kind) {
        case 'blue': // Small short probe pellet.
          ctx.beginPath(); ctx.ellipse(0, 0, r * .65, r * 1.14, 0, 0, TAU); ctx.fill();
          ctx.fillStyle = '#dbeafe'; ctx.fillRect(-1, -2, 2, 3);
          break;
        case 'red': // Split scissor blade.
          ctx.beginPath();
          ctx.moveTo(-r, -r); ctx.lineTo(-r * .3, r * .1); ctx.lineTo(-r * .22, r * 1.4);
          ctx.lineTo(0, r * .5); ctx.lineTo(r * .22, r * 1.4);
          ctx.lineTo(r * .3, r * .1); ctx.lineTo(r, -r); ctx.lineTo(0, -r * .22);
          ctx.closePath(); ctx.fill();
          break;
        case 'gold': // Heavy armor-piercing hex.
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = Math.PI / 6 + i * TAU / 6;
            const x = Math.cos(a) * r * 1.22, y = Math.sin(a) * r * 1.22;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.closePath(); ctx.fill(); ctx.fillStyle = '#fef9c3'; ctx.fillRect(-1.3, -1.5, 2.6, 3);
          break;
        case 'green': // Long needle, not a soft orb.
          ctx.beginPath(); ctx.moveTo(0, -r * 2.25); ctx.lineTo(r * .48, r * 1.2);
          ctx.lineTo(0, r * 1.95); ctx.lineTo(-r * .48, r * 1.2);
          ctx.closePath(); ctx.fill();
          ctx.fillStyle = '#dcfce7'; ctx.fillRect(-.8, -r * 1.2, 1.6, r * 2);
          break;
        case 'purple': // Four-spoke gravity cross.
          ctx.beginPath(); ctx.moveTo(0, -r * 1.55); ctx.lineTo(r * .43, -r * .35);
          ctx.lineTo(r * 1.2, 0); ctx.lineTo(r * .43, r * .35);
          ctx.lineTo(0, r * 1.55); ctx.lineTo(-r * .43, r * .35);
          ctx.lineTo(-r * 1.2, 0); ctx.lineTo(-r * .43, -r * .35);
          ctx.closePath(); ctx.fill();
          ctx.fillStyle = '#f3e8ff'; ctx.fillRect(-1.2, -1.2, 2.4, 2.4);
          break;
        case 'teal': // Forward wedge matching the rammer.
          ctx.beginPath(); ctx.moveTo(0, r * 1.8); ctx.lineTo(-r * 1.12, -r);
          ctx.lineTo(0, -r * .45); ctx.lineTo(r * 1.12, -r); ctx.closePath(); ctx.fill();
          break;
        case 'orange': // Solar orb with a brighter venting core.
          ctx.beginPath(); ctx.arc(0, 0, r * 1.24, 0, TAU); ctx.fill();
          ctx.strokeStyle = '#fed7aa'; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.arc(0, 0, r * .88, 0, TAU); ctx.stroke();
          ctx.fillStyle = '#fff7ed'; ctx.beginPath(); ctx.arc(0, 0, r * .32, 0, TAU); ctx.fill();
          break;
        case 'white': // Long pale stinger shot.
          ctx.beginPath(); ctx.moveTo(0, r * 2.1); ctx.lineTo(-r * .68, -r * .4);
          ctx.lineTo(0, -r * 1.6); ctx.lineTo(r * .68, -r * .4); ctx.closePath(); ctx.fill();
          ctx.strokeStyle = '#67e8f9'; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(0, -r * .8); ctx.lineTo(0, r * 1.5); ctx.stroke();
          break;
        case 'kamikaze': // Asymmetric explosive shrapnel.
          ctx.rotate(b.phase);
          ctx.beginPath(); ctx.moveTo(0, -r * 1.6); ctx.lineTo(r * .6, -r * .45);
          ctx.lineTo(r * 1.55, r * .15); ctx.lineTo(r * .32, r * .45);
          ctx.lineTo(-r * .4, r * 1.5); ctx.lineTo(-r * .75, r * .3);
          ctx.lineTo(-r * 1.35, -r * .5); ctx.closePath(); ctx.fill();
          break;
        default: // Boss rounds retain their existing combat identity.
          ctx.beginPath(); ctx.ellipse(0, 0, r, r * (b.kind === 'heavy' ? 1.25 : 1.8), Math.sin(b.phase) * .18, 0, TAU); ctx.fill();
          ctx.fillStyle = '#fff7ed'; ctx.beginPath(); ctx.arc(0, -1, Math.max(1.5, r * .35), 0, TAU); ctx.fill();
          break;
      }
      ctx.restore();
    }
    ctx.restore();
  }

  function drawPowerups() {
    if (!sprites.powerup) return;
    const colors = { rapid: '#67e8f9', shield: '#60a5fa', repair: '#4ade80', life: '#fb7185', adaptive: '#22c55e' };
    const labels = { rapid: 'II', shield: 'S', repair: '+', life: '1', adaptive: '?' };
    for (const p of powerups) {
      const kind = p.kind || 'adaptive';
      const color = colors[kind] || colors.adaptive;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.spin);
      drawGlowSprite(sprites.powerup, 38, 22, color);
      ctx.rotate(-p.spin);
      ctx.fillStyle = color;
      ctx.font = '900 13px Segoe UI, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labels[kind] || '?', 0, 1);
      ctx.restore();
    }
  }

  function drawParticles() {
    ctx.save();
    for (const p of particles) {
      const a = clamp(p.life / p.maxLife, 0, 1);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      if (p.glow) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.restore();
  }

  const PICKUP_COLORS = {
    'TWIN RAPID FIRE': '#4ade80',
    'SHIELD +1': '#67e8f9',
    'HULL REPAIRED': '#fb7185',
    'SCORE BONUS': '#fde68a',
    '+1 LIFE': '#f9a8d4'
  };

  function drawScorePops() {
    ctx.save();
    ctx.textAlign = 'center';
    for (const pop of scorePops) {
      ctx.globalAlpha = clamp(pop.life / pop.maxLife * 1.6, 0, 1);
      if (pop.big) {
        const x = clamp(pop.x, 110, LOGICAL_W - 110);
        ctx.font = '900 20px Segoe UI, sans-serif';
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(0,0,0,.85)';
        ctx.strokeText(pop.text, x, pop.y);
        ctx.fillStyle = pop.color;
        ctx.fillText(pop.text, x, pop.y);
        ctx.font = '700 13px Segoe UI, sans-serif';
        ctx.fillStyle = '#fde68a';
        ctx.fillText(pop.sub, x, pop.y + 17);
        continue;
      }
      ctx.font = '700 16px Segoe UI, sans-serif';
      ctx.fillStyle = '#fde68a';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#f59e0b';
      ctx.fillText(pop.text, pop.x, pop.y);
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }

  function drawTopHud() {
    if (!(running || paused || gameOver || upgradePending)) return;
    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(0,0,0,.75)';
    const x = 18;
    ctx.font = '600 11px Segoe UI, sans-serif';
    ctx.fillStyle = '#7dd3fc';
    ctx.fillText('SCORE', x, 14);
    ctx.font = '900 22px Segoe UI, sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.strokeText(score.toLocaleString(), x, 27);
    ctx.fillText(score.toLocaleString(), x, 27);
    const stage = boss ? `LV ${level} • BOSS` : `LV ${level} • WAVE ${currentWave}/${totalWaves}`;
    const mode = runMode === 'endless' ? 'ENDLESS • ' : leaderboardEligibleRun ? '' : 'PRACTICE • ';
    ctx.font = '800 12px Segoe UI, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(mode + stage, x, 54);
    ctx.font = '600 11px Segoe UI, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(sectorForLevel().name, x, 71);
    ctx.restore();
  }

  function drawStatusLine() {
    // Minimal arcade HUD: the only text HUD is HIGH SCORE above the playfield.
    // Lives, hull and shield are represented as compact visual pips here.
    ctx.save();

    const baseY = LOGICAL_H - 18;
    let x = 18;

    // Remaining ships.
    for (let i = 0; i < Math.max(0, lives); i++) {
      ctx.save();
      ctx.translate(x + 8, baseY - 4);
      ctx.fillStyle = 'rgba(226,232,240,.92)';
      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.lineTo(-6, 6);
      ctx.lineTo(0, 3);
      ctx.lineTo(6, 6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      x += 18;
    }

    // Hull pips.
    x += 10;
    for (let i = 0; i < player.maxHull; i++) {
      ctx.fillStyle = i < player.hull ? 'rgba(251,113,133,.95)' : 'rgba(71,85,105,.42)';
      ctx.fillRect(x + i * 13, baseY - 9, 9, 9);
    }

    // Shield pips.
    x += Math.max(0, player.maxHull) * 13 + 10;
    for (let i = 0; i < player.maxShield; i++) {
      ctx.strokeStyle = i < player.shield ? 'rgba(103,232,249,.95)' : 'rgba(71,85,105,.42)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x + i * 14 + 5, baseY - 5, 5, 0, TAU);
      ctx.stroke();
    }

    // Temporary rapid-fire status uses a simple icon, not another text readout.
    if (player.rapidTimer > 0) {
      if (player.rapidTimer > (player.rapidMax || 0)) player.rapidMax = player.rapidTimer;
      const ratio = clamp(player.rapidTimer / Math.max(1, player.rapidMax || 12), 0, 1);
      const barW = 150, bx = LOGICAL_W - 18 - barW, by = baseY - 6;
      const ending = player.rapidTimer < 2;
      ctx.globalAlpha = ending ? 0.55 + Math.sin(elapsed * 16) * 0.35 : 1;
      ctx.font = '900 12px Segoe UI, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillStyle = '#4ade80';
      ctx.fillText(`TWIN FIRE ${player.rapidTimer.toFixed(1)}s`, LOGICAL_W - 18, by - 7);
      ctx.fillStyle = 'rgba(71,85,105,.5)';
      ctx.fillRect(bx, by, barW, 5);
      ctx.fillStyle = '#4ade80';
      ctx.fillRect(bx + barW * (1 - ratio), by, barW * ratio, 5);
      ctx.globalAlpha = 1;
    } else {
      player.rapidMax = 0;
    }

    ctx.restore();
  }

  function drawVignette() {
    ctx.fillStyle = cachedGradients().vignette;
    ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);
  }

  function render() {
    drawBackground();

    ctx.save();
    if (screenShake > 0) {
      ctx.translate((Math.random() - 0.5) * shakeStrength, (Math.random() - 0.5) * shakeStrength);
    }
    drawParticles();
    drawPowerups();
    drawEnemies();
    drawBoss();
    drawBossDeath();
    drawProjectiles();
    drawPlayer();
    drawScorePops();
    drawStatusLine();
    ctx.restore();

    drawVignette();
    drawBossDeathFlash();
    drawTopHud(); // after the vignette so the corner text stays crisp
  }

  let frameNumber = 0;
  let lastFrameError = '';

  function gameSnapshot() {
    return {
      frameNumber,
      running,
      paused,
      gameOver,
      lives,
      hull: `${player.hull}/${player.maxHull}`,
      shield: `${player.shield}/${player.maxShield}`,
      upgrades: { ...runUpgrades },
      upgradePending,
      campaignComplete,
      score,
      level,
      runMode,
      finalRecord: lastRunResult ? { ...lastRunResult } : null,
      leaderboardEligibleRun,
      debugHudEnabled,
      playerState: player.state,
      deathTimer: Number(player.deathTimer.toFixed(3)),
      respawnTimer: Number(player.respawnTimer.toFixed(3)),
      invulnerable: Number(player.invulnerable.toFixed(3)),
      bullets: bullets.length,
      enemyBullets: enemyBullets.length,
      enemies: enemies.length,
      formationMotion,
      attackPatterns: enemies.filter(e => e.state === 'diving').map(e => `${e.type}:${e.attackPattern}`),
      teamTactics: enemies.filter(e => e.state === 'diving' || e.state === 'queued').map(e => `${e.type}:${e.teamTactic || 'probe'}:${e.teamRole || 'solo'}:${e.state}`),
      boss: boss ? boss.def.name : null,
      bossHp: boss ? `${boss.hp}/${boss.maxHp}` : null,
      wave: boss ? 'BOSS' : `${currentWave}/${totalWaves}`,
      waveTransitionTimer: Number(waveTransitionTimer.toFixed(3)),
      bossIntroTimer: Number(bossIntroTimer.toFixed(3)),
      contactIntroTimer: Number(contactIntroTimer.toFixed(3)),
      contact: currentContactKey ? ENEMY_DEFS[currentContactKey]?.name : null,
      pacing: {
        target: Number(campaignPressureTarget().toFixed(2)),
        recovery: Number(pressureRecoveryTimer.toFixed(2)),
        teamCooldown: Number(teamAttackCooldown.toFixed(2)),
        maxDivers: maxSimultaneousDivers(),
        lastEvent: lastPressureEvent
      },
      forwardAssault: {
        planned: forwardAssaultPlanned,
        countdown: Number(forwardAssaultCountdown.toFixed(2)),
        active: forwardAssaultActive,
        used: forwardAssaultUsed
      },
      combatReady,
      screenShake: Number(screenShake.toFixed(3)),
      runStartLevel,
      maxUnlockedLevel
    };
  }

  function loop(now) {
    // Schedule first. If update/render throws, the next frame still happens and
    // the exception is visible in the npm-start terminal via Electron main.js.
    requestAnimationFrame(loop);
    frameNumber++;

    try {
      const dt = Math.min(0.033, Math.max(0, (now - lastTime) / 1000));
      lastTime = now;
      update(dt);
      render();
      lastFrameError = '';
    } catch (err) {
      const text = err && err.stack ? err.stack : String(err);
      if (text !== lastFrameError) {
        lastFrameError = text;
        console.error('[GAME LOOP ERROR]', text, gameSnapshot());
      }
    }
  }

  function closeMenuOverlays() {
    overlay.classList.add('hidden');
    pauseOverlay.classList.add('hidden');
    gameOverOverlay.classList.add('hidden');
    missionOverlay.classList.add('hidden');
    bossOverlay.classList.add('hidden');
    enemyOverlay.classList.add('hidden');
    controlsOverlay.classList.add('hidden');
    leaderboardOverlay.classList.add('hidden');
    debugOverlay.classList.add('hidden');
    loreOverlay.classList.add('hidden');
    contactIntroOverlay.classList.add('hidden');
    upgradeOverlay.classList.add('hidden');
    victoryOverlay.classList.add('hidden');
  }

  function refreshMenuProgress() {
    renderMissionGrid();
  }

  function renderMissionGrid() {
    missionGrid.textContent = '';
    const maxVisible = 30;
    for (let n = 1; n <= maxVisible; n++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mission-button';
      const isBoss = isBossLevel(n);
      if (isBoss) button.classList.add('boss-mission');
      button.textContent = isBoss ? `BOSS ${n}` : `LEVEL ${n}`;
      const sub = document.createElement('span');
      sub.textContent = isBoss ? getBossDefForLevel(n).name : n <= maxUnlockedLevel ? 'REACHED' : 'FORMATION';
      button.appendChild(sub);
      button.addEventListener('click', () => startGame(n, 'mission-select', false, 'campaign'));
      missionGrid.appendChild(button);
    }
  }

  function renderBossArchive() {
    bossGrid.textContent = '';
    for (const def of BOSS_DEFS) {
      const card = document.createElement('article');
      card.className = 'boss-card';

      const img = document.createElement('img');
      img.src = def.image;
      img.alt = `${def.name} boss sprite`;
      card.appendChild(img);

      const copy = document.createElement('div');
      copy.className = 'boss-card-copy';

      const levelLabel = document.createElement('p');
      levelLabel.className = 'boss-card-level';
      levelLabel.textContent = `LEVEL ${def.level} COMMANDER`;
      copy.appendChild(levelLabel);

      const heading = document.createElement('h3');
      heading.textContent = def.name;
      copy.appendChild(heading);

      const title = document.createElement('p');
      title.className = 'boss-card-title';
      title.textContent = def.title;
      copy.appendChild(title);

      const lore = document.createElement('p');
      lore.className = 'boss-card-lore';
      lore.textContent = def.lore;
      copy.appendChild(lore);

      const pattern = document.createElement('p');
      pattern.className = 'boss-pattern';
      pattern.textContent = `Combat profile: ${def.pattern}`;
      copy.appendChild(pattern);

      const phase = document.createElement('p');
      phase.className = 'boss-pattern';
      phase.textContent = `Phase II: ${def.phaseTwo}`;
      copy.appendChild(phase);

      const fight = document.createElement('button');
      fight.type = 'button';
      fight.className = 'boss-fight-button';
      fight.textContent = `FIGHT — LEVEL ${def.level}`;
      fight.addEventListener('click', () => startGame(def.level, `boss-select:${def.id}`, false, 'campaign'));
      copy.appendChild(fight);

      card.appendChild(copy);
      bossGrid.appendChild(card);
    }
  }

  function renderEnemyArchive() {
    enemyGrid.textContent = '';
    for (const key of ENEMY_ARCHIVE_ORDER) {
      const def = ENEMY_DEFS[key];
      const card = document.createElement('article');
      card.className = 'enemy-card';

      const img = document.createElement('img');
      img.src = def.image;
      img.alt = `${def.name} enemy sprite`;
      card.appendChild(img);

      const copy = document.createElement('div');
      copy.className = 'enemy-card-copy';

      const first = document.createElement('p');
      first.className = 'enemy-card-first';
      first.textContent = `FIRST SEEN // LEVEL ${def.firstLevel}`;
      copy.appendChild(first);

      const heading = document.createElement('h3');
      heading.textContent = def.name;
      copy.appendChild(heading);

      const role = document.createElement('p');
      role.className = 'enemy-card-role';
      role.textContent = def.role;
      copy.appendChild(role);

      const visual = ENEMY_VISUALS[key];
      const identification = document.createElement('p');
      identification.className = 'enemy-card-identification';
      identification.textContent = `IDENTIFY: ${visual.silhouette} · ${visual.motion}`;
      copy.appendChild(identification);

      const lore = document.createElement('p');
      lore.className = 'enemy-card-lore';
      lore.textContent = def.lore;
      copy.appendChild(lore);

      const combat = document.createElement('p');
      combat.className = 'enemy-card-combat';
      combat.textContent = `Combat notes: ${def.combat}`;
      copy.appendChild(combat);

      const shot = document.createElement('p');
      shot.className = 'enemy-card-shot';
      shot.textContent = `PROJECTILE: ${visual.shot}`;
      copy.appendChild(shot);

      const stats = document.createElement('div');
      stats.className = 'enemy-card-stats';
      const armor = document.createElement('span');
      armor.textContent = `BASE ARMOR ${def.baseHp}`;
      const points = document.createElement('span');
      points.textContent = `BASE SCORE ${def.points}`;
      stats.append(armor, points);
      copy.appendChild(stats);

      card.appendChild(copy);
      enemyGrid.appendChild(card);
    }
  }

  function navButtonsFor(overlayEl) {
    return [...overlayEl.querySelectorAll('button:not(:disabled)')].filter(button => !button.classList.contains('hidden'));
  }

  function setKeyboardSelection(overlayEl, button) {
    for (const el of overlayEl.querySelectorAll('.keyboard-selected')) el.classList.remove('keyboard-selected');
    if (!button) return;
    button.classList.add('keyboard-selected');
    try { button.focus({ preventScroll: true }); } catch { button.focus(); }
  }

  function ensureKeyboardSelection(overlayEl, preferredSelector = null) {
    const buttons = navButtonsFor(overlayEl);
    if (!buttons.length) return null;
    const current = overlayEl.querySelector('.keyboard-selected:not(:disabled)');
    if (current && buttons.includes(current)) return current;
    const preferred = preferredSelector ? overlayEl.querySelector(preferredSelector) : null;
    const next = preferred && !preferred.disabled ? preferred : buttons[0];
    setKeyboardSelection(overlayEl, next);
    return next;
  }

  function moveKeyboardSelection(overlayEl, code) {
    const buttons = navButtonsFor(overlayEl);
    if (!buttons.length) return;
    const current = ensureKeyboardSelection(overlayEl);
    const currentRect = current.getBoundingClientRect();
    const cx = currentRect.left + currentRect.width / 2;
    const cy = currentRect.top + currentRect.height / 2;
    const dirs = {
      ArrowLeft: [-1, 0], KeyA: [-1, 0],
      ArrowRight: [1, 0], KeyD: [1, 0],
      ArrowUp: [0, -1], KeyW: [0, -1],
      ArrowDown: [0, 1], KeyS: [0, 1]
    };
    const dir = dirs[code];
    if (!dir) return;

    let best = null;
    let bestScore = Infinity;
    for (const button of buttons) {
      if (button === current) continue;
      const r = button.getBoundingClientRect();
      const bx = r.left + r.width / 2;
      const by = r.top + r.height / 2;
      const dx = bx - cx;
      const dy = by - cy;
      const forward = dx * dir[0] + dy * dir[1];
      if (forward <= 3) continue;
      const sideways = Math.abs(dx * dir[1] - dy * dir[0]);
      const score = forward + sideways * 2.4;
      if (score < bestScore) {
        best = button;
        bestScore = score;
      }
    }

    if (!best) {
      const index = buttons.indexOf(current);
      const step = (code === 'ArrowLeft' || code === 'KeyA' || code === 'ArrowUp' || code === 'KeyW') ? -1 : 1;
      best = buttons[(index + step + buttons.length) % buttons.length];
    }
    setKeyboardSelection(overlayEl, best);
    beep(220, 0.025, 'square', 0.012, 260);
  }

  function handleKeyboardOverlay(overlayEl, e, preferredSelector = null) {
    if (performance.now() < menuInputLockUntil) return true;
    if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyW','KeyA','KeyS','KeyD'].includes(e.code)) {
      if (!e.repeat) moveKeyboardSelection(overlayEl, e.code);
      return true;
    }
    if ((e.code === 'Space' || e.code === 'Enter') && !e.repeat) {
      const selected = ensureKeyboardSelection(overlayEl, preferredSelector);
      if (selected) selected.click();
      return true;
    }
    return false;
  }

  function showMainMenu() {
    console.info('[GAME] main-menu');
    running = false;
    paused = false;
    gameOver = false;
    upgradePending = false;
    campaignComplete = false;
    keys.clear();
    screenShake = 0;
    shakeStrength = 0;
    bossIntroTimer = 0;
    contactIntroTimer = 0;
    pendingEncounterStart = false;
    resetForwardAssaultState();
    bossIntroOverlay.classList.add('hidden');
    contactIntroOverlay.classList.add('hidden');
    hideMessage();
    hidePickup();
    closeMenuOverlays();
    overlay.classList.remove('hidden');
    pauseButton.classList.add('hidden');
    quickRestartButton.classList.add('hidden');
    refreshMenuProgress();
    refreshDebugPanel();
  }

  function openMissionSelect(returnTarget = 'menu') {
    selectorReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    renderMissionGrid();
    missionOverlay.classList.remove('hidden');
    ensureKeyboardSelection(missionOverlay, '.mission-button');
  }

  function openBossArchive(returnTarget = 'menu') {
    selectorReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    renderBossArchive();
    bossOverlay.classList.remove('hidden');
    ensureKeyboardSelection(bossOverlay, '.boss-fight-button');
  }

  function openEnemyArchive(returnTarget = 'menu') {
    selectorReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    renderEnemyArchive();
    enemyOverlay.classList.remove('hidden');
    ensureKeyboardSelection(enemyOverlay, '#enemyCloseButton');
  }

  function returnFromSelector() {
    missionOverlay.classList.add('hidden');
    bossOverlay.classList.add('hidden');
    enemyOverlay.classList.add('hidden');
    if (selectorReturn === 'pause' && running && !gameOver) {
      paused = true;
      pauseOverlay.classList.remove('hidden');
      pauseButton.textContent = 'RESUME';
      ensureKeyboardSelection(pauseOverlay, '#resumeButton');
      return;
    }
    if (selectorReturn === 'gameover' && gameOver) {
      gameOverOverlay.classList.remove('hidden');
      ensureKeyboardSelection(gameOverOverlay, '#retryLevelButton');
      return;
    }
    if (selectorReturn === 'victory' && campaignComplete) {
      victoryOverlay.classList.remove('hidden');
      ensureKeyboardSelection(victoryOverlay, '#victoryRestartButton');
      return;
    }
    if (selectorReturn === 'mission') {
      missionOverlay.classList.remove('hidden');
      return;
    }
    if (selectorReturn === 'lore') {
      loreOverlay.classList.remove('hidden');
      ensureKeyboardSelection(loreOverlay, '#loreBackButton');
      return;
    }
    if (selectorReturn === 'boss') {
      bossOverlay.classList.remove('hidden');
      return;
    }
    if (selectorReturn === 'enemy') {
      enemyOverlay.classList.remove('hidden');
      return;
    }
    overlay.classList.remove('hidden');
    ensureKeyboardSelection(overlay, '#startButton');
  }

  function openControls(returnTarget = 'menu') {
    controlsReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    controlsOverlay.classList.remove('hidden');
    ensureKeyboardSelection(controlsOverlay, '#controlsCloseButton');
  }

  function returnFromControls() {
    controlsOverlay.classList.add('hidden');
    if (controlsReturn === 'pause' && running && !gameOver) {
      paused = true;
      pauseOverlay.classList.remove('hidden');
      pauseButton.textContent = 'RESUME';
      ensureKeyboardSelection(pauseOverlay, '#resumeButton');
      return;
    }
    overlay.classList.remove('hidden');
    ensureKeyboardSelection(overlay, '#startButton');
  }

  function openLeaderboard(returnTarget = 'menu') {
    leaderboardViewMode = leaderboardEligibleRun ? currentRunBoardMode() : 'CAMPAIGN';
    leaderboardReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    renderLeaderboard();
    leaderboardOverlay.classList.remove('hidden');
    ensureKeyboardSelection(leaderboardOverlay, '#leaderboardBackButton');
  }

  function returnFromLeaderboard() {
    leaderboardOverlay.classList.add('hidden');
    if (leaderboardReturn === 'pause' && running && !gameOver) {
      paused = true;
      pauseOverlay.classList.remove('hidden');
      pauseButton.textContent = 'RESUME';
      ensureKeyboardSelection(pauseOverlay, '#resumeButton');
      return;
    }
    if (leaderboardReturn === 'gameover' && gameOver) {
      gameOverOverlay.classList.remove('hidden');
      ensureKeyboardSelection(gameOverOverlay, '#retryLevelButton');
      return;
    }
    if (leaderboardReturn === 'victory' && campaignComplete) {
      victoryOverlay.classList.remove('hidden');
      ensureKeyboardSelection(victoryOverlay, '#victoryRestartButton');
      return;
    }
    overlay.classList.remove('hidden');
    ensureKeyboardSelection(overlay, '#startButton');
  }

  const LORE_INTRO = 'The Lantern Line was six colony systems strung along one trade route. Then the Hive arrived: a living swarm that grows its warships out of whatever it consumes. Every Hive craft, from the smallest Skitter to the largest command ship, answers to one broadcast called the Signal, and the Signal comes from Queen Vesper. The colony fleets are gone. You fly the last squadron. The only way to Vesper runs through six sectors, and each one is held by a command ship the Hive grew around something it took from the colonies.';
  const LORE_ENDING = 'Vesper is gone and the Signal has gone quiet. But the Hive is alive, and living things grow back. Deep in the swarm a new queen is already forming, and the command ships are regrowing around her. That is where Endless Mode begins: The Regrown Hive.';
  let loreReturn = 'menu';

  function renderLore() {
    loreIntro.textContent = LORE_INTRO;
    loreList.textContent = '';
    SECTORS.forEach((sector, i) => {
      const firstLevel = i * 5 + 1;
      const bossDef = BOSS_DEFS[i];
      const unlocked = maxUnlockedLevel >= firstLevel;
      const card = document.createElement('article');
      card.className = 'lore-sector' + (unlocked ? '' : ' locked');
      card.style.setProperty('--sector-color', bossDef.color);
      let art;
      if (unlocked) {
        art = document.createElement('img');
        art.src = bossDef.image;
        art.alt = bossDef.name;
      } else {
        art = document.createElement('div');
        art.className = 'lore-lock';
        art.textContent = '?';
      }
      const copy = document.createElement('div');
      const label = document.createElement('p');
      label.className = 'lore-sector-label';
      label.textContent = `SECTOR ${i + 1} • LEVELS ${firstLevel}–${firstLevel + 4}`;
      const title = document.createElement('h3');
      title.textContent = unlocked ? sector.name : 'SIGNAL NOT YET INTERCEPTED';
      copy.append(label, title);
      if (unlocked) {
        const brief = document.createElement('p');
        brief.className = 'lore-sector-brief';
        brief.textContent = sector.brief;
        const bossLine = document.createElement('p');
        bossLine.className = 'lore-sector-boss';
        const bossName = document.createElement('strong');
        bossName.textContent = `${bossDef.name} — ${bossDef.title}. `;
        bossLine.append(bossName, document.createTextNode(bossDef.lore));
        const castes = ENEMY_ARCHIVE_ORDER.filter(key => sectorIndex(ENEMY_DEFS[key].firstLevel) === i && ENEMY_DEFS[key].firstLevel > 1);
        const casteLine = document.createElement('p');
        casteLine.className = 'lore-sector-castes';
        casteLine.textContent = i === 0
          ? 'Castes met here: Skitter Scout, Crimson Mantis, Crown Beetle, Needlewing'
          : castes.length ? `New castes: ${castes.map(key => ENEMY_DEFS[key].name.replace(/\b(\w)(\w*)/g, (m, a, b) => a + b.toLowerCase())).join(', ')}` : 'No new castes. Only the Queen and her guard.';
        copy.append(brief, bossLine, casteLine);
      } else {
        const hint = document.createElement('p');
        hint.className = 'lore-sector-brief';
        hint.textContent = `Reach Level ${firstLevel} in the campaign to decode this sector.`;
        copy.append(hint);
      }
      card.append(art, copy);
      loreList.appendChild(card);
    });
    const cleared = localStorage.getItem('starSquadronCampaignCleared') === '1';
    loreEnding.className = 'lore-ending' + (cleared ? '' : ' locked');
    loreEnding.textContent = cleared ? LORE_ENDING : 'ENDING CLASSIFIED. Silence the Signal to decode it.';
  }

  function openLore(returnTarget = 'menu') {
    loreReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    renderLore();
    loreOverlay.classList.remove('hidden');
    ensureKeyboardSelection(loreOverlay, '#loreBackButton');
  }

  function returnFromLore() {
    loreOverlay.classList.add('hidden');
    if (loreReturn === 'pause' && running && !gameOver) {
      paused = true;
      pauseOverlay.classList.remove('hidden');
      pauseButton.textContent = 'RESUME';
      ensureKeyboardSelection(pauseOverlay, '#resumeButton');
      return;
    }
    overlay.classList.remove('hidden');
    ensureKeyboardSelection(overlay, '#startButton');
  }

  // ---------- Hidden debug screen: ↑ ↑ ↓ ↓ Space ----------
  const SECRET_CODE = ['up', 'up', 'down', 'down', 'space'];
  const SECRET_KEYS = { ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down', Space: 'space' };
  let secretProgress = 0;
  let secretLastAt = 0;
  let debugUnlocked = false;

  // Returns true when this key completed the code (the key is then consumed).
  function checkSecretCode(e) {
    if (e.repeat) return false;
    const now = performance.now();
    if (now - secretLastAt > 2500) secretProgress = 0;
    secretLastAt = now;
    const k = SECRET_KEYS[e.code];
    if (k === SECRET_CODE[secretProgress]) secretProgress++;
    else secretProgress = k === SECRET_CODE[0] ? 1 : 0;
    if (secretProgress < SECRET_CODE.length) return false;
    secretProgress = 0;
    // Never trigger from live combat, where up/down/fire is normal play.
    if (running && !paused && !gameOver) return false;
    debugUnlocked = true;
    console.info('[DEBUG] secret code accepted');
    openDebug(debugContext());
    return true;
  }

  function debugContext() {
    if (running && !gameOver) return 'pause';
    if (gameOver) return 'gameover';
    if (campaignComplete) return 'victory';
    return 'menu';
  }

  function openDebug(returnTarget = 'menu') {
    debugReturn = returnTarget;
    if (running && !gameOver && !upgradePending) paused = true;
    keys.clear();
    closeMenuOverlays();
    refreshDebugPanel();
    renderDebugAnimations();
    debugResult.textContent = '';
    debugOverlay.classList.remove('hidden');
    ensureKeyboardSelection(debugOverlay, '#debugAssaultButton');
  }

  function returnFromDebug() {
    debugOverlay.classList.add('hidden');
    if (debugReturn === 'pause' && running && !gameOver) {
      paused = true;
      pauseOverlay.classList.remove('hidden');
      pauseButton.textContent = 'RESUME';
      ensureKeyboardSelection(pauseOverlay, '#resumeButton');
      return;
    }
    if (debugReturn === 'gameover' && gameOver) {
      gameOverOverlay.classList.remove('hidden');
      ensureKeyboardSelection(gameOverOverlay, '#retryLevelButton');
      return;
    }
    if (debugReturn === 'victory' && campaignComplete) {
      victoryOverlay.classList.remove('hidden');
      ensureKeyboardSelection(victoryOverlay, '#victoryRestartButton');
      return;
    }
    overlay.classList.remove('hidden');
    ensureKeyboardSelection(overlay, '#startButton');
  }

  // ---------- Animation viewer ----------
  let viewer = null; // { name, t, duration, events: [{at, fn, done}] }
  let viewerBossCursor = 0;
  let viewerContactCursor = 0;

  function viewerLineup(damaged = false) {
    enemies.length = 0;
    ENEMY_ARCHIVE_ORDER.forEach((type, i) => {
      const x = LOGICAL_W / 2 + (i - 4) * 104;
      enemies.push({
        x, y: 330, baseX: x, baseY: 330, prevX: x, prevY: 330, w: 46, h: 44, type,
        hp: damaged ? 2 : 4, maxHp: 4, points: 0, state: 'formation', row: 0, col: i, side: 1,
        angle: 0, wing: Math.random() * TAU, glow: Math.random() * TAU, flash: 0, viewer: true
      });
    });
  }

  function viewerClearStage() {
    enemies.length = 0; enemyBullets.length = 0; bullets.length = 0; powerups.length = 0; scorePops.length = 0;
    boss = null; bossDeathFx = null;
    player.state = 'alive'; player.invulnerable = 0; player.rapidTimer = 0;
    player.x = LOGICAL_W / 2; player.y = LOGICAL_H - 72;
    bossIntroTimer = 0; contactIntroTimer = 0; pendingEncounterStart = false;
    bossIntroOverlay.classList.add('hidden'); contactIntroOverlay.classList.add('hidden');
    hideMessage(); hidePickup();
  }

  const VIEWER_ANIMATIONS = [
    ...BOSS_DEFS.map(def => ({
      label: `${def.name.replace(/^THE /, '')} DEATH`,
      build: () => [{ at: 0.3, fn: () => startBossDeath({ def, x: LOGICAL_W / 2, y: 250, angle: 0 }, Math.round(def.points)) }],
      duration: () => (BOSS_DEATH_DURATION[def.id] || 2.6) + 1.6
    })),
    {
      label: 'BOSS BRIEFING ▸',
      build: () => {
        const def = BOSS_DEFS[viewerBossCursor++ % BOSS_DEFS.length];
        return [{ at: 0.1, fn: () => { level = def.level; showBossIntro(def); bossIntroCountdown.textContent = 'VIEWER • SPACE / ESC TO CLOSE'; } }];
      },
      duration: () => 6
    },
    {
      label: 'NEW CONTACT ▸',
      build: () => {
        const keys2 = ENEMY_ARCHIVE_ORDER.filter(k => ENEMY_DEFS[k].firstLevel > 1);
        const key = keys2[viewerContactCursor++ % keys2.length];
        return [{ at: 0.1, fn: () => { level = ENEMY_DEFS[key].firstLevel; showContactBriefing(key); contactIntroCountdown.textContent = 'VIEWER • SPACE / ESC TO CLOSE'; } }];
      },
      duration: () => 6
    },
    {
      label: 'ENEMY HIT FLASH',
      build: () => {
        const ev = [{ at: 0, fn: () => viewerLineup(true) }];
        for (let i = 0; i < 9; i++) ev.push({ at: 0.5 + i * 0.35, fn: () => { const e = enemies[i]; if (e) { e.flash = 0.12; spawnExplosion(e.x, e.y + 10, 6, 0.38); } } });
        ev.push({ at: 4, fn: () => enemies.forEach(e => { e.flash = 0.12; }) });
        return ev;
      },
      duration: () => 5
    },
    {
      label: 'ENEMY EXPLOSIONS',
      build: () => {
        const ev = [{ at: 0, fn: () => viewerLineup(false) }];
        ENEMY_ARCHIVE_ORDER.forEach((type, i) => ev.push({ at: 0.6 + i * 0.3, fn: () => {
          const e = enemies.find(x => x.type === type);
          if (!e) return;
          enemies.splice(enemies.indexOf(e), 1);
          spawnExplosion(e.x, e.y, type === 'gold' ? 24 : 17, type === 'gold' ? 1.18 : 1);
          if (type === 'kamikaze') burst(e.x, e.y, { count: 24, colors: ['#f472b6', '#fbcfe8'], speed: [120, 280], life: [0.4, 0.8] });
          beep(type === 'gold' ? 260 : 330, 0.08, 'square', 0.034, 120);
        } }));
        return ev;
      },
      duration: () => 4.5
    },
    {
      label: 'PLAYER EXPLOSION',
      build: () => [
        { at: 0.4, fn: () => { spawnExplosion(player.x, player.y, 12, 0.55, 'player'); screenShake = 0.2; shakeStrength = 4; } },
        { at: 1.1, fn: () => { spawnExplosion(player.x, player.y, 18, 0.7, 'player'); } },
        { at: 1.8, fn: () => { player.state = 'exploding'; spawnExplosion(player.x, player.y, 42, 1.4, 'player'); screenShake = 0.6; shakeStrength = 12; beep(120, 0.6, 'sawtooth', 0.06, 40); } },
        { at: 3.2, fn: () => { player.state = 'alive'; player.invulnerable = 1.5; } }
      ],
      duration: () => 4.8
    },
    {
      label: 'PICKUP CALLOUTS',
      build: () => ['TWIN RAPID FIRE', 'SHIELD +1', 'HULL REPAIRED', '+1 LIFE', 'SCORE BONUS'].map((label, i) => ({
        at: 0.3 + i * 0.9,
        fn: () => {
          const x = LOGICAL_W / 2 + (i - 2) * 170;
          scorePops.push({ x, y: LOGICAL_H - 160, text: label, sub: label === 'SCORE BONUS' ? '+750' : '+250', color: PICKUP_COLORS[label], big: true, life: 1.6, maxLife: 1.6 });
          showPickup(label, 1.5);
          if (label === 'TWIN RAPID FIRE') player.rapidTimer = TUNING.twinFireSeconds;
          beep(650, 0.18, 'sine', 0.045, 1250);
        }
      })),
      duration: () => 6
    },
    {
      label: 'SECTORS + BACKDROPS',
      build: () => [...SECTORS, REGROWN_SECTOR].map((sector, i) => ({
        at: 0.2 + i * 2.6,
        fn: () => (level = i * 5 + 1) && showMessage(`${i < 6 ? `SECTOR ${i + 1}` : 'ENDLESS'}  •  ${sector.name}\nLEVEL ${i * 5 + 1}  •  WAVE 1/2`, 2.2)
      })),
      duration: () => 18.6
    },
    {
      label: 'PLANET GALLERY',
      build: () => [{ at: 0, fn: () => {
        celestials.length = 0;
        const kinds = ['colony', 'rocky', 'ice', 'gas', 'gasRinged', 'shattered', 'lava', 'hive'];
        kinds.forEach((kind, i) => {
          const x = 150 + (i % 4) * 260, y = 190 + Math.floor(i / 4) * 290;
          celestials.push({ type: 'planet', kind, r: kind.startsWith('gas') ? 62 : 58, x, y, vy: 0, vx: 0, seed: 100 + i, sprite: null, sector: bgSector });
        });
        celestials.push({ type: 'moon', kind: 'moon', parent: celestials[0], r: 12, orbit: 95, angle: 0.4, speed: 0.4, seed: 200, sprite: null, x: 0, y: 0, sector: bgSector });
        celestialTimers.planet = celestialTimers.comet = celestialTimers.asteroid = celestialTimers.galaxy = 99;
      } }, { at: 7.8, fn: () => { celestials.length = 0; celestialSector = -1; } }],
      duration: () => 8
    },
    {
      label: 'SPACE TRAFFIC',
      build: () => [
        { at: 0, fn: () => { celestials.length = 0; spawnGalaxy(bgSector, true); spawnPlanet(bgSector, true); celestialTimers.planet = celestialTimers.galaxy = 99; celestialTimers.comet = celestialTimers.asteroid = 99; } },
        { at: 0.3, fn: () => spawnComet(bgSector) }, { at: 1.4, fn: () => spawnAsteroidField(bgSector) },
        { at: 2.2, fn: () => spawnComet(bgSector) }, { at: 4.0, fn: () => spawnComet(bgSector) },
        { at: 9.8, fn: () => { celestialSector = -1; } }
      ],
      duration: () => 10
    },
    {
      label: 'FORWARD ASSAULT',
      build: () => [3, 2, 1].map((n, i) => ({ at: 0.2 + i, fn: () => { messageEl.classList.add('assault-warning'); showMessage(`FORWARD ASSAULT\n${n}`, 0); } }))
        .concat([{ at: 3.2, fn: () => hideMessage() }]),
      duration: () => 3.6
    }
  ];

  function renderDebugAnimations() {
    debugAnimGrid.textContent = '';
    VIEWER_ANIMATIONS.forEach(anim => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'secondary-button';
      b.textContent = anim.label;
      b.addEventListener('click', () => playViewer(anim));
      debugAnimGrid.appendChild(b);
    });
  }

  function playViewer(anim) {
    if (running && !gameOver) {
      debugResult.textContent = 'The animation viewer needs an empty playfield. Quit the current run to the main menu first.';
      return;
    }
    closeMenuOverlays();
    viewerClearStage();
    viewer = { name: anim.label, t: 0, savedLevel: viewer?.savedLevel ?? level, duration: anim.duration(), events: anim.build().map(e => ({ ...e, done: false })) };
    viewerName.textContent = anim.label.replace(' ▸', '');
    viewerHint.classList.remove('hidden');
    console.info(`[DEBUG] viewer-play ${anim.label}`);
  }

  function exitViewer() {
    if (!viewer) return;
    level = viewer.savedLevel;
    viewer = null;
    viewerClearStage();
    messageEl.classList.remove('assault-warning');
    viewerHint.classList.add('hidden');
    openDebug(debugReturn);
  }

  function updateViewer(dt) {
    if (!viewer) return;
    viewer.t += dt;
    for (const ev of viewer.events) {
      if (!ev.done && viewer.t >= ev.at) { ev.done = true; ev.fn(); }
    }
    for (const e of enemies) {
      if (!e.viewer) continue;
      e.wing += dt * 8; e.glow += dt * 3;
      if (e.flash > 0) e.flash = Math.max(0, e.flash - dt);
    }
    if (player.invulnerable > 0) player.invulnerable = Math.max(0, player.invulnerable - dt);
    if (player.rapidTimer > 0) player.rapidTimer = Math.max(0, player.rapidTimer - dt);
    if (viewer.t >= viewer.duration) exitViewer();
  }

  function startEndlessGame(reason = 'start-endless') {
    startGame(1, reason, false, 'endless');
  }

  function startGame(startLevel = 1, reason = 'manual', preserveLoadout = false, requestedMode = null) {
    if (!assetsReady) {
      console.warn('[GAME] restart/start requested before assets were ready');
      return;
    }
    if (requestedMode === 'campaign' || requestedMode === 'endless') runMode = requestedMode;
    const rawLevel = Math.max(1, Math.floor(Number(startLevel) || 1));
    const targetLevel = runMode === 'campaign' ? clamp(rawLevel, 1, 30) : rawLevel;
    const checkpointContinue = reason === 'checkpoint-continue';
    if (!checkpointContinue && !preserveLoadout) runCheckpoint = null;
    if (!checkpointContinue && String(reason).startsWith('gameover-retry-level')) runCheckpoint = null;
    leaderboardEligibleRun = checkpointContinue || (targetLevel === 1 && !preserveLoadout)
      && !(String(reason).startsWith('mission-select') || String(reason).startsWith('boss-select:')
        || String(reason).startsWith('debug-') || String(reason).startsWith('gameover-retry-level'));
    console.info(`[GAME] start/restart reason=${reason} mode=${runMode} startLevel=${targetLevel} preserveLoadout=${preserveLoadout} previousState=${player.state} running=${running} paused=${paused} gameOver=${gameOver}`);
    ensureAudio();

    running = false;
    paused = false;
    gameOver = false;
    upgradePending = false;
    campaignComplete = false;
    keys.clear();
    closeMenuOverlays();
    bossIntroOverlay.classList.add('hidden');
    contactIntroOverlay.classList.add('hidden');
    contactIntroTimer = 0;
    pendingEncounterStart = false;
    hideMessage();
    hidePickup();
    if (!preserveLoadout) runStartLevel = targetLevel;
    directBossStart = typeof reason === 'string' && reason.startsWith('boss-select:');
    resetGame(targetLevel, preserveLoadout);
    running = true;
    lastTime = performance.now();
  }

  function retryCurrentLevel() {
    const retryLevel = level;
    startGame(retryLevel, 'gameover-retry-level', true);
  }

  function setPaused(nextPaused) {
    if (gameOver || upgradePending || campaignComplete || !running) return;
    paused = Boolean(nextPaused);
    keys.clear();
    pauseOverlay.classList.toggle('hidden', !paused);
    pauseButton.textContent = paused ? 'RESUME' : 'PAUSE';
    if (paused) ensureKeyboardSelection(pauseOverlay, '#resumeButton');
    if (!paused) {
      lastTime = performance.now();
      ensureAudio();
    }
  }

  function togglePause() {
    setPaused(!paused);
  }

  const movementAndFireCodes = new Set([
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'Enter'
  ]);

  for (const navOverlay of [overlay, pauseOverlay, upgradeOverlay, gameOverOverlay, controlsOverlay, missionOverlay, bossOverlay, enemyOverlay, leaderboardOverlay, debugOverlay, victoryOverlay, loreOverlay]) {
    navOverlay.addEventListener('pointerover', (e) => {
      const button = e.target.closest('button:not(:disabled)');
      if (button && navOverlay.contains(button)) setKeyboardSelection(navOverlay, button);
    });
  }

  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') {
      if (e.code === 'Escape' && !e.repeat && !leaderboardOverlay.classList.contains('hidden')) {
        e.preventDefault();
        document.activeElement.blur();
        returnFromLeaderboard();
      }
      return;
    }

    if (movementAndFireCodes.has(e.code) || e.code === 'KeyP' || e.code === 'Escape' || e.code === 'KeyR' || e.code === 'KeyM' || e.code === 'F6' || e.code === 'F8') e.preventDefault();
    ensureAudio();

    if (viewer) {
      if ((e.code === 'Escape' || e.code === 'Space' || e.code === 'Enter') && !e.repeat) exitViewer();
      return;
    }
    if (checkSecretCode(e)) return;

    if (e.code === 'KeyM' && !e.repeat) {
      toggleMute();
      return;
    }

    if ((e.code === 'F6' || e.code === 'F8') && !debugUnlocked) return;
    if (e.code === 'F6' && !e.repeat) {
      const result = forceForwardAssault('F6');
      showDebugNotice(result.ok ? 'DEBUG — FORWARD ASSAULT QUEUED' : `DEBUG — ${result.message}`, 1.1);
      return;
    }
    if (e.code === 'F8' && !e.repeat) {
      toggleDebugHud();
      return;
    }

    if (contactIntroTimer > 0) {
      keys.clear();
      if ((e.code === 'Space' || e.code === 'Enter') && !e.repeat && !paused) {
        contactIntroTimer = Math.min(contactIntroTimer, 0.5);
      } else if ((e.code === 'KeyP' || e.code === 'Escape') && !e.repeat) {
        togglePause();
      }
      return;
    }

    if (bossIntroTimer > 0 && running && !paused && (e.code === 'Space' || e.code === 'Enter') && !e.repeat) {
      bossIntroTimer = Math.min(bossIntroTimer, 0.5);
      keys.clear();
      return;
    }

    if (!leaderboardOverlay.classList.contains('hidden')) {
      if (e.code === 'Escape' && !e.repeat) returnFromLeaderboard();
      else handleKeyboardOverlay(leaderboardOverlay, e, '#leaderboardBackButton');
      return;
    }

    if (!loreOverlay.classList.contains('hidden')) {
      if (e.code === 'Escape' && !e.repeat) returnFromLore();
      else handleKeyboardOverlay(loreOverlay, e, '#loreBackButton');
      return;
    }

    if (!debugOverlay.classList.contains('hidden')) {
      if (e.code === 'Escape' && !e.repeat) returnFromDebug();
      else handleKeyboardOverlay(debugOverlay, e, '#debugAssaultButton');
      return;
    }

    if (!controlsOverlay.classList.contains('hidden')) {
      if ((e.code === 'Escape' || e.code === 'KeyP') && !e.repeat) returnFromControls();
      else handleKeyboardOverlay(controlsOverlay, e, '#controlsCloseButton');
      return;
    }

    if (!upgradeOverlay.classList.contains('hidden')) {
      handleKeyboardOverlay(upgradeOverlay, e, '.upgrade-card:not(:disabled)');
      return;
    }

    if (!missionOverlay.classList.contains('hidden')) {
      if (e.code === 'Escape' && !e.repeat) returnFromSelector();
      else handleKeyboardOverlay(missionOverlay, e, '.mission-button');
      return;
    }

    if (!bossOverlay.classList.contains('hidden')) {
      if (e.code === 'Escape' && !e.repeat) returnFromSelector();
      else handleKeyboardOverlay(bossOverlay, e, '.boss-fight-button');
      return;
    }

    if (!enemyOverlay.classList.contains('hidden')) {
      if (e.code === 'Escape' && !e.repeat) returnFromSelector();
      else handleKeyboardOverlay(enemyOverlay, e, '#enemyCloseButton');
      return;
    }

    if (!overlay.classList.contains('hidden')) {
      handleKeyboardOverlay(overlay, e, '#startButton');
      return;
    }

    if (!victoryOverlay.classList.contains('hidden')) {
      handleKeyboardOverlay(victoryOverlay, e, '#victoryRestartButton');
      return;
    }

    if (gameOver) {
      if (e.code === 'KeyR' && !e.repeat) startGame(runStartLevel, 'gameover-restart-run');
      else handleKeyboardOverlay(gameOverOverlay, e, '#retryLevelButton');
      return;
    }

    if (paused) {
      if ((e.code === 'KeyP' || e.code === 'Escape') && !e.repeat) setPaused(false);
      else if (e.code === 'KeyR' && !e.repeat) startGame(runStartLevel, 'pause-keyboard-restart-run');
      else handleKeyboardOverlay(pauseOverlay, e, '#resumeButton');
      return;
    }

    if ((e.code === 'KeyP' || e.code === 'Escape') && !e.repeat) {
      setPaused(true);
      return;
    }

    if (e.code === 'KeyR' && !e.repeat) {
      // Mid-combat restarts need a second press so a stray key can't wipe a run.
      const now = performance.now();
      if (now < restartArmedUntil) {
        restartArmedUntil = 0;
        startGame(runStartLevel, 'keyboard-restart-run');
      } else {
        restartArmedUntil = now + 1200;
        showPickup('PRESS R AGAIN TO RESTART', 1.2);
      }
      return;
    }

    keys.add(e.code);
    if ((e.code === 'Space' || e.code === 'Enter') && !e.repeat) firePlayerBullet();
  }, { passive: false });

  window.addEventListener('keyup', (e) => keys.delete(e.code));
  // Leaving the window (alt-tab, minimise) pauses an active run so you don't
  // come back to a Game Over. setPaused() ignores menus, results and upgrades.
  function autoPause(reason) {
    keys.clear();
    if (running && !paused && !gameOver) {
      setPaused(true);
      console.info(`[GAME] auto-paused reason=${reason}`);
    }
  }
  window.addEventListener('blur', () => autoPause('window-blur'));
  document.addEventListener?.('visibilitychange', () => { if (document.hidden) autoPause('hidden'); });

  for (const button of document.querySelectorAll('.touch-btn')) {
    const code = button.dataset.key;
    if (!code) continue;

    const press = (e) => {
      e.preventDefault();
      if (paused || gameOver || upgradePending || campaignComplete || contactIntroTimer > 0 || bossIntroTimer > 0 || !running) return;
      ensureAudio();
      keys.add(code);
      button.classList.add('active');
      if (code === 'Space') firePlayerBullet();
    };
    const release = (e) => {
      e.preventDefault();
      keys.delete(code);
      button.classList.remove('active');
    };
    button.addEventListener('pointerdown', press, { passive: false });
    button.addEventListener('pointerup', release, { passive: false });
    button.addEventListener('pointercancel', release, { passive: false });
    button.addEventListener('pointerleave', release, { passive: false });
  }

  startButton.addEventListener('click', () => startGame(1, 'start-campaign', false, 'campaign'));
  endlessButton.addEventListener('click', () => startEndlessGame('menu-endless'));
  leaderboardButton.addEventListener('click', () => openLeaderboard('menu'));
  missionSelectButton.addEventListener('click', () => openMissionSelect('menu'));
  bossArchiveButton.addEventListener('click', () => openBossArchive('menu'));
  enemyArchiveButton.addEventListener('click', () => openEnemyArchive('menu'));
  controlsButton.addEventListener('click', () => openControls('menu'));
  loreButton.addEventListener('click', () => openLore('menu'));
  loreCloseButton.addEventListener('click', returnFromLore);
  loreBackButton.addEventListener('click', returnFromLore);
  loreBossArchiveButton.addEventListener('click', () => openBossArchive('lore'));
  loreEnemyArchiveButton.addEventListener('click', () => openEnemyArchive('lore'));

  pauseButton.addEventListener('click', () => {
    if (!running || gameOver) return;
    togglePause();
  });
  resumeButton.addEventListener('click', () => setPaused(false));
  restartButton.addEventListener('click', () => startGame(runStartLevel, 'pause-restart-run'));
  quickRestartButton.addEventListener('click', () => startGame(runStartLevel, 'quick-restart-run'));
  pauseMissionSelectButton.addEventListener('click', () => openMissionSelect('pause'));
  pauseEnemyArchiveButton.addEventListener('click', () => openEnemyArchive('pause'));
  pauseLeaderboardButton.addEventListener('click', () => openLeaderboard('pause'));
  pauseControlsButton.addEventListener('click', () => openControls('pause'));
  pauseLoreButton.addEventListener('click', () => openLore('pause'));
  controlsCloseButton.addEventListener('click', returnFromControls);

  retryLevelButton.addEventListener('click', retryCurrentLevel);
  checkpointButton.addEventListener('click', continueFromCheckpoint);
  gameOverRestartButton.addEventListener('click', () => startGame(runStartLevel, 'gameover-restart-run'));
  gameOverMissionSelectButton.addEventListener('click', () => openMissionSelect('gameover'));
  gameOverEnemyArchiveButton.addEventListener('click', () => openEnemyArchive('gameover'));
  gameOverLeaderboardButton.addEventListener('click', () => openLeaderboard('gameover'));
  gameOverMenuButton.addEventListener('click', showMainMenu);

  victoryRestartButton.addEventListener('click', () => startGame(1, 'victory-new-campaign', false, 'campaign'));
  victoryMissionSelectButton.addEventListener('click', () => openMissionSelect('victory'));
  victoryBossArchiveButton.addEventListener('click', () => openBossArchive('victory'));
  victoryLeaderboardButton.addEventListener('click', () => openLeaderboard('victory'));
  victoryEndlessButton.addEventListener('click', () => startEndlessGame('victory-endless'));
  victoryMenuButton.addEventListener('click', showMainMenu);

  missionCloseButton.addEventListener('click', returnFromSelector);
  missionMenuButton.addEventListener('click', showMainMenu);
  missionBossArchiveButton.addEventListener('click', () => openBossArchive('mission'));
  missionEnemyArchiveButton.addEventListener('click', () => openEnemyArchive('mission'));
  bossCloseButton.addEventListener('click', returnFromSelector);
  bossMenuButton.addEventListener('click', showMainMenu);
  bossMissionSelectButton.addEventListener('click', () => openMissionSelect('boss'));
  bossEnemyArchiveButton.addEventListener('click', () => openEnemyArchive('boss'));
  enemyCloseButton.addEventListener('click', returnFromSelector);
  enemyMenuButton.addEventListener('click', showMainMenu);
  enemyMissionSelectButton.addEventListener('click', () => openMissionSelect('enemy'));
  enemyBossArchiveButton.addEventListener('click', () => openBossArchive('enemy'));

  leaderboardCloseButton.addEventListener('click', returnFromLeaderboard);
  leaderboardBackButton.addEventListener('click', returnFromLeaderboard);
  leaderboardMenuButton.addEventListener('click', showMainMenu);
  leaderboardSaveButton.addEventListener('click', submitLeaderboardScore);
  leaderboardCampaignTab.addEventListener('click', () => setLeaderboardView('CAMPAIGN'));
  leaderboardEndlessTab.addEventListener('click', () => setLeaderboardView('ENDLESS'));
  leaderboardName.addEventListener('input', () => {
    const clean = leaderboardName.value.toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 10);
    if (leaderboardName.value !== clean) leaderboardName.value = clean;
  });
  leaderboardName.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      submitLeaderboardScore();
    }
  });

  debugCloseButton.addEventListener('click', returnFromDebug);
  debugBackButton.addEventListener('click', returnFromDebug);
  debugAssaultButton.addEventListener('click', () => {
    const result = forceForwardAssault('debug-button');
    debugResult.textContent = result.message;
    refreshDebugPanel();
  });
  debugHudButton.addEventListener('click', () => {
    toggleDebugHud();
    debugResult.textContent = `Debug HUD ${debugHudEnabled ? 'enabled' : 'disabled'}.`;
  });

  window.addEventListener('resize', resizeBackingStore);

  startButton.disabled = true;
  missionSelectButton.disabled = true;
  bossArchiveButton.disabled = true;
  enemyArchiveButton.disabled = true;
  controlsButton.disabled = true;
  loreButton.disabled = true;
  endlessButton.disabled = true;
  leaderboardButton.disabled = true;
  startButton.textContent = 'LOADING...';
  pauseButton.classList.add('hidden');
  quickRestartButton.classList.add('hidden');
  pauseOverlay.classList.add('hidden');
  gameOverOverlay.classList.add('hidden');
  missionOverlay.classList.add('hidden');
  bossOverlay.classList.add('hidden');
  enemyOverlay.classList.add('hidden');
  controlsOverlay.classList.add('hidden');
  leaderboardOverlay.classList.add('hidden');
  debugOverlay.classList.add('hidden');
  debugHud.classList.add('hidden');
  debugNotice.classList.add('hidden');
  contactIntroOverlay.classList.add('hidden');
  pickupNotice.classList.add('hidden');
  bossIntroOverlay.classList.add('hidden');
  upgradeOverlay.classList.add('hidden');
  victoryOverlay.classList.add('hidden');
  resizeBackingStore();
  initStars();
  customLeaderboard = loadCustomLeaderboard();
  leaderboardName.value = (localStorage.getItem(CALLSIGN_KEY) || 'PLAYER').toUpperCase().slice(0, 10);
  renderLeaderboard();
  refreshDebugPanel();
  refreshMenuProgress();
  loadAssets().catch((err) => {
    console.error(err);
    startButton.textContent = 'ASSET LOAD ERROR';
  });

  window.addEventListener('error', (event) => {
    const error = event.error;
    console.error('[WINDOW ERROR]', {
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno,
      stack: error && error.stack ? error.stack : null,
      state: gameSnapshot()
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    console.error('[UNHANDLED PROMISE REJECTION]', {
      reason: reason && reason.stack ? reason.stack : String(reason),
      state: gameSnapshot()
    });
  });

  console.info('[GAME] renderer initialized');

  window.__starSquadronDebug = {
    getState: () => gameSnapshot(),
    hitPlayer: () => damagePlayer('debug'),
    setInvulnerable: (seconds = 0) => { player.invulnerable = Math.max(0, Number(seconds) || 0); },
    forcePlayerReady: () => { player.state = 'alive'; player.deathTimer = 0; player.respawnTimer = 0; player.invulnerable = 0; },
    restart: () => startGame(runStartLevel, 'debug-restart'),
    startLevel: (n) => startGame(n, 'debug-start-level'),
    pause: () => setPaused(true),
    resume: () => setPaused(false),
    showUpgrade: () => beginUpgradeChoice(),
    chooseUpgrade: (key) => chooseUpgrade(key),
    setUpgrade: (key, rank) => { if (UPGRADE_DEFS[key]) { runUpgrades[key] = clamp(Math.floor(Number(rank) || 0), 0, UPGRADE_DEFS[key].max); refreshDerivedPlayerStats(true); updateHud(); } },
    forceForwardAssault: () => { forwardAssaultPlanned = true; forwardAssaultUsed = false; forwardAssaultTimer = 0; },
    step: (dt) => update(clamp(Number(dt) || 0, 0, 0.25))
  };
  requestAnimationFrame(loop);
})();
