# Art consistency audit — 0.60

Hannah’s original wavy bob, eyes and native pose atlas are the standard. This is a staged audit, not a declaration that every asset is finished.

| Area | Current status | Next review |
|---|---|---|
| Mini and Mona | Native Hannah faces/poses, distinct hats, wardrobe, silver streak/collar/shawl and accessories. Shared world/room/portrait renderer. | Phone readability, distinguishing personalities, animated gestures. |
| Witch cottage | The furnished illustration was rejected for inconsistent item orientation/style. 0.57 uses the shared empty shell plus twelve separate shared furniture objects, common item dimensions, depth sorting and footprint collision. | Phone review of shared item appearance, routines, basket access and overlaps. Never use the rejected furnished cottage as a style reference. |
| Euan and Iris | Replaced legacy block figures with native player poses/faces. Camera, glasses and notebook retained. | World/dock scale and portrait framing on phone. |
| Nat, Katie, Bruce | Later merchant atlas retained. Contact sheet reviewed; eyes use the same simple dark-pupil vocabulary. | Clothing outline/detail density and all boat poses, especially at smaller sizes. |
| Jamie and Ben | Later connected pose atlas retained; their existing identities/work poses preserved. | Compare all work and celebration frames, rather than replace with Hannah clones. |
| Stuart | Story mentions exist; no live named Stuart actor/portrait is currently registered. | Use the same face/pose standard when his scene is implemented. |
| Four island maps | 0.52 palette identities and 0.53 crisp rendering retained. | Subjective detail density, foliage and shore layering/collision on phone. |
| Home/workshop interiors | Workshop furniture is modular; optional home furniture shares the current atlas. 0.58 home now uses a structural shell, fixed kitchen and separately placed furnishings; bed/chest/plant share workshop assets and optional furniture shares the current home atlas. | Phone review of grid layout, moved-bed sleep/wake and shared home object scale. 0.59 adds shared directional bed/chest/sofa/chair/bookcase/table/bench/stove sprites; crafted shelf now shares workshop art. Review phone orientations, front/side access, sleep and remaining ornaments/lights. |
| Activity backgrounds | 0.56 rock-pool backdrop, twelve movable stone sprites and main woodland clearing redrawn. Graves, shrine effects and existing activity logic retained. | 0.60 redraws mineral shore, photography lagoon and separate forest floor, plus mineral covers/crystals, leaf cover and heron/otter/dragonfly poses. Native kingfisher retained with shared icon and an anchored perch. Next: phone review, remaining forest-find/woodland-creature sprites, then fishing/beach and coop/harbour. |
| Fish/coastal creatures/cats | Existing reference-led atlas and connected cat renderer retained. | Keep established art; do not reinstate old geometric creature fallbacks as the target. |
| Chair, bench and icons | 0.55 treatment was rejected by the user as too detailed. 0.56 replaces both with smaller native sprites and simpler shading; world and icons share the atlas. Other six furniture cells retained. | User phone approval; do not treat the rejected chair/bench as style references. Continue remaining crafted/storage props and icons. |

Acceptance for every future addition: inspect a native render, a phone-sized render and the related portrait/icon; compare with Hannah; check frame bounds, attached limbs/tools and foreground order. Document automatic checks separately from browser/physical-phone checks.

The 0.56 chair/bench are awaiting user review; keep comparing real objects and icons with Hannah before accepting future art. Do not repeat the finer 0.55 furnishing treatment for new props.

0.57 rule: use empty structural room shells and separately rendered shared furniture for all new/rebuilt interiors. Preserve common perspective, native pixel scale, dimensions, item identity, foot origin, collision and depth ordering. Different inhabitants can personalise textiles/plants/books, but not the furniture camera angle or art treatment.

0.58 user rule: only the kitchen furnishing area stays fixed in Hannah’s home. Other furniture, plants and decorations are independent movable objects, arranged on a grid with common footprint collision and floor-depth sorting. Retain per-slot layout and inventory accounting. More pool stones with varying sizes and only a subset of rock shapes per visit are now implemented.

0.59:28 native directional raster frames. Six items have four faces; table/bench have two axes; mat/rug patterns redraw in two dimensions. No rotate controls on effectively invariant objects or the single-plane wall pieces. The new front views are shared across rooms and icons. Exact source prompts, targeted corrections and native preparation are retained. Next substantial background priorities remain mineral shore, photography and separate forest-foraging; do not redraw every scene in one unreviewed batch.

0.60 scene rule: new activity backgrounds have their own native256×384 clusters and palettes; never reintroduce the former global averaging filter. Preserve existing target geometry and snapshot crop scale. Photography uses photoBackdrop60 for both scene and prints so the anchored perch cannot drift between views. Forest background/leaf cover are updated; older finds, bugs and bucket are not declared finished.
