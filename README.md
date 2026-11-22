Live at https://nataliejacobs.online / https://nattaj-star.github.io/nataliejacobs

# Running locally:
1. Install vscode live server extension
    https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
2. Right click index.html and open with live server

# Sections
Each section has its own link: `/#painting`, `/#works-on-paper`, `/#info`, `/#cv`.
The pages themselves live in `src/tabs/`.

# Adding a new artwork
1. Upload the full-size original to the matching folder, e.g. `assets/images/painting/new work.jpg`.
2. Upload a smaller copy (about 2400px on the long edge) with the same name to
   `assets/images/web/painting/new work.jpg`. If you have Python, `python3 tools/make_web_images.py`
   makes these for you.
3. Copy an existing block in the page and update it:
   ```html
   <div class="content-container">
       <img class="content-tall" src="assets/images/web/painting/new work.jpg" alt="Title" loading="lazy" decoding="async">
       <p class="names"><i>Title</i></p>
       <p class="names">2026. Oil Paint on Wood Panel. 48 x 32 inches.</p>
   </div>
   ```
   Use `content-tall` for portrait works and `content-wide` for landscape ones.

The site shows the smaller copy, and clicking the artwork (or its "full size ↓" link) opens the original.
If you skip step 2, the original is shown instead, which still works, just more slowly.
