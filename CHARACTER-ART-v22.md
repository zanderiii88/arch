# Illustrated player and wardrobe

Approved pose art is used directly, rather than redrawing the player as code-native shapes. Built-in image generation produced the transparent pose and garment atlases. The renderer crops, aligns, masks, colours and assembles these layers at runtime.

## Assets and prompt set

- player-poses-v22.png: approved 4-column, 3-row atlas: idle/breath/blink, walking and wave; dark wavy bob, teal tee, beige shorts, sandals; front view looking gently right.
- player-trousers-v22.png: edit the approved atlas, changing only shorts to indigo full-length trousers and sandals to brown closed shoes. Preserve all 12 poses, scale, coordinates, identity and upper-body art. Transparent background.
- player-skirt-v22.png: edit the approved atlas, changing only shorts to a sea-green knee-length A-line skirt. Preserve poses, identity, coordinates and other clothing. Transparent background.
- player-sleeves-v22.png: edit the approved atlas, changing only the tee to a long-sleeved teal crewneck pullover following each arm pose. Preserve all other art and coordinates. Transparent background.
- player-heads-v22.png: matching heads in a 2×2 transparent atlas based on the approved hair concept: bob, tucked bob, low bun, short crop. Same face, skin and direction; no bodies, labels or floor.

Source PNGs are intact in assets. Art is packaged for offline use, not generated during play. The supplied real-world Jamie photo is not included in the package.

## Assembly and saves

One foot anchor and a 458-unit visible-height rig align the clothing. Tops and bottoms meet at the waist. The opposite passing step mirrors the body while retaining the face direction. Heads use a neck baseline; the default retains the approved pose-sheet head. Long skirts extend the skirt material over walking legs. The completed sprite cache is limited to 48 half-resolution sprites. Colour changes preserve material shading; glasses, facial hair and headwear overlay the head.

Existing appearance fields remain. New fields are hair22, bottomTint22, topColour22 and garment22. They survive saving and JSON export/import. A dress selects the skirt silhouette; selecting a bottom returns to separates. No gender field is added.

## Limits and next pass

Front view and mirrored movement only; a small four-pose walk. Dedicated illustrated work, casting, sleep and stretch poses remain future art. NPCs retain established models until individual passes. Jamie's next design uses the supplied photo's short brown hair, broad smile and larger build.
