# Archipelago 0.63 — Familiar comforts

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain all other files. Upload extracted contents, then reopen and check 0.63.0. This ZIP is an update, not a complete standalone game.

Shared native household artwork now covers the floor lamp, ship lantern, framed chart, potted plant, wall shelf, herb basket and tea cups. The home, brothers’ workshop and Mini/Mona cottage use the same props and related inventory/crafting/shop icons. Existing positions, grid placement, rotations, footprints and foreground sorting remain.

Chest openings follow all four saved furniture facings. The approved closed chest pixels and lower box stay exactly fixed while the connected lid/cavity changes. The inventory opening view uses that same directional art. The backpack has matching closed/open artwork and a compact opening view beside its modal title, without using item-grid space. Bucket storage art shares the existing activity bucket.

Two complete chicken flap poses replace the detached rotating wing fragment; existing idle/walk/peck artwork and care behaviour remain. Iris’s notebook now follows her walking origin on a connected belt loop. Her face/glasses and other resident identities remain. Player/tool, brother and ferry-crew pose sheets were reviewed; their existing artwork is retained.

Automatic checks and native Canvas render review are complete. Physical-phone touch, animation timing, compact backpack title layout, small-prop legibility and final art approval remain outstanding. Main/Story saves, belongings, progression/crafting gates, distinct island maps and DEV are preserved. Nothing is pushed or deployed. Read RELEASE-NOTES.md, ART-STYLE.md and ART-AUDIT-v63.md.

Previous releases

# Archipelago 0.62 — Tide-worn treasures

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain all other files. Upload extracted contents, then reopen and check 0.62.0. The ZIP is an update, not a complete standalone game.

Coastal finds now share native sprites: scallop and spiral shells, sea glass, driftwood, striped pebble, old coin, bottle cap, brass key and pirate doubloon. The beach rake, detector and spade have matching cursor/button artwork. Harbour crates, pots, net, rope, mailbox and freezer use shared props; the mailbox/freezer have dedicated opening frames. The crab-pot activity and inventory use the same pot. The built coop and care bowls now use simpler native artwork, with the nesting opening aligned to the existing eggs and marker. Hannah’s movable shell ornament shares the new scallop sprite.

Existing finding/revealing/dragging, detector signals, item values, protected doubloons, pot physics/rewards, coop build/care/day/egg rules, routes, markers and inventory remain. No coop plot or collision is introduced before construction. Crafting remains gated by the community timber project; Main/Story saves and belongings are preserved. Island maps, distinct palettes and DEV remain. Nothing is pushed or deployed.

Automatic checks and native Canvas visual review are complete. Physical-phone touch, opening/hauling animation, scale and subjective art approval remain outstanding. Read RELEASE-NOTES.md, ART-STYLE.md and ART-AUDIT-v62.md.

Previous releases

# Archipelago 0.61 — Small discoveries

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain other files. Upload extracted contents and check version 0.61.0 after reopening.

Woodland pinecones, feathers, chanterelles, beetles, woodlice and snails now share native pixel artwork across activities and icons. The three creatures have two connected poses; the activity bucket uses one shared sprite. Fishing has four distinct island palettes with the existing pier and angler alignment. Beach scenery and raked sand use quieter pixel clusters.

Existing discovery, collecting, fishing, release records, inventory, Main/Story saves and crafting/story gates are retained. No push or deployment. This is an art pass, not new story progression.

Automatic checks and native Canvas render review are complete; physical-phone touch, animation and final art approval remain outstanding. Read RELEASE-NOTES.md, ART-STYLE.md and ART-AUDIT-v61.md.

Previous releases

# Archipelago 0.60 — Quiet places

## Implemented

Redrawn Emberstone mineral shore, Reedhaven photography lagoon and the separate Pinewatch forest-foraging floor. Deliberate broad pixel clusters replace the finer illustrated backgrounds. Emberstone keeps charcoal/plum basalt, copper/ochre ground and turquoise springs; Reedhaven keeps pale-gold reeds, olive willows and softer blue-green water; Pinewatch keeps deep fern/pine greens, teal shadows and rusty brown soil. Existing island maps are untouched. Each new background is prepared at a native256×384, with a48-colour no-dither palette and exact integer nearest-neighbour expansion. This is preparation of newly generated art, not a filter applied to the existing world.

Four basalt cover clusters and quartz/agate/obsidian/calcite have new native sprites, shared by the mineral scene and field-note icons. The original six nodes, sizes, brushing radii, cleaning progress, record-once behaviour, day regeneration, note counts, dust/sparkle and marker controls remain. New leaf cover uses a small native sprite at the original brush footprint; forest positions, nine finds, uncovering/discovery thresholds, drag/basket controls, released discoveries, snack capacity and daily saved patch remain. Underlying forest-find/woodland-creature sprites and bucket are retained for a later dedicated review.

Heron, otter and dragonfly have two connected whole-body poses each, with simpler native pixel artwork used in live viewing, prints and field-note icons. The existing native kingfisher renderer is retained; its icon now uses that same sprite source. Subject IDs, positions, displayed bounds, timing, visibility, focus/hold thresholds, camera loan/purchase, best-photo quality,20-coin first-outing thank-you and8-coin personal print purchase are unchanged.

The photography perch is a separate small driftwood sprite anchored beneath the existing kingfisher position. The painted background log was removed after composition review. A cached1024×1536 background/perch composition is used by both the live scene and snapshot crop, preserving the existing2-source-pixels-per-world-pixel crop calculation. Old photos remain saved as metadata and redraw using the current shared art; album/display ownership and print stock are preserved. The foreground venue platform and Euan/Hannah renderer remain.

Built-in image generation used existing compositions and approved Hannah sprites as references. Exact prompts, final masters, native palette/alpha preparation and frame rectangles are in the source checkpoint. New sprite assets use hard alpha, at most16 colours per frame, native44×38 minerals,56×44 leaf pile,64×24 perch and small complete wildlife frames. No image-smoothing, universal averaging filter, new story unlock or save migration.

Includes0.54–0.59 cumulatively over installed0.53.0.59 furniture rotation was restored from its verified checkpoint before this work; it is retained. Main and Story test keys, inventory, crafting/story gates, Pinewatch ownership, cats/herbs, distinct island maps and session-only DEV travel remain. No push/deployment.

## Validation

Automated: comparison with actual0.59 source confirms unchanged activity mechanics and target generation. Actual mineral pointer brushing → clean → one record, original node coordinates/sizes and next-day regeneration; camera pointer aim/hold → first photo/reward → improved behavioural photo without repeated reward; unchanged wildlife draw extents in both poses; current icons; exact cached background/perch snapshot crop; actual forest brushing/drag-to-basket, discovery without keeping wildlife, snack-capacity rejection and same-day patch persistence. Real Main/Story save/load retains photos, purchased display/print stock, mineral discoveries, collected finds, inventory quantities and furniture facing. Native asset preparation checks palette/hard alpha, integer-expanded backgrounds, frame bounds and reproducible output. Syntax, version aliases, dependencies, source rebuild and cumulative reconstruction checks required. Retained furniture/bed/rotation, cottage/cat/character, pools/woodland, map/Pinewatch migration, crafting/coop/dock/Inbox, herbs, opening/ferry, collection/rods, timber and clothing regressions.

Visual: native mineral covered/partial/revealed scenes; live wildlife photography, Euan venue and saved photograph; covered and uncovered forest scene;390-pixel-wide three-scene preview. Perch anchoring checked against the actual live kingfisher. These are native Canvas renders, not browser/physical-phone screenshots. Phone review remains for art approval, brush/drag touch targets, leaf motion, wildlife animation, viewfinder controls and printed-photo framing. Remaining older foraging-find sprites and other fishing/beach/coop/harbour scenery stay on the audit; whole-game consistency is not declared complete.

ZIP CRC, unique entries, cumulative reconstruction and exact saved/downloaded-byte checks required before delivery.

---

# Archipelago 0.59 — A place for everything

## Implemented

Furniture rotation uses 28 dedicated native sprite frames: front/right/back/left for sofa, bed, chair, chest, bookcase and stove; across/along for rectangular table and driftwood bench. Objects are redrawn from the same fixed front-and-slightly-above camera, never rotated as flat pictures. Rectangular rugs/mat have two dimensions with a freshly drawn native pattern. Plants, round stools, simple lights, ornaments and wall-mounted pieces have no rotate option; the current house has one usable back-wall furnishing plane. Kitchen remains fixed.

During Decorate → Move, use the rotate control, tap a square, then Place here or Cancel. Preview includes the actual occupied floor footprint. Facing changes dimensions, collision and front access. Chests/stoves/seats/bookcases need reachable space at their front; beds need reachable space along a long side. Kitchen, exit corridor, player and essential access remain protected. One flood checks candidate layout connectivity, avoiding repeated path searches for every potential approach. Compact touch buttons share one row at typical phone widths. Existing time/needs pause and no-cost placement remain.

Position and facing are stored together in the existing per-slot homeLayout58 data. Legacy missing/invalid facing defaults to the original front. Rotating/cancelling does not change stock; optional put-away/re-place retains facing with exact quantity accounting. Real save/load preserves independent Main and Story test layouts. Sleep/wake and pending-wake reload use the oriented bed and a reachable side. Alternate bed views have their own pillow anchors, with the foreground headboard covering the appropriate part of a tucked head. Hannah stays upright in the camera. Chest/stove pointer hits and action destinations follow their actual object bounds/front.

The shared front sprites also supply workshop/cottage/home objects and inventory/shop/crafting icons. Jamie’s green bedding is retained through the existing native blue-to-green mask approach. The crafted wall shelf now uses the actual shared workshop shelf renderer and matching icon, replacing its finer illustrated art. Stove has quieter charcoal pixel art with a genuinely dark unlit window; fire/light appear only while the existing hearth timer is active, with fire hidden by the stove body when facing away. Stove and floor-lamp glows follow placement. Item IDs, prices, stock, recipes, hearth costs/timers, story/crafting gates and room routines are unchanged.

Artwork produced with the built-in image tool using existing home/shared furniture as references. Separate sheets per item; targeted revisions corrected chest end views, removed painted stove fire and lowered the reversed bed’s foreground headboard. Native preparation keeps the main connected sprite, hard alpha, nearest-neighbour native sizing and at most sixteen colours per item shared across its directions. Final atlas is512×1024; native frames are at most70×74. Masters, exact prompts/revisions and preparation scripts are in the source checkpoint. No furnished-room painting or averaging filter.

Includes 0.54–0.58 cumulatively over installed 0.53. Remaining ornament/prop details and activity backgrounds remain on the art audit; whole-game standardisation is not declared complete. No push/deployment.

## Validation

Automated: every directional sprite dispatch, footprint and valid placement; collision and required front/side access; plants/stools/lights/wall props hide rotation; rug dimensions; actual pointer → rotate → place/cancel; kitchen/exit/occupied areas and cabinet facing into wall rejected; all four bed action/entry/sleep/wake/pending reload paths; chest/stove destination sides; independent Main/Story faces and exact inventory through real load and put-away/re-place; malformed/legacy orientation defaults; shared room/icon dispatch and Jamie’s green blanket; crafting gate. Native asset preparation checks all28 frames, hard alpha, sixteen-colour limits and atlas padding. Retained 0.58 home/pool tests and older cottage/cat/character, pool/woodland, story/ferry, island/Pinewatch migration, crafting/coop/dock/Inbox, collection/rod, herb, timber and clothing regressions. The prior pool/furniture test updates only its obsolete icon URLs in release59/regression56.cjs; geometry/gameplay assertions remain.

Visual: native furniture direction contact sheet, home in all four facings, all four sleeping orientations, crafted shelf/stove unlit/lit, rotated footprint preview, shared workshop/cottage and 390-pixel-wide preview. These are native Canvas renders, not browser or physical-phone screenshots. Physical-phone review remains for touch/scrolling/control fit, rotation/placement near room edges, longer movement and sleep/wake animation, overlap and subjective art approval.

ZIP CRC, cumulative reconstruction, dependency/rebuild checks and exact saved/downloaded-byte verification required before delivery. Existing save keys, inventory, gameplay/progression and session-only DEV retained.

---

# Archipelago 0.58 — Room to make it yours

## Implemented

Hannah’s home now uses the existing empty workshop structural shell and sea-window panes, preserving only the registered kitchen/fridge portion of the old backdrop as fixed furnishing. The old painted bed, sofa and floor rug are no longer part of the scene background. Independent bed, chest, sofa and cream mat join the existing optional furnishings. Bed/chest/plant and optional furniture dispatch through the same shared workshop/home renderers, sizes and orientation. All home furniture and Hannah are sorted together by floor depth, including foreground storage/seating. Rugs draw beneath actors. New/rebuilt objects must continue to use shared sprites and perspective.

Decorate now lists Move controls for every present object. Tap a grid square to preview, then confirm or cancel. Floor and wall decorations have appropriate placement bands. Placement rejects walls, kitchen intrusion, solid-furniture overlap, blocked doorway, trapped player and inaccessible bed/storage/kitchen. Core inherited objects are movable essentials; optional items retain existing place/store accounting. Newly placed optional items use their retained position when suitable, otherwise search for a valid square; failed placement restores quantities. Editing pauses time/needs and does not charge coins or bypass crafting progression.

Layouts persist in routine.homeLayout58 independently in Main and Story test, with bounded finite coordinates on load. No inventory grants, save-key changes or duplication migration. Legacy optional decor keeps its exact old position until moved. Bed/storage/seat/stove approaches and pointer hits follow the actual objects rather than old screen rectangles. Capture input prevents obsolete fixed-coordinate handlers running. Sleep/wake animation is translated to the moved bed; waking uses a reachable approach. The opening shack tour highlights the current bed/chest positions. Kitchen cooking/fridge/pantry remain fixed. Temporary recovery breakfast has a clear floor spot away from furniture.

Rock pools now contain 54 stones instead of 42. Each visit selects three related shapes from the twelve existing sprites, rather than distributing every type. Seven principal size bands and twelve additional smaller stones increase variation. Additional stones are empty scenery to move; original wildlife opportunities, reveal-once, drag/hit/catch, bucket, collection and refresh-completion logic remain. A standalone rust sofa sprite is generated using the built-in image tool with the previous home as a style reference, then prepared at native 48×28 with hard alpha and a maximum sixteen-colour palette. It is independent of the backdrop and front-facing like shared furniture. No new raster pool scene or blanket image filter.

Includes 0.54–0.57 cumulatively over 0.53. Mineral shore, photography, separate forest-foraging and remaining older crafted prop detail remain future art work; this is not a claim of completed whole-game consistency.

## Validation

Automated: separate-object home rendering/depth; moved footprints; valid/invalid grid placements; kitchen/doorway/overlap and essential-route guards; actual pointer preview/confirm/cancel and moved-item interaction dispatch; editing time pause; bed/storage approaches and actual sleep/wake; real Main/Story save/load of different layouts and exact furniture quantities; optional place/store accounting; 54 stone spawns with three shapes and size spread, preserved stone hits. Retained cottage collision/routines/delivery/talk/cats, character face/pose, pool drag/reveal/catch/collection, woodland/shrine, progression/coop/dock/Inbox, four-island/Pinewatch migration, herbs, opening/ferry, rods/collections, timber and clothing regressions. The older home fixed-position/foreground/sleep assumptions are superseded by release58/check58.cjs; pool-count expectation is updated in release58/regression56.cjs.

Visual: native Canvas home, sleep, relocated furniture, grid preview and populated pools; phone-sized 390-pixel-wide preview. Not browser or physical-phone screenshots. Outstanding phone checks: touch controls/scrolling, moving all furniture types, entrance/exit and routes at edges, sleep/wake animation, overlaps, optional decor/stove light and subjective art approval. Existing fresh-game/crafting gates and session-only DEV remain.

ZIP CRC, cumulative reconstruction and exact saved/downloaded-byte verification required before delivery. No push or deployment.

---

# Archipelago 0.57 — The same little world

## Implemented

Rebuilt Mini and Mona’s cottage as a modular scene after the user identified that the furnished illustration still violated shared furniture perspective/style. The active renderer no longer draws the old furnished painting. It uses the existing empty workshop shell, shared home window panes for the sea view, and twelve independent furniture objects. Beds/shelves/plants/kitchenette use drawWorkshopProp30; tables/bookcase/chairs use drawFurniture55 and the current furniture-v56 atlas. Item dimensions match the corresponding home/workshop objects exactly, with no cottage-specific rotation or mirroring. No new raster illustration was generated.

The room has two beds on opposite sides, wall shelves, a kitchenette, bookcase, tea table/two chairs, separate herb table and two plants. The plum rug adapts the existing workshop rug’s native drawing pattern; tea cups use the same native pixel treatment as Mona’s cup. The existing herb basket stays at its prior tap location on the new tabletop. The former painted hearth is replaced by the shared kitchenette/tea area; it was scenery, not an interactive heating system.

All furniture and actors share depth sorting before night lighting. Walking collision now uses the displayed furniture footprints and the shared shell’s floor bounds. Navigation caches are invalidated on resident reset. Existing routine destinations, night-rest spots, herb approach (331,392), entry/exit (256,577), cat positions, conversations, schedule and herb/reward logic are preserved. The old loading gate points at the shared shell, and entry waits for the shared furniture assets. No items are granted or charged and no save migration is required.

Includes all prior 0.54–0.56 changes. This patch prioritises the cottage correction; mineral shore/photography/forest-foraging art remains queued.

## Validation

Automated: every cottage item matches its shared template dimensions and has no independent rotation/mirroring; every furniture footprint blocks walking; routes connect all routine/night/rest/cat/basket/exit destinations and successive resident waypoints. Existing movement is driven through the herb approach and a successful 12-coin delivery, conversation approach, cat speaker/petting and exit. Shared-renderer dispatch and actor/furniture depth order checked. Main and Story test preserve carried/stored items, herb stock/deliveries, cat pets and botanical discovery through real save/load. Comparison with actual 0.56 source confirms unchanged workshop props/home targets, resident plans, dialogue/petting/herb delivery and exit behaviour. Retained 0.56 pool/woodland tests, furnished-room/foreground/sleep tests, character/cat tests, crafting/coop/dock/Inbox, map/Pinewatch migration, herbs, ferry/opening, collection, timber and clothing regressions.

Visual: actual cottage with Mini/Mona, cat visit, Hannah behind the herb table, and shared furniture comparison with the workshop. Native Canvas renders and 390-pixel-wide preview inspected. These are not browser/phone screenshots. Physical-phone touch, routes near furniture, portrait/basket controls, movement/overlap and subjective art approval remain outstanding.

Cumulative over 0.53. ZIP CRC/reconstruction and exact saved/downloaded-byte verification required before delivery. No push/deploy. Existing saves and progression/DEV retained.

---

# Archipelago 0.56 — Small things, clear shapes

## Implemented

Following the user’s 0.55 furniture feedback, the chair and driftwood bench are redrawn with simpler silhouettes, broad quiet colour patches and fewer highlights. Their native sprites are 24×40 and 46×22, each with at most sixteen opaque colours and hard alpha. Connected components isolate full generated subjects; nearest-neighbour sizing and no-dither palette reduction produce the final small sprites. They replace only the two corresponding cells in furniture-v56.png. The other six furniture cells are byte-identical to 0.55. Existing item IDs, prices, placement dimensions, ownership, collision and foreground order are preserved. Scene objects, workshop chairs and shop/inventory icons share the new atlas.

Rock pools use a new quiet aqua backdrop with the same perimeter framing. The initial generated draft had prominent fixed interior stones; a targeted follow-up removed them so the existing forty-two interactive stones are clear. Twelve stone variants have matching native sprites (maximum32×28, up to sixteen colours each). Their displayed dimensions, rotations and hit geometry still use the original rock rectangles; drag targets, spawn/reveal timing, animal catches, bucket and collection logic remain unchanged. Existing small debris and creature art are retained.

The woodland clearing uses broad leaf/bark/grass clusters rather than the old fine texture. Two understated grave stones remain at the big tree’s foot inside the scene. The five shrine circles remain part of the stone, with no physical pieces. A cached nearest-neighbour upper-band registration keeps the shrine/clearing boundary at its established coordinates. Shrine glows are aligned to the new circle centres in both normal and close-up views. Existing walking geometry, target approaches, memorial dialogue, kindness/community progress and bottom exit are unchanged. The separate forest-foraging backdrop is not replaced this patch.

Built-in image generation was used for the artwork with existing scene layouts and Hannah as references. There is no global averaging/downsampling filter on maps or scenes. Distinct island maps and the 0.54 character/cottage updates remain intact.

## Validation

Automated: comparison with the actual 0.55 source confirms unchanged stone hit logic, reveal/catch logic, woodland walking geometry, furniture footprints/room targets and workshop props. Chair/bench dimensions, palette/alpha, atlas/icon paths and byte-identical other furniture cells; all twelve stone variants and forty-two spawns; actual pointer drag → one reveal → catch → collection record; all woodland routes, memorial and shrine interactions; full-size registration cache and world/close-up glow coordinates; real save/load of furniture and catches in both slots. Retained furnished-room/foreground/sleep, 0.54 faces/cats, 0.53 crafting/coop/dock/Inbox/scenery, map/Pinewatch migration, herbs, ferry/opening/sleep, collection, timber and clothing checks.

Visual: actual home/workshop chairs and bench beside Hannah, enlarged matched-size furniture comparison, populated rock-pool scene, woodland clearing with markers/grave stones/glows, shrine close-up, native sprites and phone-sized preview. These are native Canvas renders, not browser screenshots. Physical-phone touch, motion and subjective art approval remain outstanding; this is not a claim that every prop/background now matches perfectly.

Cumulative over 0.53; ZIP CRC, reconstruction and saved/downloaded bytes verified before delivery. No push/deploy. Main and Story test, inventories, progression and DEV retained.

---

# Archipelago 0.55 — A little more like home

## Implemented

Home and empty modular workshop shell redrawn with built-in image generation, using their existing compositions plus Hannah and the updated cottage as references. Broader pixel clusters and fewer fine textures match the newer interior treatment. New source assets are registered once to the old room coordinates with nearest-neighbour canvas drawing; this aligns the generated wall/floor, bed, kitchen and exit bands with the existing interaction positions. No averaged display filter is used. Home’s sea window, blue bed, olive kitchen and rust sofa remain. Workshop keeps its forest window, separate beds on opposite walls, green rug, workbench, kitchenette, storage and existing props.

Eight optional home furnishings (stool, table, floor lamp, chair, bookcase, lantern, driftwood bench and chart) now share an alpha-clean 384×208 atlas. Each item is cropped, packed at native scale and used by both room drawing and inventory/shop icons. Existing item IDs, ownership, costs, placement and collision footprints are retained. Workshop chairs share the new chair sprite. Existing workshop bench, beds, chest, plant, shelf and kitchenette remain modular.

Furniture in front of Hannah’s feet is redrawn over the character before night lighting, correcting home foreground order. Sleep and wake animations bypass that redraw; the sleeping head and blanket still use the established bed positions. Original home tour highlighting remains.

Reviewed activity source backgrounds alongside Hannah. Rock pools, woodland, mineral shore and photography have the strongest remaining fine-texture mismatch. They are prioritised in ART-AUDIT-v55.md; their art is not changed by a blanket filter in this release. The whole-game consistency pass is ongoing.

Includes 0.54’s native Mini/Mona/Euan/Iris sprites and portraits and the updated witch cottage. No new story stage or progression shortcut. Save keys and inventories unchanged.

## Validation

Automated: new asset/atlas/icon dispatch, all existing furnished home interaction routes (including already-at-destination cases), workshop furniture collision and bench access, cached nearest-neighbour room registration, foreground draw calls and sleep exclusion, real save/load of placed furniture and owned/stored items in Main and Story test, crafting gate. Retained 0.54 face/pose/cat/save checks, 0.53 crafting/coop/dock/Inbox/scenery checks, map/Pinewatch migration and atlas checks, herbs, opening/ferry/sleep, collections, timber project and clothing regressions.

Visual: native live home renders with all eight furnishings and with basic furniture, sleeping head/blanket alignment, workshop and new chairs; native atlas padding/complete sprites; 390-pixel-wide interior comparison with Hannah. Activity comparison uses source-art thumbnails with Hannah for style assessment; it is not a claim of gameplay or touch testing.

Outstanding: physical-phone layout/touch/animation and subjective art review; prolonged room-boundary and furniture-overlap testing; activity background redraws and remaining prop/icon audit. No browser/physical-phone tests are claimed.

Cumulative over 0.53. ZIP CRC, reconstruction and saved/downloaded byte equality checked before delivery. No push or deployment.

---

# Archipelago 0.54 — Familiar faces

## Implemented

Mini and Mona now use witches-v54.js, which derives their sprites directly from Hannah’s native player29 body, face and connected pose frames. Their hats, plum capes/shawls, Mini’s trousers/satchel and Mona’s long dress, cream collar, silver hair streak and attached cup distinguish them. Face and eye pixels remain those of the approved player artwork, including native blinks, talk, happy and walking states. The same renderer supplies world sprites, room sprites and portraits; the old large-eyed illustration/portrait sheets no longer render these characters once current player assets are ready. Cat mode still dispatches to the existing black and black-and-white cat renderer and purring/meowing dialogue.

The cottage backdrop was redrawn using built-in image generation with the old cottage, Hannah’s approved atlas and modular workshop shell as references. Larger stepped pixel clusters, fewer fine textures, warm timber and plum/cream furnishings replace the finer painted treatment. Beds, fireplace, tea table, workbench and centered exit keep their established footprints. Existing navigation, NPC routines, herb-basket interaction and foreground order remain; no scene objects or progression were added.

Euan and Iris use residents-v54.js, sharing Hannah’s native faces/poses with distinct olive/teal clothes and camera/glasses/notebook. Both normal character and illustrated dock crew paths use it, as do portraits. Other named cast retain their later sprite atlases. ART-AUDIT-v54.md records what was inspected and what remains; whole-game art consistency is still ongoing.

## Validation

Automated: native face-pixel preservation across witch idle/blink/wave/happy/walk states, sprite dimensions/padding, connected room routes for all existing witch waypoints, beds, herb basket and exit; actual world/room/portrait dispatch and illustrated dock resident path; cat dialogue and petting; both save slots and botanical discovery persistence. Existing 0.53 crafting, coop, dock-arrow, Inbox and scenery tests; map/navigation/Pinewatch migration/atlas, herb/cat, opening/ferry, collections/rods, timber and clothing regressions.

Visual: live native renders comparing Hannah/Mini/Mona and their portraits; witch walking/gesture frame sheet; occupied cottage and phone-sized rendering; current cast portrait contact sheet. No browser or physical-phone testing is claimed. Phone review remains for subjective art approval, touch targets, room furniture boundaries, portrait framing, walking/waving and cat visits.

Update ZIP contains only changes over installed 0.53. ZIP CRC and exact saved/downloaded-byte verification are required before delivery. No push or deployment. Existing saves, possessions, project gates and DEV travel retained.

---

# Archipelago 0.53 — Clear shores

## Implemented

Removed the averaged three-source-pixel scenery filter across every island and close scene. Disabled interpolation at the initial island-to-scratch copy, final scene drawing and CSS canvas scaling. Original source assets, island palettes and map geometry are retained; this is a rendering correction, not an asset redraw.

Removed the duplicate screen-fixed dock exit button. The existing blue floor arrow and its click target stay at world coordinate x=1232, y=556, and scroll offscreen with the dock. No clamping to the camera edge. Walking to the entrance still uses the original exit approach.

Home crafting and new coop construction now require completion of Jamie and Ben’s community timber project (ten boards and both delivered parts). Hidden crafting shortcuts and guarded actions prevent early access or material spending; the completion dialogue explains the unlock. Existing possessions and already built coops remain usable. Existing saves that completed the project automatically qualify through the existing saved completion state. DEV travel does not bypass the requirement.

Mailbox now has one Inbox letter list containing Nat’s route bulletin, ordinary post and timber payments. Removed the duplicate legacy Nat entry. Bulletin read status and Inbox return are wired; legacy Nat unread accounting is removed. Outbox retains its existing delivery flow. Arrival line: “No meetings. No deadlines. Just the sea. I needed this.”

## Validation

Automated: targeted 0.53 checks for locked/unlocked shortcuts and actions, no material spending while locked, retained crafted inventory, coop construction gate, fixed dock marker and matching click target under camera scrolling, single Inbox bulletin/read/return, arrival text, original background pixels and disabled map-copy interpolation. Prior native map/navigation, Pinewatch migration, separate slot and atlas tests; herbs/cats, opening/ferry/sleep, collections/rods, timber and clothing-mask regressions. The 0.49 coop test now sets completed timber work before construction, matching the new requirement; its previous chop-only assumption is intentionally superseded.

Visual checks: native Canvas renders of all four islands at 390×585 map display size and dock entrance/away camera positions. These are game renders, not browser or physical-phone screenshots. Physical-phone layout, touch, smooth camera motion and subjective sharpness still need review.

Cumulative over 0.35 onward. ZIP CRC and saved/downloaded byte equality checked before delivery. No push or deployment. Main save, Story test, inventories, Pinewatch migration and session-only DEV travel retained.

---

# Archipelago 0.52 — Different shores

## Implemented

Three maps redrawn using the built-in image-generation workflow and the existing map compositions as references. Old Rayne remains sunny grass green and warm sand. Pinewatch uses deep pine greens, slate and rusty forest ground with cool teal sea. Reedhaven uses golden reeds, olive willows, pale warm timber and blue-green shallows. Emberstone uses charcoal/plum basalt, copper/ochre vegetation and turquoise springs. Individual biome colours now differ while sharing a chunky pixel treatment. Existing source maps are retained for compatibility; new versioned assets are used at runtime and precached.

All eleven existing fish and four coastal creatures use an original raster sprite atlas informed by the supplied visual references. Fish have distinct profiles, fin shapes and markings. Crab, hermit crab, prawn and purple octopus have rounded silhouettes, coloured contours and pixel shading. The same atlas supplies gameplay, catch displays, inventory, journal and undiscovered silhouettes. Generated masters are in the source checkpoint; cropping, native sizing and alpha cleanup are reproducible. The code-generated 0.51 creatures remain only as an early-load fallback. Fish selection, rods, tension, measurements, records and discovery progression are unchanged. Swimming uses a gentle whole-body response; separate full limb-animation atlases are not added in this release.

Pinewatch's orange-roofed hut is now Jamie and Ben's only shared home/workshop. Removed Hannah's cabin marker, repair flow and personal bed access there, plus the second painted-over workshop building and its obsolete collision/fence footprint. The existing brothers' interior, two beds, green rug, kitchenette, workshops and community timber story remain. Their entry, outdoor routines, timber yard marker and completion landing now use the one hut. Dock phone links to their place; camping remains available and no free ferry service is introduced. Reedhaven accommodation remains available.

Legacy Pinewatch cabin belongings are migrated once per save slot: supplies/beach finds to the home chest; fish and edible catches to home cold storage (or carried inventory when appropriate), following the game's existing rules. Cabin repair stage is archived. Existing home items are added to, not replaced. Reimporting the migrated save does not duplicate items. Old saves inside the retired cabin return to the overworld rather than a second personal house.

## Validation

Automated: syntax for distribution JavaScript, index/service-worker dependency existence, versioned aliases, source-code rebuild match, sprite atlas coverage/icons; a single Pinewatch hut and no personal home marker/repair/bed; shared workshop entry and dock camping access; legacy inventory migration and reload without duplication; independent Main and Story test migration; walkable interaction destinations across all four live maps; prior 0.49/0.50 DEV, coop, cooking, herb, cat, capacity and save tests; opening/ferry/sleep, collections/rods, timber-project and clothing-mask regressions. Cumulative archive reconstruction, ZIP CRC and exact saved-byte verification are required before delivery.

Visual: native Canvas renders of all four live maps with markers, shared hut position and absence of the second workshop, and every fish/coastal sprite at display size. New palette distinctions and atlas ordering/transparency were inspected. Critical navigation destinations and hut approaches were checked against the retained map composition; this does not claim exhaustive visual collision testing around every tree or shoreline.

Outstanding: physical-phone touch/layout/sound checks; prolonged exploration around the redrawn foliage/coast boundaries; subjective art approval at actual phone scale. Browser screenshots are not claimed because the local Chromium download was unavailable in the preceding work. Existing late-night camping, separate save slots and DEV travel still need user playtesting alongside older open feedback.

No push or deployment. Cumulative over 0.35 onward. Current phase: ongoing development, not final playtesting.
