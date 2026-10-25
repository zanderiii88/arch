# Archipelago 0.50 — Little gatherings

## Gathering

Two reachable herb patches on each of the four existing islands: wild mint on Old Rayne, yarrow on Pinewatch, marsh leaf on Reedhaven and catnip on Emberstone. Each patch supplies one sprig and regrows after three game days. Gathering is optional and has no deadline. Plants remain as muted shoots while recovering.

Journal → Herbs records discoveries, locations and pouch quantities. A separate 24-sprig pouch preserves ordinary backpack capacity and existing inventories. Herbs do not spoil. Known locations are listed to help players find the new activity.

## Cottage basket

A basket on the cottage's right-hand counter can be tapped directly or reached through the Herb basket button. Hannah walks to it before the order opens. The first request asks for one mint, one yarrow and one catnip. Later requests rotate through two-sprig bundles. A full bundle consumes the exact stock and pays 12 coins once; the next order opens two game days later. Mona's note introduces gathering, future remedies and Mini's river-rune expedition. Remedy crafting and river panning are not implemented in this patch.

## Familiar cats

Once both women have been met, every third game day is a cat visit: Mini and Mona's human sprites are absent, and the cottage contains an all-black cat and a black cat with white chin and underbelly. Their identities are implied, not announced. Both remain in the cottage for that day, and basket deliveries work while they are present. They return to their ordinary human routines on other days. Story route unlocks and normal ferry schedules remain unchanged.

Each cat uses an animated pixel face in the standard conversation panel. Dialogue contains only meows, chirrups and purrs. Walk over, choose Pet the cat, and see closed eyes, a head nuzzle/chin lift, tail response and a small heart. A short synthesized purr respects the existing sound/effect settings. No rewards are farmed by petting. Scene animation settings suppress decorative motion.

## Compatibility and validation

Main save and Story test use their existing keys. New herb/cat records are migrated defensively and saved in the active slot. Existing food, eggs, catches, collections, story progression and DEV travel are preserved. No push or deployment performed.

Automated: supplied 0.49 feature, opening/ferry/sleep, collections/rods, timber project and clothing-mask regressions; new gathering/regrowth/capacity tests; delivery consumption/reward/cooldown guards; herb save roundtrip and malformed-data migration; cat schedule, repeat island visits and pet dialogue; reachable herb patches on all four real island geometries; cottage loading and walking to the basket; JavaScript syntax and HTML/service-worker asset references; cumulative package reconstruction and ZIP CRC checks.

Visual: inspected native Canvas renders of both cat portraits and the furnished cottage; adjusted cat size and moved the basket to the counter to avoid covering Hannah. These are renderer checks, not browser screenshots.

Not verified: browser layout (browser installation download failed), real touch targets, dialogue/pouch scrolling on small phones, synthesized purr playback, and subjective art consistency with Hannah's approved look. Please review these on a phone. No claim of complete playtesting.
