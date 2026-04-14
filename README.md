# My Portfolio

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

**Owner:** umduvauyinkinga

## Quick Start

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
└── lib/            # Utilities
```

## Scripts

- `npm run dev` - Start dev server (localhost:8080)
- `npm run build` - Build for production
- `npm run lint` - Lint code
- `npm run test` - Run tests
- `npm run preview` - Preview production build

## Technologies

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Router (routing)

## Backend (Contact Form)

Added EmailJS serverless backend for contact form submissions.

**Setup EmailJS (free):**
1. Sign up at emailjs.com
2. Create Email service (e.g. Gmail)
3. Create Email template
4. Get Service ID, Template ID, Public Key
5. Replace placeholders in `ContactForm.tsx`

Form sends emails to your address without backend server.

## Deployment

**GitHub Pages:**
```
npm run build
git add dist
git commit -m "Deploy to gh-pages"
git subtree push --prefix dist origin gh-pages
```

**Vercel/Netlify:**
1. Connect repo
2. Build: `npm run build`
3. Output: `dist`
4. (Optional) EmailJS env vars

**Preview locally:**
```
npm run build
npm run preview
```

**Notes:**
- Uses `base: "./"` for subpath deploys (gh-pages).
- BrowserRouter for SPA routing.
- All client-side, no server needed.
## Deployment

- **Vercel/Netlify:** Auto-deploys static build + EmailJS works client-side.
- `npm run build` → upload `dist/`

Environment vars optional (EmailJS uses public keys).

## License

© umduvauyinkinga. All rights reserved.


