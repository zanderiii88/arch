# 0.111 surface placement and UI review

Reuse the existing salvageCell88(0) damaged-rod sprite at a whole 2x native scale, nearest-neighbour, fully inside the activity frame. No source bitmap or character part is changed. A small text instruction sits below the rod; its broad pickup region includes that instruction. The initial existing storm wood uses the native beach renderer at a larger beach-only scale. Inventory and other render contexts keep their existing scale. Do not treat ordinary wood as a rod ingredient.

The rod is separate from saved sand items and chooses a surface position away from their centres. Surface and held native renders were exercised; the real browser showed the rod and wood on sand at 390x700 and 360x560. Dragging the rod into the native bucket displayed the protected Key items discovery card at both sizes. The compact card and existing acquisition feedback were reviewed at 360x560. The map view no longer showed the repair-piece sprite.

Scoped CSS keeps the book's page count on one line between equally sized buttons. All three pages and Put the book down were exercised at 360x560; the first page was also reviewed at 390x700 before the spacing fix. Ben's longer introductory page was reviewed at 360x560. DOM geometry confirmed no whole-page scrolling in the reviewed short views. No claim of full browser progression, real touch usability or phone audio/resume testing.

Dedicated full sitting/reading poses remain unimplemented. Preserve all native character anatomy, existing island scenery/palettes, furniture orientations and key-item arm art. No new raster assets in this patch.
