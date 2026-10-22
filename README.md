# Archipelago — v0.12.0

A phone-first island game prototype, supplied as a complete build. No build tools, accounts, API keys or CDN required.

## Updating your working GitHub Pages setup

Extract this ZIP and upload everything inside it to the repository root, replacing existing files. Keep the assets folder intact. index.html must be directly at the root. Commit the changes. Continue using Settings → Pages → Deploy from a branch → main → / (root), as in your last working update.

Reopen online and confirm **v0.12.0** on the title screen. Existing saves and music preferences are preserved. Do not clear site data as an update step; export a save through Options before changing phones or browsers.

## New in this build

- Meet Mara, Pip and Captain Nell: portraits, small world sprites, introductions, conversations and comments on your progress.
- Make things in the shack using its hammer button, or open crafting from Storage or Decor.
- Recipes: wooden stool (2 timber), shell shelf (2 timber and 1 scallop shell), repair kit (3 timber and 1 driftwood), three firewood bundles (1 timber), stove (6 timber and 3 smooth pebbles).
- Materials are drawn from your backpack, wooden chest and beach finds. Finished items go into the chest. Use Decor to place crafted furniture.
- Light a placed stove from Decor or by tapping it. Each firewood bundle gives three game hours of cosy firelight. Heating is optional; there is no cold penalty.
- Talk to Captain Nell while the Monday ferry is docked. Her Pinewatch landing project accepts two repair kits; a letter in your mailbox explains the project and records your help.
- Older saves, delivered parcels, catches, crab pots and music preferences are preserved.

Pinewatch travel is planned for the next build and is not available yet. Your delivered repair kits are saved for that progression. Shrine relics and additional islands also remain future work.

## Verification

Checked atomic recipe spending, shared materials, failed recipes, duplicate furniture prevention, furniture collision and routes, saved stove fuel and expiry, the two-kit project, NPC conversation state and old-save defaults. Existing storage, fishing, audio and offline music checks pass. Native rendering verifies new furniture and boat sprites; repeated beach renders remain stable. The archive is fully extracted and each PNG decoded in addition to ZIP CRC verification.

See FUTURE-BUILDS.md for the proposed next stages.
