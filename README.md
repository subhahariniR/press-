# Dharapuram Press Club website

## Run locally
1. Install Node.js 18+ from nodejs.org
2. In this folder run:
   npm install
   npm run dev
3. Open the address Vite prints (usually http://localhost:5173)

Production build: `npm run build` (output in `dist/`), preview with `npm run preview`.

## Where to put your files
- Intro video: `public/media/intro.mp4` (+ optional `intro.webm`), poster: `public/media/poster.jpg`
- Official logos: `public/logos/` named `sun-tv.png`, `puthiya-thalaimurai.png`, `galatta-media.png`, `vasanth-tv.png`
- Reporter photos (only with permission): `public/reporters/`, then set `photo` in `src/config.js`
- Gallery photos: `public/gallery/`, then list them in `GALLERY` in `src/config.js`
- All text placeholders (about, news, contact, socials): `src/config.js`
