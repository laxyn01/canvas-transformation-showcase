# Canvas Transformation Showcase

https://github.com/laxyn01/pixel-perfect-canvas-0505.git  , 

This project is connected to my GitHub repo (pixel-perfect-canvas-0505). It is

an existing, nearly complete website built with TanStack Start. Read the

existing code first. Do NOT rebuild it, do NOT redesign it and do NOT change

the stack. Keep the business name, city, phone, design and animations exactly

as they are.

Do only these 3 things:

1. Add a "Before & After" slider section to the Home page, placed after the

   "Recent work" section and before "Why us". Create it as a reusable

   component in src/components/site/before-after.tsx:

   - Two stacked images; the "before" image is revealed with a clip-path

     controlled by a draggable position (default 50%).

   - Vertical divider line in the primary (orange) color and a round handle

     with a left-right chevron icon (lucide ChevronsLeftRight).

   - A dark "BEFORE" badge top-left, a primary-color "AFTER" badge top-right,

     a small "Sample image" badge bottom-right, and the text

     "← Drag to compare →" bottom-center.

   - Works with mouse, touch and keyboard (use an invisible full-size range

     input over the images, aria-label "Drag to compare before and after").

   - Rounded corners, 16:10 aspect ratio, lazy-loaded images.

   - Data comes from a BEFORE_AFTER array in src/data/content.ts with

     { title, before, after }. Use 2 pairs. Until I add real before/after

     photos, use existing images from src/assets as placeholders, and tell me

     the exact filenames to add later.

   - Section heading: "See the difference", small text: "Sample images showing

     the kind of transformation we deliver."

2. Fix any compile or runtime errors anywhere in the project (broken imports,

   missing exports, dead links, missing images).

3. Reduce the hero headline size so all lines fit above the fold on desktop

   and at 375px mobile, and make sure the "Demo Preview" ribbon never

   overlaps the headline or buttons.

Change nothing else. At the end, list what you changed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c153ae11-f24f-4f25-9169-0d96d3828057).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
