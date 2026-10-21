# Archipelago — v0.8.0

A phone-first island game prototype. All code, artwork, fonts and music are included. No build step, API keys, server or CDN are required.

## Uploading to GitHub

If the existing **Publish Archipelago ZIP** workflow is installed, upload **Archipelago-v0.8.0.zip** to the repository root and commit it. Keep the filename unchanged. The workflow selects the highest release number and publishes its contents; older ZIPs can remain there.

For a manual update, extract this ZIP and upload its contents together at the Pages root: index.html, game-v0.8.0.js, style-v0.8.0.css, sw.js, version.json, manifest.webmanifest, .nojekyll and assets. Unversioned game.js/style.css aliases are included for editing.

Reopen the game online and look for **v0.8.0** on the title screen. Use **Check for updates** if necessary. Existing saves migrate automatically. Do not clear browser data to update; export a save backup through Options before moving browsers or devices.

## This build

- Larger illustrated mailbox and parcel box, with an obvious softly pulsing unread marker.
- Yellow ground buttons replace the island's location labels. Tap once to walk there and enter the interaction automatically. Buttons retain accessible names.
- A densely dressed rock pool with 36 movable stones, 12 rock designs, shells, seaweed and debris. Shore crabs, hermit crabs and octopuses use four-frame sprite animations.
- Detailed beach finds, tools, buckets, food and fish, with grab highlights and bucket highlights. A spiral shell joins new beach patches. Existing patches are preserved.
- Shared backpack, fridge, storage and delivery screens. Drag between containers, or select an item and tap the other container. Supply stacks offer One or All that fit; six backpack stacks, ten units each. Catch buckets remain separate from supply capacity.
- Eligible request items are highlighted. Sealing a delivery always asks for confirmation; parcels can be retrieved before collection. Fridge accepts food and water; the chest also stores supplies, catches and beach finds.
- Softer icons, rounded controls, bundled Nunito font and short first-use gesture hints. The question-mark buttons replay activity hints.
- Quiet footsteps, stone, sand, rake and bucket sounds, plus separate sea ambience.
- All three supplied music tracks are selectable and previewable under Options → Sound & music. Music, effects and ambience have separate switches and volumes. Selected music rotates with fades, pauses when the page is hidden and resumes when you return. Preferences stay on this browser.

## Playing

Create your character, name them and arrive by ferry. Tap the ground to walk or a yellow marker to visit a location. Walk around the shack, use the fridge and storage, and sleep in the bed. Time displays in 15-minute steps. At 2am an exhausted character is returned home; unrefrigerated perishables spoil, and a meal appears by the bed.

Fishing: wait for a ripple, tap to cast, then hold to reel and release to ease the tension. Two fish species, variable pulling, catch sizes, records and a return recap are included.

Rock pools: drag stones aside, then drag the creatures beneath them into the lower-right bucket. Some move sooner than others. Move all stones and resolve the creatures to unlock a new search.

Beach: rake shallow finds free. Sweep with the detector for metal signals, then use the spade in the marked area. Drag uncovered finds into the bucket. A new patch asks before discarding an unfinished search.

Read letters at the mailbox. Requests can ask for a fish, crab or lost brass key. Seal suitable items in the delivery box. Monday's ferry collects before noon; a later ferry brings a thank-you letter and reward. Trader: Wednesday AM. Shop: Friday AM. Ferry: Monday AM. House decorations and northern chickens are included.

## Sound and offline use

A deliberate tap starts audio, subject to your browser's media rules. Track preview lasts up to 12 seconds and can be stopped by tapping its button again. Sea ambience and effects can be muted independently of music. Phone vibration support varies by device/browser.

The service worker stores the complete game and music for offline use after a successful online installation. Allow the initial download to finish before going offline. This is a larger update because it contains all three MP3s and new artwork. No network service is used for gameplay.

Music supplied for this project: Beach Bum Boogie — Dream Protocol; Bossa Nova — Alana Jordan; Playful Summer Ukulele — VJ Galaxy.

## Verification and current scope

Checked with isolated game logic tests, native canvas rendering and browser interaction: legacy saves and game systems, connected walking routes, creature pickup, supply capacity and conservation, stale/cancelled transfers, parcel collection/replies, track rotation/fades/preview and cached audio byte ranges. Actual phone audio, haptics and performance remain device checks.

This remains a prototype. Additional islands and crab-pot gameplay are still previews. Saves and sound preferences are local to the browser; there is no account or cloud save.
