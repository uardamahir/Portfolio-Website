# Arda Mahir Ünlü — Portfolio

React + Vite portfolio website with dark theme, scroll animations, GitHub API integration, and TR/EN language toggle.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## Project Structure

```
src/
├── data/
│   ├── content.js        ← ALL your personal info lives here (edit this!)
│   └── translations.js   ← UI strings (EN/TR)
├── hooks/
│   ├── useLang.jsx       ← Language context + toggle
│   └── useReveal.js      ← Scroll reveal IntersectionObserver
├── components/
│   ├── Loader.jsx / .module.css
│   ├── Cursor.jsx / .module.css
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Education.jsx
│   ├── Experience.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── App.jsx
├── main.jsx
└── index.css             ← Global design tokens + shared styles
```

---

## Customization

### 1. Your personal info → `src/data/content.js`
- Name, role, tagline
- LinkedIn, GitHub, email
- Education entries
- Experience entries
- Skills categories
- Fallback projects (shown if GitHub API fails)

### 2. EmailJS (contact form)
1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Fill in `personal.emailjs` in `content.js`
4. In `Contact.jsx`, uncomment the `emailjs.send(...)` block and remove the `setTimeout`
5. Run `npm install emailjs-com`

### 3. GitHub username
Update `personal.githubUser` in `content.js` — the Projects section fetches your repos automatically.

### 4. Colors
All design tokens are CSS variables in `src/index.css`:
```css
--orange:      #f97316;   /* accent color */
--orange-dim:  #c2571a;   /* border / hover variant */
--surface:     #0a0a0a;   /* section backgrounds */
```

### 5. Fonts
Currently using `Syne` (display) + `Space Mono` (monospace).
Swap in `index.html` Google Fonts link and update `--mono` / `--display` in `index.css`.

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag & drop the /dist folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# add to package.json scripts: "deploy": "gh-pages -d dist"
# add to vite.config.js: base: '/your-repo-name/'
npm run build && npm run deploy
```
