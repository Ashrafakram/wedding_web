from PIL import Image

src = r"C:\Users\DELL\.gemini\antigravity-ide\brain\dbb5639c-f649-4c70-8792-30422ae88ff0\avvs_image_clicked_1793469233843.png"
img = Image.open(src)

# Row 2 Left: AVVS Hall building with white chairs and "AVVS HALL" sign
# Let's find the bounding box
# The thumbnail row 2 left is roughly around x: 26 to 304, y: 563 to 726
crop_row2 = img.crop((26, 564, 304, 726))
crop_row2 = crop_row2.resize((1200, 700), Image.Resampling.LANCZOS)
crop_row2.save("public/assets/avvs_mahal_exterior.jpg", quality=95)
print("Saved public/assets/avvs_mahal_exterior.jpg")

# Also save Row 1 Left (multi-story building with marquee tent)
crop_row1 = img.crop((26, 336, 304, 500))
crop_row1 = crop_row1.resize((1200, 700), Image.Resampling.LANCZOS)
crop_row1.save("public/assets/avvs_hall_side.jpg", quality=95)
print("Saved public/assets/avvs_hall_side.jpg")

# Also save Row 2 Right (interior hall with stage)
crop_stage = img.crop((315, 564, 595, 726))
crop_stage = crop_stage.resize((1200, 700), Image.Resampling.LANCZOS)
crop_stage.save("public/assets/avvs_hall_interior.jpg", quality=95)
print("Saved public/assets/avvs_hall_interior.jpg")
