# Archipelago v0.20.0 — At home on Pinewatch

Complete mobile web game package. Extract the ZIP and copy its contents into the GitHub repository root, replacing matching files. Commit and push using GitHub Desktop. Do not upload the ZIP itself. This supersedes all earlier releases; no intermediate upload is needed. Nothing has been deployed automatically.

## New in 0.20

After your first sleep, take Nat’s ferry to Pinewatch. Find Jamie chopping fallen wood near the path below the forester’s cabin. The separate green-roofed building is Ben and Jamie’s shared home and workshop; the forester’s cabin remains the player’s repairable accommodation.

Tap a person or their ground marker to approach and talk. Jamie points you towards Ben, who starts inside tinkering at his bench. Both use the same pixel-character style as the player, with bottom conversations and matching portraits. The player remains non-gendered, and every new conversation uses the chosen name.

Enter the workshop using its map marker. Tap the floor to walk or a person to talk. The visible doorway and the Island button both return to Pinewatch, including during a conversation or open menu. The room includes two sleeping alcoves, tools, a workbench, drawing desk, chest and log store. Furniture belongs to the brothers and is scenery in this release; it is not player inventory storage or a new player bed.

Jamie chops, carries logs inside and checks repairs. Ben tinkers, sketches, steps outside to inspect measurements and returns indoors. Their routines continue across the doorway, yield to people and pause during conversations or menus. They head indoors and rest after 9pm. These are cosmetic routines, not full persistent daily schedules; background work never generates free items. The earlier home-island basin-repair visits remain available for story/save compatibility.

Chopping has a swinging axe, flying chips and timed impact sounds; Ben’s tinkering has light tool taps. Nearby visible work is audible, distant work fades, and indoor work cannot be heard across the overworld. Effects use the existing FX switch and volume. Mobile browsers may require a tap before audio begins. The player’s woodcutting activity also has a visible swing, chips and a matching impact sound, preserving its existing timing and rewards.

The broader detailed-character redesign, Minnie and Mona’s home, Euan’s travelling routine and other resident homes are future work.

## Existing in 0.19

After your first sleep, speak to Nat at a landing and choose Reedhaven. The temporary exploration setting opens all three implemented islands. Reedhaven has a distinct wetland map with boardwalks, a field hut, a wildlife hide, a repairable stilt cottage and lagoon fishing.

Meet Euan at the field hut or hide. He lends a camera for the first outing. Drag the viewfinder onto an animal, pause gently and tap the shutter. Photograph a grey heron, Eurasian otter, common kingfisher and emperor dragonfly; wait for a special behaviour to improve a photograph. The album keeps your best image per species. The first heron photograph earns a one-time 20-coin thank-you.

Euan sells a basic camera for 90 coins and framed wildlife prints for 20. You can frame your own photograph for 8 coins and place the picture in your home shack through Decor. Research now includes 19 species; existing paid milestones stay paid. Reedhaven’s European flounder and thick-lipped grey mullet can also be caught or observed.

The stilt cottage uses the existing simple cabin interior, with separate repairs and storage from Pinewatch. Reed weaving, the waterway repair and further field-hut/lodge interiors are planned for later updates. Only the home island, Pinewatch and Reedhaven are playable.

## New in 0.18

Use the labelled Island button to leave the landing or woodland, even during a conversation or an open storage menu. You can also tap the exit marker at the walkway to walk back out. Leaving a repair preserves the spent materials and completed work; Ben's thanks can be resumed later.

Interaction dots are larger and more visible. Every dot has a 56-pixel tap area. NPC dots sit under their feet and move with them; tap the person, their dot, or their footer portrait to approach and talk. Markers stay behind the characters. The marker preference still works.

Hannah and the full existing cast now share one pixel-character style, proportions and directional animation. Matching portraits show those same models. Ben retains his black curls and glasses, Jamie his shorter brown hair and broader build, and each visitor their familiar colours and accessories. Hannah's existing appearance choices are retained.

## New in 0.17

After the first sleep, visit the woodland clearing to find Ben and Jamie working and walking between tasks. Jamie chops and stacks fallen wood; Ben sketches and checks the channel. At the landing, Iris takes field notes and watches wildlife. Visiting Nat, Katie and Bruce have their own small routines while their boats are present.

Tap a person or their portrait button. They pause while Hannah approaches, conversation appears at the bottom, and they resume afterwards. People avoid the water, scene obstacles, each other and Hannah's immediate walking path. Menus and conversations pause activity; late-night work becomes quiet rest. Background work does not add items or coins.

This release builds routines for the six existing characters. Minnie, Mona and Euan arrive with future islands. Euan's purchasable camera and wildlife photography have been added to the build plan; they are not playable yet.

## New in 0.16

After the first sleep, meet Iris at the home dock and Ben and Jamie in the woodland clearing. Iris pays one-time research milestones for discoveries; you can use the eye button at the fishing pier to observe fish, or uncover wildlife without taking it. Existing discoveries count. Ben and Jamie can mend the little spring basin with two timber and one driftwood. This opens the first quiet shrine moment.

Research rewards are claimed from Iris, not automatically from the journal. The journal shows field notes, collections and little favours. Saves retain paid milestones, repair progress and the shrine glow.

This is still an early development build. The temporary ferry exploration mode remains enabled after the first sleep.

## Retained from 0.15

- Dock close-up: Hannah walks to the landing; use its mailbox, cold storage and ferry boarding point, or speak to a visiting boat keeper. These objects and people no longer clutter the overworld. Both landings access the same saved mailbox and cold cargo storage.
- Home woodland close-up: one path leads into a clearing. Two small unmarked stones lie beneath an old tree. The ancient shrine has five plain circular areas. Neither is drawn on the overworld.
- Bottom-screen conversations: animated Nat, Katie and Bruce models match their portrait artwork. Hannah walks over before speaking. Dialogue names remain at the top right, choices above the box, and time pauses while talking. Trading opens a separate menu.
- Live title screen: island-letter logo, “A world of islands. Your own pace.”, moving sea, chickens pecking/flapping, seabirds and an occasional ferry arrival/departure. Title animations never advance a saved game.
- Pinewatch: stronger northern woodland art, lighter paths, copper needles, granite, heather and cool water. Existing activities, fish, cabin and saved progress retained.
- Old Rayne Isle is the editable island-name default for new games. Existing island and character names stay unchanged.

## Temporary travel access requested for testing

After the first completed sleep, the ferry is always available and Pinewatch opens without repair-kit donations. Older saves already past their first morning qualify. This does not spend materials or permanently complete the repair project. Nat can take you home from Pinewatch at any time.

Old Rayne Isle, Pinewatch and Reedhaven are playable. Other island artworks are concepts for future chapters.

Shop/trader visits and Monday post retain their existing schedules. The ferry override does not generate daily postal deliveries. Scheduled passenger crossings, emergency-phone calls and camping are deferred while unrestricted travel is being tested.

FINAL RELEASE CHECKPOINT: remind Stuart to disable the temporary free-ferry/travel-unlock override and restore intended schedules, progression gates and emergency-phone rules before final release.

## Existing systems retained

Fishing, rock pools, beachcombing, crab pots, research/collection records, crafting, requests, home/cabin storage, cold storage, decorations, sleep and forgiving needs, offline music/FX settings, saved progress and backups.

The shrine's kindness-driven glow progression and scientist research payments are planned for the next story build. The circles are dormant in this release.

## Project stage

Early development. Further islands and story chapters remain to be built. This release is not a final build or release candidate.

## Validation

JavaScript syntax; overworld and close-up routes/collision; inventory and mailbox access; bottom dialogue and paused time; first sleep and previous-save travel unlock; no change to actual repair-kit donations; original postal schedule; return ferry; save round trips. Browser review of title, dock models/dialogue and woodland. ZIP verified for CRC, byte equality with source and complete PNG decoding.

## Updating

The menu must say v0.16.0. New versioned script/style and offline cache are included. Export a backup from Options when testing. Existing saves are retained; do not clear browser data to update.

