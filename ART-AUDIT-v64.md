# 0.64 scenery audit — Different shores

## Implemented

Four distinct harbours replace the former home/Pinewatch backdrop selection, including dedicated Reedhaven and Emberstone scenery. All four share registered deck top y480/front y626 on the unchanged 1280×768 logical harbour. Horizon remains above the existing ambient-water strip. Native 640×384 art is enlarged by integer nearest 2×; backgrounds have at most48 colours. Ambient strips move in whole2-pixel steps. Boats and attached crew retain their existing approved sources and painter order; no navigation/collision/camera/marker/boarding geometry changes.

Crab coast is registered to the existing ledge, water entry and y625 contact position, with quiet broad underwater light shapes and a clear central trap corridor. Garden has an empty natural coop clearing, separate current coop/bowls/hens and two connected16-colour96×32 foreground fence sections. Rails draw after actors before night shading. The gate gap x208–304 leaves the original x256 exit and approach clear. Garden remains a close scene; there is no new overworld coop plot/collision before construction.

Master artwork was made with built-in image_gen. Exact prompts, revision prompts and source records are retained in release64/art-manifest64.json; final masters in release64/masters. Native preparation uses explicit landmark registration, nearest sampling, restrained palettes and hard alpha, without averaging. Asset writes are verified in memory and installed atomically. No complete furnished rooms or painted-in usable props were introduced.

## Automatic checks

release64/check64.cjs compares original dock floor/routes/camera/boats/targets/marker functions, pot drawing/physics/save/landing functions and coop floor/routes/care/preconstruction rules with retained0.63 source. It verifies all new assets are ready, per-island selection, no state reset during fallback/late load, foreground fence before night, and scoped draw flag cleanup. prepare64.py checks native integer pixels, palette limits and connected fence alpha; package64.py checks repeatable preparation/assembly, PNG decoding, references, JS syntax, cumulative reconstruction and ZIP CRC/unique entries. Final saved/downloaded ZIP bytes are checked separately by size, SHA256, exact equality and CRC.

Retained automated regressions cover household/chest/bag/chickens/Iris; coastal activity controls and protected finds; coop construction/care/egg caps; fishing geometry/late-loading, woodland and beach; photography/mineral; four furniture facings, grid access/sleep/storage and separate saved possessions; cottage/resident/cat/herb interactions; map/Pinewatch belongings; fixed dock exit, crafting gates/Inbox; opening/ferry, collections/rods/timber and clothing masks. Native fake-DOM tests are not browser layout/touch tests.

## Visual review and remaining work

Inspected actual native Canvas renders: all four harbour entrance views, wide harbour and foreground props/boats/crew; crab-pot rest/lowering/raising/landing with rope/ledge/ground contact; coop daylight, exit gap, Hannah behind front rail, night shading and unbuilt home. The preview uses actual scene renders at390 pixels wide. Boats were reviewed and retained, not redrawn. Final asset generation is only a candidate until user art approval.

Physical-phone/browser review remains: cached update and version, tap-to-walk at dock boundaries, ferry boarding, stationary exit, pot gestures/timing, garden gate and fence overlap, night readability and subjective art consistency. Retain earlier0.63 and furniture/activity phone review. Other tiny kitchen/accessory/UI mismatches remain future audit work; do not claim whole-game consistency is complete.

No save keys or stock changes, migration, costs or progression changes. Main save, Story test and session-only DEV travel remain. No push/deployment.
