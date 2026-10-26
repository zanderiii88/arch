# Art consistency audit — 0.55

Hannah’s original wavy bob, eyes and native pose atlas are the standard. This is a staged audit, not a declaration that every asset is finished.

| Area | Current status | Next review |
|---|---|---|
| Mini and Mona | Native Hannah faces/poses, distinct hats, wardrobe, silver streak/collar/shawl and accessories. Shared world/room/portrait renderer. | Phone readability, distinguishing personalities, animated gestures. |
| Witch cottage | Redrawn with larger pixel clusters; familiar bed/fire/tea/workbench layout and entry kept. | Phone inspection along furniture edges. |
| Euan and Iris | Replaced legacy block figures with native player poses/faces. Camera, glasses and notebook retained. | World/dock scale and portrait framing on phone. |
| Nat, Katie, Bruce | Later merchant atlas retained. Contact sheet reviewed; eyes use the same simple dark-pupil vocabulary. | Clothing outline/detail density and all boat poses, especially at smaller sizes. |
| Jamie and Ben | Later connected pose atlas retained; their existing identities/work poses preserved. | Compare all work and celebration frames, rather than replace with Hannah clones. |
| Stuart | Story mentions exist; no live named Stuart actor/portrait is currently registered. | Use the same face/pose standard when his scene is implemented. |
| Four island maps | 0.52 palette identities and 0.53 crisp rendering retained. | Subjective detail density, foliage and shore layering/collision on phone. |
| Home/workshop interiors | 0.55 broader-cluster backdrops, registered to existing room coordinates. Eight home furnishings use a shared native atlas; workshop chairs share it. Modular workbench, beds, green rug and kitchenette retained. | Phone boundaries, sleep/wake, foreground overlaps; then remaining crafted shelf/stove and storage props. |
| Activity backgrounds | 0.55 source comparison completed alongside Hannah; existing activity art retained. | First: rock pools and woodland, then mineral shore and photography. After those, compare fishing/beach, coop and harbour detail density. Preserve each activity’s geometry and overlays. |
| Fish/coastal creatures/cats | Existing reference-led atlas and connected cat renderer retained. | Keep established art; do not reinstate old geometric creature fallbacks as the target. |
| UI icons and item props | Existing controls retained. | Compare scale, outlines and item silhouettes after scenes; keep soft rounded controls. |

Acceptance for every future addition: inspect a native render, a phone-sized render and the related portrait/icon; compare with Hannah; check frame bounds, attached limbs/tools and foreground order. Document automatic checks separately from browser/physical-phone checks.

0.55 next run: redraw the highest-priority activity backdrops individually using exact existing geometry/interaction references. Avoid another universal downsampling/averaging pass.
