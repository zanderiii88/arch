# Archipelago — Island Prototype v0.1.0

A phone-first, single-player island prototype. No build tools, paid services, API keys or server are required.

## Upload to GitHub Pages

1. Unzip this package on your computer.
2. Upload the **contents** to the root of a new GitHub repository. `index.html` must sit at the root, next to `game.js`, `style.css`, `sw.js`, `manifest.webmanifest` and the `assets` folder. Do not upload the ZIP itself.
3. In your repository, open **Settings → Pages**. Under Build and deployment select **Deploy from a branch**, then select your main branch and **/(root)**, and save.
4. Once GitHub reports the site is ready, open the provided Pages URL on your phone.
5. Optionally install it through your browser's **Add to Home Screen** or **Install app** option. On iPhone, use Safari's Share menu → Add to Home Screen.

Keep the assets folder and filenames unchanged. All paths are relative, so the game works under a repository subfolder. No custom domain is needed.

## Playing

- Choose New game, customise your appearance and enter your name.
- Tap land to walk. The character routes around solid obstacles.
- Tap a location sign to walk there. On arrival, tap the action button for its preview.
- You can step into the narrow band of shallows. Deeper water is blocked.
- Settings let you turn ambient animation or labels off, export/import your save, or return to the title.
- Continue resumes your character and last saved position.

## Included

- Start menu and appearance/name selection with no gender categories.
- One complete island visible on a portrait phone screen.
- Generated pixel-art scenery based on the approved visual concept.
- Tap-to-walk routing, obstacle collision, building/tree occlusion and shallow-water foot effects.
- Animated water glints, chimney smoke, occasional seagulls, bobbing ferry and crab-pot buoys.
- Location arrival prompts and a journal of places visited.
- Local autosave, JSON save export/import, app icons and offline cache support.

## Scope and limitations

This is the island exploration foundation, not the full game. Fishing, beachcombing, rock-pool searches, crab-pot catches, ferry journeys, shops, currency changes and house decorating are **not playable yet**. The 120 coins are a starting display value. Activity buttons show clear previews of the planned activity.

Scenery is currently one painted map with hand-mapped collision footprints and foreground silhouettes. Home upgrades will require separate replacement artwork/layers in a later build. The character, ferry and ambient effects use simpler code-drawn pixel sprites, so they are not pixel-for-pixel copies of the original mockup. There is no audio in this prototype.

Saves stay in this browser on this device; they do not sync to GitHub or another phone. Clearing site data may delete them. Use Export save before doing that. Installing and playing offline requires a successful initial visit over HTTPS; open the game once while connected before testing offline. Some private-browsing modes restrict storage. GitHub Pages provides HTTPS.

## Updating

Upload the complete replacement package over the existing files. Reopen while online. Future releases should use a new cache name in sw.js and keep the save schema compatible or migrate it. Do not clear site data as a routine update step.

## Verification

JavaScript syntax checks and automated logic tests passed for all six location routes, continuous obstacle avoidance, deep-water blocking, walkable ground behind the cottage, character creation, save/load and malformed-save rejection. The title, character selection and island were inspected in a browser. Actual iPhone/Android installation, offline behaviour and device performance still need a phone check.

## Source

All game source is included: index.html, style.css, game.js and sw.js. Generated scenery is in assets/island.png. No third-party runtime or CDN dependencies. Version: 0.1.0.
