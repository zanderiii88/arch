# Fishing animation and character corrections

This build uses the approved illustrated player and existing garment/head atlases, including the pending alternate-neck and hair-colour fixes. The player remains non-gendered.

## New art and prompt set

Built-in image generation produced two transparent 4-column, 2-row atlases. Source PNGs are retained intact in assets:

- player-fishing-v23.png: use the approved player atlas as the identity/style reference. Eight planted-foot fishing poses: hold, backswing, forward cast, waiting, bite pull, two reel poses and rest. Preserve the dark bob, teal tee, beige shorts, sandals, front body and slightly right-facing head. No rod, line, props, labels, floor or shadows; genuine alpha transparency.
- player-fishing-sleeves-v23.png: edit that fishing atlas, changing only the teal tees to matching long-sleeved crewneck jumpers. Keep hands, poses, positions, framing, head, lower body and outfit unchanged. No rods, labels or backgrounds; preserve alpha.

## Runtime assembly

The body is mirrored toward the water while the existing front head is preserved. Bottom layers remove the original hanging arms before adding the new bent arms. Sleeves and hands layer above the head where a casting arm crosses it. Tops/colours, skirts, trousers, footwear and alternate heads use the same existing appearance data. Grip points are checked against source hand pixels and adjusted for the long-sleeved version. A small finger layer sits above the rod grip.

fishing-rig-v23.js owns shared grip/tip/control/line geometry. It draws the cork/blank/guides/reel using the game's existing canvas approach. The rod and line are separate from the sprite: tension can bend the tip while the line remains attached. The crank runs only while actually reeling and scene animation is enabled. Mandatory cast/landing/bite feedback remains with reduced motion.

## Corrections and limits

Alternate heads overlap an open neck from the body; the head atlas's closed bottom outline is trimmed at assembly to avoid a detached seam. Hair colour protects facial skin spans and the central face/chin. Hats and facial hair are withheld until matching sprite art exists; saved fields remain compatible. Eyewear follows the adjusted head position.

Eight pose drawings are a small activity animation set, not a complete cinematic rig. Casting and reeling now have their own art; dedicated illustrated chopping, sleep/stretch and the NPC overhaul remain separate future work. No real-world reference photographs are included in the game package.
