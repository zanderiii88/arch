# Archipelago build plan and story direction

Status: early development. This is NOT final playtesting, a final build or a release candidate. Work requires Stuart’s go-ahead. Deliver complete ZIPs; never deploy.

## Delivered: 0.14 — coming home

Hannah default name; cuter customizable player; Nat/Katie/Bruce artwork, sprites and dialogue; arrival and first shack memory; grandparents’ quiet woodland memorial; environmental mystery introduced; shrine carvings described without a fetch quest. v0.13 systems remain.

## Delivered: 0.15 — scenes and unrestricted travel testing

Close-up landing with mailbox/freezer and visiting crew; clean overworld; woodland clearing with two unmarked stones and dormant circular shrine; bottom dialogue with matching animated models; island-letter logo and live title scene; stronger Pinewatch art; Old Rayne Isle new-game default.

TEMPORARY TESTING OVERRIDE ENABLED: after first sleep, ferry always available and Pinewatch route gate bypassed. Actual repair-kit delivery progress is not changed. Only implemented islands can be visited (Old Rayne Isle, Pinewatch, Reedhaven and Emberstone as of 0.27). Normal shop/trader and postal schedules remain. Scheduled passenger travel, phones and camping are deferred during this testing phase.

FINAL RELEASE CHECKPOINT: remind Stuart to disable PLAYTEST15.freeFerryAfterSleep. Restore intended ferry schedules, genuine route progression and emergency-phone rules before final release. Calls accepted by21:00 arrive within one game hour; otherwise accommodation/camping with modest energy penalty. No repeated exhaustion trap.

## Delivered: 0.16 — research and the first glow

Iris pays one-time species and habitat research milestones at the home dock after the first sleep. Optional watch mode observes local fish without capturing them; uncovered rock-pool and woodland animals are recorded. Existing discoveries count. Ben and Jamie help repair the woodland spring basin using two timber and one driftwood. Their casual thanks leads to a brief cutaway and the first softly glowing shrine circle. No virtue counter, repeated grinding, deadlines, or loss of glow for ordinary play. Iris is a working name that can be changed later.

## Delivered: 0.17 — people at work

Ben sketches and inspects the spring channel. Jamie chops fallen wood, stacks logs and checks repairs. Iris observes the water and takes notes. Nat checks ropes and post; Katie arranges stock; Bruce checks his wares. All six use short, bounded walking routes in the existing close-up scenes, pause when approached, and resume after conversation. Routines yield to the player, pause in menus, and become quiet resting activities late at night. Background work does not create resources or change research/story progress. Cosmetic positions reset safely on reload. This is the foundation for future island residents, not a complete daily household simulation.

## Delivered: 0.18 — clear exits, easier taps and one character style

The Island button leaves dock/woodland scenes even during conversations or storage menus; walk-out markers offer a second exit. NPC markers follow their feet, with larger high-contrast ground dots and 56 CSS-pixel interactive controls. Person and marker taps share the same approach/talk action. All six NPCs and the player now use the same pixel-character renderer and matching animated portraits, while preserving individual hair, clothing, accessories and builds. Routines, research, saves and the temporary ferry override remain.

## Delivered: 0.19 — Reedhaven, through your lens

Third playable island with distinct willow/reed wetlands and connected boardwalks. Euan introduces a loan camera, optional 90-coin basic camera, four real wildlife subjects (grey heron, Eurasian otter, common kingfisher and emperor dragonfly), a draggable viewfinder and quiet observation. The album retains each species’ best photograph; special behaviours improve it. First heron outing pays 20 coins once. Euan’s framed prints cost 20 coins; framing your own photo costs 8, and a selected print can decorate the home shack. Flounder and grey mullet are local fishing/observation species. Research expands to 19 species and two new habitat milestones. The stilt cottage has independent repair and storage progress, using the shared cabin interior for now.

Ferry dialogue offers all three destinations. Temporary first-sleep exploration bypasses both island gates. Genuine Reedhaven progression requires the Pinewatch crossing and one additional landing kit; testing does not silently complete either donation project. Dock exit and shared pixel characters remain. Current routines still use existing landing/woodland scenes; Euan is present in his close-up hide conversation.

## Delivered: 0.20 — At home on Pinewatch

Jamie begins outside chopping fallen timber; Ben begins inside their new shared home/workshop. The separate green-roofed building preserves the forester’s cabin for player repairs/accommodation. Detailed interior art has two sleeping alcoves, workbench, drawing desk, storage scenery and log store, with floor collisions aligned to the furniture. The brothers move across the island/doorway/interior, carry logs, tinker, sketch and inspect; they yield/re-route around people and rest indoors after 21:00. Dialogue and menus pause their routines. Cosmetic positions reset on reload; their new home introductions persist. Home-island basin-repair visits remain for that existing story. This is not yet a full persistent household schedule.

Actions have matching axe/tool motions, chips and positional impacts/taps through the existing FX controls. The player's woodcutting also has a swing and matching impact. Every new player-directed line uses the chosen name; the player remains non-gendered. The current shared character renderer remains; the larger art overhaul is separate work.

## Historical: 0.21 — rejected style trial

Layered code-native pixel sprites for the non-gendered editable player and Jamie. Separate front/rear plus one mirrored profile, eight-phase walking, breath/blink/smile/wave, matching portraits, creator turning/waving and compatible appearance layers. New style is the default; Options → Character studio compares both models and the original style. The saved comparison switch does not change names, appearance choices, inventory or story progress. New models retain the established foot anchors and collision sizes; Jamie’s action grip and the player’s sleep/wake presentation are aligned.

Mini is the canonical spelling. Review this two-character trial before individual passes on the remaining cast. No claim of a complete cinematic-quality animation set or completed whole-cast redesign.

## Delivered: 0.22 — illustrated player and clothing

The approved illustrated player replaces the rejected player rig. Four head options, layered tees/shirts/jumpers/dresses, four bottom silhouettes, colours and footwear work with the small idle/walk/wave set in the creator, game and player portraits. Names and progress survive old/new saves. NPCs retain established models until individual passes; Jamie's supplied photo is the reference for short brown hair and a broad smile. Early development, not final playtesting. Temporary ferry exploration remains enabled.

## Delivered: 0.23 — fishing poses and character fixes

The illustrated player now holds, casts and reels using matched short/long-sleeved fishing art. A separate detailed rod/reel/line rig follows the grip, flexes with tension and stops cranking on release. Existing catch/research systems remain. Alternate heads join the body, hair colour leaves facial details alone, and player hats/facial hair are withheld until suitable art. Overworld player is 8% larger; navigation and indoor/conversation scales are unchanged. Early development, not final playtesting; temporary ferry exploration stays enabled.

## Delivered: 0.24 — illustrated brothers and a calmer start

Jamie and Ben use the approved illustrated art in routines and dialogue portraits. Jamie chops; Ben uses a screwdriver behind the existing workshop bench. Shared idle/blink poses and procedural steps support their movements. Title-to-game fading and enabled-track switching are in place, and automatic fishing prompts are removed. Early development; temporary ferry exploration remains enabled.

## Delivered: 0.25 — hands-on crab pots

New rocky-shore activity with a clear-water cage view, circular spool lowering/hauling, a gentler hold option, braking, soft/hard landings, wear/repair, persistent bait/progress/condition and keep/release catches. Existing pots migrate. Active time and needs continue; forced sleep preserves the job. Early development; exploration ferry access remains enabled.

## Delivered: 0.26 — the horizontal dock

Enter from the right and walk along a scrolling harbour. Three larger boats have separate berths and matching animated Nat/Katie/Bruce upper-body sprites behind rails/counters. Already moored boats stay put on entry; actual arrivals animate and greet once. Conversation pauses time and travel. Mail, freezer, research, crossings and a clear exit remain. Iris uses the shared character base until her individual design pass. Early development; exploration ferry access remains enabled.

## Character and story steps

1. Intended introductions: Nat on arrival; Jamie and Ben first; Mini and Mona next in their shared Emberstone cottage; Euan and Iris through Reedhaven; Stuart later after rumours. Existing test ferry access remains free across the four playable islands after the first sleep.
2. Mini explores far from the cottage; Mona tends its immediate surroundings and returns indoors. Separate rooms, shared history and affectionate bickering. They remain nice, mischievous witches; Stuart eventually lives in a secluded tower.
3. Euan travels between discovered wildlife spots without a permanent house. Iris can occupy the wetland research station; her name remains adjustable. Merchants travel aboard their boats.
4. Extend interruptible resident routines to those homes, add repairs/friendship scenes, and connect kind, patient, curious acts to quiet shrine changes. Keep casual island play available without mandatory social chores.

## Later Reedhaven updates

Reed weaving; scientist field hut; Ben’s waterway restoration; further lodge-interior detail and furniture. Expand photography to later islands and more wildlife behaviours. Keep upgrades optional; the basic camera remains useful. Euan can later wander between observation spots.

## Continuing Emberstone after 0.27

Basalt, springs, mineral field notes and the shared cottage are delivered in 0.27. Future additions: bathhouse, wildlife, a player restoration/accommodation building and Stuart’s tower encounter. Mini and Mona: nice black-haired mischievous witches, grandmother and granddaughter. Mini adventurous/impatient; Mona patient/home-loving; affectionate bickering. Mona potters immediately outside her home, tends plants and returns indoors; Mini explores farther across the island and comes home to bother her affectionately. Adapt the interruptible NPC routine system to doorways and island paths. Stuart introduced later through rumours of an old wise man; hood reveal and offended “I’m only 38”. Funny, wise, deeply believes in the player’s potential.

## Later island chapter — Frostmere and shrine story

Snow tracking, ice fishing, wildlife, lodge and observatory. Grandparents’ history, meaningful acts of kindness/patience/curiosity/care/community/hope. Shrine reflects acts through worn symbols gently glowing and the world healing, not physical collectible pieces. The player’s connection is remembered care and their own choices, no obligation from grandparents. Free play continues after resolution.

## Later

Restore personal boat with Jamie and Ben. More residents, islands, decor, friendships, optional letters and key/lock discovery.

## Cast notes

Player remains non-gendered; Hannah is the editable default name. Their shack belonged to beloved grandparents buried beneath trees. Returns after long absence to escape corporate life. Nat young Asian woman, midlength black hair, always on the go. Katie long blonde hair, well-to-do, complains about work but loves neighbours. Bruce brown hair/beard, lovable, horse-loving, mildly eccentric. Jamie larger build, handsome, short brown hair, repairs. Ben tall lean handsome, black curly hair and glasses, mechanisms/design. Euan wildlife photographer. More personal characters and names may be added or adjusted.

## Personal design references — October 2026

Hannah likes brown clothing and gold jewellery. Basic cocoa/brown/walnut clothes are available in 0.22; Katie's early introduction hints at more earthy clothes and gold jewellery in future stock. Gold jewellery is planned, not yet a purchasable/equippable item. Keep customization and story language non-gendered for renamed players.

Ben: Timothy Chalamet-like visual reference, lean and tall, black curly hair and glasses. Jamie: supplied photo, short brown hair, broad smile, larger stature.

Mini's cat reference is entirely black. Mona has a white chin-to-belly bib and small white socks. Their approved nice human-witch sprites, shared cottage and first Emberstone section are implemented in 0.27. Retain their established grandmother/granddaughter personalities and relationship.


## Delivered: 0.27 — Tea on Emberstone

Mini and Mona’s approved illustrated human-witch sprites, shared cottage/interior, independent cosmetic routines and introductions. A fourth playable basalt island, connected paths, warm-spring mineral field-note activity, red gurnard/saithe and coastal research. Six mineral stones per day; partial/full progress saves; four-mineral one-time Mona thank-you. Mineral notes leave specimens in place and do not fill inventory. No bathing game, resource crafting, player accommodation or Stuart encounter yet. The distant tower remains inaccessible scenery.

The temporary exploration ferry also reaches Emberstone after the first sleep. It does not complete actual landing-kit donations. The normal gate is Reedhaven access plus one Emberstone landing kit. Final schedule/phone/progression work remains outstanding; this is early development.

## Immediate next review

1. Phone feedback on 0.26 dock controls and 0.27 scene targets/exits, character scale, animation and mineral touch feel. Fix discovered issues before further systems.
2. Emberstone wildlife/collection variety and a separate abandoned building to repair and stay in, without taking over Mini and Mona’s cottage. More settled personality/routine dialogue; environment sound/animation polish.
3. Individual Iris/Euan art consistent with the approved cast, with camera poses for Euan/player as that activity grows.
4. Stuart’s later hood/reveal encounter, introduced through character rumours and a story beat after meaningful island/community progress. “I’m only 38!” Keep the player non-gendered.
5. Subsequent distinct biome islands, environmental/community story moments and patient shrine glow progression. No collectible virtue-token grind.

Before any release candidate or final playtest: disable the temporary ferry availability/unlock bypass and verify schedules, actual progression gates, emergency phone calls before 21:00, arrival within one game hour, and accommodation/camping after hours. Version numbers alone do not indicate readiness.

## Delivered: 0.28 — Hannah home-scene art trial

Chunky player creator and home shack integration, approved clothes and expressions, connected walk/idle/talk/wave. Review Hannah in-game before redesigning another character. Next: resolve feedback, develop the dedicated small overworld model and fishing/bed poses, then expand compatible wardrobe and consistent NPCs. Do not treat current full-outfit images as a completed modular wardrobe rig.

## Delivered: 0.29 — shared player and first matching siblings

Chunky player size variants throughout the existing scenes and activities, connected wave, fishing grips, Jamie/Ben sprites/portraits/work, separate map moorings and collision-free serialized close-harbour approach. Other NPCs retain their previous art until individually converted.

## Upcoming visual and island restoration work

- Review the small player, activity grips and brothers on a phone before extending the same pipeline to Nat, Katie, Bruce, Euan, Mini/Mona and eventually Stuart. Keep each personality and distinguishing traits; avoid racing through every redesign at once.
- Replace the jarring shack storage chest, mailbox and fish freezer with props that share the island/interior pixel scale and palette. These are still the previous assets in 0.29.
- Redesign island layouts as a separate, staged project, retaining a single phone-screen map and clear paths. Preserve each distinct biome and unique wildlife/activity.
- Build matching arrival and restored visual states. Begin with modest storm damage, scattered debris, overgrown or blocked routes and a few repairable structures. Keep the basic home, food/water, fishing and exploration available from arrival.
- Player help and community projects gradually clear routes, mend structures and improve habitats, making care visible rather than turning the start into a long compulsory clean-up grind. Connect key repairs and quiet recognition to the existing shrine/story progression; routine relaxing play remains optional.
- Plan save-safe geometry transitions: relocate an actor only when a repaired obstacle/path requires it; retain inventory, research, resident routines and map tap targets. Prototype one island restoration first before drawing every biome twice.

## Delivered: 0.30 — a simpler workshop

Workshop interior rebuilt from a shack-style empty room and separate furniture instances. Clear Ben/bench occlusion, safe approaches and furniture footprints. Jamie's chopping stays outside; indoor visits include mutual ambient chat with Ben. Layout is fixed, not yet a player furniture editor. Other chest/mailbox/freezer and island restoration art requests remain separate future work.

## Delivered: 0.31 — familiar faces at sea

Nat, Katie and Bruce share the approved chunky pixel style, with upper-body boat sprites and matching portraits, blink/talking/greeting states. Existing personalities and gameplay retained. Other NPC redesigns follow after review.

## Next interior layout pass — notes retained

The brothers’ beds should sit against opposite walls, with distinct Ben and Jamie halves that express their personalities. Add a forest-green rug in the middle and a simple kitchenette at the back. Use the same plain-room, separate-furniture approach for future NPC buildings. Ben stands behind his bench; Jamie chops only outside and chats or rests inside. Detailed furnishing layout can be reviewed later.

Later: Euan, Mini, Mona and Stuart in the shared style; cohesive chest/mailbox/freezer props; distinct island layouts and visible storm-repair improvements. These remain plans, not delivered in 0.31.

## Delivered: 0.32 — a softer landing

Simpler chunky boats in all views, recessed boat crew behind foreground gunwales, Bruce wave crop correction and standardised soft handwritten typography. Continue reviewing prop consistency and smaller-screen legibility. The brothers’ opposite-wall beds, distinct room halves, central forest-green rug and rear kitchenette remain a later layout pass. Early development continues.

## Delivered: 0.33 — little lives

First approved animal set integrated: mackerel, shore crab, octopus, chickens and kingfisher, with matching relevant inventory/collection icons and existing activity animation states. Shaped boat foreground overlays and larger water moorings on all four overworlds. Remaining fish, pool creatures, woodland and wetland species plus distant gulls await the shared-style pass. Euan follows the wildlife work. Brothers’ layout notes remain pending. Early development continues; temporary ferry exploration stays on.

## Delivered: 0.34 — a familiar shore

Approved simpler Old Rayne Isle scenery with existing water, smoke and bird motion plus a light crown breeze. Matching front-facing bucket/backpack/mailbox/chest/freezer atlas and icons. Three-state opening poses for mail and storage. Home pier/cottage footprints calibrated; Bruce's home mooring clear of southern rocks. Pinewatch/Reedhaven scenery, gradual repairs, other wildlife and Euan remain next work. This remains early development; temporary ferry exploration stays on.

## Delivered: 0.35 — closer to shore

Extended modular home landing and closer separate home boat berths, plus a boarding plank. Immediate tiny-island loading animation and larger island-letter title. Testing of current travel, storage, collision and boat interactions takes priority. Temporary ferry exploration stays on; this is early development.

## Next after reviewing 0.35

Address physical-phone feedback first. Then continue the distinct darker Pinewatch scenery and Reedhaven wetland art, preserving their existing activities and actual progression. Repair-driven before/after scenery is still future work. Other wildlife and Euan's character redesign remain pending. Brothers' opposite-wall beds, distinct personal halves, forest-green rug and kitchenette remain notes for a later layout pass.

## Delivered: 0.36 — a clearer landing

Single horizontal landing restored; closer reserved boat berths and service icons; direct mailbox/cold storage with attention glows; corrected Iris NPC identity and wave lower body; larger headings/actions and a new chapter caption; directional pixel exit arrows; modest dock decorations. Early development, with first-sleep ferry exploration still enabled.

## Planned next systems — cooking and a small buildable farm

Pantry starts with generous oil, salt and pepper. Counter/hob opens cooking with known recipes above scrollable fridge/pantry ingredients and a pan drop area. Ingredients are used directly from storage. Start with pan-fried mackerel (mackerel + oil); later seasoned mackerel and fried egg. Learn recipes from characters and cookbooks sold by Katie/Bruce. Short bouncing/sizzling/puff animation; store finished food in the appropriate storage, holding it ready if full. Forgiving prototype without burn timers or wasted combinations.

Small farm behind the shack is an optional build project: Jamie supplies a coop plan, player gathers wood and buys wire mesh, then builds a coop for the wandering chickens and collects eggs. Vegetable beds and one cow with a later shelter can follow. These systems are not in 0.36.

## Island scenery consistency

Review Pinewatch dock/fishing first, then Reedhaven/Emberstone, with appropriate biome vegetation, water, materials and fauna in the shared pixel style and elevated front-facing perspective. Shared interaction rules must not mean identical Old Rayne scenery at every dock/activity. This remains a dedicated later art pass.

## Delivered: 0.37 — A place at the landing

Three close-up boats move left into clear water, with mid-deck crew behind their boat sides. Iris stands clear of the right exit. A backed pixel exit remains on screen throughout scrolling. Larger atlas-based crate piles, lobster pots, rope and nets share collision/depth rules with the player. Pinewatch now has its own spruce/slate dock and fishing backgrounds with animated water. Other islands retain their current art. This update is supplied as changed files over 0.36; physical phone review is pending.

## Next priorities for review

1. Phone review of dock taps, boats, navigation, props and Pinewatch fishing, then resolve any observed regressions.
2. Cooking and pantry: accessible fridge/pantry ingredients, a few basic recipes, pan animation/sound, cooked food returned to storage. Starting oil, salt and pepper; later recipes from people/books.
3. Small buildable garden/farm behind the shack, starting with a coop using gathered wood and purchased wire; livestock and further crops later.
4. Continue distinct close-up scenery per island, matching its biome and the established elevated front-view pixel style. Review overworld layouts separately, including before/after community improvements.
5. Further NPC/prop polish after the current player, brothers, visiting crew and animals have been reviewed in game.

The project remains in early development. Keep the first-sleep ferry exploration override during these tests; restore normal schedules, genuine island gates and emergency-phone/camping rules before a separately identified final release candidate.

## Delivered: 0.38 — Something good on the hob

Dock props sit fully on the planks, use shared depth ordering/collisions and leave a walking lane. A larger rear mailbox and adjacent freezer have updated taps/approaches; boats sit further along the landing. The Old Rayne shack has three-recipe cooking, direct fridge/pantry ingredients, tap/drag pan input, sizzle/toss/steam, safe atomic cooking and refrigerated outputs. The new pantry and starter eggs migrate once; Katie sells replenishment groceries. Other cabins, recipe gifts/books and farming remain separate work. Changed-files update over 0.37; physical phone review pending.

## Next after this review

1. Review the kitchen and landing on phone, including dragging ingredients, shelf scrolling, putting meals in the pack and storage taps.
2. Buildable chicken coop using timber and shop wire, with a small, calm daily care/egg loop. A cow remains later scope.
3. Introduce recipe gifts and purchasable cookbooks when their characters/story encounters are ready; the known-recipe list is already persisted.
4. Continue distinct island scenes and NPC homes, plus before/after community cleanup, without turning shrine progress into a visible virtue checklist.

Still early development; the first-sleep ferry exploration override stays enabled until an explicitly identified final-release phase.

## Delivered: 0.39 — Two little neighbours

A reserved garden behind the Old Rayne shack becomes a buildable two-hen coop: 8 timber, 2 wire and Jamie's short assembly visit. Katie sells wire/feed; the feeder and bowl hold two days. Cared-for hens lay two eggs at each 08:00 morning, up to six in the nest. Missed care pauses laying without harming hens. Eggs collect into the backpack and use existing fridge/cooking/storage rules. Build/care/eggs persist; animation and cosmetic hen routes reset safely. New front-on/elevated pixel coop and garden art, matching player scale, peck/walk/flap/cluck, night roosting and a clear walk-out exit. Foreground dock props move six pixels up; rear crates occupy gaps between berths and leave clear crew markers.

## Next priorities after phone review

1. Review garden entry, building, feeding/water, sleep-to-eggs, pack capacity and fridge cooking on phone; fix observed issues first.
2. Recipe gifts from characters and purchasable cookbooks, using the saved known-recipe list. Review availability and economy before more ingredients.
3. Further distinct island scenery and homes, plus gentle community cleanup/repair changes. Continue matching the front-on, slightly elevated camera across props and buildings.
4. Expand the small farm only after its first loop is comfortable. A cow and additional animal care are later scope.

This remains early development. Keep temporary first-sleep ferry exploration enabled until a separately identified final-release stage, then restore normal ferry schedules, progression and emergency-phone/camping rules.

## Delivered: 0.40 — Made and shared

The player participates in coop construction with a measured hammer grip and unchanged lower outfit; Jamie uses the existing chopping/stump cycle. Floating hand timber is replaced by grounded workbench boards. Building appears in frame/wall/roof stages and Jamie stays visible while speaking. Katie gives eggy bread once after a completed dock conversation; a 28-coin cookbook teaches fish stew and garden hash without taking a pack slot. New recipe tabs, sideways cookbook scrolling, available/required ingredient counts, saved read/ownership state, and a quiet egg-ready count connect the existing systems. Old starter recipes and built coops are preserved. Changed-files update over 0.39; physical phone review pending.

## Next after this review

1. Phone review of shared construction, recipe learning/book purchase, cookbook scrolling and new meal storage/cooking. Fix observed issues first.
2. More character recipe gifts when their island encounters are ready, using the same saved knowledge system.
3. Review the first island's daily rhythm and economy across gathering, care, cooking, research and trading before adding another major activity.
4. Further biome-specific scenes and building repairs/cleanup. The shared construction presentation can be reused where suitable; a larger farm and cow remain later scope.

Still early development. Temporary first-sleep exploration stays on until an explicitly identified final-release stage.


## Delivered: 0.41 — A quieter daily rhythm

Consolidation release: cumulative overlay from 0.35 through 0.40.1; care reserve pips, empty/ready footer states, quiet care feedback, retained cooking scroll position, clear-pan icon, separated artwork drag/label scroll touch zones and narrower-screen grid. Includes all 0.40.1 animation corrections. Save migration tested at each supported base.

## Next after phone review

1. Address observed construction, cooking and daily-loop issues before expanding.
2. Review food/feed prices, recipe availability and animal research income through ordinary play.
3. Continue distinct island scenes and gentle cleanup/repair changes; additional recipe gifts as encounters are developed.
4. Cow and larger farming remain later scope.

Early development continues. The temporary first-sleep ferry override remains enabled.


## Delivered: 0.42 — A little room to pass

One optional Pinewatch woodland gate project, new pine workyard backdrop, free branch clearing, 6 timber + 1 wire repair, all three existing work animations, distinct Ben latch contribution, permanent world/yard changes and a second independent shrine glow. Save-safe interrupted assembly and acknowledgement. Project remains available without forcing story progression. Cumulative overlay and save migration from 0.35 through 0.41, including 0.40.1.

## Next after player review

1. Check the yard marker, routes, tools/bench layering, completion conversation and return route on phone. Fix observed issues first.
2. Review costs and ordinary timber/feed/food income through play; no broader economy changes yet.
3. Expand before/after changes one small project at a time, keeping each island distinct.
4. Later character encounters, recipes and repairs can deepen the story; avoid visible virtue scores and mandatory daily chores.

Early development continues. Temporary first-sleep ferry exploration remains enabled. Restore intended schedules, island progression gates and emergency-phone/camping rules before final release.


## Delivered: 0.43 — Boards for the neighbours

The gate project is retired. Pinewatch’s community timber order introduces marked tree cutting, a persistent sawing table, ten donated boards and optional extra-board consignments, with two-day payments through the mailbox. Bruce’s saw-guide exchange uses three protected Old Rayne pirate doubloons. The brothers explain fair community timber pricing and plant the wise-old-man story seed. Existing paid gate materials are credited once; shrine progress is preserved.

Mini and Mona now discuss medicine herbs and the future river rune search, with extra excited catnip expressions. These are dialogue seeds, not a completed herb/panning chapter.

## Next after phone review

1. Review thumb stroke comfort, table/tool contact, saw sound and haptic intensity, tree cutting, mail payment and partial-log recovery. Fix observed issues first.
2. Tune board prices/regrowth against food/feed and other gathering income through ordinary play.
3. Plan Mini and Mona’s medicine herbs and river rune recovery as a distinct island chapter. Mini explores impatiently, Mona teaches patiently; both love catnip. No real-world medicinal advice or recipes are implied.
4. Later repair orders should make useful community changes rather than arbitrary resource gates.

Still early development. Keep temporary first-sleep ferry exploration enabled; restore intended travel schedules, progression gates and emergency-phone rules before a separately identified final-release stage.

## 0.44 animation consistency checkpoint
Dedicated registered axe/mallet poses, gesture-driven hand-saw frames and five full cycles per board are now integrated. Chopping impacts occur at contact. Matching enlarged pine/stump props and whole-face Mini/Mona catnip expressions replace temporary art. All future art follows the established chunky Hannah style unless explicitly requested otherwise. Keep tools connected to hands, feet registered, scenery independent, and check every frame plus game-scale playback. Preserve supported lower-body variants. Phone haptic/audio balance remains a device check. Herb medicines and river rune recovery remain future gameplay, not implemented here. Temporary ferry exploration remains enabled until explicit final-build readiness.
