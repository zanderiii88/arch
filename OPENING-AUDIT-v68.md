# Archipelago 0.68 - The crossing home

Update cumulative over installed 0.67 or later. Extract into the repository root, replace matching files and merge assets. Retain other files. This update is not a standalone game. No push or deployment.

New games now begin out at sea with Hannah and Nat aboard the ferry. Three short thoughts advance by tapping the dialogue, then the existing ferry approach, walk ashore and welcome continue. The boat, native character appearances and foreground gunwale use existing shared renderers. A restrained stepped sky/sea scene adds ambient waves and whole-boat bobbing; reduced-motion or ambient-off keeps it still. Gameplay controls hide during the sea scene. Skip arrival works throughout. Time and needs do not advance during the opening.

Existing completed saves continue normally. Pending arrivals restart at the sea scene after reloading, using the existing introPending flag; there is no new save schema. Main/Story slots, inventories, unlocks, furniture, cats, herb notebook, fishing and DEV travel remain. This adds no post-quest reward cutscenes, golf, river panning or rune quest yet; these remain planned.

Automated checks cover thought pacing, no time/needs changes, sea-to-docking/walk/dialogue transition, skip and repeated-skip guard, pending-intro restart in both slots, unchanged save/accounting/cat/herb/fishing/boat functions. Retained 0.67 notebook, 0.66 fishing and 0.65 home/inventory checks pass. Actual Chromium touch checks cover dialogue/skip and 360/390/430 layouts without runtime errors or horizontal overflow. Sea scene renders at 360 and 390 were visually inspected for character anchoring, gunwale layering, framing and text. Physical-phone feel, PWA/cache update, audio and subjective art approval remain pending.
