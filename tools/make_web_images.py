"""Make the lighter web copies of artwork images.

Pages show images from assets/images/web/<folder>/<file>; the full-size
original lives at assets/images/<folder>/<file> and is what visitors get
when they click an artwork or use its "full size" link.

Run from the repo root after adding new originals:
    pip install pillow
    python3 tools/make_web_images.py

It creates any web copy a page refers to that doesn't exist yet.
Originals are never changed.
"""
import os, re, shutil
from PIL import Image, ImageOps

MAX_EDGE = 2400  # pixels on the long edge
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TABS = os.path.join(ROOT, "src", "tabs")

made = 0
for name in os.listdir(TABS):
    html = open(os.path.join(TABS, name), encoding="utf-8").read()
    for web in re.findall(r'src="(assets/images/web/[^"]+)"', html):
        dst = os.path.join(ROOT, web)
        src = os.path.join(ROOT, web.replace("assets/images/web/", "assets/images/", 1))
        if os.path.exists(dst):
            continue
        if not os.path.exists(src):
            print("No original found for", web)
            continue
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        im = Image.open(src)
        icc = im.info.get("icc_profile")
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "L"):
            im = im.convert("RGB")
        im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        options = dict(quality=82, optimize=True, progressive=True)
        if icc:
            options["icc_profile"] = icc
        im.save(dst, "JPEG", **options)
        if os.path.getsize(dst) > os.path.getsize(src):
            shutil.copyfile(src, dst)
        made += 1
        print("made", web)
print(made, "web copies created")
