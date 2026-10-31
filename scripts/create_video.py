import os
import sys
import numpy as np
from PIL import Image
import imageio.v2 as imageio

# Paths
base_dir = r"C:\Users\DELL\wedding_web"
assets_dir = os.path.join(base_dir, "public", "assets")
output_video_path = os.path.join(base_dir, "public", "videos", "wedding-opening.mp4")

scenes = [
    os.path.join(assets_dir, "scene1_walk.jpg"),
    os.path.join(assets_dir, "scene2_handover.jpg"),
    os.path.join(assets_dir, "scene3_blessing.jpg"),
    os.path.join(assets_dir, "scene4_card_open.jpg"),
]

# Video settings
WIDTH = 1280
HEIGHT = 720
FPS = 30
SCENE_DURATION = 3.6  # seconds per scene
TRANSITION_DURATION = 0.8  # seconds crossfade

scene_frames_count = int(SCENE_DURATION * FPS)
trans_frames_count = int(TRANSITION_DURATION * FPS)

def load_and_resize(path):
    img = Image.open(path).convert("RGB")
    img_ratio = img.width / img.height
    target_ratio = WIDTH / HEIGHT
    
    if img_ratio > target_ratio:
        new_height = HEIGHT
        new_width = int(HEIGHT * img_ratio)
    else:
        new_width = WIDTH
        new_height = int(WIDTH / img_ratio)
        
    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Center crop to exact 1280x720
    left = (new_width - WIDTH) // 2
    top = (new_height - HEIGHT) // 2
    img = img.crop((left, top, left + WIDTH, top + HEIGHT))
    return img

print("Loading scene images...")
loaded_images = [load_and_resize(p) for p in scenes]

def get_scene_frame(img, progress, scene_idx):
    # Smooth camera motion (1.0 to 1.08 zoom)
    zoom = 1.0 + 0.08 * progress
    w, h = img.size
    crop_w = int(w / zoom)
    crop_h = int(h / zoom)
    
    if scene_idx == 0:
        # Walking forward feeling (pan right-down)
        dx = int((w - crop_w) * (0.2 + 0.5 * progress))
        dy = int((h - crop_h) * (0.4 + 0.1 * np.sin(progress * np.pi * 6))) # subtle walking step bob
    elif scene_idx == 1:
        # Respectful bow and handover (pan towards plate)
        dx = int((w - crop_w) * 0.5)
        dy = int((h - crop_h) * (0.35 + 0.3 * progress))
    elif scene_idx == 2:
        # Blessing ceremony (zoom in on smiling elders and akshata)
        dx = int((w - crop_w) * 0.5)
        dy = int((h - crop_h) * 0.5)
    else:
        # Invitation card opening (push directly towards open invitation)
        dx = int((w - crop_w) * 0.5)
        dy = int((h - crop_h) * (0.35 + 0.35 * progress))
        
    cropped = img.crop((dx, dy, dx + crop_w, dy + crop_h))
    resized = cropped.resize((WIDTH, HEIGHT), Image.Resampling.BILINEAR)
    return np.array(resized)

all_frames = []

print("Generating frames with camera motion...")
for idx in range(len(loaded_images)):
    img_curr = loaded_images[idx]
    
    for f in range(scene_frames_count):
        prog = f / scene_frames_count
        frame_curr = get_scene_frame(img_curr, prog, idx)
        
        # Crossfade transition to next scene
        if f >= (scene_frames_count - trans_frames_count) and idx < len(loaded_images) - 1:
            trans_prog = (f - (scene_frames_count - trans_frames_count)) / trans_frames_count
            t = 0.5 * (1 - np.cos(trans_prog * np.pi))
            img_next = loaded_images[idx + 1]
            frame_next = get_scene_frame(img_next, 0.0, idx + 1)
            
            blended = (frame_curr * (1.0 - t) + frame_next * t).astype(np.uint8)
            all_frames.append(blended)
        else:
            all_frames.append(frame_curr)

print(f"Total frames generated: {len(all_frames)}")
os.makedirs(os.path.dirname(output_video_path), exist_ok=True)

print(f"Encoding H.264 MP4 to {output_video_path}...")
writer = imageio.get_writer(
    output_video_path,
    fps=FPS,
    codec="libx264",
    format="FFMPEG",
    pixelformat="yuv420p",
    macro_block_size=None
)

for frame in all_frames:
    writer.append_data(frame)

writer.close()
file_size = os.path.getsize(output_video_path)
print(f"SUCCESS: MP4 video generated at {output_video_path}")
print(f"File size: {file_size / (1024*1024):.2f} MB")
