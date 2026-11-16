# Archipelago 0.115 - Across whenever

## On-demand passenger travel

Unlocked docks have an available standby passenger ferry at any hour. Normal scene travel, sea journey and disembarking remain. Native route progression is authoritative; no early Pinewatch/Reedhaven/Emberstone unlock and no change to DEV travel.

Crossings are free before community timber completion. Afterwards each crossing costs five coins. A quote names the destination and fare, with Travel and Stay here. It validates current save, owner, scene, modal, route, quoted fare and available money. A used or stale callback cannot start a second journey. The fare is attached only to the transient native trip and charged once after the destination is reached. Sea cancellation/reload does not spend coins; a completed arrival persists its charge. Insufficient funds cannot go negative, and a lift home is free if the player has fewer than five coins. No saved ticket schema, retroactive fare, debt or pass purchase. Remote camping remains available as an optional choice.

## Trader and scheduled services

Bruce's Old Rayne visits are Monday/Wednesday/Friday/Sunday, 08:00-18:00. Katie's shop days/hours and existing prices/stock remain. Timetable text and main-story hints distinguish passenger access, trader visits and scheduled mail. Nat's scheduled mail runs remain Monday/Wednesday/Friday/Sunday mornings. The postal tick sees the original scheduled ferry state rather than permanent passenger availability. Kyra still arrives only on her selected scheduled morning visits and returns as the visit ends. No additional letters, request rewards or visitor introduction is granted for using the on-demand ferry.

The route picker reuses native paper UI and Nat artwork, with a compact two-column destination grid. The news bulletin changes paragraph text without replacing its action buttons, preserving Inbox navigation. No new sprites, boat orientations, sounds, fishing or golf changes.

## Validation and limits

Automated checks cover seven days and boundary hours, passenger availability, Bruce's four longer visits, mail/visitor separation, locked routes, free/paid/safe-home fares, stale/cancelled quotes, actual late-night sea/landing/skip flow, exactly-once charging and both real save slots. Retained quest/checklist, board delivery, native gift reactions and chopping/saw lessons are checked. Local archive integrity, cumulative 0.114 reconstruction, cache/version aliases, syntax, repeat assembly and unchanged assets/modules are verified. Saved ZIP copies are byte/hash/CRC-checked after saving.

Browser layout and physical-phone touch/audio/resume remain unverified because the shared preview was occupied. No browser playthrough or new visual-art review is claimed. Phone-test fare clarity, no-funds return, night crossing, route picker, trader timing, mail and Kyra's departure. 0.114 marker/tree browser review remains pending too. No final-build readiness implied. No push/deployment.

# Archipelago 0.114 - The next place

## Main-story guidance

A single gold pin follows mainQuest97 rather than creating new quest flags. It decorates the existing activity, talk or work button and keeps its normal route/action. Cross-island tasks point to the dock. Rod crafting uses Backpack; sleep follows the actual placed bed; home repair-kit work uses the fixed kitchen worktop. Beach/fishing help and the photography shutter keep guidance within the activity. Reedhaven's photographer is correctly located at the wildlife hide. Unavailable shop/trader stages point to Boats for their next visit. There is no invented target after the authored checklist reaches open exploration.

Show next place closes the checklist and highlights/names the next local step without teleporting, spending or granting anything. It validates the current owner, slot and objective. Main-map pins remain when optional location labels are disabled, while other optional map buttons remain hidden. Pins disappear during dialogue, overlays, sleep, decorating and scene transitions. Reduced motion disables the glow; unknown neighbours are not named prematurely.

## Chopping presentation

The approved complete tree sprite rotates at its base after the existing final hit. A short whole-actor camera pullback keeps the tree and Hannah inside the close scene; the attached axe uses its existing complete renderer. Native five-hit/two-log accounting and three-day regrowth remain unchanged. A cosmetic fall lasts 1.8 seconds, blocks additional swings and cancels safely on context loss. Earned logs remain saved, with no replay or duplicate reward after loading. Pending swings now validate their owner, slot, tree reference, modal, scene and interruption state before impact.

Only axe/landing wood cues raise the existing tone peak from 0.16 to 0.25 and the noise peak from 0.11 to 0.18. The existing effects master volume/mute and audio-unlock/hidden guards remain authoritative. No new sound asset or sound redesign is claimed. Reduced-motion or ambient-off uses the existing immediate stump presentation.

## Validation limits

Tests cover story destinations/handoffs, spoiler-safe labels, read-only checklist guidance, five-hit credit in both real save slots, duplicate/cancelled/stale impacts, native standing/pullback/falling/landed frames and full tree bounds sampled through the turn. Retained help, beach pickup/repair/cleanup, quest/checklist/board delivery, brother dialogue and saw checks remain. Native tree frames are visually inspected. Browser and phone layout, real touch, audio listening and PWA/app return remain unverified for this release because another project held the shared preview. Do not treat native rendering as a browser playthrough.

No save-schema migration, new chapter, ferry/trader schedule, fare/pass or fishing-control changes. No push/deployment. Update remains cumulative over complete 0.83. Both archives are checked before and after saving for exact size/hash/bytes and ZIP CRC.

# Archipelago 0.113 - By the water

## Beachcombing guidance

The existing Beach help button opens a paper guide with native tool artwork and short instructions. Rake shallow sand; sweep the detector until it marks metal; select the spade and drag inside a marked circle. Fully uncovered finds support tapping or dragging into the bucket.

On Old Rayne, after the dock rod prompt or an earned repair-piece discovery, Rod pieces shows the saved found/missing status of the damaged rod, sturdy twig and hooked fishing line. The surface rod, shallow twig and detected/dug line are described separately; driftwood grants none of them. No coordinates or hidden-item positions are exposed. All three found directs the player to Backpack > Craft. Once repaired, or on other islands, only general tools are shown. Returning to sand gives a brief next-step hint derived from existing credit. Old drag-only announcement/cancel wording now mentions tapping too.

Opening or paging help does not grant rewards, alter stocks or write progression. Existing modal cancellation safely releases a held find. Page callbacks validate owner, slot, scene, current modal and interruption state. No new save fields or migration. Existing approved artwork and gameplay modules are unchanged.

## Verification and remaining review

Automatic checks cover both real save keys, all four repair stages, no early rod page, non-home/repaired exclusions, read-only open/page/return behaviour, stale callbacks, cancellation with a trailing pointer release and updated tap/drag copy. Retained pickup, actual native beach/repair/cleanup flow, quest/checklist/board donation, brother dialogue/chop/saw and surface/held rendering checks pass. Packaging checks reconstruct the full game from complete 0.83 plus the update, check aliases/cache/syntax, repeat assembly and compare unchanged assets. Both archives are CRC-checked locally and after saving, with exact size/SHA256 byte checks.

Browser review uses a disposable fixture and desktop mouse at phone dimensions. Physical-phone touch, effects/audio, PWA/app resume and the full Story-test route still need device testing. No release-candidate readiness is implied.

# Archipelago 0.112 - A lighter touch

## Exposed beach finds

Tap an exposed find to use the existing bucket-drop transaction, or drag it into the bucket as before. The visible rod, surface driftwood and fully uncovered ordinary finds use one controller. Buried finds retain their raking/detection/digging requirements. Hit areas grow with the displayed canvas scale and choose the nearest eligible find when overlapping. The tap threshold is 12 CSS pixels of maximum movement, so moving away then returning is not a tap.

The controller is installed before legacy capture handlers. A picked find belongs to its initial pointer, routine, save slot, island, modal context and item reference. Wrong-pointer events are consumed; cancelled, hidden, modal, checklist, key-item-overlay, tool, load, scene, new-patch and stale-item changes cannot award the find. Trailing releases after cancellation cannot write a previous sand patch. Existing native transactions still own stock, protected repair credit, discovery feedback, sounds, persistence and cleanup. No new persistent fields or migrations.

## Validation

A 0.111 reproduction demonstrates the ordinary-find second-pointer award bug. The 0.112 harness corrects legacy test-only capture-listener ordering to match browser registration order. New tests cover tap and drag awards; hidden finds; separate rod/twig/line/wood/shell accounting; wrong pointers; duplicate, cancelled and stale events; no trailing save/patch writes; both real save keys and rod preservation. Retained native integration checks cover beach entry/repair/cleanup, quest/checklist gates, timber donations, gift reactions, Jamie's departure and chopping/sawing lesson commits. Native surface/held rendering checks pass. CSS, rasters, character, fishing and golf modules are unchanged.

Browser checks use a disposable fixture and mouse input at mobile dimensions, not physical phone touch. Phone drag comfort, sound levels, PWA/app return and the full Story-test route still require device testing. No final-release readiness is implied.

# Archipelago 0.111 - Washed ashore

## Surface finds inside beachcombing

The user reported that the damaged fishing rod was hidden behind the overworld Beach button. All remaining repair-piece map spots and their pickup path are removed. Old Rayne's beachcombing scene now draws the damaged rod openly on top of the sand using its existing shared 48x40 native artwork at 2x. It has a generous hit area including its short drag instruction. No digging, raking or free buried-find slot is needed for the rod. It is independent of beachItems, so all twelve saved finds and their sand depths remain available. Candidate positions stay on the sand and prefer space away from uncollected finds.

The first storm driftwood is also fully exposed and drawn larger in the beach scene, with a broader hit region. It still uses the existing native wood item, bucket stock and beach cleanup credit. Wood grants no repair pieces. The damaged rod awards repair index 0 only, through the existing protected repair transaction; the twig and hooked line remain distinct raking/detecting/digging discoveries. The rod disappears after collection, and ordinary Key items/recipe/first-find/acquisition feedback remains. No extra cleanup credit, stock type or reward is introduced.

Cancelled or outside drops return the rod to its anchor. A second pointer cannot steal it. Hidden/modal/checklist/key-scene/owner/slot/scene changes, new patches and loading cannot award an old held rod. Native rendering temporarily separates the held surface object from ordinary find rendering and restores the exact hold; the bucket keeps its native held-object cue. Moving indoors/another island clears the transient surface session. Nothing is removed from existing found-piece records or repaired-rod ownership.

Unfinished older saves enable the existing buried-parts mode for remaining twig/line finds, preserving storm-gate values, clearances, inventories and collected parts. No repaired rod or previously found piece respawns. A full twelve-find patch, including its lost key and existing doubloons, is retained without making space for the rod. Main and Story-test part states are tested separately. Existing native doubloon seeding remains authoritative.

## Layout review

The browser review found the sofa book's page count squeezed into multiple lines. Scoped CSS gives the count a fixed non-wrapping width and equal Back/Next buttons. All three pages and the leave action fit at 360x560 without whole-page scrolling. Ben's longer introductory page also fits in its existing frame at that size. Rod surface visibility and successful drag-to-bucket discovery were checked at 390x700 and 360x560; the compact discovery card fits at 360x560. The map was visually checked without a repair-piece sprite. Actual map walking/entry is covered by the native integration test; no complete browser playthrough is claimed.

## Verification and limits

Automatic checks cover rod/wood visibility at untouched sand depth, broad native pointer pickup, protected rod-only credit, no ordinary sand-find or cleanup mutation from rod collection, extra-pointer and interrupted/stale drops, a full old patch and both save-slot part/ready states. A real activity-route flow collects surface wood and rod separately, rakes the twig, detects/digs the line, crafts the rod and clears pool wood; original generic crafting stays gated. Retained conversation/gift/lesson, main/side quest, donation/save and partial-saw-credit checks pass. Native surface/held render checks preserve the hold and cancel without granting anything.

Browser tests are desktop phone-size simulations. Physical-phone drag comfort, sounds, app switching/reload and the full opening-to-Pinewatch Story-test remain pending. No new raster artwork, character poses, scene maps, ferry rules or golf work. The complete sofa sitting animation remains queued.

Packaging verifies source assembly, syntax, versioned aliases, cache/local references, unchanged rasters/character/fishing/golf files, exact cumulative reconstruction over 0.83 and ZIP CRC/unique paths. Both saved ZIPs are read back and verified by exact bytes, size, SHA256 and CRC. Nothing pushed or deployed.

# Archipelago 0.110 - A proper conversation

Nat's sea crossing, shack welcome and daily-mail reminder have shorter, warmer wording. Jamie and Ben's introductions and timber conversations distinguish their voices while retaining both brothers' planning and strength. Jamie refers to Ben for the saw lesson; Ben offers his own guidance. Both point to the same Timber yard and the existing Chop logs/Saw boards controls. No automatic lesson, teleport, new story fact or early name reveal is introduced.

The saw lesson is four shorter pages rather than three dense ones. It still explains five complete up-and-down strokes per board, two boards per log, ten donated boards, the shop boat's 18-coin fixings-and-rope bundle and the trader's brass wheel for three pirate doubloons. Mechanics, prices, checklist states, gift accounting and progression remain native. Source copy changes are scoped, count-checked replacements in copy110.json; historical duplicate code is not globally rewritten.

A reproduced 0.109 bug allowed a saved choice callback to run after its dialogue closed: it executed the action and dismissed a newer conversation. Controls now belong to a specific conversation, rendered page, owner, save slot and scene. Each render can execute its action once. Repainted, replaced, closed, hidden, wrong-context and overlay-covered controls do nothing. Normal completion runs once; ordinary Close cancels the lesson but retains the native gift-departure behaviour. A forced scene/load/owner/slot dismissal cancels unfinished completion actions and avoids sending an old gift actor through a new context. No persisted fields or migrations are added.

Automatic checks cover actual Next/Close/choice handlers; stale and duplicate calls; repaint, modal, hidden, checklist and key-item overlays; context changes; one completion; real fish offering, reaction and Jamie walking into the hut; Ben introduction without work; cancelled/restarted chopping; the four-page saw lesson committing only at the final Next; unfinished-dialogue save/load; and the existing sofa reading handoff. Retained main/side quest, board donation, saves, Kyra/field notes/visitor gates, beach/rod repair and partial-saw-credit flows pass. The older quest regression's fixture is updated for 0.104's open beach and optional cleanup request.

No new artwork or layout changes, and no visual browser pass is claimed. Another project occupied the preview. Physical-phone dialogue tone/fit, rapid taps, overlays, app-return, reading layout and the complete opening-to-Pinewatch playthrough remain pending. Dedicated complete directional sofa sitting/reading body poses remain unimplemented. Existing character/furniture rasters, boats, fishing, ferry rules and DEV travel are retained; golf stays deferred.

Packaging verifies scoped assembly, syntax, aliases/version/cache references, unchanged existing art/fishing/golf, cumulative reconstruction over 0.83 and unique ZIP entries/CRC. Saved ZIP bytes, size, SHA256 and CRC are verified after saving. Nothing pushed or deployed.

# Archipelago 0.109 - A few quiet pages

Tap the real sofa in Hannah's house. The existing facing-aware room route brings Hannah to it before opening a three-page book of island sketches. It works with all four facings and custom placements; reading cannot start remotely, during sleep, dialogue, decorating or another modal. Paper pages reuse the collection-book treatment and the portrait uses Hannah's shared native appearance renderer.

Back/Next retain focus and change the page in place. Page limits, page count and a session-only bookmark keep it simple. Put the book down, the standard close button or Escape ends reading at the same reachable room position. Game time, needs and world simulation pause; no stocks, key-item ownership, collection records, story progress or save fields are added. No reading rewards or time jump. Hidden controls do nothing; returning to the app retains the page. Close, modal replacement, scene/load/owner/slot changes invalidate callbacks. The standard close button is rebound to the current close chain so it clears transient reading state immediately.

The seated-body animation is deferred. Inspection found no approved complete sitting pose, and the sofa has four independent facings. This build does not distort the standing sprite or claim new sitting artwork. It supplies a small reading interaction with the existing portrait. No source PNGs, character renderers, furniture or audio are changed.

Automatic: real house pointer entry and walking for four sofa facings, reachable custom placement, bounded pages, session bookmark, pause/no state changes, native appearance portrait comparisons, closed/hidden/stale callbacks, modal/scene/load/owner/slot invalidation, busy/edit gates and Main/Story-test save round trips. Retained early cleanup/rod flow, item/cooking paths and partial saw credit checks pass. Native room/approach and three hairstyles were visually checked. Browser preview was occupied by another project; no actual panel-layout or phone usability claim. Phone reading fit, text size, inner scroll, touch, close/Escape and background/resume remain to test, alongside the opening-to-Pinewatch playthrough.

Packaging checks syntax, versioned aliases, cache/local references, repeatable assembly, unchanged existing sprites/fishing/golf, exact cumulative reconstruction over 0.83 and ZIP CRC/unique paths. Final saved files are read back and verified by size, exact bytes, SHA256 and CRC. Nothing pushed or deployed.

# Archipelago 0.108 - A better grip

## Blade-up sawing control

The existing standalone saw-control-v44.png is drawn as one complete image turned 180 degrees, so its blade points upward and the wooden handle sits lower-left. No tool fragment or character limb is rotated separately. Hannah's actual attached saw/work animation remains unchanged. There is no raster replacement or new character artwork.

The 180 x 320 control retains its original 180 x 216 tool scale. Travel is bounded to y=8..80, with the complete image bottom no lower than 296; direction guides and the five progress marks remain visible. The grip centre follows y=161..233. Pointer contact now checks the relocated wooden handle region rather than the former top-right location. Native pointer-to-stroke detection, five back-and-forth pairs per board, keyboard alternation and two boards per log remain.

The current canvas, load-log and up/down controls check matching owner/save slot/modal serial/scene, visible active saw modal, hidden tabs, checklist and acquisition overlays. Old callbacks cannot advance work or cancel a new canvas gesture. A second pointer cannot steal the current grip; wrong-pointer moves are ignored. Close/load, hidden/focus loss and invalidated work cancel the held gesture while keeping earned progress and loaded-log credit. No new persisted fields or migration. Other workshop routes, lessons, board donation/sales and story gates remain native.

## Verification and limits

Automatic checks pass for the blade-up control, relocated grip versus old hit area, full-frame travel/slider values, actual pointer strokes producing one board, extra/wrong pointer handling, pointer cancellation and keyboard direction alternation. Two boards exhaust one loaded log and do not donate automatically. Controls are rejected after close/replacement, owner/slot/scene changes, hidden tabs and checklist access. Old move/up/button callbacks cannot affect a new work session. A guarded Load log consumes exactly one actual timber; the first board plus remaining loaded-log credit survive close/save/load, and the second board completes without an extra spend or donation.

Retained shared item-art dispatch/data checks and the early beach/rod-repair/pool pointer flow pass. Actual native control canvases at the upper, centre and lower stroke were rendered and visually inspected. The managed preview started, but the browser route did not serve the QA page. That environment failure was not worked around; no successful browser layout/drag or physical-phone review is claimed. Review phone grip comfort, pointer capture, complete saw-modal layout, sound and app-return behaviour on device.

Packaging validates syntax, aliases/version, references/cache, repeatable assembly, unchanged rasters/fishing/golf/character renderer, exact cumulative reconstruction from 0.83 and unique ZIP entries/CRC. Saved copies are checked by exact bytes, SHA256 and CRC before delivery. Nothing pushed or deployed.

## Historical release notes

# Archipelago 0.107 - Small things, clearer

## Shared item rendering

The item-art audit confirmed that food already uses kitchen-props-v83.png and common beach finds use coastal-props-v62.png. Their inline SVGs specified crisp vector contours but did not explicitly set nearest-pixel rendering on embedded raster images. Both shared icon functions now mark the SVG root and embedded image with image-rendering:pixelated, backed by a scoped CSS rule. Native scene canvases already disable smoothing and remain unchanged.

This reaches food/ingredient/recipe icons and coastal find/prop/project icons through the existing dispatch functions. Original atlas crops, source alpha, colours, outlines, proportions, clipping and unique IDs remain. Unknown species/discovery silhouettes and disabled controls keep their intended states. No contrast filter, averaging grid, downsample, palette rewrite or new raster is introduced. This does not claim to redesign the coins/pebbles or to resolve every report of faded artwork; the new browser/phone comparison remains to do.

Legacy foodShape45 callers now resolve the current kitchen sprite for known kitchen IDs, preserving fallback art for unrelated items. The home cooking shortcut, originally populated before that renderer existed, gets the current fried-egg sprite without replacing its button handler. Nutrition text, recipes, stock, item ownership and progression remain native.

## Verification and limits

Automatic checks pass for coin/doubloon/pebble/wood/shell/glass dispatch through artIcon, foodIcon, objectIcon11 and propIcon34, eighteen kitchen foods through foodIcon and legacy shape callers, root/image rendering flags, correct atlases/crops and unique clip IDs. The current cooking shortcut, species/unknown fallbacks and unchanged save/stock/preferences are covered. Retained first/repeat-find, dismissal/stale controls, rod recipe/checklist/save tests pass. Retained equipment ownership/stale guards and cooking strip selection, actual ingredient consumption, one-time meal output, cook-again and save stocks pass. The retained equipment check was updated only for the current build and the already-established 0.104 open beach access.

Native unchanged source crops were rendered with smoothing disabled at 64px and visually reviewed for coin, doubloon, pebble and nine kitchen examples. Browser QA could not start because the shared preview was occupied by another active build; that preview was left running. No browser comparison, fridge/cooking layout or phone review is claimed here. Device pixel density, browser scaling, perceived contrast, touch and performance remain to review. Existing 0.106 browser results remain historical, not new 0.107 evidence.

Packaging checks syntax, aliases/version, local/cache references, repeatable assembly, unchanged rasters/fishing/golf/character renderer, exact cumulative 0.83 reconstruction and unique ZIP entries/CRC. Saved ZIP copies are checked by exact bytes, SHA256 and CRC before delivery. Nothing pushed or deployed.

## Historical release notes

# Archipelago 0.106 - Islands in a line

## Single-line island title

The two-row 0.93 title is replaced with one curved row spelling ARCHIPELAGO. Eleven contiguous sections of the existing logo-v15.png are cropped through SVG viewports. Each viewport retains its native width/height and source aspect ratio; no new raster, stretching, recolouring or letter font is introduced. A static outer translation places each section on a shallow arc; a separate inner group supplies a small four-step vertical bob. Native crop bounds include the tree tops and shore edges, with motion room inside the outer viewBox.

The title keeps one accessible name and the existing menu controls. Scene animation off stops all eleven groups. Reduced-motion CSS disables the bob, hidden tabs and leaving the menu stop it through transient class state, and return to the menu follows the current preference. No persistent fields, save migration, item changes or audio changes. The tagline remains absent. Original PNG/cache references, current loading shack and shared character renderer remain.

## Verification

Automatic checks pass for the ordered eleven-letter sequence, complete contiguous source width, unchanged crop proportions, curve/float bounds, scoped nested SVG sizing, reduced-motion stylesheet rule, ambient/hidden/menu lifecycle and no save/preference mutation from title synchronisation. Retained actual first/repeat pickup, compact dismissal/stale controls, checklist/craft/save and normal-modal reset tests pass. Packaging validates syntax, aliases/version, local/cache references, repeatable assembly, unchanged rasters/fishing/golf/character renderer, cumulative 0.83 reconstruction and unique ZIP entries/CRC. Saved copies are compared by bytes, SHA256 and ZIP CRC before delivery.

A fresh managed browser preview succeeded. The actual menu was visually checked at 360 x 560 and 430 x 700; menu scrollHeight equalled clientHeight and all five controls stayed in frame. Live CSS inspection found independent float phases for all eleven letters, then no animation on all eleven after switching Scene animation off. Restoring the option resumes normal behaviour. A native crop-layout contact sheet was also reviewed at 360/390/430px widths.

The 0.105 ordinary driftwood and partial repair cards were visually reviewed at 360 x 560, including Keep exploring dismissal back to the beach. The complete repair card measured about 293px high, inside the 560px frame, without inner overflow. Its acquisition overlay still takes precedence normally. This closes the earlier blocked-browser gap for those checked cases; no claim of every discovery panel or phone review. Native first-find/recipe transactions remain unchanged.

Physical Android/PWA performance, pull-to-refresh/Check updates scaling, real touch, sound levels, app return and device reduced-motion behaviour still need review. No push or deployment.

## Historical release notes

# Archipelago 0.105 - Little discoveries

## Smaller first-find cards

FIRST FIND, FOUND AFTER THE STORM and FOUND ON THE ISLAND panels get a scoped content-sized layout using the existing paper/wood frame. Shared native item art sits beside the description, storage text is shorter and action buttons keep 44px minimum heights. Normal modals are untouched by the class. Long content retains inner scrolling rather than page scrolling. The three rod-piece descriptions are shorter and explain why each part is useful.

Ordinary first finds gain a Keep exploring button. It only dismisses the matching current card and checks owner, save slot, scene, modal serial, visibility and one-use state. It does not grant/consume items or change discoveries. Repair cards retain the existing foundTrack88/foundCraft88 controls and guarded native handlers, displaying Track rod repair or View checklist according to existing tracking state. Kept in Key items tells the player where protected repair pieces live. Complete sets still lead to the existing repair recipe. General crafting remains gated by the brothers.

Repeat beach finds retain their native single sound and non-modal quantity banner. Only exact native beach-item name +1 messages are normalised to name × 1. Route/news and unrelated notifications are unchanged. First discovery continues to follow the original saved beachRecords counters; there is no new seen flag or migration. The 0.104 four cleanup credits, stock, rod-piece separation and other-island rules remain.

## Verification and limits

Automatic tests pass for actual first and repeat driftwood collection, original bucket quantities/cleanup/rod separation, compact class/content, valid and duplicate dismissals, closed/replaced/hidden/wrong-owner/slot/scene controls, and normal-modal class reset. Native repair finds retain Track/View checklist, all-parts crafting, protected ownership and save-load; general crafting does not unlock. Repeat formatting uses actual native item names and leaves unrelated messages intact. Retained 0.104 cleanup, legacy-save and early beach/rod/pool pointer-flow checks pass.

The managed preview server started, but the existing browser tab was on a browser error URL and inspection was blocked by browser policy. Browser QA was stopped. No browser screenshot, visual card-layout review or phone testing is claimed. The CSS is scoped to discovery cards and retains viewport bounds and inner overflow, but actual text fit, frame spacing, scrolling and touch comfort still need visual/physical-phone review. Existing shared images and character art are unchanged.

Packaging checks syntax, aliases/version, local/cache references, repeatable assembly, unchanged rasters/fishing/golf/character renderer, exact cumulative reconstruction over 0.83 and unique ZIP entries/CRC. Saved ZIPs are read back and checked by bytes, SHA256 and CRC before delivery. Nothing pushed or deployed.

## Historical release notes

# Archipelago 0.104 - A clearer shore

## Cleanup through activities

Old Rayne's four existing storm credits are retained. Woodland (index 1) and fishing-pier (index 3) keep their larger reachable map piles and existing approach-clearance gates. Beach (index 0) and rock pools (index 2) no longer have separate clickable map piles or pre-entry gates. Their broad activity buttons now explain Tidy inside. Small noninteractive shared wood props mark the remaining shore work and disappear when that credit is earned.

Collecting exposed ordinary driftwood through native beach raking and bucket drop clears the beach credit once. It grants only the existing one wood pickup, never a damaged rod, twig or line. If an unfinished home patch has no available wood, a native wood find is seeded into a free or already-collected slot without replacing any uncollected find, exposure or detector marker. Full patches with no reusable slot remain intact; gathering a find and returning, or a fresh patch, makes room.

Home pools contain one readable shared wood sprite near the lower stones, with a generous hit region. Dragging it into the usual bucket adds one driftwood to Backpack > Beach finds, then credits the pools. It does not count as an animal or alter creature records. Cancelled/outside drops restore it. Other decorative pool wood is removed on Old Rayne so the movable piece is distinct; stones and shells remain. After clearing, the wood stays absent on later visits. The existing night tint applies to it. App hiding or focus loss cancels its held gesture.

An optional After the storm side-checklist entry appears after the first shack visit. It reads the four existing saved credits, gives the next place/action, and disappears when all four are complete. It introduces no extra cleanup quota or new reward. Main rod/timber progression continues independently. Previous clearance, old-save access, stock and repair progress are retained. Other-island beach finds work normally and do not credit Old Rayne. No new persisted cleanup state, raster art, renderer/arm, ferry rules or golf changes.

## Checks and limits

Automatic checks pass for two remaining map piles, beach/pool entry, actual native wood transactions, four one-use credits, saved recovery/checklist, separate buried repair pieces, legacy access and retained rod/egg/creature stock. Cancellation, covered finds, hidden tabs, modals, wrong owner/slot/scene, removed/replaced objects, refreshed pool identities and other-island drops are covered. An integration check walks into the native beach activity, collects driftwood, obtains the visible damaged rod, rakes the twig, detects/digs line, completes the real repair recipe, keeps general crafting gated, drags pool wood through native pointer down/move/up and reloads the saved result.

Retained 0.103 receipt/27-appearance pose, collection, notebook/research gate and save tests pass. Actual map and pool canvases were rendered at 390px width and visually inspected before/after collecting wood. Shared native props are reused. Browser preview failed to connect and its subsequent reload was blocked; no successful browser or HTML-layout review is claimed for this release. Physical-phone drag targets, label layout, scrolling, sound levels and app return remain to test. Native render checks do not verify touch comfort.

Packaging checks syntax, version/aliases, local/cache references, repeatable assembly, unchanged rasters/fishing/golf/character renderer, cumulative 0.83 reconstruction, unique ZIP entries and CRC. Both saved ZIPs are read back and compared by bytes, SHA256 and CRC before delivery. Nothing pushed or deployed.

## Historical release notes

# Archipelago 0.103 - The original arm

## Focused pose correction

The user rejected 0.102's separately drawn elbow and requested a vertical flip of the resting arm at the shoulder. characters-v103.js now isolates the dressed resting left arm's native pixels and reflects them vertically at the sleeve join. It uses the original hand, thickness, length, colours and shading with no scaling or replacement arm polygons. The source footprint is cleared while the torso, skirt/trousers, hair and lower body remain. Lift and hold use this same reflected pose; the original idle frame remains the start/end. There is no interpolated arm stretch. The item stays overhead.

Only the renderer selection, release references and documentation change. Game logic differs from 0.102 only in its version string. No item/stock/save migration, acquisition timing, queue, collection, audio, ferry, raster or golf change.

## Verification

Automatic pixel checks pass for 27 hair/colour/bottom combinations: both item poses reproduce the reflected resting arm, and all pixels outside the source/destination masks stay unchanged. Receipt tests pass for actual starter-rod repair/purchase, camera/notebook queues, automatic/one-use completion, time pause, retained craft view/coins/supply slots, hidden pause, pending reload, legacy no-replay and owner/slot/scene guards. Fish/Animals/Herbs sections, released records, best/location details, Back, botanical/research gates and unchanged stocks/rewards pass. Retained door sound tests pass.

Browser visual review checked rest/reflected hold and complete return to the craft view at 360 x 560, plus the final hold at 390 x 700. Three native appearances were compared side by side. Tests used synthetic Story-test fixtures; physical-phone appearance, animation pacing, audio and app-return review remain. Packaging checks cumulative 0.83 reconstruction, syntax, version/aliases/cache/references, repeatable assembly, unchanged rasters/fishing/golf and ZIP integrity. Saved ZIP copies are read back and checked against byte counts, SHA256 and CRC before delivery. No push or deployment.

## Historical release notes

# Archipelago 0.102 - A gentler lift

## Corrected acquisition pose

The 0.101 raised arm was too long and thin. Independently drawn native-grid lift and hold poses replace the coordinate-band stretch. Hannah bends her elbow beside her head while the item floats overhead. The hand no longer reaches above the skull. Sleeve, shoulder, elbow, forearm and palm stay connected, with the same skin and clothing palette. Resting face, garments, lower body and feet are unchanged across tested appearances. No raster artwork is replaced.

The 0.101 cosmetic seen/pending queue, actual ownership checks, legacy no-replay behaviour, interruption handling and one-use completion remain. The scene continues to pause time, needs and underlying activities and then restores the craft/store view. No new persistent fields or item grants.

## Nat's cabin door

A soft synthesised hinge/latch cue accompanies the intro door opening and Nat returning inside. It fires once per transition, with the close cue after the authored return threshold. It follows existing FX/master volume and audio-unlock settings, and observes hidden-tab, save-owner/slot, skipped-scene and reduced-motion guards. Native movement, dialogue, ferry schedules and door artwork are unchanged.

## Verification

Automatic checks pass for three hair/clothing combinations, unchanged face/lower-body pixels, complete in-frame sprites, connected pose coordinates and an arm joint-chain length within 20 percent of rest. Actual rod repair/purchase, camera/notebook receipts, one-use completion, hidden pause, pending reload, legacy ownership, owner/slot/scene controls, collection sections/detail Back, botanical and research gates, and unchanged stock/rewards pass. Door tests cover one-time opening/closing, return threshold, hidden/reduced-motion/skip behaviour and FX/unlock/volume routing. Packaging validates JavaScript syntax, aliases/version, references/cache, repeatable assembly, unchanged rasters/fishing/golf, cumulative reconstruction from 0.83 and ZIP CRC.

Browser visual review used a synthetic Story-test fixture and the actual renderer at 360 x 560 and 430 x 700. Rest/lift/hold were inspected, the celebration completed back into the retained craft view, and a corrected hold screenshot was captured. A native contact sheet compared three appearances. These are development checks, not physical-phone testing. Android/PWA audio loudness, real-time animation pacing, app return and the full opening still need phone review. No push or deployment.

## Retained 0.101 details

# 0.101.0 - Something to keep

Cumulative over complete installed 0.83 or later. Replace matching files, merge assets and retain everything else. Nothing pushed or deployed. Ongoing development, not a release candidate. No raster replacements, new quests, fishing/golf/ferry-rule changes or inventory quantity migrations. Main/Story-test save keys remain.

## New key-item moments

A common acquisition watcher reads the existing Key items ownership view at save time. New starter/upgraded rods, repair pieces, beach tools, the owned wildlife camera and Kyra's field notes enter a cosmetic receipt queue. Ordinary food, catches and repeat quantities keep their existing small notifications. A receipt never awards an item, spends coins or uses a supply slot.

Hannah raises her hand above her head, the item icon sparkles overhead and the chosen player/item names appear as “[Name] got the [Item]!” An existing gentle gift cue follows sound preferences. The shared player renderer adds native-grid lift/hold poses with connected shoulder, elbow, forearm and hand, intact face/clothing and grounded feet. Small disconnected remnants of the old lowered-arm outline are removed only inside its footprint. Normal player/brother art remains. A small pixel camera UI icon fills the previously empty camera artwork. No PNG is replaced.

The receipt lasts about 2.65 active seconds. Continue/Escape is available after the initial gesture. Reduced motion or ambient-animation-off displays the raised pose without sparkle movement. Time, needs, controller updates, cooking, boat motion and post pause beneath it; the underlying craft/store/activity view stays intact. Hidden tabs pause its age. Dialogue, crossings, sleep, story scenes, held finds and active fishing take precedence. Owner/slot/scene and one-use guards reject stale completion.

The new keyMoments101 save record stores cosmetic seen/pending IDs only. Legacy saves snapshot existing ownership without replaying past acquisitions. Valid interrupted receipts remain pending across reload and finish once. Loading a different save cancels the transient scene without consuming another save's pending receipt. Existing ownership, discoveries, coins and stocks remain in their original records.

## The collection book

A book button sits beside the request checklist and Backpack in the top bar. It opens the same view as Journal -> Island collection. The paper page has a bound edge, faint ruled lines, section tabs and fixed footer. Only the inner page scrolls. Fish and Animals use existing approved species artwork, silhouettes, discovery flags, measurements and native detail/location views. Animals includes rock pools, woodland and photographed wetland wildlife. Recorded entries have clear ticks; released wildlife still counts.

Herbs appears only after Kyra's field-note handover. It uses botanical names, existing plant discoveries and protected backpack gathering quantities. Unknown plants do not reveal their names. No early medicine or unknown Mini/Mona notebook pages are added. Research sharing keeps its native dock/Kyra and reward conditions. Book viewing does not mutate collections or grant rewards. Detail Back returns to the selected section, with per-section inner scroll retained until close/load. Other journal notes, equipment and memories stay available.

Date/time, needs, request checklist and Backpack remain in the top bar; utility targets are 44px wide. The collection control refuses travel/dialogue, sleep, active casts and held finds.

## Checks and phone limits

Automatic checks cover actual starter-rod repair and purchased coastal rod, custom-name escaping, one-use receipts, camera/notebook queues, automatic completion, clock/time pause, retained craft view/coins/supply slots, hidden pause, pending reload, legacy no-replay and owner/slot/scene guards. Native pose checks compare face and lower-body pixels across three hair/top/clothing combinations and verify the raised hand stays in frame. Collection checks cover sections, released catches/best/location details and Back, botanical/herb/research gates, unchanged discovery/stock/reward records and stale controls. Retained 0.100 visitor/notebook/save and 0.98 equipment/cooking regressions are run. Packaging checks syntax, aliases/version, references/cache list, repeatable assembly, unchanged rasters/fishing/golf, cumulative 0.83 reconstruction and ZIP CRC.

Browser review uses excluded native-game fixtures for the book, top bar and acquisition moment at phone-sized layouts. A held pose preview is QA-only. Physical-phone touch/scroll comfort, celebration timing/sound, successive tools, full opening-to-Pinewatch progression and Android/PWA suspend/resume still need review. No physical-phone playtest or full naturally timed ferry journey is claimed.
