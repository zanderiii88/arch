# Archipelago — v0.9.0

A phone-first island game prototype, supplied as a complete build. No build tools, accounts, API keys or CDN required.

## Updating your working GitHub Pages setup

Extract this ZIP and upload everything inside it to the repository root, replacing existing files. Keep the assets folder intact. index.html must be directly at the root. Commit the changes. Continue using Settings → Pages → Deploy from a branch → main → / (root), as in your last working update.

Reopen online and confirm **v0.9.0** on the title screen. Existing saves and music preferences are preserved. Do not clear site data as an update step; export a save through Options before changing phones or browsers.

## New in this build

- One mailbox with Inbox and Outbox. The outdoor shipping crate and its marker are removed. Reserved parcels and the Monday collection / later reply process migrate intact.
- Ground markers are painted beneath the character, while their transparent touch targets remain accessible.
- The shack has a separate arched wooden storage chest, with iron bands and its own artwork.
- A twelve-slot backpack, two rows of six, with twenty items per supply stack. Catch buckets remain separate so fishing and pool catches do not consume food/equipment slots.
- A full-height storage screen: an open fridge with shelves and twenty-four slots above the backpack. Fridge slots hold twenty items each; old contents are preserved. Drag items across, or tap an item then the destination container. Quantity choices and eating/drinking remain available. The interface has no instructional paragraph.
- Letters on warm paper with bundled Patrick Hand lettering. Bulletins use a newspaper layout and a monochrome illustration of storm repairs.
- Name your island when creating a character. Existing players can choose Options → Name your island. Your chosen name appears on the map header and in the bulletin. The arrival dialogue includes your character portrait and name.
- Forty-two irregularly scattered pool stones, with broad size variation, rotation and overlap, plus driftwood and shells. Rock grabs follow the larger/smaller footprints.
- Six real shore-animal types: shore crab, hermit crab, small octopus, common prawn, periwinkle and common starfish. Individuals vary in size and subtle natural colours, with animation frames and recorded catch sizes.
- Raking darkens irregular patches rather than exposing straight grooves. Loose sand moves into a small pile toward the end of a stroke. Raking does not rebury deeper finds.
- Five island torches light the routes after dusk. Warm light softens the night shading locally, flames flicker gently, and daylight torches stay unlit.

## Playing

Create your character, name them and arrive by ferry. Tap the ground to walk or a yellow marker to visit a location. Walk around the shack, use the fridge and storage, and sleep in the bed. Time displays in 15-minute steps. At 2am an exhausted character is returned home; unrefrigerated perishables spoil, and a meal appears by the bed.

Fishing: wait for a ripple, tap to cast, then hold to reel and release to ease the tension. Two fish species, variable pulling, catch sizes, records and a return recap are included.

Rock pools: drag stones aside, then drag the creatures beneath them into the lower-right bucket. Some move sooner than others. Move all stones and resolve the creatures to unlock a new search.

Beach: rake shallow finds free. Sweep with the detector for metal signals, then use the spade in the marked area. Drag uncovered finds into the bucket. A new patch asks before discarding an unfinished search.

Read letters at the mailbox. Requests can ask for a fish, crab or lost brass key. Seal suitable items in the mailbox Outbox. Monday's ferry collects before noon; a later ferry brings a thank-you letter and reward. Trader: Wednesday AM. Shop: Friday AM. Ferry: Monday AM. House decorations and northern chickens are included.

## Sound and offline use

All three supplied tracks are included under Options → Sound & music. Music, effects and sea ambience have separate switches and volumes. Track selection and preview are available. Music fades between selected tracks and pauses when the page is hidden. A deliberate tap is needed to start browser audio. Phone vibration support varies.

The service worker caches the complete game and soundtrack after a successful online installation. Allow the first download to finish before going offline.

Music: Beach Bum Boogie — Dream Protocol; Bossa Nova — Alana Jordan; Playful Summer Ukulele — VJ Galaxy. Font licences are included alongside Nunito and Patrick Hand.

## Verification

Checked save migration, storage limits/conservation, partial transfers and cancellations, all six catch types, outgoing parcel confirmation/retrieval, ferry collection/replies, one-time rewards, island naming and escaping, connected walking routes, sand depth, night rendering, and existing sound controls. A 100-catch fishing simulation still passes. Canvas scenes and key interfaces were inspected, with browser drag/tap checks. Actual phone performance, haptics and sound remain device checks.

Additional islands, mystery-key destinations and crab-pot gameplay remain future features. Saves stay local to this browser.
