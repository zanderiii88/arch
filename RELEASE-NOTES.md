# Archipelago 0.23.0 — A little fishing polish

Early development. Not a final build, release candidate or final playtest.

- Illustrated player poses for holding the rod, backswing, forward cast, waiting, reacting to a bite and reeling. Saved clothes, skirts, trousers, long skirts, dresses, hairstyles, colours and eyewear stay on the same rig. Long sleeves have their own matched fishing art. The basic rod grip follows the actual hand for each sleeve type.
- Improved basic rod: shaded flexible blank, cork grip, binding rings, line guides, a metal spinning reel and moving crank. The line starts at the actual rod tip. Tension bends the rod; releasing relaxes it and stops the crank. The cast whoosh happens on the forward stroke; landing ripple/plop and bite ting/vibration retain their existing cues and FX settings.
- Closer player view at the fishing pier, with the catch bucket beside them and visible fish as it fills. Existing timed ripples, no-bite casts, forgiving tension, catches, sizes, recap, research observation and island-specific species remain.
- Overworld player is 8% larger (scale 1.08 to 1.1664). Foot anchors, walking paths, collisions, NPCs, indoors and dialogue scale are unchanged.
- Corrected alternate-head neck joins. Hair colour no longer recolours the mouth or central face. Hats and facial-hair overlays are withheld from the player renderer and creator until matching art is ready. Saved accessory fields are retained for compatibility; eyewear remains.
- Brown clothing and Katie's early hint about future gold jewellery remain. Jewellery, the side-view dock redesign and illustrated NPC passes are future work.
- Temporary constant ferry availability and island-access bypass after the first sleep remain enabled for exploration testing.

Validation: 384 fishing clothing/pose combinations with the grip on real hand pixels; 480 hair/pose/colour comparisons preserving the face; existing 240 character/save/workshop/ferry/fishing regression checks. Tested cast/audio/splash/bite/haptic/reel/release/catch/recap/save flow, no-bite return, observation mode, rod/line geometry and reduced motion. Browser checked saved outfit, map-to-pier navigation, fishing poses, cast/bite/reel/release controls and absence of game runtime errors. Haptic device support and audible output still depend on the user's phone/browser.

Install: extract the complete ZIP into the GitHub repository root, replacing matching files, then commit and push. Upload the extracted files, not the ZIP. This supersedes earlier builds without an intermediate upload. Nothing has been deployed automatically.
