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
