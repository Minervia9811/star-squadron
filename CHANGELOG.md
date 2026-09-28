# Changelog

Newest first.

## v2.11.9
- Removed the easter eggs and their debug controls (and the `F7` hotkey).
- The seeded leaderboard scores now use generic callsigns (ACE, VIPER, NOVA).

## v2.11.8 — planets, comets and more
A celestial layer now scrolls past behind the action, themed per sector:
- **Planets** (up to two at a time, kept toward the sides so the centre stays clear), often with an orbiting **moon**:
  - Outer Gate: a blue colony world with city lights, plus rocky and ice worlds
  - Drift Lanes: banded and ringed gas giants
  - Convoy Graveyard: a shattered planet with a chunk missing
  - Burning Reach: lava worlds with glowing cracks
  - Silent Orbit: ice moons
  - Hive Heart: infested pink worlds
- **Comets** with coloured tails. They're frequent in the Burning Reach (sun-grazers) and rare in the Silent Orbit.
- **Asteroid fields** that tumble through. The Convoy Graveyard has the most, and the Reach's asteroids glow.
- **Distant spiral galaxies** that turn slowly.

When you enter a new sector, the previous sector's worlds speed off and the new sector's first planet appears within a few seconds. Each planet is painted once and cached, so there's no frame-rate cost. The debug viewer has **PLANET GALLERY** (all eight planet types side by side) and **SPACE TRAFFIC** (a galaxy, planet, comets and an asteroid field in the current sector).

## v2.11.7 — sector backdrops
Each sector now has its own playfield background that matches the story, with a 1.6-second crossfade when you move into the next sector:
- **The Outer Gate:** the broken Bastion ring, with orange warning lights blinking around it.
- **The Drift Lanes:** violet shipping lanes, with beacons pulsing down each lane.
- **The Convoy Graveyard:** a dead freighter in the distance, with wreckage tumbling past.
- **The Burning Reach:** a huge star breathing at the top-left, with embers streaming off it.
- **The Silent Orbit:** a dark planet horizon with observatory dishes, a slow green aurora, and one blinking light.
- **The Hive Heart:** a living membrane of veins that pulses with a double heartbeat, with spores drifting down.
- **The Regrown Hive (Endless):** the same membrane in violet.

Star colors and brightness change with each sector. The static art is painted once per sector and cached, so there's no measurable frame-rate cost. In the debug viewer, SECTORS + BACKDROPS steps through all seven.

## v2.11.6
- **Lore screen** (main menu and pause): the story of the Lantern Line, one entry per sector with its command ship and the castes that first appear there, plus the ending. Sectors stay hidden until you reach them in the campaign, and the ending unlocks when you finish it.
- **Debug is hidden.** The DEBUG / TEST buttons are gone from Controls and Pause. Enter `↑ ↑ ↓ ↓ Space` on a menu, the pause screen or Game Over to open it; W/S also work for up/down. The F6 and F8 hotkeys only work after the code has been entered that session.
- **Animation viewer** in the debug screen plays every animation on an empty playfield:
  - Each of the six boss deaths
  - Boss briefings and NEW CONTACT briefings (each press cycles to the next one)
  - Enemy hit flash, enemy explosions and the player explosion
  - Pickup callouts, sector banners, and the Forward Assault warning
  - It returns to the debug screen when an animation finishes, or on Esc. It's disabled during a run so it can't disturb a game in progress.

## v2.11.5
- **Score-based extra lives removed.** Lives now come only from pickups and boss kills.
- **Boss death animations:** each command ship has its own death sequence.
  - The Warden cracks down its seam and splits in two.
  - Widow Vector's web snaps strand by strand, then it implodes.
  - Iron Maw's hull is chewed up by explosions as it sinks.
  - Solar Regent overloads into a white-gold nova.
  - Null Bishop is pulled into a point and switches off like an old CRT.
  - Queen Vesper's crown shatters and her carapace cracks before a final burst.
  - Escorts explode with their command ship, and the upgrade screen waits for the animation to finish.
- **Lore rewrite:** every boss and enemy entry now follows one storyline (see **Story** above). The six sectors appear in the HUD, briefings and upgrade screen.

## v2.11.4
- Briefings are always 10 seconds long. Repeat views are no longer shortened.
- **Twin Fire rebalance:** it now fires two bolts at your normal fire rate. It used to also double your fire rate, which made it roughly four times your damage and stacked with Fire Control upgrades.
- Twin Fire lasts 7 seconds, or 9 seconds during boss fights (it was 9 and 12).
- Twin Fire drops less often. Normal-enemy drop chance is capped at 9% (was 14%), and only 30% of escort drops are Twin Fire (was 48%).
- Health, shield and life pickups collected when you're already full now give a +500 score bonus. They used to turn into Twin Fire; now only 1 in 5 surplus pickups does, and for a shorter time.
- All of these values are in `TUNING`.

## v2.11.3
- **In-game HUD:** score, level and wave (or BOSS), a PRACTICE or ENDLESS tag, and the current sector, in the top-left corner.
- **Auto-pause** when the window loses focus or is minimised.
- **Boss HP bar** has a marker at 50%, where the boss switches to its second phase. The marker disappears once that happens.
- **Run stats** on the Game Over and Campaign Complete screens: accuracy, enemies destroyed, best streak (kills without taking a hit) and time played.

## v2.11.1 — feedback pass
- Regular enemies flash white when hit, like the bosses, and armored enemies show a small health bar once damaged.
- NEW CONTACT and boss briefings last 10 seconds every time, and Space skips them.
- Power-up pickups name themselves where they're collected (for example TWIN RAPID FIRE with the bonus under it). The corner notice stays up longer, and Twin Fire shows a labelled countdown bar in the bottom-right.

## v2.11 — campaign balance, fixes, and cleanup

### Difficulty (the campaign was stalling around Level 4)
All knobs live in the `TUNING` object near the top of `game.js`.

- **Two hull points per life** before upgrades (was one), so one mistake no longer costs a ship.
- **Boss kills restore one life.**
- **Formation fire ramps with level** (about 1.35–1.8 s between shots at Level 1, down to about 0.5–0.95 s at Level 30) and slows as a wave is thinned out.
- **Bug fix:** the second shot during a dive was re-rolled every frame until it succeeded, so it fired almost every time. It now rolls once per dive and starts at Level 6 (was Level 3).
- **Forward Assault** starts at Level 8 (was Level 4).
- **Early armor growth** is 4.5% per level for Levels 1–10, then 7.2% as before.
- **Boss checkpoints:** after clearing a boss level in a leaderboard-eligible campaign, Game Over offers **CONTINUE FROM LEVEL N (½ SCORE)**. The run keeps its upgrades and stays leaderboard-eligible. **Retry Level** is still a practice run.
- **Escort farming:** each repeat escort summon is worth 15% fewer points (minimum 25%), and escort drop chance falls with it.

### Fixes
- Saved Campaign scores could vanish on reload once Endless had 40+ higher entries. The leaderboard now keeps the best 40 per mode.
- The playfield keeps its 1080×820 shape at any window size instead of stretching.
- Enemy and boss sprites are drawn square (they were squashed).
- Boss sprite fixes: Queen Vesper's missing lower-right block, plus mirrored side pods on the Warden, Maw, Regent, Bishop and Vesper.
- The boss HP readout no longer shows fractions like 137.5.
- New-record banners now use their intended pink styling.
- The tests normalize Windows CRLF line endings before patching `game.js`.

### Quality of life
- Briefings can be skipped with Space or Enter, and NEW CONTACT briefings last 10 s the first time and 5 s on repeat views.
- `M` toggles mute, and the setting is remembered.
- Pressing `R` during combat now needs a second press within 1.2 seconds.

### Performance and maintenance
- Sprite glows are pre-rendered once instead of using `shadowBlur` every frame, and the slow `ctx.filter` highlights were replaced with additive redraws.
- Background, vignette and laser gradients are cached.
- The bullet collision loop no longer copies the enemy array for every bullet.
- Electron was upgraded from 38 (end-of-life) to 44. `main.js` now blocks new windows and navigation, and handles the current `console-message` event shape.
- A Content-Security-Policy is set in `index.html`.
- `styles.css` was flattened from its v1.6–v2.4.1 override layers, and dead selectors were removed.
- Dead code was removed: the old high-score HUD, the hidden runtime spans, and `chooseDiver`. The Widow boss aims at a predicted position without moving the player.
- New `scripts/test-balance.js` covers the leaderboard cap, extra lives, checkpoints and escort decay.

## v2.10 pacing director

Difficulty spikes are smoothed by limiting simultaneous divers, spacing coordinated attacks, adding recovery windows after heavy pressure, reducing Forward Assault overlap, and using a gradual level/wave pressure target.

## v2.10: boss escort progression fix

Boss escorts are now explicitly excluded from normal formation-wave completion.
Eliminating the last guard during any of the six boss encounters no longer
queues another wave or restarts the boss fight. The fix applies to campaign,
Mission Select/Boss Archive practice, and Endless Mode. Boss HP still determines
victory; defeating the boss clears surviving guards and moves to the upgrade
screen (or campaign victory after Level 30). Run `npm test` to exercise
regression checks across all six bosses and the normal escort-wave sequence.

## v2.10: Final-score and record rules

- The game no longer flashes a new-record announcement while you are fighting. Campaign records are evaluated on Game Over or after Level 30, and Endless records on Game Over.
- A **new high score** means beating the prior highest score on the relevant mode's leaderboard, not simply reaching a fixed point threshold or entering a partly empty top-ten table. The notice appears on the final results panel and remains visible.
- Updated default records to better fit 30-level scoring: Campaign 250,000 / 220,000 / 195,000; Endless 500,000 / 440,000 / 390,000. Existing locally saved player scores are preserved.
- Score submission stays locked until the run has ended. Mission Select, Boss Archive, mid-campaign retries, and debug starts are practice, not leaderboard-eligible runs.

## v2.9 Boss Phase Identity
Bosses now enter named, mechanically distinct second phases at 50% HP. Boss escorts have a higher chance to drop typed combat resources, and every boss phase transition guarantees a Twin Rapid Fire pickup.

## v2.5 — enemy sprite overhaul

Nine regular enemies now have genuinely different 64x64 sprite silhouettes, replacing the earlier near-identical recolored bodies. Their existing names, lore, first-appearance levels, stats, team tactics, and bosses are preserved.

| Enemy | Recognition cue | Motion tell | Projectile |
| --- | --- | --- | --- |
| Skitter Scout | Small arrow-shaped dart | Fast side twitch | Small blue pellet |
| Crimson Mantis | Long open scythe forelimbs | Scissor-arm flex | Split red blade |
| Crown Beetle | Broad plated round shell with crown | Heavy shell bob | Gold hex-plasma |
| Needlewing | Narrow vertical accelerator spine | Stays conspicuously still | Long green needle |
| Void Weaver | Spider-like X legs around a central core | Legs contract before pincer | Purple gravity cross |
| Rift Rammer | Broad triangular reinforced prow | Forward pitch and exhaust flare | Teal wedge |
| Sun Bomber | Twin glowing side-mounted plasma sacs | Pods pulsate before firing | Burning orange orb |
| Phantom Wasp | Swept ghost wings, segmented waist, long stinger | Faint spectral flicker | Thin pale stinger |
| Shrapnel Kamikaze | Cracked asymmetrical burst mine | Core swells before detonation | Magenta shrapnel shard |

The Enemy Archive and NEW CONTACT briefing now include visual identification cues.
Enemy bullets have species-specific shapes, not merely different colors.
**Art-pass balance note (v2.5):** ship hitboxes, damage, firing rates, spawn mix, campaign progression and boss mechanics were unchanged for the sprite overhaul; subsequent versions have updated boss mechanics.

## v2.4.1 layout hotfix

Removing the old High Score HUD in v2.4 left a fixed 42-pixel grid row.
The canvas and title menu were accidentally placed in that row, causing
most of the window to appear black. This build gives the canvas the full
available height, retains a separate row for touch controls, and allows
short-window menus to scroll rather than clip. Gameplay and saved scores
are unchanged.

## v2.4 score/run structure
- Campaign always starts at Level 1; Continue was removed.
- Mission Select and Boss Archive starts are practice runs and cannot post leaderboard scores.
- The always-visible High Score HUD was removed.
- Campaign and Endless now have separate local top-ten boards.
