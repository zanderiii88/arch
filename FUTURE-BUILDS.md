# Archipelago build plan and story direction

Status: early development. This is NOT final playtesting, a final build or a release candidate. Work requires Stuart’s go-ahead. Deliver complete ZIPs; never deploy.

## Delivered: 0.14 — coming home

Hannah default name; cuter customizable player; Nat/Katie/Bruce artwork, sprites and dialogue; arrival and first shack memory; grandparents’ quiet woodland memorial; environmental mystery introduced; shrine carvings described without a fetch quest. v0.13 systems remain.

## Delivered: 0.15 — scenes and unrestricted travel testing

Close-up landing with mailbox/freezer and visiting crew; clean overworld; woodland clearing with two unmarked stones and dormant circular shrine; bottom dialogue with matching animated models; island-letter logo and live title scene; stronger Pinewatch art; Old Rayne Isle new-game default.

TEMPORARY TESTING OVERRIDE ENABLED: after first sleep, ferry always available and Pinewatch route gate bypassed. Actual repair-kit delivery progress is not changed. Only implemented islands can be visited (Old Rayne Isle, Pinewatch and Reedhaven as of 0.19). Normal shop/trader and postal schedules remain. Scheduled passenger travel, phones and camping are deferred during this testing phase.

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

## Next activity presentation steps

1. Review the fishing activity and clothing at phone size, refining any remaining joins before adding more pose sets.
2. Redesign the close-up dock as a mostly horizontal right-to-left approach. Large arriving/departing boats, NPC upper bodies behind rails/counters, wave/horn/greeting on arrival, large touch areas and a clear right-hand island exit. This remains planned and is not implemented in 0.23.
3. Create Jamie's matching illustrated model from his supplied reference: short brown hair, broad smile, larger build; then portraits, walking and chopping. Ben follows using the lean, curly black-haired reference with glasses.

## Next character and story steps

1. Refine the illustrated player garment joins, work poses and appearance variants. Create Jamie using his real-world photo in the same illustrated style, including portraits, walking and woodcutting, before extending to the cast.
2. Intended introductions: Nat on arrival; Jamie and Ben first; Mini and Mona next in their shared Emberstone cottage; Euan and Iris through Reedhaven; Stuart later after rumours. This is story direction, not a claim that Emberstone or its residents are implemented. Existing test ferry access remains free across the three currently playable islands.
3. Mini explores far from the cottage; Mona tends its immediate surroundings and returns indoors. Shared history, separate rooms, affectionate bickering. Stuart has a separate secluded tower later on Emberstone.
4. Euan has no permanent house. Discover him at Reedhaven, then let him move between wildlife spots on discovered islands. Iris can occupy the wetland research station; her name remains adjustable. Nat, Katie and Bruce continue to travel aboard their boats.
5. Extend outdoor/indoor resident routines to those homes, add later repairs/friendship scenes and connect kind, patient, curious acts to quiet shrine changes. Keep casual island play available without mandatory social chores.

## Later Reedhaven updates

Reed weaving; scientist field hut; Ben’s waterway restoration; further lodge-interior detail and furniture. Expand photography to later islands and more wildlife behaviours. Keep upgrades optional; the basic camera remains useful. Euan can later wander between observation spots.

## Following island chapter — Emberstone

Basalt, springs, mineral hunting, bathhouse and wizard tower. Mini and Mona: nice black-haired mischievous witches, grandmother and granddaughter. Mini adventurous/impatient; Mona patient/home-loving; affectionate bickering. Mona potters immediately outside her home, tends plants and returns indoors; Mini explores farther across the island and comes home to bother her affectionately. Adapt the interruptible NPC routine system to doorways and island paths. Stuart introduced later through rumours of an old wise man; hood reveal and offended “I’m only 38”. Funny, wise, deeply believes in the player’s potential.

## Later island chapter — Frostmere and shrine story

Snow tracking, ice fishing, wildlife, lodge and observatory. Grandparents’ history, meaningful acts of kindness/patience/curiosity/care/community/hope. Shrine reflects acts through worn symbols gently glowing and the world healing, not physical collectible pieces. The player’s connection is remembered care and their own choices, no obligation from grandparents. Free play continues after resolution.

## Later

Restore personal boat with Jamie and Ben. More residents, islands, decor, friendships, optional letters and key/lock discovery.

## Cast notes

Player remains non-gendered; Hannah is the editable default name. Their shack belonged to beloved grandparents buried beneath trees. Returns after long absence to escape corporate life. Nat young Asian woman, midlength black hair, always on the go. Katie long blonde hair, well-to-do, complains about work but loves neighbours. Bruce brown hair/beard, lovable, horse-loving, mildly eccentric. Jamie larger build, handsome, short brown hair, repairs. Ben tall lean handsome, black curly hair and glasses, mechanisms/design. Euan wildlife photographer. More personal characters and names may be added or adjusted.

## Personal design references — October 2026

Hannah likes brown clothing and gold jewellery. Basic cocoa/brown/walnut clothes are available in 0.22; Katie's early introduction hints at more earthy clothes and gold jewellery in future stock. Gold jewellery is planned, not yet a purchasable/equippable item. Keep customization and story language non-gendered for renamed players.

Ben: Timothy Chalamet-like visual reference, lean and tall, black curly hair and glasses. Jamie: supplied photo, short brown hair, broad smile, larger stature.

Mini's cat reference is entirely black. Mona has a white chin-to-belly bib and small white socks. Use these markings as design references for their still-to-be-created nice witch characters; retain their established grandmother/granddaughter personalities and relationship. No completed Mini/Mona sprites or Emberstone island are claimed here.
