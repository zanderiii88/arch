Historical rejected experiment. Superseded by CHARACTER-ART-v22.md for the player.

# Character art trial 0.21

The player and Jamie artwork is authored in the existing canvas renderer as layered pixel art, not baked into fixed illustration sheets. The code-native format supports saved skin/hair/clothing/accessory choices and shares the same sprite between world, creator, studio and portrait crops.

The rig has separate front/back art and a single right profile, mirrored for left. Hair and clothing layers use the existing appearance keys. Walking is quantised to eight phases; breathing, blink, wave, smile, chopping grip and stretch have bounded states. Generated sprite canvases are cached with a 256-entry cap. Existing other NPCs use their previous renderer during this trial.

The accompanying preview PNG is rendered directly from the actual game rig and is not a promise of different in-game artwork. No existing PNG has been re-encoded or modified. No image-generation asset was needed for this code-native renderer update.

Purpose: review the new proportions, faces, motion and customisation at actual phone scale before extending the style across the cast.
