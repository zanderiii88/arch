# Archipelago 0.44.0 — Animation consistency

Cumulative update for any installed release from 0.35 through 0.43. Extract the ZIP and merge its contents into the repository root; merge the assets folder too. Do not upload the ZIP itself. Existing saves remain in place.

- Dedicated six-pose axe and mallet cycles replace the fishing-pose construction workaround. Hands and tools are in the same registered frames; legs remain planted. Shorts, trousers and skirts remain supported.
- Pinewatch chopping uses a larger matching pixel-art pine and a separate stump/sapling asset. Hits, wood sounds and supported vibration occur at contact. Repeated taps cannot interrupt a swing. Closing before contact cancels the uncompleted hit.
- Sawing shows a held pixel-art hand saw at a stationary bench. Drag the large handle on the right. Five complete up/down cycles make one board. Arrow buttons and keyboard arrows remain available. Partial progress is retained, including old 12.5% increments.
- Mini and Mona now have complete normal, delighted and ecstatic portrait states. Catnip dialogue uses the new facial artwork, with the expression changing across the whole face.
- Fishing grip coordinates now match the actual sprite hands. Wave lower-body preservation and Jamie's stationary stump fix remain intact.

Validation: game-state checks cover delayed hits, repeat protection, cancellation, tree reward, alternating strokes, pointer handle targeting, partial save reload, old progress, all three lower-body variants, wave clothing, rod grip and retained identity/inventory. Browser checks cover a real handle drag, a completed board, delayed chopping and catnip dialogue. Asset references, JavaScript syntax, ZIP CRC and cumulative overlays on reconstructed 0.35 and 0.43 baselines checked.

Physical phone vibration and audio balance still need device testing. This release does not add the later herb gathering or river-rune activity. Temporary ferry exploration mode remains enabled.
