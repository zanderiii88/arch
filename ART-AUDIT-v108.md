# Saw-control audit - 0.108

The standalone UI saw is the original complete 200x240 source image, drawn uniformly to 180x216 with smoothing disabled and one 180-degree transform. Original pixels, palette, perspective and handle/blade connection remain. This is a standalone tool orientation, not a flat furniture rotation or sliced character pose. Hannah's complete attached-tool sprites are unchanged.

The native canvas is 180x320. The image top is 44+(position-0.5)*72, so its full bounds remain between y=8 and y=296. Progress marks begin at y=305. The handle contact centre is image-top+153; pointer x=0..115 and y within 50 of the grip give a broad target matching the new image. Existing stroke detection handles cutting, not image displacement.

Native upper/centre/lower renders were inspected for upward blade direction, complete outline, progress and direction guides. Automated tests cover movement bounds, actual pointer/keyboard cutting, wrong/extra pointers, stale controls and preserved log/board/save accounting. Source raster, player/tool animation, saw bench, furniture and room art remain unchanged. Browser/physical-phone layout and touch comfort are pending because the preview route did not serve the QA page.
