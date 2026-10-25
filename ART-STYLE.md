# Archipelago art direction — mandatory for future additions

## Reference and quality bar

Hannah with the original wavy bob is the character reference. Use the readable Old Rayne shapes as the environment reference. Chunky pixel art means deliberate silhouettes, connected anatomy, restrained colour ramps and expressive details. It does not mean crude boxes, blurred reductions of paintings or smooth vector shapes. The shared 0.51 display grid is a consistency aid, not a substitute for composing good artwork.

Preserve the front-and-slightly-above camera, footprints, usable paths, scene scale and foreground ordering. Small overworld figures and larger close-scene figures must represent the same designs.

## Characters, hair and clothing

Use crisp stepped contours and clusters of pixels, with 3–5 coordinated shade values per material. Retain faces and expressions. Hair needs a deliberate rear silhouette, preserved face/neck/body, then a foreground crown/fringe which blends into the rear palette and texture. Switching cuts must remove the full previous silhouette. Do not leave shoulder fragments, gaps in the neck/collar, dye on the shirt or detached tails of hair.

Dye full garment silhouettes while retaining folds, outlines and highlights. Check both skirt edges and hem, not only the centre. Protect hands, arms, legs and jewellery. Inspect walking, waving, talking, fishing and work poses, not just the static creator image.

Anchor bodies and feet. Keep tools attached to hands and limbs connected. Animate complete forms or connected joints; do not slice a creature into unrelated strips and slide them. Keep faces, tails and expressive effects inside their frames.

## Creatures and props

Use creatures-v52.js and assets/creatures-v52.png for fish and coastal creatures. The user-supplied rounded crab, curved orange prawn, purple octopus and varied fish reference sheets define the finish. Prefer attractive deliberate pixel shading and distinct anatomy; do not regress to thick geometric outlines or recoloured copies of one silhouette. pixel-style-v51.js is a fallback and supplies older drawing primitives, not the creature quality target. Inventory icons, collection silhouettes, catch close-ups and activity sprites must use the same species artwork. Keep species recognisable by body shape, fins and markings rather than fine scales or realistic lighting. New species must have a defined shape and palette before integration.

Cats should look black with restrained highlights; Mona has a white chin and underbelly. Preserve connected tails, cheeks, ears and haunches. Cat portraits and world sprites must show the same identity. Herbs need distinctive leaf/flower forms and consistent pixel clusters; botanical discoveries must respect story knowledge.

## Scenes and rendering

All island maps retain their original source pixels. Disable canvas image smoothing when copying source maps into scratch canvases and when drawing scenes. Use CSS image-rendering: pixelated for display scaling. Never average, blur, or repeatedly downsample scenery: the former 0.51 display grid softened every island and is removed in 0.53.

For new backdrops, produce deliberate pixel artwork at the established logical scale from the outset. Keep foliage, stone, water, wood and light readable in broad shapes. Compare against both Hannah and Old Rayne at phone size before accepting. Use nearest-neighbour rendering for new backdrops too. Complex source scenes still need individual judgement and may warrant future dedicated redraws.

## UI and review

Keep soft typography and rounded controls. Icons should be simple, readable and consistent. Announcements use the short top status banner plus persistent relevant world attention pins; do not use full-screen overlays for routine mail or arrivals. Reserve modals for a decision, detailed activity or requested information.

Before accepting an art change: render it at native and actual phone sizes; compare it with the references; inspect anatomy, frame bounds, attachment, recolouring and foreground ordering; run relevant regressions; state exactly what was visually checked and what still needs physical-phone review. Never claim that a code/render check verifies touch usability or subjective user approval. Do not add a visibly different art treatment just because it is easier to generate.

## Island colour identity and Pinewatch ownership

Consistent art treatment must not make every island the same colour. Old Rayne: sunny grass greens, warm sand and bright blue sea. Pinewatch: deep pine greens, cool teal sea, slate and rusty needle-covered ground. Reedhaven: pale gold/yellow-green reeds, olive willow foliage, straw and pale warm timber with softer blue-green shallows. Emberstone: charcoal basalt, muted purple/plum shadows, copper/ochre ground cover, warm turquoise springs and deeper petrol-blue sea.

Pinewatch has ONE shared orange-roofed hut belonging to Jamie and Ben. It connects to their existing home/workshop interior and timber yard. There is no separate cabin or personal home for Hannah on Pinewatch. Use the normal ferry/phone or camping when staying late. Preserve the two brothers' beds and their existing modular interior.
