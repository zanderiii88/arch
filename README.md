# Archipelago — v0.10.0

A phone-first island game prototype, supplied as a complete build. No build tools, accounts, API keys or CDN required.

## Updating your working GitHub Pages setup

Extract this ZIP and upload everything inside it to the repository root, replacing existing files. Keep the assets folder intact. index.html must be directly at the root. Commit the changes. Continue using Settings → Pages → Deploy from a branch → main → / (root), as in your last working update.

Reopen online and confirm **v0.10.0** on the title screen. Existing saves and music preferences are preserved. Do not clear site data as an update step; export a save through Options before changing phones or browsers.

## New in this build

- Speaker names sit in the dialogue box's top-right corner, clear of the portrait. Long names are safely constrained.
- Optional Add to checklist controls on request letters and request details. The small top-bar dropdown shows progress, deadlines, stored items and packed/collected requests. Tracking survives saves and can be removed independently of the request.
- Coral-red ground markers with cream borders, still beneath the character.
- Some casts get no bite. A quiet cast ends after a short wait and allows another cast. Bait improves the chance and speed. After two misses the next valid cast gets a bite. Reeling stays forgiving for the basic fish.
- Casting swish, a light reel ratchet while actively reeling, and more audible footsteps/wooden floor effects. Existing music, FX and ambience volumes remain independent. Sound & music now includes a movement/casting sound test. Existing mute settings are respected.
- Beach rendering clears and resets its canvas state every frame. Its animated water is clipped to the beach's own water area. Day/night shading and raked sand do not accumulate darkness across frames.
- The shop boat now visits Tuesday, Thursday and Saturday mornings. Mara's trader boat visits Wednesday mornings; the ferry remains Monday morning.
- Pip's starting shop range: food, water, bait, a simple stool, small table, seaside plant and a warm floor lamp. The lamp costs 140 coins against the 120-coin starting purse, offering something to save for.
- The trader begins with a shell ornament and an old ship lantern (155 coins). Later stock can include stronger line, a driftwood bench and an island chart.
- Rugs, cushioned chairs, bookshelves and clothes join the shop through time, discoveries and completed requests. Some later choices rotate between visits. Locked items cannot be purchased through stale buttons.
- Shop buys common catches and finds. Trader buys unusual creatures, spiral shells and larger fish, with a modest premium. Lost quest keys are retained.
- Furnishings go straight to the shack's storage chest. Use Decor at home to place or put them away. Furniture has fixed simple positions, collision checks and safe paths to essential house interactions; placing an item will move the character aside if needed.
- Closing a shop/trader visit gives a friendly reminder to return for possible new stock.

Everything from v0.9 remains included: larger fridge/backpack, one Inbox/Outbox mailbox, paper letters, illustrated bulletins, island naming, six tide-pool creatures and warm night torches.

## Playing

Create your character, name them and arrive by ferry. Tap the ground to walk or a yellow marker to visit a location. Walk around the shack, use the fridge and storage, and sleep in the bed. Time displays in 15-minute steps. At 2am an exhausted character is returned home; unrefrigerated perishables spoil, and a meal appears by the bed.

Fishing: wait for a ripple, tap to cast, then hold to reel and release to ease the tension. Two fish species, variable pulling, catch sizes, records and a return recap are included.

Rock pools: drag stones aside, then drag the creatures beneath them into the lower-right bucket. Some move sooner than others. Move all stones and resolve the creatures to unlock a new search.

Beach: rake shallow finds free. Sweep with the detector for metal signals, then use the spade in the marked area. Drag uncovered finds into the bucket. A new patch asks before discarding an unfinished search.

Read letters at the mailbox. Requests can ask for a fish, crab or lost brass key. Seal suitable items in the mailbox Outbox. Monday's ferry collects before noon; a later ferry brings a thank-you letter and reward. Trader: Wednesday AM. Shop: Tuesday, Thursday and Saturday AM. Ferry: Monday AM. House decorations and northern chickens are included.

## Sound and offline use

All three supplied tracks are included under Options → Sound & music. Music, effects and sea ambience have separate switches and volumes. Track selection and preview are available. Music fades between selected tracks and pauses when the page is hidden. A deliberate tap is needed to start browser audio. Phone vibration support varies.

The service worker caches the complete game and soundtrack after a successful online installation. Allow the first download to finish before going offline.

Music: Beach Bum Boogie — Dream Protocol; Bossa Nova — Alana Jordan; Playful Summer Ukulele — VJ Galaxy. Font licences are included alongside Nunito and Patrick Hand.

## Verification

Save migrations, tracked requests, capacity/conservation, partial/cancelled transfers, outgoing parcels/replies, rewards, naming and escaping, connected routes, furnished indoor routes, gated/rotating stock, purchases, sales and quest-key preservation are covered by isolated game checks. A fishing run produced 100 catches from 129 casts, including 29 quiet casts with at most two consecutive misses. Effects routing and independent mute controls are checked.

Native canvas checks compare identical beach pixels over 200 repeated day/night frames and after deliberately polluted canvas state. Main scenes, furniture and key browser interfaces were inspected. Actual phone sound, haptics and performance remain device checks. If the beach image issue persists, a screenshot will help identify the device-specific symptom.

Additional islands, mystery-key destinations and crab-pot gameplay remain future features. Saves stay local to this browser.
