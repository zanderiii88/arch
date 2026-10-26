# Archipelago project rules

Continue the existing game. Never recreate it from scratch. Read README.md, RELEASE-NOTES.md, FUTURE-BUILDS.md and ART-STYLE.md before work.

ART-STYLE.md is mandatory for every new or revised scene, item, creature, character and animation. Hannah's wavy bob and the readable Old Rayne map are the visual references. Add shared renderers and compare real renders; do not introduce realistic textures, smooth stand-in vectors, crude block placeholders or disconnected animation.

Feedback is notes until the user explicitly authorises a build. Never push or deploy automatically. Deliver tested cumulative ZIP updates over the user’s installed 0.53 baseline unless asked otherwise. Validate ZIP CRC and saved/downloaded bytes. Preserve Main save and Story test keys and inventories. Keep session-only DEV travel until the user requests its removal or final release.

Player defaults: Hannah; Old Rayne Isle. Player dialogue remains non-gendered. Mini is spelled Mini. Nepeta cataria is the initial herb name; the common name catnip is revealed through a saved conversation discovery.

Report implemented work, automatic checks, actual visual checks and outstanding phone testing separately and accurately.

Pinewatch has one orange-roofed hut shared by Jamie and Ben; no personal cabin for Hannah. Preserve the per-slot pineHomeMigrated52 guard, archived repair history and all migrated belongings. The primary creature renderer is creatures-v52.js with assets/creatures-v52.png; use approved rounded reference-led pixel sprites. Island palettes must remain distinct as specified in ART-STYLE.md.

Mini/Mona use witches-v54.js and Hannah’s native player29 pose/face system for sprites and portraits. Euan/Iris use residents-v63.js. Do not restore the older illustrated witch portraits or block-style resident renderer. Their cottage is now modular through cottageProps57/drawCottage27, using the shared workshop shell and actual home/workshop furniture renderers. The old witch-cottage-v54 furnished illustration was rejected and must not be used. Match native eye and face pixels, preserve connected poses, and compare actual rendered sprites with Hannah. Read ART-AUDIT-v57.md for remaining work; the whole-game art pass is not complete.

Home/workshop scenery uses house-v55.png and workshop-shell-v55.png through registeredRoom55, with nearest-neighbour registration to the existing room coordinates. Native furniture atlas furniture-v56.png supplies scene sprites and icons. The user rejected the finer 0.55 chair/bench treatment; use the smaller 0.56 replacements as the current candidates, awaiting phone review. Preserve item IDs, existing placements, collision footprints and foreground order. No blanket averaging or fuzzy scaling.

Rock pools use pools-v56.png and rocks-v56.png. Woods use woods-v56.png through cached full-size woodsBackdrop56 registration, with shrineCircles56 shared coordinates for normal/close-up glow alignment. Preserve stoneHit/reveal/catch logic and woodland geometry; graves remain only inside the woodland. The separate forest-foraging backdrop is still pending.

All new/rebuilt interiors must use an empty structural shell plus separate shared furniture objects. Match existing item assets/renderers, native scale, orientation and dimensions; do not generate another complete furnished-room painting. Furniture footprints and depth sorting must use the same object definitions. Validate all NPC/player/basket/exit routes and compare live room renders with shared furniture in the other buildings.

0.58 home rule: the kitchen area is the only fixed furnishing. All other furniture/plants/decorations use separate objects with grid placement, per-slot saved coordinates, common shared sprites/orientation/scale, footprint collision and depth sorting. Do not bake these back into scenery. See ART-AUDIT-v58.md and release58/check58.cjs.

0.59 rotation rule: use dedicated directional artwork with the same fixed camera for meaningful furniture facings. Never spin a flat furniture image. Facing must drive sprite dimensions, footprint, floor depth and front/bedside interaction access, and persist with position per save slot. No rotate control for effectively invariant objects; wall pieces currently use one back-wall plane. See ART-AUDIT-v59.md and release59/check59.cjs. Shared front art lives in assets/furniture-directions-v59.png; match room and inventory/crafting icons. Preserve Jamie’s green bedding and stove lit-state behaviour.

0.60 activities: versioned native backgrounds mineral-shore/wetland-view/forest-floor-v60; separate mineral-props, photo-wildlife, leaf-pile and photo-perch sprites. Keep native integer pixels and distinct island palettes, existing activity targets/mechanics and saved patches. Live photography and prints must use the same photoBackdrop60 composition and original2× source crop scale. Older forest-find/creature/bucket sprites remain review work. Read ART-AUDIT-v60.md and release60/check60.cjs.


0.61: woodland finds, icons and activity buckets use the shared woodland atlas. Keep creature silhouettes connected and poses anchored. Preserve distinct fishing palettes, original pier geometry and late-load state safety. Sand marks use native rectangular clusters; artwork must not alter saved reveal depth or targets.


0.62 coastal rule: use assets/coastal-props-v62.png through drawCoast62/coastIcon62 for finds, tools, harbour props, crab pots and the built coop. Shared open/closed mailbox/freezer frames retain common registration/palette; never shift whole furniture to animate a door. Keep the original pier, dock foreground ordering, exit anchor, coop targets and preconstruction absence. New coop nesting-wing art aligns with the original egg/marker coordinates. Do not reintroduce finer obsolete props through inventory icons. See ART-AUDIT-v62.md.


0.63 household/animation rule: shared native props/icons live in household-props-v63.png. Keep original chest body pixels and floor anchors in every facing; compose only the hinged lid/cavity region before scaling. Match inventory headers to saved facing, and keep the backpack title view compact without reducing grid space. Chicken flap uses whole connected poses, never a detached rotating wing. Euan/Iris load residents-v63.js with the same native API; Iris’s belt notebook follows the native walk offset and must remain connected. Preserve existing character faces, accessory identity, furniture geometry and save accounting. See ART-AUDIT-v63.md and release63/check63.cjs.
