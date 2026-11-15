# 0.109 reading interaction and seated-art boundary

No raster artwork or shared character/furniture renderer changes. The sofa remains the independently placed/facing-aware shared asset. Hannah walks to an accessible point beside its front using the existing room route; the room sprite retains full anatomy and foreground order.

The book is a paper UI with an existing native 64x64 appearance-aware portrait, three short pages, page buttons and a close action. Native renders of the room approach and three shared hairstyle portraits were inspected. Existing outfit/hair colours are used unchanged; portrait pixel comparisons cover nine style/outfit combinations. There is no new seated body or arm animation.

Dedicated complete sitting/reading poses still need to be authored and reviewed in front, rear and side sofa facings. Preserve skull/face/body proportions, attached hands and bent legs, full outfit silhouettes, floor/seat registration and occlusion. Do not stretch/slice a standing body or mask its legs with furniture as a substitute. The sunset's rear-view silhouette is not a suitable replacement for the full appearance-aware indoor character.

Actual browser book layout and phone testing are pending: another project held the shared preview. CSS has scoped viewport limits and an internally scrolling paper page; no visual-layout pass is claimed from code inspection. Check 360x560 and 390x700, long names/large text, page changes, close and app-return. The complete physical-phone Story-test and prior artwork feedback remain outstanding.
