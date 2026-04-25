# Wedding Biodata Maker

A free, original wedding biodata generator. All features — templates, photo, multi-language, PDF/PNG download — are free. No signup, no watermark, fully client-side.

## Features

- 5 original template designs (Classic Gold, Royal Maroon, Modern Minimal, Floral Pink, Peacock Teal)
- Multi-language UI: English, हिन्दी, मराठी, ગુજરાતી
- Photo upload with live preview
- Complete biodata fields: personal, astrological, education, career, family, contact
- Auto-save to browser (localStorage)
- Download as **PDF** or **PNG**
- Works fully offline after first load
- Mobile-friendly, printable

## Tech Stack

- **Vite** + **React 18** (fast dev + tiny build)
- **Tailwind CSS** (utility-first styling)
- **html2canvas** + **jsPDF** (client-side export — no backend)

Zero server dependency. Deploys to any static host.

## Getting Started

```bash
cd wedding-biodata-maker
npm install
npm run dev
```

Open http://localhost:5173

## Build & Deploy

```bash
npm run build
```

Produces `dist/` — a static bundle deployable to:

- **Vercel**: `vercel --prod` (zero config)
- **Netlify**: drag `dist/` into Netlify dashboard
- **GitHub Pages**: push `dist/` to `gh-pages` branch
- **Cloudflare Pages** / any static host

## Project Structure

```
src/
  App.jsx               # Main shell, template switcher, PDF export
  components/
    BiodataForm.jsx     # All input fields
    TemplatePicker.jsx  # Template selection cards
  templates/
    ClassicGold.jsx
    RoyalMaroon.jsx
    ModernMinimal.jsx
    FloralPink.jsx
    PeacockTeal.jsx
    Row.jsx             # Shared label/value row
  data/translations.js  # i18n strings + default biodata shape
  utils/pdf.js          # html2canvas + jsPDF export
  utils/storage.js      # localStorage persistence
```

## License

MIT — original work. Do not copy third-party copyrighted designs or assets into this project.
