# Archipelago 0.22.0 — A fresh look

Early development build, not a final build, release candidate or final playtest.

- The approved illustrated player now appears in the creator, world, activities and player portraits: front-facing idle/breath/blink, four-pose walking and wave. Left movement mirrors the model; north movement retains the front view for now.
- Mix tees, button-detail shirts and long-sleeved jumpers with shorts, skirts, trousers or long skirts. Simple dresses are available too. Four hair options, colours, accessories and sandals/trainers/brown shoes. No gender selection.
- Basic cocoa tees, brown shirts and walnut jumpers/bottom colours are included. Katie mentions future brown clothing and gold jewellery in her early shop introduction; jewellery itself remains planned.
- Options → Character studio previews the current outfit at large and island sizes. Scene animation preferences remain supported.
- Old and new saves retain names, inventory and progress. Extra clothing fields survive saving and export/import. Legacy hairstyles map to the available four hair shapes without deleting the old style index.
- The rejected 0.21 code-native player trial is superseded. NPCs retain their established pre-trial models until their individual illustrated passes. Jamie's supplied photo is the reference for his next pass; a new illustrated Jamie is not included here.
- Dedicated illustrated casting, chopping, sleep/stretch and other work poses remain future art work. Existing work tools and axe effects still operate. This is an initial small animation set.
- Temporary constant ferry availability and bypassed island gates after the first sleep remain enabled for exploration testing.

Validation: 240 rendered hair/top/bottom/pose combinations; distinct bottom silhouettes and walk phases; bounded cache; reduced motion; dress selection; old/new save round trips; creator/studio controls; workshop navigation/exit, ferry and fish regression. Browser checked creator, persisted outfit, art loading and studio playback/layout. ZIP integrity and service-worker assets checked.

Install: extract this complete ZIP into the GitHub repository root, replace matching files, commit and push. Upload the extracted files rather than the ZIP itself. No intermediate release is required. Nothing has been deployed automatically.
