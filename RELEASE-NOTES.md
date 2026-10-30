# Archipelago 0.82 - A shelf of stories

Cumulative update over a complete installed 0.68 or later. Replace matching files, merge assets and retain everything else. Not standalone. No push or deployment.

After learning home crafting through the community timber project, Hannah can make one Keepsake shelf for three timber. It uses the existing crafting and home decoration systems. Place it through Decorate > Stored items, move it on the wall grid and put it away like other furniture. Tap its visible room position to walk over and open it, or use More > Look at my keepsake shelf. No rotation is offered for this wall piece. The shared native household shelf supplies its bare plank and brackets; displayed objects are separate shared sprites.

Three spaces hold actual river stones, scallop shells, sea glass, smooth beach pebbles or the received timber memento. Selecting a river stone subtracts one from its pouch; selecting a beach treasure moves its original object from home storage or the beach bucket. Removing it restores the river count or returns the original beach object to home storage. Collection records remain. A full river pouch prevents removal safely, leaving the stone on display. Putting the shelf away retains its contents. Save slots, contents and shelf position persist independently; old saves start with empty display spaces.

The timber plaque from Jamie and Ben's 0.81 thank-you letter is the first quest memento. It can move straight from its wall position to the shelf, or from storage, with only one physical copy. While displayed it cannot also be placed on the wall. Tap it, then Remember how I got this, for three short recollections: restoring the yard, the brothers' letter and the H for home. The player's current native portrait and name appear. Memories can be revisited or closed without consuming anything or repeating quest rewards. No new main quest or memento is awarded by opening the shelf. Later quest mementos can receive their own authored provenance; none of the shrine stones are removed or duplicated and the visitor's identity/age remain concealed.

The app tile now has softer rounded corners in 192px/512px PNGs and the favicon/apple-touch references. Central pixels retain the approved starting-shack artwork exactly. The manifest uses the rounded images for ordinary icons and keeps a separate opaque maskable image for launchers that apply their own shape. Existing installations may refresh their launcher icon on a different schedule from page updates. Service-worker precache entries and version are updated without duplicate URLs.

Revealed prawns, octopuses and shore crabs now begin escaping after 0.4-0.65 seconds and move about twice as fast. Hermit crabs begin after two seconds with a modest speed increase. Periwinkles and starfish keep their slower movement rather than swimming unnaturally. Held creatures remain still; release grace, capture accounting, species/size, expiry and refresh rules remain. This is actual movement, independent of the ambient-animation preference.

Cooking ingredient artwork now bypasses the nutrition-badge wrapper. Bread shows its bread sprite; carrot and other ingredients have no apple/water badges over their art. Recipe/pan nutrition overlays are hidden within the cooking surface only. Nutrition remains available in the normal inventory detail. No recipe, quantity, storage or cooking accounting changes.

Automatic checks cover gated one-time shelf crafting and exact cost, three spaces, physical transfers/no duplication, memory provenance and unchanged resources, wall-to-shelf transfer, stored-shelf retention, saved position/reload, full-pouch guard, separate slots/stale controls/legacy/malformed data, faster reveal/escape and held/release-grace protection, and clean ingredient markup. Icon checks verify transparent corners, opaque centres and byte-equal central pixels, separate maskable artwork and valid references. Existing 0.77 opening and 0.81 neighbour/gift checks pass.

Chromium checks use actual craft/place/direct shelf tap/walk/selection/memory/Back/remove controls, room rendering, bread/carrot ingredient art and 360/390/430 widths at 560px height without page overflow or runtime errors. Internal screenshots of the shelf, current-player memory, unobstructed room shelf, bread/carrot kitchen and rounded icon were visually inspected; they are excluded from deliverables. Browser-only test responses pause RAF and expose an eval hook; production retains its ordinary frame loop with no test hooks.

Packaging validates syntax, aliases/references/version, repeatable assembly, complete cumulative reconstruction over 0.68 and ZIP CRC. Physical-phone review remains for shelf tap comfort/scrolling, natural memory pacing, launcher-icon refresh and rock-pool difficulty. Existing Android app-return artwork behaviour remains a device check. No publishing.

---

# Archipelago 0.81 - A little kindness travels

Cumulative update over a complete installed 0.68 or later. Extract into the repository root, replace matching files and merge assets; retain everything else. Not standalone. No push or deployment.

Restoring the community timber yard now queues a thank-you from Jamie and Ben for the next Monday morning after completion. It becomes available through the existing Inbox and mailbox attention indicator when that game time is reached, including after a time jump. Existing completed-project saves queue it when first checked. The letter describes boards helping neighbours repair roofs and steps. Read letters remain in the Inbox. An unclaimed enclosure continues to count as waiting post.

Receive the keepsake grants one unique Little timber keepsake to home storage. It is a small carved wooden wall plaque with an H for home, made from a workshop offcut. A full backpack cannot block it. No coins, building materials or needs are changed. Repeated clicks, rereading, replaying the old project completion, reloading and stale controls from a different save cannot produce another gift. The existing decoration system handles placing, moving and storing it; its wall position persists per save. Open Decorate > Stored items at home to place it. Existing stock and furniture stay intact.

After at least one herb delivery, Nat, Katie and Bruce have additional optional chat exchanges about Mona's parcels and Mini's neighbourly rounds. Required greetings, introductions, recipe callbacks, botanical-name discovery, trade/research/project choices and original herb delivery accounting remain. No medicine effects or new gathering requirements.

Familiar dockside islanders can give one non-modal welcome per game day at the home landing. A successful ferry trip home remembers the island visited; the next available familiar dockside character can acknowledge that crossing. Otherwise greetings can reflect the restored yard or cottage parcels. The existing dock greeting text and native waving behaviour are reused. Greetings defer during walking/targets, conversations, modals, arrivals, travel, rewards, sleeping/waking, hidden pages or unavailable artwork. Unmet or absent characters do not greet the player. No forced dialogue or movement interruption.

The journal retains its eight sections and adds up to four gentle Picking things up again reminders. These refer only to known progress: an unclaimed timber thank-you, starter-rod pieces/repair, a briefed unfinished timber project, an introduced herb basket when its next order is available, found stones still away from the shrine, an available unfinished visitor conversation or earned unwatched memories. Buttons open the existing relevant panels and retain Back to journal. No new tasks, deadline system, friendship score or travel unlock. The visitor's identity and age remain concealed; the fifth carving remains quiet.

Automatic checks exercise the real project completion followed by next-Monday timing, Inbox/read/unclaimed accounting, full-backpack single gift, unchanged coins/supplies/projects/needs, decoration place/store/position/reload, parcel-context and reminder gates, familiar homecoming/once-per-day and hidden/walk/dialogue deferral, stale save claims, separate slots, legacy and malformed state. Existing real opening and visitor encounter checks pass. Chromium exercises journal-to-Inbox-to-letter, receiving/disabled repeat claim, stored-item placement and home rendering, reminder Back and 360/390/430 widths at 560px height, and a non-modal dock greeting without runtime errors. Browser-only served code pauses RAF and exposes an eval hook; production retains its normal loop with no test hooks.

Visual review inspected the letter, scrolled reminder cards, native keepsake close-up and actual home placement beside the existing furniture. The final keepsake uses one cached 36x24 native canvas sprite with stepped edges, wood shading/grain, a cord and carved H; icon and room use the same renderer. The earlier loose-driftwood treatment was replaced before packaging. No raster or scenery changes. Internal screenshots are excluded. Physical-phone reading pace, reminder scrolling/taps, mailbox visibility and dock greeting timing still need review. Existing Android app-return artwork behaviour remains a device check.

Packaging verifies repeatable assembly, syntax, versioned aliases/references, complete cumulative reconstruction over 0.68 and ZIP CRC. No publishing.

---

# Archipelago 0.80 - A voice among the trees

Cumulative update over a complete installed 0.68 or later. Extract into the repository root, replace matching files and merge assets; retain everything else. Not standalone. No push or deployment.

After returning all four stones and listening to the woodland shrine, a cloaked visitor waits in the clearing. An invitation appears only when the player is free beside the home-island shrine, with the awakening scene and other activities finished. Speak to the visitor starts a twelve-passage encounter; Later and closing the invitation leave it available in Journal > Storm-scattered marks and in the shrine panel. The invitation appears once per save. Existing saves with an awakened shrine qualify too.

The visitor recognises Hannah's connection to the islands and grandparents, hints that the fifth carving concerns the story between the shores, and forgets a carefully prepared introduction. The visible name remains Cloaked visitor. No real name, age, younger appearance or identity reveal occurs. The fifth carving stays quiet; no fifth stone, new quest, inventory item, money, unlock or deadline is granted.

Continue advances at the reader's pace. Leave for now, close and Escape leave the encounter unfinished and available from the notes. Only reaching the last passage and returning to the clearing records completion. Completed encounters can be replayed at the shrine. Reloading an interrupted scene does not mark it complete. Saved controls are guarded by slot, routine identity and active scene so old callbacks cannot advance a replay or another save. Legacy/malformed flags are sanitised and cannot grant the encounter without the existing four-stone awakening.

The scene reuses the registered woodland background, the player's current native appearance and the shared player29 body beneath a new stepped two-pixel hood and cloak. The face is entirely shadowed, with no hair, beard or visible age cues. The same visitor renderer supplies the scene and comparison renders. No generated raster or unrelated character style. The visitor is absent in the final passage. Ambient motes respect ambient/reduced-motion settings and pause while the page is hidden. Time, needs, position, inventory, coins, project state and rune counts remain unchanged.

Automatic checks cover the real existing shrine awakening gate, correct island/woodland/near-shrine position, walk/target/modal/dialogue/arrival/sleep/wake/hidden deferral, Later and rune-note access, twelve passages, leave/replay/stale scene controls, paused state and unchanged resources/four runes, concealed identity/age text, reload/independent saves/legacy/malformed flags. Existing opening progression and everyday-chat checks also pass. Chromium checks exercise invitation/Later/journal/read/finish/replay/Escape/wrong-island access, motion/reduced mode, 360/390/430 widths at 560px height, unchanged resources and no runtime errors. Browser-only test responses pause RAF and expose an eval hook; production retains the normal frame loop and has no test hooks.

Actual visual review inspected the first and final encounter frames and the visitor beside Hannah at the same native height. Checked connected silhouette/boots, concealed face, shared pixel scale, clearing/shrine composition, visitor's final absence and dialogue controls. Internal screenshots are excluded from deliverables. Physical-phone reading pace, visibility, short-screen scrolling/touch comfort and actual app-return behaviour remain for review. No new claim about resolving the older Android character-return report.

Packaging verifies reproducible assembly, syntax, versioned aliases/references, full cumulative reconstruction over 0.68 and ZIP CRC. No publishing.

---

# Archipelago 0.79 - A little time together

Cumulative update over a complete installed 0.68 or later. Extract into the repository root, replace matching files and merge assets; retain other files. Not standalone. No push or deployment.

Returning conversations with Nat, Katie, Bruce, Jamie, Ben, Mini and Mona now offer Stay for a chat. Each person has three short everyday exchanges, plus contextual exchanges for the reopened Pinewatch route, restored timber yard, watched meal, delivered herbs or discovered carved stones. The flowerpot mug returns in the brothers' memories of the meal. The shrine hints keep the fifth mark unexplained. There are no friendship scores, daily tasks, time limits, resource costs or new unlocks.

Introductions, project briefing, delivery buttons, shops, recipe teaching, herb basket, botanical-name discovery, medicine notebook and mineral reward all retain their original dialogue and actions. The extra choice appears after the ordinary conversation and does not replace those lines. Brothers gain it once introductions and the project briefing have happened. First introductions, cat conversations, sleeping witches and Mona's one-time mineral reward conversation do not gain the new choice. Back returns to the usual conversation choices; See you soon and close leave normally.

Each person's chat position advances only when the player chooses a chat. Opening a shop, journal preview or ordinary greeting does not consume a variant. Positions persist per save slot, with empty defaults for old saves and sanitised counters for malformed data. Saved choices from another save slot or scene cannot start a chat. Existing inventories, coins, supplies, project accounting, Main/Story keys and progression remain.

Automatic checks: all seven voices and consecutive variation, contextual lines, intro/cat/night guards, retained original story lines and actions, real project delivery choice, per-person counters/reload/legacy/malformed data, stale save action and no resource/time/position changes from chatting. Chromium checks use the actual resident and witch conversation controls, chat/Back/leave/close, contextual lines, retained community-project/herb choices and 360/390/430 widths at 560px height, with no runtime errors. Existing real opening progression and post-project meal integration checks also pass. Browser serving disables RAF only in test responses and exposes a test eval hook; production retains its ordinary loop.

Visual review: inspected an internal browser capture of the standard dialogue frame, text and Back/See you soon controls. No artwork or renderer changes. The test capture uses a paused world loop and is not evidence of live scene animation. Physical-phone reading pace, choice-list scrolling and touch comfort remain to review, alongside the existing app-return character report. Internal screenshots are excluded from deliverables.

Packaging checks syntax, matching aliases/version/references, repeatable assembly, full reconstruction over 0.68 and ZIP CRC. No publishing.

---

# Archipelago 0.78 - A place at the table

Cumulative update over installed 0.68 or later. Extract into the repository root, replace matching files and merge assets; retain everything else. Not standalone. No push or deployment. Main/Story save keys, appearance, belongings, projects, stocks, river finds, runes, crafting gates and sunset remain.

Restoring the community timber yard now earns an additional personal scene with Hannah, Jamie and Ben. This does not replace or recommit the existing project completion animation, crafting unlock or Pinewatch shrine response. A saved invitation waits for Hannah to be free on the Pinewatch overworld, after those older effects finish. It defers during walks/targets, indoor or activity screens, conversations, modals, arrivals, sleep/wake, travel, character loading, other rewards and hidden-page state. There are no extra requirements, supplies, fees or rewards to farm. Older saves that already completed the project can earn the scene too.

The invitation offers Join them for a bite or Later. Closing it also leaves the memory available in Journal > Quiet moments. The meal uses the existing native player and sibling art, Hannah's current appearance and the existing Pinewatch workyard background. A spare workbench carries bread, cheese, tea and one suspiciously mug-like flowerpot. Seven short passages include the brothers' affectionate bickering, a toast and a thank-you to Hannah. Continue keeps reading at the player's pace; Skip, close and Escape return to the same world position. Idle movement and tea steam respect ambient/reduced-motion preferences. This is a vignette: no food is taken from inventory and hunger/thirst are not refilled or spent.

Time, needs, location, money, stock, timber and project state remain unchanged while watching. Backgrounding pauses vignette motion. Completion and invitation are saved once per slot; Watch again permits replay from Quiet moments while free outside on Pinewatch. The sunset remains a separate memory, watchable at home. Leaving or reloading before finishing leaves the earned meal available through the journal. New Game resets only its own selected save's reward state. Malformed reward flags cannot grant the meal without the real saved project completion.

Validation: native integration exercises the actual old completion animation finish, its dialogue callback and original shrine response before the new reward; earning, deferral, Later/journal, seven passages/skip/replay, unchanged time/needs/position/stock/coins/project/timber, background pause, independent slots/reload/legacy completion and malformed flags. Chromium actual invitation/Later/journal/start/reading/finish/replay/Escape, rendered shared actors, animated and reduced-motion states, 360/390/430 widths at 560px height without page overflow, no supply/time/needs/location changes, wrong-island replay guard and retained home sunset, without runtime errors. Existing 0.77 opening progression and 0.74 sunset checks pass. Browser test-only served code pauses requestAnimationFrame for stable UI; animation is advanced explicitly in checks. Production keeps the normal loop and no test hooks. Internal meal/memories screenshots were inspected and excluded from deliverables.

Packaging checks repeatable assembly, syntax, aliases/references/version, full cumulative 0.68 baseline reconstruction and ZIP CRC. Physical-phone review remains for invitation timing after the old effects, native artwork/table fit, reading pace, small-screen internal scrolling and actual app return. No fifth rune, new island, golf or further large system added. The original Android character-return report still needs device verification; this release does not make a new claim about that issue.

---

# Archipelago 0.77 - Settling in

Polish build, cumulative over installed 0.68 or later. Extract into the repository root, replace matching files and merge assets, retaining everything else. Not standalone. No push or deployment. Main/Story save keys, characters, belongings, story, projects, river finds, runes and quiet rewards remain.

Fixed the bait introduction counter. The first two neighbour catches are immediately reserved outside the ordinary fish bucket. The old counter checked net bucket growth, so those catches did not count. It now counts successful session catches, including reserved gifts, and offers existing bait after the intended two catches. Loading an affected save with a repaired starter rod uses existing actual catch records to restore the introduction count; it does not invent catches, grant stock, spend bait or alter fish/drop/rod requirements. The two protected first catches still use no bait.

The journal now opens to eight clear sections: Island collection, Fishing kit, Herbs & notebook, River finds, Storm-scattered marks, Quiet moments, People of the islands and Island notes. Existing section implementations, research/rod controls, medicine notebook, people-meeting visibility and old notes remain available. Section pages have Back to journal; closing or leaving resets journal navigation so ordinary inventory/activity panels do not inherit an unrelated Back control. Two-column cards include brief progress text and scroll within the framed modal on short phones.

Nearby storm driftwood, carved fragments and the river pan receive one compact paper label when Hannah is close. No permanent dots, auto-travel or new map geometry. The nearest special find's hit radius is now 30 logical pixels instead of the earlier 16 for driftwood/herbs; overlapping candidates choose the nearest centre. Rune/pan walk-up and automatic entry remain; herbs/cleanup keep their existing confirm-gather flow. Labels are drawn behind Hannah and disappear during modals/dialogue/arrival or away from the item. The fifth shrine card is a compact full-width row, reducing unnecessary scrolling.

Verification used actual New Game and creator fade callbacks, skipped arrival, first house visit, walking to three cleanup piles, rod repair, two real protected casting/reeling/landing cycles, neighbour gift reservation, sleep/wake, next-day route reopening, legal dock-phone pickup/boat docking and first Pinewatch crossing. It confirms bait counts both gifted fish, supplies are not spent, the gifts remain available and a sunset invitation does not interrupt an active walk. Migration checks cover an affected save and a save without actual catch records. These are programmatic simulations, not a physical-phone playthrough.

Chromium actual UI checks cover all eight journal sections and return controls; 360/390/430 widths at 560px height with no page overflow; larger driftwood edge tap; nearest rune selection beside debris; nearby label rendering; an actual aborted current-character PNG request on reload; Retry artwork recovery and pageshow retention of a deliberately customised hair/clothes appearance, without runtime errors. This validates the existing 0.74 readiness/retry path under a load failure, not the cause of the original Android app-return report. Browser test-only served code pauses requestAnimationFrame for stable UI checks; creator transition ticks are exercised separately. Production retains its normal loop and no test hooks.

Retained rune and panning integration checks pass. The native harness adaptation in release77/harness77.cjs recognises the dynamically created shrine preview canvas; the production canvas is unchanged. Packaging checks reproducible assembly, syntax, versions/aliases/references, complete cumulative 0.68 reconstruction and ZIP CRC. Internal journal/discovery screenshots were inspected and are excluded from deliverables.

Phone review still needed: the full fresh Story-test flow and natural pacing, cleanup/fragment/pan visibility, nearby labels, short-screen scrolling, swipe feel, fishing/plop/bite/dig/rake/detector volumes and actual app switching/PWA/network behaviour. No new large content system or final-build readiness is implied. Fifth-rune story, friend/party rewards and golf remain future work.

---

# Archipelago 0.76 - The islands remember

Cumulative over installed 0.68 or later. Extract into the repository root, replace matching files and merge assets, retaining all other files. Not standalone. No push or deployment. Existing Main/Story save keys, belongings, rune-free legacy story effects, projects, rod, sunset and river pouch remain.

Four fixed carved stones now lie on the four current islands: a Tide rune among home-beach storm debris, a Root rune near Pinewatch's northern carving, a Reed rune beside the central Reedhaven boardwalk and an Ember rune near the warm-spring path. Tap a fragment, follow the existing reachable approach and confirm keeping it. Finds are guaranteed, can be collected in any order and do not use random drops. Their props disappear after collection. The home fragment is independent of the old cleanup rewards, so existing saves that already cleared every driftwood pile can still find it. No route unlocks, new required tools, currency rewards or altered activity drop tables.

Rune stones are saved in a protected pouch outside ordinary backpack/bin/trade storage. Journal > Storm-scattered marks shows sketches, found/returned status and gentle location clues. Bruce's generic greeting can mention the connection to the home shrine after a find; his existing special story/trade dialogues retain priority. Confirmations recheck the current slot/state, island, proximity and ownership; duplicate/stale or remote pickup cannot duplicate a stone.

Visit the shrine inside the home woodland clearing. Five carvings remain, with matching places for the four current island runes and an unfamiliar fifth. Found stones can be placed in any order by tapping their socket. Each return is immediately saved, retained in the notebook and cannot be repeated. Existing water-basin kindness and Pinewatch timber/shrine flags and visual effects remain separate and untouched.

Four returned stones unlock Listen to the shrine: a short three-passage scene using the existing woodland shrine artwork and the four rune colours. Continue controls reading; Skip, close and Escape return to the clearing. World time, hunger, thirst, actor position and belongings are unchanged; backgrounding pauses motion and reduced-motion/ambient preferences are respected. Completion is stored per save, and Listen again permits replay. The fifth mark stays quiet as a future mystery, without blocking this four-rune payoff. Restarting before completion leaves the placed stones and scene available. This is the first rune chapter, not the end of the overall story.

The shrine preview now uses the current woodland artwork. Scene exit arrows are hidden while modal panels are open, preventing the woodland exit from overlapping the shrine and reward controls. Existing modal scrolling contains the five socket cards on short screens.

Validation: native integration covers four fixed finds and routes from each dock, duplicate/wrong-location guards, placement in any order, four/fifth states, preserved old shrine/project flags, read/skip/replay/background pause, unchanged time/needs/actor/coins, independent Main/Story saves, reload/legacy cleanup compatibility and malformed state. Chromium actual home fragment tap/walk/keep/notes, socket buttons/four placements, scene reading/replay/Escape/journal, 360/390/430 containment at 560px height and no runtime errors. Retained 0.75 panning and 0.74 quiet/art-readiness checks pass. Browser test-only served code pauses requestAnimationFrame for stable UI; production has its normal loop and no test hooks. Internal screenshots of notes, returned shrine and awakening were inspected and are excluded. Packaging validates syntax, aliases/references/version, repeatable assembly, full cumulative baseline reconstruction and ZIP CRC.

Physical-phone review remains for fragment visibility, tap/approach alignment, clues, five-card scrolling, native artwork fit/glow and actual scene pace. The original phone-return character report remains a device check. No fifth rune, further islands, party/sport rewards or golf added here.

---

# Archipelago 0.75 - River treasures

Cumulative update over installed 0.68 or later. Extract into the repository root, replace matching files and merge assets, retaining all other files. Not standalone. No push or deployment. Main/Story keys, belongings, existing discoveries, projects, rod repair, bait and sunset remain.

Reedhaven now has a small river pan beside the central boardwalk at the gravel bank. Tap the bowl/location to follow the existing collision-aware path and open the activity. No new terrain, crossings, shop purchase, story requirement or DEV progression bypass. Walking remains on the existing corridor; the little bowl is drawn behind Hannah with other ground props.

Scoop gravel, then swish left and right across the bowl to wash away sediment. Swish pan is an equivalent button alternative; arrow keys or Space also wash once per press. There is no timer, strain, failed gesture penalty or supply cost. The four possible finds are milky quartz, river jasper, mica flakes and a rarer tiny garnet. Revealed finds can be kept or returned to the river. Small stones use native code-drawn icons and a dedicated river pouch; they do not consume backpack space, grant coins, unlock routes or alter existing species research.

The chosen find, pan number and partial washing progress are saved when scooped/washed. Closing, leaving, switching saves or reloading does not reroll a partly washed pan. A kept find is committed once; duplicate or stale callbacks, old slot/session references and changed pan references cannot grant another. Discovered identities remain in the journal even when returned; quantities only increase when kept. Journal > River finds opens the pouch from any island. Progression is separate for Main and Story test. Old saves initialise an empty pouch without changing anything else. State loading bounds quantities/serial and rejects invalid pending finds or progress.

Pointer capture supports touch swishes, with cancel/lost-capture/blur/background cleanup. Hidden-page events cannot wash or collect. The existing modal pauses world time and needs. Sounds use the current FX path, with water-drop and successful-keep cues. Ambient/reduced-motion settings affect background water, not the ability to play. External modals, inventory and navigation stop the active gesture while preserving the pan.

Validation: native integration checks for the reachable Reedhaven-only spot, scoop/wash/reveal/keep/return, fixed saved find and progress, duplicate/stale/hidden/invalid protections, horizontal swipe/vertical cancellation, discovery retention on return, unchanged coins/supplies, Main/Story independence, legacy/malformed state and all four find selections. Retained 0.73 rod and 0.74 quiet-reward/art-readiness checks pass. Chromium checks actual map tap and collision-aware walk/automatic entry, trusted emulated touch swishes, button washing, reveal/keep/pouch/back, close-resume/Escape/journal and 360/390/430 page containment at 560px height, without runtime errors. Test-only served code pauses requestAnimationFrame for static UI stability; screenshots were visually inspected internally. Production has normal animation and no test hooks. Packaging checks syntax, references/aliases/version, repeatable assembly, complete cumulative baseline reconstruction and ZIP CRC.

Physical-phone review remains for bowl visibility, tap/approach alignment, swipe comfort, short-screen internal scrolling, watery FX, perceived rarity and actual PWA/background behaviour. No storm runes, additional reward scenes or golf added in this version. The 0.74 phone-return character issue still needs device verification.

---

# Archipelago 0.74 - A quiet moment

Cumulative over installed 0.68 or later. Extract into the repository root, replace matching files and merge assets, retaining all other files. Not standalone. No push or deployment. Main and Story test save keys, belongings, rod repair, bait, story and crafting gates remain.

The first quiet reward is earned when the real story reopens Pinewatch's crossing. DEV travel alone does not earn it. A saved invitation waits until Hannah is on the home overworld, standing free, with no arrival, conversation, modal, sleep, crossing or active reward. The invitation offers Watch the sunset or Later. Closing it also leaves the scene available in the journal's new Quiet moments section. Already-progressed saves can earn it without resetting their story.

A little closer is a three-passage beach sunset using the existing shared player art, pixel scenery, warm sky, water highlights and distant birds. Continue controls the reading pace; Skip and the close button return to the island. Island time, hunger, thirst, position and belongings are unchanged. Backgrounding pauses vignette motion. Scene animation respects the existing ambient setting and reduced-motion preference. Completion is saved per slot; replay is available in Quiet moments. An interrupted scene remains available, rather than silently claiming completion. Watching from away islands or during an activity is deferred until the player returns home and is free. There are no material or coin rewards or daily obligations.

Investigation of the reported brief older character found an actual legacy-renderer fallback when current shared atlas artwork was not ready. The game now covers that loading state with a current-art readiness screen and Retry artwork, suppresses the old player fallback in the common world/portrait helpers, and pauses needs while blocked. Retry loads the canonical artwork and rebuilds current player/sibling renderers. Returning from background/pageshow clears the current player's generated sprite cache and refreshes the portrait from the in-memory appearance, without loading another save or changing the character. Canvas context restoration uses the same recovery. This addresses observed code paths; it does not prove the cause of the original phone report or establish a complete device-specific fix. PWA/network/cache and actual Android app-return review remain.

Validation: native integration checks cover story-only earning, home/activity/modal/background deferral, Later, reading/skip/replay, unchanged time/needs/position, independent slots/reload/legacy progress, transparent output instead of old player fallback when art is unavailable, renderer rebuild and resume appearance retention. Existing rod73 and storm72 checks are retained. Chromium real invitation/Continue/finish/journal/replay/Skip/Retry actions, 360/390/430 containment, pageshow appearance retention and no runtime errors. Test-only served game code pauses requestAnimationFrame for stable UI checks, so these browser tests do not validate continuous animation or actual phone switching. Phone-sized sunset/retry screenshots were inspected internally and excluded from deliverables.

Physical-phone review: sunset visual style and reading pace, ambient/reduced motion, small-screen internal scrolling, slow/offline atlas loading and retry, app switching/PWA resume and actual character appearance. No river panning, runes or golf yet. Further reward scenes remain future work.

---

# Archipelago 0.73 - A little repair

Cumulative update over installed 0.68 or later. Extract into the repository root, replace matching files and merge assets; retain all other files. This ZIP is not standalone. No push or deployment.

New games start without a fishing rod. The first three existing home-beach cleanup piles each contain a different useful piece: a damaged rod with its little lure, a sturdy twig to brace the handle and washed-up fishing line. Gather them in any order. Discovery panels explain the finds; the backpack shows collected and missing pieces. Repair rod becomes available once all three are found, without a workbench or community-crafting unlock. The unique kit pieces stay safe outside ordinary bins/storage, do not consume backpack slots and cannot be duplicated. Cleanup still awards its usual driftwood, which is not consumed by this introductory repair.

Fishing entry and casting require a usable rod. The repaired rod uses the existing no-bait mechanics, described as a simple lure during the introduction. Bait selection stays hidden/disabled until two successful kept catches, then the existing kit is available. Existing bait stocks, species rules, rod prices/upgrades and later crafting gates remain. Older saves keep their usable rod, selected upgrade, bait access and belongings; no forced replay. Main and Story test progression stay separate.

First beach finds receive a short identification panel. Repeated finds use compact item +1 feedback and the existing successful-only collection cues. Storm driftwood explains its purpose on first pickup, then uses compact feedback. The loader replaces its generic vector island with existing native pixel shack artwork. This is a reused in-game asset, not newly generated art.

Plop, detector and bite sound cues now respect the current Effects master rather than the hidden legacy toggle. Casts use an airy swish, raking a light sandy scrape, digging a lower scrape, and bites a short surprised chirp alongside the alert. Detector pitch and cadence continue to increase with proximity. Muting, effects volume and hidden-page sound gates remain. Physical-phone listening is still needed for timbre and loudness.

Validation: targeted new-game/repair/order/duplicates/no-material-loss/reload/legacy-upgrades/separate-slot/bait-cost/malformed-state/synthetic-audio gates, prior 0.72 storm/navigation/bin/intro checks, retained fishing regression. Chromium actual repair click, no-rod gate, starter-kit panel and 360/390/430 viewport containment. Static browser checks pause the animation loop in test-only code; they do not validate real-time movement. Repair and first-kit phone-sized screenshots visually inspected. ZIP CRC, syntax, alias/version/reference integrity and cumulative baseline reconstruction checked during packaging.

To try the new beginning, use New Game in Story test. Existing saves retain fishing access. Remaining phone review: gathering taps, opening/repair pacing, in-game sound levels and real installed PWA reload/resume. A reported brief old-character appearance after returning to the app remains an investigation item; this release does not claim to fix it. Reward cutscenes, river panning, runes and golf remain future work.

---

# Archipelago 0.72 - After the storm

Cumulative over installed 0.68 or later, including 0.69-0.71 fixes. Extract into the repository root, replace matching files and merge assets; retain other files. Not standalone. Main/Story save keys, belongings, collections and progression remain. No push/deployment.

New versioned app/favicon icons use the actual starting-shack map pixels, resized with nearest-neighbour sampling. Manifest identity/start URL remain unchanged. Character creation now shares the conversation wood frame, warm paper and controls; appearance options and animation remain. Existing installed home-screen icons can take time to refresh and need phone review.

The sea opening is untitled. After Hannah’s thoughts, Nat opens the cabin door, steps along the deck and talks about Hannah’s return, the storm and recovery. She returns inside before docking. Native merchant art, one doorway anchor and the shared foreground rail keep Nat attached to the deck; her lower body remains behind the gunwale. Still/reduced-motion mode moves directly to settled poses. Reading stays at the player’s pace, time/needs pause and Skip arrival remains available. A single After the storm caption replaces the repeated familiar-shore/landing captions. The remaining welcome points towards the shack and recovery without introducing the Pinewatch residents. Current game prose uses ordinary punctuation instead of long dashes.

Four one-off driftwood piles appear along Old Rayne’s beach. Tap and walk over, then confirm gathering; each adds one existing driftwood find to the beach bucket. Saved cleared IDs prevent duplicate rewards; each save has its own cleanup. There is no deadline or new resource/crafting bypass. Existing sprite art is reused.

Select an ordinary item in an inventory for Bin. The confirmation offers one or the selected stack, plus Keep it. Fresh live catches retain Put back instead. Sealed parcels, quest-flagged items, brass keys, pirate doubloons and project-part IDs are protected. Confirmations recheck the current item/quantity and commit once; stale references cannot discard another object. Discarding does not erase collection/research records. Stock, find and spoiled-catch removal use the existing containers; the older immediate spoiled-discard button is replaced by the confirmation.

Visible house, western woodland canopy, pool and dock areas have larger tap regions. A landmark tap follows the existing collision-aware route to its entrance and enters automatically; ground elsewhere remains tap-to-walk. Nearby herb/driftwood taps take priority. Away-island building regions use their existing scene entrances, including Reedhaven’s field hut.

Free chickens stay in the northern open lawn with side/shore bounds; old positions outside it are reset, including with ambient animation off. Built-coop behaviour remains. The retired woodland crew list is empty, so sleeping no longer spawns Jamie/Ben in Old Rayne woods. Their talks are guarded outside Pinewatch and journal visibility follows their actual Pinewatch meeting flags. Early route news/checklist avoids naming them. Older meeting/progression data is retained. The legacy basin waits for repair knowledge; if repaired later at home, Hannah acknowledges the result without off-island brothers appearing.

Automatic: landmark routes, no woodland residents/pre-meet journal leak, existing meeting data retained, long lawn simulation, one-off pickup, bin duplicate/stale/quest/live protections, independent/malformed cleanup saves, Nat conversation/return/docking/skip and punctuation. Retained 0.70 fishing/gifts/saves/audio-event/home checks, 0.71 timetable boundaries and 0.65 inventory/home/accounting checks pass with adaptations noted below. Chromium tests actual Nat dialogue taps, doorway/deck and return, larger house tap followed by walk/entry, driftwood tap/walk/gather, real inventory tile/Bin/cancel/confirm and creator layouts at 360/390/430 without page overflow or runtime errors.

Visually checked: shack icon, creator at phone size, Nat on deck with open doorway and matching portrait/rail, storm debris/lawn and empty woodland. Internal screenshots excluded. Physical-phone review remains for installed icon refresh, Nat motion/timing/door artwork, new tap areas, debris visibility and bin gestures/scrolling, chicken boundaries, real refresh/PWA/audio and subjective style approval. No reward celebration, river panning, runes or golf yet.

Retained test adaptations: regression65 removes only localTargets15 source-equality because woodland targets intentionally changed; regression70 starts the docking-stage bell check after the newly added Nat sequence; regression71 expects ordinary hyphens in timetable time ranges. Dedicated 0.72 checks cover those new behaviours. Other original checks remain.

---

# Archipelago 0.71 - Days and crossings

Cumulative update over installed 0.68 or later. Includes the 0.69 display fixes and 0.70 boats, markers, house exit, bucket, fishing, audio and Kara changes. Extract into the repository root, replace matching files and merge assets; retain other files. Not a standalone game. Main/Story saves and belongings remain. No push/deployment.

The main island screen has a simple three-line menu at the top right instead of the cog. Day/date and time remain visible together at the top left; tapping them retains the detailed day/needs view. A Boats button below the clock expands a shared timetable over the scene, without scrolling the page. It works in gameplay scenes that show the clock, and closes during dialogue, cutscenes, menus or modal activities.

Each row names Nat/Ferry, Katie/Shop boat or Bruce/Trader, plus its location and the next actual visit date/time. Today/Tomorrow labels add context. Docking, Here now with departure time, and Departing states replace the next-date line when appropriate. The timetable follows the existing serviceDays/ scheduledBoat functions and emergency dock-phone pickup window, including its departure time. Visitor boats show their home-island location while away. No schedule/progression or ferry availability changes. The legacy away-island display suppression is bypassed for status text only; actual travel logic remains.

Tap Boats again, tap outside, or press Escape to close. Existing row actions still lead towards the dock/service. Long panel contents scroll within the panel; the app remains fixed to the viewport. Reuses shared 0.65 menu paper/frame and native SVG hamburger; no new raster art or save schema.

Validation: two-week service weekday/date boundaries and actual phone-recall windows, read-only dropdown state; retained 0.70 gameplay/saves/audio-event/gift-fishing/home-exit checks and 0.65 inventory/home checks. Chromium touch checks cover burger/options, date/time, Boats open/close/Escape, all three rows and state labels, away-island location, pickup window, house access and row navigation, reload/Check Updates, 360x640/390x700/430x900/390x560 containment without runtime errors. The 360-wide timetable render was visually inspected for alignment, readability and controls. Browser tests do not establish physical-phone comfort, Safari/PWA behaviour or subjective typography approval. Those need phone review.

Both the update and source checkpoint dist/ are now cumulative from 0.68. Older release scripts/documents are retained as history and may describe previous baselines. Celebration cutscene, river panning, runes and golf remain future work.

---

# Archipelago 0.70 - A little more life

Cumulative over installed 0.67 or later. Extract into the repository root, replace matching files and merge assets. Retain other files. Not a standalone game. No push/deployment.

The opening ferry now heads east (left to right), with cabin aft on the left, Hannah at the bow looking right and Nat unseen inside. Water/wake travel in the corresponding direction. The same hull/foreground-rail orientation is used on map, title, crossing and dock views; arriving/docked boats face right, departing boats face left. Crew draw positions and click/approach targets derive from the same adjusted dock pose. Pier geometry and ferry schedules are retained.

Permanent red ground/location dots are removed while location tap areas, herb patches, blue exit markers and mail/attention pins remain. Exiting Hannah’s home places her on a reachable front path below the shack depth boundary, so the house does not hide her. The fishing-pier bucket and visible catches sit 24 logical pixels farther back on the boards; other activity buckets are unchanged.

Fishing-v70 retains all species, rod/bait requirements, prices and cast stock accounting. Brief rests remain safe. Continuous slack now allows escape after 11 seconds for relaxed fish, 9 for steady fish and 8 for lively/strong fish, plus 0.8 seconds per rod tier; a warning appears in the last three seconds. Reeling reduces accumulated slack. Existing excessive-strain break risk remains. Both first neighbour fish still use no bait and cannot escape/break. Pausing in a modal or backgrounding stops fight progression. Watching remains free.

Successful fish, crustacean and beach-object collection triggers short varied synthetic bucket cues; coins/metal use a brighter clink. Cancelled/failed/duplicate actions and released pot catches do not trigger a keep sound. Docking vessels ring a short two-tone bell once on each arrival transition, including the initial landing; entering an already docked scene or skipping does not replay it. Sounds use the existing effects master, volume/mute and unlocked audio context, and do not play while hidden.

Iris is displayed as Kara in dialogue, journal, labels and introductions. Kara uses the existing native resident renderer with a broader connected body and layered straight blonde hair; sprite and portrait share one image. The internal iris ID stays for saved meetings, research, routes and rewards. No save migration or belongings/progression reset. Main/Story slots, home layouts, 0.69 page containment and DEV travel remain.

Validation: deterministic simulations cover all 11 fish (idle escape, brief rest, careful landing, protected gifts). Native integration checks cover actual slack loss, two protected gift catches with no bait cost/one sound apiece, home exit reachability/depth, successful-only bucket cue calls, one bell per docking, hidden/modal fight pause, stable research IDs and separate save slots. Retained 0.65 inventory/home and 0.67 notebook checks pass. Chromium renders/touch checks cover sea intro, house exit, fishing bucket, docked boats and Kara name/portrait plus 360/390/430 reload/Check Updates page containment. Visual review covered those renders and Kara’s larger sprite. Internal screenshots are excluded from deliverables.

Physical phone review remains: perceived fishing fairness/slack warning, sounds and volume, boat boarding/tap alignment and departing orientation, Kara walking/portrait art, house overlap boundaries, and real refresh/keyboard/PWA behaviour. Automated sound event checks do not assess how the sounds feel on a phone speaker. No celebration/reward cutscene, river panning, runes or golf added yet.

---

# Archipelago 0.69 - Steady shores

Cumulative over installed 0.67 or later, including this chat’s 0.68 sea opening. Extract into the repository root, replace matching files and merge assets. Retain other files. Not a standalone game. Main/Story saves and inventories remain. No push or deployment.

The app surface is fixed to the visible viewport and does not scroll as a page. Removed the 520px app minimum and bounded screens; title actions and character creation fit smaller viewports. Character choices can scroll in their own bounded panel when necessary. Detail modals scroll inside their content pane, keeping title/close controls stationary. Existing cooking recipe/ingredient scrolling remains. Browser text autosizing is normalised; deliberate browser zoom is not disabled. Resize, pageshow, visibility return and visual viewport changes refresh the app height. The version file was stale at 0.63 despite executing 0.68; it now agrees with game/index/cache at 0.69, avoiding unnecessary update navigation.

The opening ferry faces/travels left: cabin aft on the right, water passing right, widening foamy stern wake to the right, a small bow ripple and broken light-wave highlights. Shared Hannah/Nat/hull/foreground rail remain connected to one boat anchor. Ambient-off and reduced motion retain a still scene. Read-at-own-pace thoughts and skip remain.

Automatic: retained opening flow, skip/pending restart and independent save checks; unchanged herb/cat/fishing/inventory functions; retained 0.67 notebook and 0.65 home/accounting checks. Chromium: launch, reload, current Check Updates and simulated different-version navigation; 360x640, 390x700, 430x900, 390x560 and 768x600; creator controls; fifteen scene roots; notebook internal scroll/fixed close; cooking; still/dynamic water and direction checks; no runtime errors. The simulated update-navigation check exercises reload layout, not a real GitHub deployment/service-worker upgrade. Browser reload approximates pull-to-refresh; it does not reproduce a physical phone gesture or establish the original device-specific zoom cause.

Visually inspected: 360x640 and 390x560 creator layouts, title after update navigation, notebook frame/close/content and moving sea/wake with anchored characters. Phone checks still needed: original pull-to-refresh and Check Updates scaling, browser toolbar/keyboard/PWA resume, internal panel touch scrolling and subjective wake/art approval. No new story/reward cutscene or golf in this patch.

---

# Archipelago 0.68 - The crossing home

Update cumulative over installed 0.67 or later. Extract into the repository root, replace matching files and merge assets. Retain other files. This update is not a standalone game. No push or deployment.

New games now begin out at sea with Hannah and Nat aboard the ferry. Three short thoughts advance by tapping the dialogue, then the existing ferry approach, walk ashore and welcome continue. The boat, native character appearances and foreground gunwale use existing shared renderers. A restrained stepped sky/sea scene adds ambient waves and whole-boat bobbing; reduced-motion or ambient-off keeps it still. Gameplay controls hide during the sea scene. Skip arrival works throughout. Time and needs do not advance during the opening.

Existing completed saves continue normally. Pending arrivals restart at the sea scene after reloading, using the existing introPending flag; there is no new save schema. Main/Story slots, inventories, unlocks, furniture, cats, herb notebook, fishing and DEV travel remain. This adds no post-quest reward cutscenes, golf, river panning or rune quest yet; these remain planned.

Automated checks cover thought pacing, no time/needs changes, sea-to-docking/walk/dialogue transition, skip and repeated-skip guard, pending-intro restart in both slots, unchanged save/accounting/cat/herb/fishing/boat functions. Retained 0.67 notebook, 0.66 fishing and 0.65 home/inventory checks pass. Actual Chromium touch checks cover dialogue/skip and 360/390/430 layouts without runtime errors or horizontal overflow. Sea scene renders at 360 and 390 were visually inspected for character anchoring, gunwale layering, framing and text. Physical-phone feel, PWA/cache update, audio and subjective art approval remain pending.

---

# Archipelago 0.67 — The cottage notebook

Cumulative update over installed 0.53 or later. Replace matching files and merge assets; retain other files. Not a standalone game.

Existing herb deliveries now add four cottage notebook stories about Mona’s preparations and Mini’s neighbourly rounds. Open the notebook from the herb pouch or cottage basket. Later basket notes reflect the requested herb. Completed first deliveries from older saves retain their three earned pages; new saves begin with unwritten pages. Nepeta cataria keeps its botanical name until the existing saved conversation reveal.

Gathering, three-day regrowth, pouch capacity, order quantities, 12-coin payment and two-day cooldown remain. No deadlines, new supplies, medicine buffs, rune quest or river activity yet. Existing cat visits, portraits, petting and sounds remain. No new artwork: shared herb icons and 0.65 menu frames are reused. Main/Story saves, belongings, fishing 0.66, furniture, crafting gates and DEV travel remain. No push or deployment.

Automatic checks cover successful/failed deliveries, cooldown/no double payment, notebook unlocks, legacy/malformed saves, separate slots and unchanged gathering/cats/fishing/art/accounting. Browser checks and visual review are recorded in the release audit; physical-phone testing remains pending.

---

# Archipelago 0.66 — What might bite

Cumulative over installed0.53 or later. Extract into the repository root, replace matching files and merge assets; retain other files. Upload extracted contents, reopen and check0.66.0. This update is not a standalone game.

Fishing now has distinct species behaviours: gentler common catches, repeated darts and heavier sustained pulls. Watch the twitch before a struggle, release to relax the line, then reel during calm moments. The existing hold/release control and automatic bite remain. Common catches stay relaxed; every island has at least one catchable species with the Driftwood rod and bare hook.

Tap Kit beside the fishing pier title to choose a bare hook, Coastal bait (your existing bait stock) or bread from your backpack. Choice alone costs nothing. Each valid normal cast uses exactly one selected portion, including misses/escapes; a bare hook uses no supplies. If selected bait has run out, the next cast uses a bare hook rather than consuming another supply. Plaice needs Coastal bait; wrasse and saithe also need a Coastal rod; mullet needs bread and a Coastal rod; sea bass needs Coastal bait and the Tidekeeper. Kit notes and journal entries show requirements while keeping unrecorded names hidden. Rod prices55/145 and the Tidekeeper timber-project gate remain.

Both first neighbour gift fish are gentle, guaranteed bites with no bait consumption or line-break risk. Fish/rod/bait are captured when casting, so inventory or equipment changes cannot change a hooked fish. Watching the water remains free and unrestricted by catch equipment. Preferred bait saves separately in Main/Story; no stock is granted, removed by migration or converted to a new item. All existing fish art, locations, measurements, records, research/release/reward and story rules remain.

Automated checks cover every island/rod/bait combination, species fights and gear requirements, actual protected gift catches, exact bait use, invalid/double casts, watching, reloads and independent saves. Existing gameplay regressions are retained. Chromium checked actual ripple casting, hold/release, kit/rod/back navigation, touch bait selection and360/390/430-wide layouts. Browser renders were visually inspected. Physical-phone feel, balance, full-kit scrolling and PWA review remain outstanding. Read FISHING-AUDIT-v66.md. No push or deployment.

---

# Archipelago 0.65 — Little island things

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets; retain everything else. Upload extracted contents, reopen and check0.65.0. This update is not a standalone game.

Menus and dialogue now share native carved-wood frames, warm paper, leaf details and soft readable typography. Portrait/name/text/close controls have separate responsive areas. Existing character and world artwork is retained. Storage uses compact stacked grids: pictures and quantities first, item information/nutrition/actions after tapping. Tap the destination or use the explicit transfer button; drag transfers retain quantity choices, capacities, spoilage, catches, parcels and protected gift fish. Touch drops wait until the native gesture ends before replacing the grid.

At home the footer has Decorate and More. Tap furniture for normal use; More provides wardrobe/kitchen/storage/rest and crafting only after its existing unlock. Decorate enters the room: tap an object, tap a square then Place here, or drag to a valid square to place. Rotation uses existing directional artwork and appears only on appropriate items. Cancel discards a preview; Done leaves arranging. Stored items can be added and optional placed items put away. The kitchen remains fixed. Existing saved furniture, stock and routes remain; arranging pauses time and needs.

Enabled music starts audibly from the first eligible title tap, with click/touch-end retries after a blocked pointerdown attempt. Mute, selected tracks and volumes remain respected; autoplay before a gesture is still subject to browser rules.

Automatic checks cover the new gestures and unchanged save/accounting/route/progression rules. Actual headless Chromium checked360/390/430/768-wide layouts, music playback after the first tap, mouse and emulated touch, furniture and storage, dialogue and other containers. These are not physical-phone checks. Phone review still needs music/PWA resume, thumb gestures/scrolling and subjective UI approval. Read UI-AUDIT-v65.md.

No fishing balance or new bait/rod requirements in this release; that request is queued next. Main/Story slots, progression/crafting gates, all belongings and DEV travel remain. No push/deployment.

---

# Archipelago 0.64 — Different shores

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain other files. Upload the extracted contents, then reopen and check 0.64.0. This update ZIP is not a standalone game.

Four separate harbour backdrops give Old Rayne sunny greens and honey timber, Pinewatch dark pine and weathered timber, Reedhaven golden reeds and sage water, and Emberstone basalt, copper and petrol-blue water. The pier surface is registered to existing walking and interaction coordinates. Harbour boats, crew and separate coastal props retain their existing artwork and renderers.

The crab-pot coast has a quieter underwater basin and registered shoreline/seabed. The coop garden has a simpler background and separate connected foreground fence sections, drawn over actors before night lighting. The central gate remains open. No new activity, cost, story unlock or save migration is introduced. Main/Story slots, stock, furniture, progression/crafting gates, preconstruction coop absence and session-only DEV travel remain.

Validation is reported in ART-AUDIT-v64.md. Native Canvas renders are development renders, not browser or physical-phone screenshots. Phone touch, cached update, movement/boat boarding, pot controls, garden gate/overlap and subjective artwork approval still need review. No push or deployment.

---

# Archipelago 0.63 — Familiar comforts

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain all other files. Upload extracted contents, then reopen and check 0.63.0. This ZIP is an update, not a complete standalone game.

Shared native household artwork now covers the floor lamp, ship lantern, framed chart, potted plant, wall shelf, herb basket and tea cups. The home, brothers’ workshop and Mini/Mona cottage use the same props and related inventory/crafting/shop icons. Existing positions, grid placement, rotations, footprints and foreground sorting remain.

Chest openings follow all four saved furniture facings. The approved closed chest pixels and lower box stay exactly fixed while the connected lid/cavity changes. The inventory opening view uses that same directional art. The backpack has matching closed/open artwork and a compact opening view beside its modal title, without using item-grid space. Bucket storage art shares the existing activity bucket.

Two complete chicken flap poses replace the detached rotating wing fragment; existing idle/walk/peck artwork and care behaviour remain. Iris’s notebook now follows her walking origin on a connected belt loop. Her face/glasses and other resident identities remain. Player/tool, brother and ferry-crew pose sheets were reviewed; their existing artwork is retained.

Automatic checks and native Canvas render review are complete. Physical-phone touch, animation timing, compact backpack title layout, small-prop legibility and final art approval remain outstanding. Main/Story saves, belongings, progression/crafting gates, distinct island maps and DEV are preserved. Nothing is pushed or deployed. Read RELEASE-NOTES.md, ART-STYLE.md and ART-AUDIT-v63.md.

Previous releases

# Archipelago 0.62 — Tide-worn treasures

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain all other files. Upload extracted contents, then reopen and check 0.62.0. The ZIP is an update, not a complete standalone game.

Coastal finds now share native sprites: scallop and spiral shells, sea glass, driftwood, striped pebble, old coin, bottle cap, brass key and pirate doubloon. The beach rake, detector and spade have matching cursor/button artwork. Harbour crates, pots, net, rope, mailbox and freezer use shared props; the mailbox/freezer have dedicated opening frames. The crab-pot activity and inventory use the same pot. The built coop and care bowls now use simpler native artwork, with the nesting opening aligned to the existing eggs and marker. Hannah’s movable shell ornament shares the new scallop sprite.

Existing finding/revealing/dragging, detector signals, item values, protected doubloons, pot physics/rewards, coop build/care/day/egg rules, routes, markers and inventory remain. No coop plot or collision is introduced before construction. Crafting remains gated by the community timber project; Main/Story saves and belongings are preserved. Island maps, distinct palettes and DEV remain. Nothing is pushed or deployed.

Automatic checks and native Canvas visual review are complete. Physical-phone touch, opening/hauling animation, scale and subjective art approval remain outstanding. Read RELEASE-NOTES.md, ART-STYLE.md and ART-AUDIT-v62.md.

Previous releases

# Archipelago 0.61 — Small discoveries

Cumulative over installed 0.53 or later. Extract into the repository root, replace matching files and merge assets. Retain other files. Upload extracted contents and check version 0.61.0 after reopening.

Woodland pinecones, feathers, chanterelles, beetles, woodlice and snails now share native pixel artwork across activities and icons. The three creatures have two connected poses; the activity bucket uses one shared sprite. Fishing has four distinct island palettes with the existing pier and angler alignment. Beach scenery and raked sand use quieter pixel clusters.

Existing discovery, collecting, fishing, release records, inventory, Main/Story saves and crafting/story gates are retained. No push or deployment. This is an art pass, not new story progression.

Automatic checks and native Canvas render review are complete; physical-phone touch, animation and final art approval remain outstanding. Read RELEASE-NOTES.md, ART-STYLE.md and ART-AUDIT-v61.md.

Previous releases

# Archipelago 0.60 — Quiet places

## Implemented

Redrawn Emberstone mineral shore, Reedhaven photography lagoon and the separate Pinewatch forest-foraging floor. Deliberate broad pixel clusters replace the finer illustrated backgrounds. Emberstone keeps charcoal/plum basalt, copper/ochre ground and turquoise springs; Reedhaven keeps pale-gold reeds, olive willows and softer blue-green water; Pinewatch keeps deep fern/pine greens, teal shadows and rusty brown soil. Existing island maps are untouched. Each new background is prepared at a native256×384, with a48-colour no-dither palette and exact integer nearest-neighbour expansion. This is preparation of newly generated art, not a filter applied to the existing world.

Four basalt cover clusters and quartz/agate/obsidian/calcite have new native sprites, shared by the mineral scene and field-note icons. The original six nodes, sizes, brushing radii, cleaning progress, record-once behaviour, day regeneration, note counts, dust/sparkle and marker controls remain. New leaf cover uses a small native sprite at the original brush footprint; forest positions, nine finds, uncovering/discovery thresholds, drag/basket controls, released discoveries, snack capacity and daily saved patch remain. Underlying forest-find/woodland-creature sprites and bucket are retained for a later dedicated review.

Heron, otter and dragonfly have two connected whole-body poses each, with simpler native pixel artwork used in live viewing, prints and field-note icons. The existing native kingfisher renderer is retained; its icon now uses that same sprite source. Subject IDs, positions, displayed bounds, timing, visibility, focus/hold thresholds, camera loan/purchase, best-photo quality,20-coin first-outing thank-you and8-coin personal print purchase are unchanged.

The photography perch is a separate small driftwood sprite anchored beneath the existing kingfisher position. The painted background log was removed after composition review. A cached1024×1536 background/perch composition is used by both the live scene and snapshot crop, preserving the existing2-source-pixels-per-world-pixel crop calculation. Old photos remain saved as metadata and redraw using the current shared art; album/display ownership and print stock are preserved. The foreground venue platform and Euan/Hannah renderer remain.

Built-in image generation used existing compositions and approved Hannah sprites as references. Exact prompts, final masters, native palette/alpha preparation and frame rectangles are in the source checkpoint. New sprite assets use hard alpha, at most16 colours per frame, native44×38 minerals,56×44 leaf pile,64×24 perch and small complete wildlife frames. No image-smoothing, universal averaging filter, new story unlock or save migration.

Includes0.54–0.59 cumulatively over installed0.53.0.59 furniture rotation was restored from its verified checkpoint before this work; it is retained. Main and Story test keys, inventory, crafting/story gates, Pinewatch ownership, cats/herbs, distinct island maps and session-only DEV travel remain. No push/deployment.

## Validation

Automated: comparison with actual0.59 source confirms unchanged activity mechanics and target generation. Actual mineral pointer brushing → clean → one record, original node coordinates/sizes and next-day regeneration; camera pointer aim/hold → first photo/reward → improved behavioural photo without repeated reward; unchanged wildlife draw extents in both poses; current icons; exact cached background/perch snapshot crop; actual forest brushing/drag-to-basket, discovery without keeping wildlife, snack-capacity rejection and same-day patch persistence. Real Main/Story save/load retains photos, purchased display/print stock, mineral discoveries, collected finds, inventory quantities and furniture facing. Native asset preparation checks palette/hard alpha, integer-expanded backgrounds, frame bounds and reproducible output. Syntax, version aliases, dependencies, source rebuild and cumulative reconstruction checks required. Retained furniture/bed/rotation, cottage/cat/character, pools/woodland, map/Pinewatch migration, crafting/coop/dock/Inbox, herbs, opening/ferry, collection/rods, timber and clothing regressions.

Visual: native mineral covered/partial/revealed scenes; live wildlife photography, Euan venue and saved photograph; covered and uncovered forest scene;390-pixel-wide three-scene preview. Perch anchoring checked against the actual live kingfisher. These are native Canvas renders, not browser/physical-phone screenshots. Phone review remains for art approval, brush/drag touch targets, leaf motion, wildlife animation, viewfinder controls and printed-photo framing. Remaining older foraging-find sprites and other fishing/beach/coop/harbour scenery stay on the audit; whole-game consistency is not declared complete.

ZIP CRC, unique entries, cumulative reconstruction and exact saved/downloaded-byte checks required before delivery.

---

# Archipelago 0.59 — A place for everything

## Implemented

Furniture rotation uses 28 dedicated native sprite frames: front/right/back/left for sofa, bed, chair, chest, bookcase and stove; across/along for rectangular table and driftwood bench. Objects are redrawn from the same fixed front-and-slightly-above camera, never rotated as flat pictures. Rectangular rugs/mat have two dimensions with a freshly drawn native pattern. Plants, round stools, simple lights, ornaments and wall-mounted pieces have no rotate option; the current house has one usable back-wall furnishing plane. Kitchen remains fixed.

During Decorate → Move, use the rotate control, tap a square, then Place here or Cancel. Preview includes the actual occupied floor footprint. Facing changes dimensions, collision and front access. Chests/stoves/seats/bookcases need reachable space at their front; beds need reachable space along a long side. Kitchen, exit corridor, player and essential access remain protected. One flood checks candidate layout connectivity, avoiding repeated path searches for every potential approach. Compact touch buttons share one row at typical phone widths. Existing time/needs pause and no-cost placement remain.

Position and facing are stored together in the existing per-slot homeLayout58 data. Legacy missing/invalid facing defaults to the original front. Rotating/cancelling does not change stock; optional put-away/re-place retains facing with exact quantity accounting. Real save/load preserves independent Main and Story test layouts. Sleep/wake and pending-wake reload use the oriented bed and a reachable side. Alternate bed views have their own pillow anchors, with the foreground headboard covering the appropriate part of a tucked head. Hannah stays upright in the camera. Chest/stove pointer hits and action destinations follow their actual object bounds/front.

The shared front sprites also supply workshop/cottage/home objects and inventory/shop/crafting icons. Jamie’s green bedding is retained through the existing native blue-to-green mask approach. The crafted wall shelf now uses the actual shared workshop shelf renderer and matching icon, replacing its finer illustrated art. Stove has quieter charcoal pixel art with a genuinely dark unlit window; fire/light appear only while the existing hearth timer is active, with fire hidden by the stove body when facing away. Stove and floor-lamp glows follow placement. Item IDs, prices, stock, recipes, hearth costs/timers, story/crafting gates and room routines are unchanged.

Artwork produced with the built-in image tool using existing home/shared furniture as references. Separate sheets per item; targeted revisions corrected chest end views, removed painted stove fire and lowered the reversed bed’s foreground headboard. Native preparation keeps the main connected sprite, hard alpha, nearest-neighbour native sizing and at most sixteen colours per item shared across its directions. Final atlas is512×1024; native frames are at most70×74. Masters, exact prompts/revisions and preparation scripts are in the source checkpoint. No furnished-room painting or averaging filter.

Includes 0.54–0.58 cumulatively over installed 0.53. Remaining ornament/prop details and activity backgrounds remain on the art audit; whole-game standardisation is not declared complete. No push/deployment.

## Validation

Automated: every directional sprite dispatch, footprint and valid placement; collision and required front/side access; plants/stools/lights/wall props hide rotation; rug dimensions; actual pointer → rotate → place/cancel; kitchen/exit/occupied areas and cabinet facing into wall rejected; all four bed action/entry/sleep/wake/pending reload paths; chest/stove destination sides; independent Main/Story faces and exact inventory through real load and put-away/re-place; malformed/legacy orientation defaults; shared room/icon dispatch and Jamie’s green blanket; crafting gate. Native asset preparation checks all28 frames, hard alpha, sixteen-colour limits and atlas padding. Retained 0.58 home/pool tests and older cottage/cat/character, pool/woodland, story/ferry, island/Pinewatch migration, crafting/coop/dock/Inbox, collection/rod, herb, timber and clothing regressions. The prior pool/furniture test updates only its obsolete icon URLs in release59/regression56.cjs; geometry/gameplay assertions remain.

Visual: native furniture direction contact sheet, home in all four facings, all four sleeping orientations, crafted shelf/stove unlit/lit, rotated footprint preview, shared workshop/cottage and 390-pixel-wide preview. These are native Canvas renders, not browser or physical-phone screenshots. Physical-phone review remains for touch/scrolling/control fit, rotation/placement near room edges, longer movement and sleep/wake animation, overlap and subjective art approval.

ZIP CRC, cumulative reconstruction, dependency/rebuild checks and exact saved/downloaded-byte verification required before delivery. Existing save keys, inventory, gameplay/progression and session-only DEV retained.

---

# Archipelago 0.58 — Room to make it yours

## Implemented

Hannah’s home now uses the existing empty workshop structural shell and sea-window panes, preserving only the registered kitchen/fridge portion of the old backdrop as fixed furnishing. The old painted bed, sofa and floor rug are no longer part of the scene background. Independent bed, chest, sofa and cream mat join the existing optional furnishings. Bed/chest/plant and optional furniture dispatch through the same shared workshop/home renderers, sizes and orientation. All home furniture and Hannah are sorted together by floor depth, including foreground storage/seating. Rugs draw beneath actors. New/rebuilt objects must continue to use shared sprites and perspective.

Decorate now lists Move controls for every present object. Tap a grid square to preview, then confirm or cancel. Floor and wall decorations have appropriate placement bands. Placement rejects walls, kitchen intrusion, solid-furniture overlap, blocked doorway, trapped player and inaccessible bed/storage/kitchen. Core inherited objects are movable essentials; optional items retain existing place/store accounting. Newly placed optional items use their retained position when suitable, otherwise search for a valid square; failed placement restores quantities. Editing pauses time/needs and does not charge coins or bypass crafting progression.

Layouts persist in routine.homeLayout58 independently in Main and Story test, with bounded finite coordinates on load. No inventory grants, save-key changes or duplication migration. Legacy optional decor keeps its exact old position until moved. Bed/storage/seat/stove approaches and pointer hits follow the actual objects rather than old screen rectangles. Capture input prevents obsolete fixed-coordinate handlers running. Sleep/wake animation is translated to the moved bed; waking uses a reachable approach. The opening shack tour highlights the current bed/chest positions. Kitchen cooking/fridge/pantry remain fixed. Temporary recovery breakfast has a clear floor spot away from furniture.

Rock pools now contain 54 stones instead of 42. Each visit selects three related shapes from the twelve existing sprites, rather than distributing every type. Seven principal size bands and twelve additional smaller stones increase variation. Additional stones are empty scenery to move; original wildlife opportunities, reveal-once, drag/hit/catch, bucket, collection and refresh-completion logic remain. A standalone rust sofa sprite is generated using the built-in image tool with the previous home as a style reference, then prepared at native 48×28 with hard alpha and a maximum sixteen-colour palette. It is independent of the backdrop and front-facing like shared furniture. No new raster pool scene or blanket image filter.

Includes 0.54–0.57 cumulatively over 0.53. Mineral shore, photography, separate forest-foraging and remaining older crafted prop detail remain future art work; this is not a claim of completed whole-game consistency.

## Validation

Automated: separate-object home rendering/depth; moved footprints; valid/invalid grid placements; kitchen/doorway/overlap and essential-route guards; actual pointer preview/confirm/cancel and moved-item interaction dispatch; editing time pause; bed/storage approaches and actual sleep/wake; real Main/Story save/load of different layouts and exact furniture quantities; optional place/store accounting; 54 stone spawns with three shapes and size spread, preserved stone hits. Retained cottage collision/routines/delivery/talk/cats, character face/pose, pool drag/reveal/catch/collection, woodland/shrine, progression/coop/dock/Inbox, four-island/Pinewatch migration, herbs, opening/ferry, rods/collections, timber and clothing regressions. The older home fixed-position/foreground/sleep assumptions are superseded by release58/check58.cjs; pool-count expectation is updated in release58/regression56.cjs.

Visual: native Canvas home, sleep, relocated furniture, grid preview and populated pools; phone-sized 390-pixel-wide preview. Not browser or physical-phone screenshots. Outstanding phone checks: touch controls/scrolling, moving all furniture types, entrance/exit and routes at edges, sleep/wake animation, overlaps, optional decor/stove light and subjective art approval. Existing fresh-game/crafting gates and session-only DEV remain.

ZIP CRC, cumulative reconstruction and exact saved/downloaded-byte verification required before delivery. No push or deployment.

---

# Archipelago 0.57 — The same little world

## Implemented

Rebuilt Mini and Mona’s cottage as a modular scene after the user identified that the furnished illustration still violated shared furniture perspective/style. The active renderer no longer draws the old furnished painting. It uses the existing empty workshop shell, shared home window panes for the sea view, and twelve independent furniture objects. Beds/shelves/plants/kitchenette use drawWorkshopProp30; tables/bookcase/chairs use drawFurniture55 and the current furniture-v56 atlas. Item dimensions match the corresponding home/workshop objects exactly, with no cottage-specific rotation or mirroring. No new raster illustration was generated.

The room has two beds on opposite sides, wall shelves, a kitchenette, bookcase, tea table/two chairs, separate herb table and two plants. The plum rug adapts the existing workshop rug’s native drawing pattern; tea cups use the same native pixel treatment as Mona’s cup. The existing herb basket stays at its prior tap location on the new tabletop. The former painted hearth is replaced by the shared kitchenette/tea area; it was scenery, not an interactive heating system.

All furniture and actors share depth sorting before night lighting. Walking collision now uses the displayed furniture footprints and the shared shell’s floor bounds. Navigation caches are invalidated on resident reset. Existing routine destinations, night-rest spots, herb approach (331,392), entry/exit (256,577), cat positions, conversations, schedule and herb/reward logic are preserved. The old loading gate points at the shared shell, and entry waits for the shared furniture assets. No items are granted or charged and no save migration is required.

Includes all prior 0.54–0.56 changes. This patch prioritises the cottage correction; mineral shore/photography/forest-foraging art remains queued.

## Validation

Automated: every cottage item matches its shared template dimensions and has no independent rotation/mirroring; every furniture footprint blocks walking; routes connect all routine/night/rest/cat/basket/exit destinations and successive resident waypoints. Existing movement is driven through the herb approach and a successful 12-coin delivery, conversation approach, cat speaker/petting and exit. Shared-renderer dispatch and actor/furniture depth order checked. Main and Story test preserve carried/stored items, herb stock/deliveries, cat pets and botanical discovery through real save/load. Comparison with actual 0.56 source confirms unchanged workshop props/home targets, resident plans, dialogue/petting/herb delivery and exit behaviour. Retained 0.56 pool/woodland tests, furnished-room/foreground/sleep tests, character/cat tests, crafting/coop/dock/Inbox, map/Pinewatch migration, herbs, ferry/opening, collection, timber and clothing regressions.

Visual: actual cottage with Mini/Mona, cat visit, Hannah behind the herb table, and shared furniture comparison with the workshop. Native Canvas renders and 390-pixel-wide preview inspected. These are not browser/phone screenshots. Physical-phone touch, routes near furniture, portrait/basket controls, movement/overlap and subjective art approval remain outstanding.

Cumulative over 0.53. ZIP CRC/reconstruction and exact saved/downloaded-byte verification required before delivery. No push/deploy. Existing saves and progression/DEV retained.

---

# Archipelago 0.56 — Small things, clear shapes

## Implemented

Following the user’s 0.55 furniture feedback, the chair and driftwood bench are redrawn with simpler silhouettes, broad quiet colour patches and fewer highlights. Their native sprites are 24×40 and 46×22, each with at most sixteen opaque colours and hard alpha. Connected components isolate full generated subjects; nearest-neighbour sizing and no-dither palette reduction produce the final small sprites. They replace only the two corresponding cells in furniture-v56.png. The other six furniture cells are byte-identical to 0.55. Existing item IDs, prices, placement dimensions, ownership, collision and foreground order are preserved. Scene objects, workshop chairs and shop/inventory icons share the new atlas.

Rock pools use a new quiet aqua backdrop with the same perimeter framing. The initial generated draft had prominent fixed interior stones; a targeted follow-up removed them so the existing forty-two interactive stones are clear. Twelve stone variants have matching native sprites (maximum32×28, up to sixteen colours each). Their displayed dimensions, rotations and hit geometry still use the original rock rectangles; drag targets, spawn/reveal timing, animal catches, bucket and collection logic remain unchanged. Existing small debris and creature art are retained.

The woodland clearing uses broad leaf/bark/grass clusters rather than the old fine texture. Two understated grave stones remain at the big tree’s foot inside the scene. The five shrine circles remain part of the stone, with no physical pieces. A cached nearest-neighbour upper-band registration keeps the shrine/clearing boundary at its established coordinates. Shrine glows are aligned to the new circle centres in both normal and close-up views. Existing walking geometry, target approaches, memorial dialogue, kindness/community progress and bottom exit are unchanged. The separate forest-foraging backdrop is not replaced this patch.

Built-in image generation was used for the artwork with existing scene layouts and Hannah as references. There is no global averaging/downsampling filter on maps or scenes. Distinct island maps and the 0.54 character/cottage updates remain intact.

## Validation

Automated: comparison with the actual 0.55 source confirms unchanged stone hit logic, reveal/catch logic, woodland walking geometry, furniture footprints/room targets and workshop props. Chair/bench dimensions, palette/alpha, atlas/icon paths and byte-identical other furniture cells; all twelve stone variants and forty-two spawns; actual pointer drag → one reveal → catch → collection record; all woodland routes, memorial and shrine interactions; full-size registration cache and world/close-up glow coordinates; real save/load of furniture and catches in both slots. Retained furnished-room/foreground/sleep, 0.54 faces/cats, 0.53 crafting/coop/dock/Inbox/scenery, map/Pinewatch migration, herbs, ferry/opening/sleep, collection, timber and clothing checks.

Visual: actual home/workshop chairs and bench beside Hannah, enlarged matched-size furniture comparison, populated rock-pool scene, woodland clearing with markers/grave stones/glows, shrine close-up, native sprites and phone-sized preview. These are native Canvas renders, not browser screenshots. Physical-phone touch, motion and subjective art approval remain outstanding; this is not a claim that every prop/background now matches perfectly.

Cumulative over 0.53; ZIP CRC, reconstruction and saved/downloaded bytes verified before delivery. No push/deploy. Main and Story test, inventories, progression and DEV retained.

---

# Archipelago 0.55 — A little more like home

## Implemented

Home and empty modular workshop shell redrawn with built-in image generation, using their existing compositions plus Hannah and the updated cottage as references. Broader pixel clusters and fewer fine textures match the newer interior treatment. New source assets are registered once to the old room coordinates with nearest-neighbour canvas drawing; this aligns the generated wall/floor, bed, kitchen and exit bands with the existing interaction positions. No averaged display filter is used. Home’s sea window, blue bed, olive kitchen and rust sofa remain. Workshop keeps its forest window, separate beds on opposite walls, green rug, workbench, kitchenette, storage and existing props.

Eight optional home furnishings (stool, table, floor lamp, chair, bookcase, lantern, driftwood bench and chart) now share an alpha-clean 384×208 atlas. Each item is cropped, packed at native scale and used by both room drawing and inventory/shop icons. Existing item IDs, ownership, costs, placement and collision footprints are retained. Workshop chairs share the new chair sprite. Existing workshop bench, beds, chest, plant, shelf and kitchenette remain modular.

Furniture in front of Hannah’s feet is redrawn over the character before night lighting, correcting home foreground order. Sleep and wake animations bypass that redraw; the sleeping head and blanket still use the established bed positions. Original home tour highlighting remains.

Reviewed activity source backgrounds alongside Hannah. Rock pools, woodland, mineral shore and photography have the strongest remaining fine-texture mismatch. They are prioritised in ART-AUDIT-v55.md; their art is not changed by a blanket filter in this release. The whole-game consistency pass is ongoing.

Includes 0.54’s native Mini/Mona/Euan/Iris sprites and portraits and the updated witch cottage. No new story stage or progression shortcut. Save keys and inventories unchanged.

## Validation

Automated: new asset/atlas/icon dispatch, all existing furnished home interaction routes (including already-at-destination cases), workshop furniture collision and bench access, cached nearest-neighbour room registration, foreground draw calls and sleep exclusion, real save/load of placed furniture and owned/stored items in Main and Story test, crafting gate. Retained 0.54 face/pose/cat/save checks, 0.53 crafting/coop/dock/Inbox/scenery checks, map/Pinewatch migration and atlas checks, herbs, opening/ferry/sleep, collections, timber project and clothing regressions.

Visual: native live home renders with all eight furnishings and with basic furniture, sleeping head/blanket alignment, workshop and new chairs; native atlas padding/complete sprites; 390-pixel-wide interior comparison with Hannah. Activity comparison uses source-art thumbnails with Hannah for style assessment; it is not a claim of gameplay or touch testing.

Outstanding: physical-phone layout/touch/animation and subjective art review; prolonged room-boundary and furniture-overlap testing; activity background redraws and remaining prop/icon audit. No browser/physical-phone tests are claimed.

Cumulative over 0.53. ZIP CRC, reconstruction and saved/downloaded byte equality checked before delivery. No push or deployment.

---

# Archipelago 0.54 — Familiar faces

## Implemented

Mini and Mona now use witches-v54.js, which derives their sprites directly from Hannah’s native player29 body, face and connected pose frames. Their hats, plum capes/shawls, Mini’s trousers/satchel and Mona’s long dress, cream collar, silver hair streak and attached cup distinguish them. Face and eye pixels remain those of the approved player artwork, including native blinks, talk, happy and walking states. The same renderer supplies world sprites, room sprites and portraits; the old large-eyed illustration/portrait sheets no longer render these characters once current player assets are ready. Cat mode still dispatches to the existing black and black-and-white cat renderer and purring/meowing dialogue.

The cottage backdrop was redrawn using built-in image generation with the old cottage, Hannah’s approved atlas and modular workshop shell as references. Larger stepped pixel clusters, fewer fine textures, warm timber and plum/cream furnishings replace the finer painted treatment. Beds, fireplace, tea table, workbench and centered exit keep their established footprints. Existing navigation, NPC routines, herb-basket interaction and foreground order remain; no scene objects or progression were added.

Euan and Iris use residents-v54.js, sharing Hannah’s native faces/poses with distinct olive/teal clothes and camera/glasses/notebook. Both normal character and illustrated dock crew paths use it, as do portraits. Other named cast retain their later sprite atlases. ART-AUDIT-v54.md records what was inspected and what remains; whole-game art consistency is still ongoing.

## Validation

Automated: native face-pixel preservation across witch idle/blink/wave/happy/walk states, sprite dimensions/padding, connected room routes for all existing witch waypoints, beds, herb basket and exit; actual world/room/portrait dispatch and illustrated dock resident path; cat dialogue and petting; both save slots and botanical discovery persistence. Existing 0.53 crafting, coop, dock-arrow, Inbox and scenery tests; map/navigation/Pinewatch migration/atlas, herb/cat, opening/ferry, collections/rods, timber and clothing regressions.

Visual: live native renders comparing Hannah/Mini/Mona and their portraits; witch walking/gesture frame sheet; occupied cottage and phone-sized rendering; current cast portrait contact sheet. No browser or physical-phone testing is claimed. Phone review remains for subjective art approval, touch targets, room furniture boundaries, portrait framing, walking/waving and cat visits.

Update ZIP contains only changes over installed 0.53. ZIP CRC and exact saved/downloaded-byte verification are required before delivery. No push or deployment. Existing saves, possessions, project gates and DEV travel retained.

---

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

The retained notebook regression is release70/regression67.cjs: only the obsolete assertion that updateReeling48 source must be identical was removed; notebook/save/economy/cat/gathering assertions remain. New fishing behaviour has dedicated 0.70 checks.
