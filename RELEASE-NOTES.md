# 0.35.0 — Closer to shore

- Home landing extended seaward, with short north/south fingers and a ferry boarding plank, using modular chunky pixel timber. The same extension appears on the title scene. Walkable geometry includes the extensions.
- Home ferry, shop and trader have separate, closer berths around the landing. Home map vessels use 98/90-pixel widths to fit the compact port clearly; away-island art and berths are unchanged. Approaches remain from the left, and arrival/first steps join the boarding plank.
- Instant inline loading illustration: a tiny island, gently swaying palm, passing cloud/sun and water rings. No additional image download or artificial delay. Reduced-motion settings stop CSS animation.
- Island-letter title uses more screen width and taller lettering with a light outline/shadow for contrast. Existing title sea, birds, chickens and ferry motion remain.
- Saved names, belongings, research and island progress retained. Temporary first-sleep ferry exploration remains enabled. This is early development, not final playtesting or a release candidate.

Testing: connected home destination routes and extension access, pier/boat separation, dialogue time pause, dock exit, storage transfer/save reload, fishing/pots, four-island travel, reduced motion and cached asset/ZIP overlay verification. Physical-phone review remains.

# 0.34.0 — A familiar shore

- Old Rayne Isle now uses the approved simpler chunky island artwork, including the title scene. Existing waves, surf, chimney smoke and seabirds remain animated; tree crowns have a gentle one-pixel breeze.
- Front-facing, slightly elevated bucket, backpack, mailbox, wooden chest and chest freezer art. Matching relevant interface icons use the same atlas.
- Mailbox door, chest lid and freezer lid open through three registered poses. The prop opens in the scene and in its storage header; closing returns it to rest. Storage transfers and letter controls retain their existing behaviour. Ambient animation off chooses a steady pose.
- Home shack footprint and both pier footprints calibrated to the new map. Bruce's home mooring moved clear of the southern rocks; other island maps retain their existing art and moorings.
- All previous content and saves included. Temporary ferry exploration after the first sleep remains enabled. This is early development, not a release candidate or final playtesting.

Validation: all home destination route pairs, house/deep-water collisions and pier access; prop opening/closing/reduced-motion states and bounded cache; stock transfer and save/reload; changing water versus stable reduced motion; prior wildlife/merchant/workshop/player/four-island activity regressions; browser checks and ZIP byte verification. Physical phone testing remains.

# 0.33.0 — Little lives

- Approved chunky mackerel, shore crab, octopus, chicken and kingfisher sprites now render in their existing game scenes. Tail swishes/caught wriggle, claw/leg movement, arm curls/retreat, walking/pecking and perched/blinking/wingbeat states follow existing activity state. Ambient animation off selects steady poses.
- Matching mackerel/crab/octopus/kingfisher inventory, bucket and collection icons. Kingfisher photographs/album snapshots use the same art. Other species keep their earlier artwork pending the next wildlife pass.
- Foreground boat sides now follow a per-vessel rail contour, drawn over crew. Keepers sit three display pixels lower; head/hand animation remains clear.
- Overworld ferry increased from 86 to 112 logical pixels wide; visiting boats to 104. Measured water moorings for all four islands place hulls below their painted landing. Restored ferry drawing in away-island renderers, where the earlier map overrides did not paint it. Close-up berths, schedules and temporary exploration rules are preserved.
- Existing saves, species IDs, catch/research/photography rewards and collection counts retained. Complete previous content included.

Validation: five-species renderer/icon/fallback and reduced-motion checks; real mackerel catch/crab bucket/save reload; kingfisher photography/research; four-island water moorings and ferry approach/exit; prior workshop/player/boat/activity regressions; production renders and complete ZIP checks. Physical phone review remains.

# 0.32.0 — A softer landing

- Replaced ferry, shop and trader hulls with simpler chunky pixel boats: broad shading, warmer outlines and less small detail. Same hull art appears on the overworld, title, crossings and close dock views.
- Repositioned each keeper inside an open deck well. The foreground gunwale hides the lower torso instead of leaving a flat waist edge above the hull. Character and rail share the boat’s arrival/bobbing transform.
- Widened Bruce’s near-arm wave assembly to retain the complete hand while keeping his head and central torso fixed.
- Standardised interface typography on bundled Patrick Hand, exposed as IslandRound: menus, settings, inventories, dialogue, letters, bulletins and canvas labels. Removed serif/monospace overrides and softened heavy button/header weights. No external font request required.
- All earlier content, saved belongings/progress, schedules and temporary ferry exploration retained.

Validation: merchant animation/dialogue/save checks, full player/activity/four-island and workshop regressions, production dock renders, script/assets/cache/complete ZIP verification. Physical phone review remains.

# 0.31.0 — Familiar faces at sea

- Nat, Katie and Bruce now share Hannah and the brothers’ chunky pixel character style. Their upper-body boat models, conversation portraits, dock buttons and people-journal portraits use the same sprite atlas.
- Fixed head and torso registration across idle, blink, two mouth poses and two near-body greeting poses. Only fingertips move during the greeting; no alternating whole-body or detached-arm motion.
- Different greeting rhythms for each keeper. Mouth animation settles after a short line and restarts on the next line; conversations continue to pause game time and boat departures.
- Existing character names, dialogue, shops, ferry/mail rules, meetings, save IDs and all earlier content retained. No other NPC redesigns in this release.

Validation: production-canvas renders; six-state renderer, reduced-motion, dialogue timing/pause, save/reload and dock-exit tests; workshop routines/routes and four-island/player/activity regressions; script, asset, cache and byte-verified complete ZIP checks. Physical phone review and sound timing remain to test.

# 0.30.0 — Room to breathe

- Simplified Pinewatch workshop room matches the first shack: plain warm floor/walls and separate beds, chairs, chest, plant, wall shelf and workbench. Plenty of open floor; no baked-in tool clutter or log pile.
- Ben clearly stands behind the bench. Shared furniture/actor depth sorting hides his lower body naturally, and an explicit front approach keeps him reachable for conversation.
- Jamie only cuts wood outdoors. Indoors he visits Ben for a quiet chat or takes a break. Ben pauses working and tool sounds while they chat. No compulsory dialogue popup.
- Revised furniture footprints, resident plans and safe night positions retain clear routes to the exit. Existing saves, meetings, inventory and other scenes are included.

Validation: workshop route/footprint, NPC routine/chat/day/night, interaction/exit, save/load and ferry regressions; previous player/boat/island checks; production-canvas and live desktop browser inspection; script/cache/ZIP verification. Phone testing remains. Furniture is visually modular but not yet player-rearrangeable in the brothers' home.

# 0.29.0 — Across the islands

- Hannah's chunky sprite across the overworlds, local scenes, activities and portraits, at cached map, room and close-up sizes.
- New close wave arm poses with stationary shoulder, torso and feet. Matching fishing poses, hand-to-rod grip and bite expression; crab-pot rope follows the hand.
- Jamie and Ben now share Hannah's art style, including world models, matching portraits, walking and their woodcutting/screwdriver work poses. Other NPC redesigns follow later.
- Separate map moorings for ferry/shop/trader; map/title/crossing hulls match the detailed boats. Close-up arrivals/departures use an open-water approach and one moving vessel at a time, avoiding moored boats. Dialogue and existing docked-on-entry behavior remain.
- Save key, belongings, story progress and temporary ferry exploration retained. Complete previous content included.

Future notes retained: shack chest/mailbox/fish freezer art consistency; distinct island layout redesigns; an initially storm-damaged world that visibly improves through repairs, environmental care and community help. These are not implemented in 0.29.

See ART-v29.md for scope and verification. Physical phone testing is still needed.

# 0.28.0 — Hannah comes home

- Approved chunky pixel player in the creator and Old Rayne Isle's home shack only. Other activity/overworld rendering and NPCs are unchanged.
- Four-pose distance-driven walk, breathing, blinks, closer shoulder-anchored wave and brief talking mouth animation. Left/right facing stays stable while moving vertically; arrival at a destination returns to idle.
- Three approved outfits: cream shorts, camel skirt and tobacco trousers with the brown top, bob and sandals. Creator expression/movement controls are preview-only. Unsupported appearance controls are hidden for this art trial; saved values remain intact.
- Home wardrobe changes clothes or triggers a wave. The player conversation face uses the same model. Existing room collisions, bed sequence, fridge, chest and exit remain.
- Original save key and household/progression data retained. Temporary ferry exploration after the first sleep remains enabled.

Validation: focused production-controller tests and prior island/activity regressions passed; live browser creator and home/dialogue checked; atlas PNGs, JavaScript syntax, cache references, version aliases and complete ZIP contents validated. Physical phone touch, audible output and extended sessions remain to review. Sleeping/waking retains the existing movement/clock sequence; dedicated new bed/stretch poses are not included.

# Archipelago 0.27.0 — Tea on Emberstone

Early development. Not a final build, release candidate or final playtest.

- Fourth playable island: Emberstone, with distinct basalt/ochre terrain, warm springs, connected collision-aware paths, a cottage and a separate coastal fishing backdrop.
- Mini and Mona have the approved illustrated human-witch designs, matching face portraits, blink/wave/tea poses, mirrored facing and gentle ambient motion. Mini explores; Mona stays close to the cottage; both enter/leave their home and settle inside at night. Bottom conversations use the chosen player name without gendered player language. Foot markers follow residents and render behind characters. Routines reset safely on reload; meetings persist.
- New cottage interior has two sleeping corners, tea table, explorer desk, furniture collisions, larger indoor player, responsive walking, person approaches and an always-available Island exit. It is an NPC home, not yet player accommodation.
- Mineral shelf: brush grit by dragging, then tap uncovered quartz, agate, obsidian or calcite to record a field note. Six irregular stones per game day; partial/full brushing survives closing and reloading; notes persist without inventory slots. Mona gives 50 coins once for the completed four-mineral notes. Mineral objects remain in place; there is no resource extraction/crafting system yet.
- Red gurnard and saithe use existing fishing/observation, catch/release, cold storage and research. New coastal research milestone. Existing gentle tension and no-bite chances remain.
- Temporary ferry exploration remains on after the first sleep. Genuine Emberstone route progress is separate: Reedhaven route plus one landing kit. Conversations pause world time and boat travel. New scenes retain normal time/needs and away-island rescue on forced sleep.
- Complete previous builds included. Existing save format retained; new fields have defaults and validation. The distant tower is scenery; Stuart and further story/shrine developments are not introduced here.

Validation: production-controller tests cover first-sleep travel, all ordered island routes, collisions, NPC routines/approaches/conversations, cottage exit, pointer brushing/cancellation, partial/full saves/day renewal, duplicate notes/reward prevention, fish catch/observation/research, old saves, night and forced sleep. Crab-pot, brothers/workshop, Reedhaven/Euan and household regressions pass. Production-canvas scenes, portrait art and animated/reduced-motion selections inspected; script/asset/cache and complete ZIP bytes checked. No live browser/device test was available. Phone layout/touch, audible sound and longer sessions remain to review.

Next: user phone feedback first; then Emberstone wildlife and a more distinctive home/staying project, Euan/Iris individual sprite art, and Stuart’s later introduction. Final progression/ferry/phone rules remain a separate required checkpoint.

Install: extract this complete ZIP into the repository root, replace matching files, commit and push. No intermediate release is needed.

---

# Archipelago 0.26.0 — Along the landing

Early development. Not a final build, release candidate or final playtest.

- Replaced the close-up dock with a 1280-unit horizontal harbour and following camera. Enter from the right; walk along the broad pier, with collisions preventing movement into the sea, onto boats or through dock props. NPC/facility buttons route the player across the full scene. A visible ground exit and persistent header Island button return to the overworld.
- Larger detailed ferry, shop boat and trader boat share three separate berths. NPCs remain aboard behind the actual front bulwark/counter image layer. Nat, Katie and Bruce have matching simplified pixel-art torso sprites and face portraits with idle blink, greeting and talk poses. The player retains saved clothes and appearance. Iris uses the shared illustrated player base and matching portrait while her individual design remains future work.
- Dock entry snapshots the current mooring state. Already docked boats are drawn at their berths immediately; visiting the scene never restarts their arrival. A stale/reset transient arrival well into an existing scheduled visit settles before the entry snapshot, without a replayed horn or greeting. A genuinely in-progress arrival retains its current position.
- Boats that begin/finish arriving during the visit travel into view, sound the existing horn once and greet with a small Ahoy bubble/wave. NPC body taps and generously sized foot targets work once the boat is docked. Markers stay directly below the NPC's projected feet and follow the shared boat position/bob. Departure removes that interaction and cancels an unfinished walk toward the person, without trapping the player.
- Conversations explicitly pause both game-time advancement and all boat progress. Boat positions and greeting timers hold while speaking; portrait/idle and sea animation can continue. Existing trade/storage menu pauses remain. Boats advance normally while the player uses the crab-pot activity, so a visit can be underway before they enter the dock.
- Mailbox, request indicator, produce freezer, ferry boarding, scientist research, shops, trade and existing route gates remain. Temporary constant ferry availability and bypassed island unlocks after the first sleep remain enabled; this ferry is held moored consistently rather than replaying a hidden arrival.
- Complete earlier game content, including 0.25 crab pots and 0.24 illustrated brothers/start transition, is included. No save-format change is required; the new camera and boat greeting presentation are transient.

Validation: real production controller tests for docked entry/re-entry, one live-arrival horn/greeting, overdue-visit recovery, dialogue time/departure freeze, camera and long-pier collision routes, foot-target alignment, mailbox/freezer/research access, departure cancellation, island exit, test ferry and save round trip. New merchant portrait/rail scene renders and reduced motion inspected. Crab-pot persistence/input/wear/claim tests pass, including forced sleep and legacy pots. Character/workshop/title-transition tests and fishing regressions pass, including 384 fishing clothing poses. JavaScript syntax, asset/cache paths and complete ZIP bytes checked. Live browser/device testing remains unavailable in this session; phone touch feel/layout, scrolling and audible output need playtesting.

Still planned: bespoke Iris/Euan art, Mini and Mona's designs and home, later islands/story/progression, normal ferry/emergency-phone rule review before final release. This build does not introduce those later chapters or integrate Stuart.

Install: extract the complete ZIP into your repository root, replace matching files, commit and push. No intermediate release is needed.
