# Fix duplicated home button on each tabContent
We apply different styling per tab, and the home button needs to be inside of that, causing this needless duplication

# nattaj-star to fill out projects content and uncomment tab trigger

# Maybe: delete unused images (~69 MB)
40 files in `assets/images/` aren't shown anywhere on the site: test files, "copy" duplicates, a .heic,
and older works. Deleting them makes the repo lighter to download; they'd still be recoverable from git history.
Check with nattaj-star first, since some may be works she plans to show again.
Some are only used by `src/tabs/print.html`, which the menu no longer links to.

<details>
<summary>The 40 files</summary>

- assets/images/01_natalie copy.jpg (5.8 MB)
- assets/images/02_natalie copy.jpg
- assets/images/04_natalie copy.jpg
- assets/images/10_natalie copy.jpg
- assets/images/IMG_9168.JPG
- assets/images/drawing/8_NatalieJacobs_The Human Compact I copy.jpg
- assets/images/drawing/NJ STUDIO-12 (1) copy 2.jpg
- assets/images/drawing/Photo Sep 24 2023, 9 25 37 PM (1).jpg
- assets/images/drawing/test2.jpg
- assets/images/drawing/test3.jpg
- assets/images/painting/Alvaro.jpg
- assets/images/painting/Andy Gears.jpg
- assets/images/painting/In Bed.jpg
- assets/images/painting/Nostalgia For Living Forms.jpg
- assets/images/painting/The Arsonist.jpg
- assets/images/painting/Trouble in Paradise.jpg
- assets/images/painting/a mother intuition.jpg
- assets/images/painting/bathroom kiss.jpg
- assets/images/painting/fresco.jpg
- assets/images/painting/i have risen.jpg (5.3 MB)
- assets/images/painting/muse stuff.jpg
- assets/images/painting/poppers soliloquoy.jpg
- assets/images/painting/roller grrl.JPG
- assets/images/painting/test.jpg
- assets/images/painting/visitation.jpg
- assets/images/painting/we could see everything less saturdated.jpg
- assets/images/print/IMG_9853.heic
- assets/images/print/NJ STUDIO-10 copy.jpg
- assets/images/print/NJ STUDIO-11 copy.jpg
- assets/images/print/NJ STUDIO-12 (1) copy 2.jpg
- assets/images/print/NJ STUDIO-13 copy 2.jpg
- assets/images/print/NJ STUDIO-6 copy 2.jpg
- assets/images/print/NJ STUDIO-8 copy 2.jpg
- assets/images/print/NJ STUDIO-9 copy.jpg
- assets/images/print/at times there was light, then darkness again.jpg
- assets/images/print/at times there was sun, then shadow again.jpg (broken, 2 bytes)
- assets/images/print/in the region of spirits copy.jpg
- assets/images/print/in your eyes i live a little longer copy.jpg
- assets/images/print/placeholder.txt
- assets/images/print/they lead nowhere copy.jpg

</details>
