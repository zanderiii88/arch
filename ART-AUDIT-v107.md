# Item-rendering audit - 0.107

| Item group | Shared source | Updated path |
| --- | --- | --- |
| Coins, doubloons, pebbles and common coastal finds | coastal-props-v62.png | coastIcon62 through inventory/find/prop/project dispatch |
| Eighteen kitchen foods, ingredients and prepared meals | kitchen-props-v83.png | kitchenIcon83 through foodIcon/ingredientArt38 |
| Legacy direct food-shape callers | Same kitchen atlas for known IDs | foodShape45 now resolves current sprite first |
| Home cooking shortcut | Current fried-egg kitchen sprite | Refresh existing button contents after renderer registration |
| Scene finds and kitchen objects | Original atlases and drawCoast62/drawKitchen83 | Already use canvas imageSmoothingEnabled=false; unchanged |

The SVG root and raster image now both explicitly request pixelated sampling. shape-rendering:crispEdges alone concerns vector contours and is not the shared raster-rendering rule. Keep original native crop rectangles and unique clip IDs. New sprites added through these icon functions inherit this rendering choice.

No source image was edited. No image-generation or new palette/silhouette work is claimed. Original transparency, item identity, biome colours, silhouettes and disabled opacity remain. Do not brighten unknown items or make unavailable recipe buttons look enabled. Do not reintroduce the removed averaging grid or repeatedly resize the source atlas.

Reviewed: native 64px coin/doubloon/pebble/bread/fruit/egg/carrot/potato/fried-egg/fish-meal/soup/cheese source crops. Automatic checks cover shared dispatch, crop identity, rendering flags, unique IDs, fallbacks and unchanged game data. Browser comparison and actual-phone readability/contrast remain pending because another build occupied the preview. If faded coins/food persist on the phone, inspect the actual screen/state before a separate approved palette/silhouette redesign. Older bait/line and unrelated fallback icons are outside this pass. Saw orientation and sofa reading remain queued separately.
