#0.66 fishing audit — What might bite

The shared fishing-v66.js module defines eligibility, weighted selection and connected struggle phases. Existing island rosters, native creature/player/tool artwork, catch measurements, rewards/records/research/release, rod prices and unlocks remain. No new raster artwork or inventory item is introduced. Existing bait stock is now labelled Coastal bait; bread is an existing food supply.

| Fish | Minimum rod | Bait | Behaviour |
|---|---|---|---|
| Goby, herring, mackerel, flounder | Driftwood | Any, including bare hook | Relaxed; long calm moments |
| Pollock, gurnard | Driftwood | Any, including bare hook | Steady; stronger pulls |
| Plaice | Driftwood | Coastal bait | Steady |
| Wrasse | Coastal | Coastal bait | Lively repeated pulls |
| Mullet | Coastal | Bread | Short calm moments, quick darts |
| Saithe | Coastal | Coastal bait | Strong, longer pulls |
| Sea bass | Tidekeeper | Coastal bait | Strong, sustained pulls |

Higher rods satisfy lower rod requirements and retain their existing faster gain/gentler strain. Species have separate calm/warning/surge durations, pull strengths and progress rates. The existing automatic bite/hold/release input remains; no new reaction-window tap is required. Warning text precedes surges. Releasing reduces tension, and prolonged maximum strain can break normal lines. All fish can be landed by following the signals at their minimum required rod. Common fish remain forgiving. Every island supports basic-rod bare-hook fishing, including gurnard on Emberstone.

Each valid normal cast snapshots species, island, rod, bait, line upgrade and gift status before consuming exactly one selected existing portion. Invalid/stale/repeated taps and observing use none. Selection alone costs nothing. Exhausted preferred bait falls back to a bare hook, never another food. A spent portion remains spent after a miss, escape, departure or reload. Kit changes cannot change an active cast. Active rig is transient and cleared on exit/load; preferred bait is bounded and stored separately per Main/Story slot. Existing stock, owned rods, catches and furniture are preserved.

First two opening neighbour catches are restricted to catchable common species, always bite, use no bait and cannot break the line. Their tension is capped with continued held progress, and existing reservation/progression code records and protects the two actual landed fish. Their normal opening conditions remain. Watching remains unrestricted by equipment and uses the original roster/research behaviour. Journal and kit show silhouette/requirements for unknown species without revealing names; original released-animal collection credit remains.

## Verified

Deterministic tests cover all four islands × three bait choices × three rod levels with200 weighted draws each; all eleven species under held, signal-following and protected gift policies; every minimum-kit species can be landed within90 seconds in that simulation. Sample minimum-kit signal-following fights take approximately10–29 seconds, common continuous holds8–12 seconds; these are development checks, not approval of final phone balance. Exact times are recorded in review66/fight-times66.json locally.

Native integration tests compare unchanged prices/rosters/catch/accounting/recording/art geometry functions against0.65. Actual valid/invalid/double casts, exact supplies, captured kit despite a rod change, empty-bait fallback, watching, two real landed and reserved gift fish, departure/load cleanup, malformed preferences and independent Main/Story belongings/positions/facing pass. Retained0.65 UI/audio/decorating/save tests and18 earlier gameplay/art suites pass. The0.61 source-equality assumptions for cast/fight are explicitly superseded; its actual cast, backdrop, geometry, activity and save checks remain.

Actual headless Chromium tests cover ripple casting, one consumed portion, mouse hold/release, touch bait selection, owned-rod equip/back navigation, busy-kit guard, all four island notes, unknown-species journal requirements and360/390/430-wide layouts without horizontal overflow/clipped cards/runtime errors. Kit, native silhouettes, journal, header and warning/reeling browser renders were inspected. They use the0.65 shared UI. Internal browser screenshots are excluded from the saved checkpoint.

## Still needs physical-phone review

Thumb comfort, understanding the twitch/strain signals, relative species difficulty, optional-activity value, bait consumption clarity, kit scrolling, rod usefulness, PWA input/audio and subjective UI/art approval. Gather feedback before expanding this balance further. No final-release readiness, stock migration, push or deployment is implied.
