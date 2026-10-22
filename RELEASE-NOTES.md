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
