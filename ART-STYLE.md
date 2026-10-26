# Archipelago art direction — mandatory for future additions

## Reference and quality bar

Hannah with the original wavy bob is the character reference. Use the readable Old Rayne shapes as the environment reference. Chunky pixel art means deliberate silhouettes, connected anatomy, restrained colour ramps and expressive details. It does not mean crude boxes, blurred reductions of paintings or smooth vector shapes. Do not use the removed 0.51 averaging grid; preserve crisp native pixels.

Preserve the front-and-slightly-above camera, footprints, usable paths, scene scale and foreground ordering. Small overworld figures and larger close-scene figures must represent the same designs.

## Characters, hair and clothing

Mini and Mona share Hannah’s native player29 pose/face pixels through witches-v54.js. Distinguish them with wardrobe, hats, hair and accessories; preserve eye size, anatomy and connected walking/waving poses. Euan and Iris use residents-v63.js. All visible versions and portraits must use their shared renderer.

Use crisp stepped contours and clusters of pixels, with 3–5 coordinated shade values per material. Retain faces and expressions. Hair needs a deliberate rear silhouette, preserved face/neck/body, then a foreground crown/fringe which blends into the rear palette and texture. Switching cuts must remove the full previous silhouette. Do not leave shoulder fragments, gaps in the neck/collar, dye on the shirt or detached tails of hair.

Dye full garment silhouettes while retaining folds, outlines and highlights. Check both skirt edges and hem, not only the centre. Protect hands, arms, legs and jewellery. Inspect walking, waving, talking, fishing and work poses, not just the static creator image.

Anchor bodies and feet. Keep tools attached to hands and limbs connected. Animate complete forms or connected joints; do not slice a creature into unrelated strips and slide them. Keep faces, tails and expressive effects inside their frames.

## Creatures and props

Use creatures-v52.js and assets/creatures-v52.png for fish and coastal creatures. The user-supplied rounded crab, curved orange prawn, purple octopus and varied fish reference sheets define the finish. Prefer attractive deliberate pixel shading and distinct anatomy; do not regress to thick geometric outlines or recoloured copies of one silhouette. pixel-style-v51.js is a fallback and supplies older drawing primitives, not the creature quality target. Inventory icons, collection silhouettes, catch close-ups and activity sprites must use the same species artwork. Keep species recognisable by body shape, fins and markings rather than fine scales or realistic lighting. New species must have a defined shape and palette before integration.

Cats should look black with restrained highlights; Mona has a white chin and underbelly. Preserve connected tails, cheeks, ears and haunches. Cat portraits and world sprites must show the same identity. Herbs need distinctive leaf/flower forms and consistent pixel clusters; botanical discoveries must respect story knowledge.

## Scenes and rendering

Room rule: all new/rebuilt interiors use an empty structural shell and independently drawn shared furniture. Mini/Mona’s furnished illustration was rejected because its items did not match other buildings. Use the actual shared bed/table/chair/shelf/plant/counter assets and renderers, matching native scale, orientation, dimensions and foot origin. Do not generate complete furnished-room backdrops as replacements. Personalise with textiles/plants/books without introducing different furniture viewpoints. Collision and foreground depth must derive from the separate object definitions. The 0.57 modular cottage is the current implementation; home furniture is now independently placed on a grid in0.58/0.59.

All island maps retain their original source pixels. Disable canvas image smoothing when copying source maps into scratch canvases and when drawing scenes. Use CSS image-rendering: pixelated for display scaling. Never average, blur, or repeatedly downsample scenery: the former 0.51 display grid softened every island and is removed in 0.53.

For new backdrops, produce deliberate pixel artwork at the established logical scale from the outset. Keep foliage, stone, water, wood and light readable in broad shapes. Compare against both Hannah and Old Rayne at phone size before accepting. Use nearest-neighbour rendering for new backdrops too. Complex source scenes still need individual judgement and may warrant future dedicated redraws.

Home/workshop backdrops use registeredRoom55 for one-time nearest-neighbour alignment to their existing game coordinates. Optional furniture uses assets/furniture-v56.png for both scene sprites and icons. Future revisions must preserve the existing interaction footprints or explicitly update and validate the corresponding geometry; never ship detached icons or incompatible scene variants.

The user rejected the finer 0.55 chair and bench. Current replacements use native 24×40/46×22 sprites, restrained palettes and simple clear contours; compare beside Hannah at actual scene size. New rock-pool stones likewise use small native sprites, while keeping the original hit footprints. Do not use rejected fine-grain assets as references. Woodland normal and shrine close-up views must share the registered backdrop and circle coordinates.

## UI and review

Keep soft typography and rounded controls. Icons should be simple, readable and consistent. Announcements use the short top status banner plus persistent relevant world attention pins; do not use full-screen overlays for routine mail or arrivals. Reserve modals for a decision, detailed activity or requested information.

Before accepting an art change: render it at native and actual phone sizes; compare it with the references; inspect anatomy, frame bounds, attachment, recolouring and foreground ordering; run relevant regressions; state exactly what was visually checked and what still needs physical-phone review. Never claim that a code/render check verifies touch usability or subjective user approval. Do not add a visibly different art treatment just because it is easier to generate.

## Island colour identity and Pinewatch ownership

Consistent art treatment must not make every island the same colour. Old Rayne: sunny grass greens, warm sand and bright blue sea. Pinewatch: deep pine greens, cool teal sea, slate and rusty needle-covered ground. Reedhaven: pale gold/yellow-green reeds, olive willow foliage, straw and pale warm timber with softer blue-green shallows. Emberstone: charcoal basalt, muted purple/plum shadows, copper/ochre ground cover, warm turquoise springs and deeper petrol-blue sea.

Pinewatch has ONE shared orange-roofed hut belonging to Jamie and Ben. It connects to their existing home/workshop interior and timber yard. There is no separate cabin or personal home for Hannah on Pinewatch. Use the normal ferry/phone or camping when staying late. Preserve the two brothers' beds and their existing modular interior.

0.58 home rule: the kitchen area is the only fixed furnishing. All other furniture/plants/decorations use separate objects with grid placement, per-slot saved coordinates, common shared sprites/orientation/scale, footprint collision and depth sorting. Do not bake these back into scenery. See ART-AUDIT-v58.md and release58/check58.cjs.

0.59 rotation rule: use dedicated directional artwork with the same fixed camera for meaningful furniture facings. Never spin a flat furniture image. Facing must drive sprite dimensions, footprint, floor depth and front/bedside interaction access, and persist with position per save slot. No rotate control for effectively invariant objects; wall pieces currently use one back-wall plane. See ART-AUDIT-v59.md and release59/check59.cjs. Shared front art lives in assets/furniture-directions-v59.png; match room and inventory/crafting icons. Preserve Jamie’s green bedding and stove lit-state behaviour.

0.60 activities: versioned native backgrounds mineral-shore/wetland-view/forest-floor-v60; separate mineral-props, photo-wildlife, leaf-pile and photo-perch sprites. Keep native integer pixels and distinct island palettes, existing activity targets/mechanics and saved patches. Live photography and prints must use the same photoBackdrop60 composition and original2× source crop scale. Older forest-find/creature/bucket sprites remain review work. Read ART-AUDIT-v60.md and release60/check60.cjs.


0.61: woodland finds, icons and activity buckets use the shared woodland atlas. Keep creature silhouettes connected and poses anchored. Preserve distinct fishing palettes, original pier geometry and late-load state safety. Sand marks use native rectangular clusters; artwork must not alter saved reveal depth or targets.


0.62 coastal rule: use assets/coastal-props-v62.png through drawCoast62/coastIcon62 for finds, tools, harbour props, crab pots and the built coop. Shared open/closed mailbox/freezer frames retain common registration/palette; never shift whole furniture to animate a door. Keep the original pier, dock foreground ordering, exit anchor, coop targets and preconstruction absence. New coop nesting-wing art aligns with the original egg/marker coordinates. Do not reintroduce finer obsolete props through inventory icons. See ART-AUDIT-v62.md.


0.63 household/animation rule: shared native props/icons live in household-props-v63.png. Keep original chest body pixels and floor anchors in every facing; compose only the hinged lid/cavity region before scaling. Match inventory headers to saved facing, and keep the backpack title view compact without reducing grid space. Chicken flap uses whole connected poses, never a detached rotating wing. Euan/Iris load residents-v63.js with the same native API; Iris’s belt notebook follows the native walk offset and must remain connected. Preserve existing character faces, accessory identity, furniture geometry and save accounting. See ART-AUDIT-v63.md and release63/check63.cjs.
