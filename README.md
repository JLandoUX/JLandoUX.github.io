# Joshua Landis — Portfolio

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Quick start

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Updating your content

**All site content lives in one file:**

```
src/data/content.ts
```

Edit it to update:
- Your name, role, tagline, bio
- Availability status
- Stats (years, projects, etc.)
- Skills and their categories (ux / tools / soft)
- Projects (title, description, tags, URL)
- Social links

No other files need to be touched for content changes.

## Project structure

```
src/
├── data/
│   └── content.ts       ← Edit this to update content
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Base.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Deploying to GitHub Pages

The repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys the site automatically on every push to `main`.

### One-time setup

1. **Push this repo to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repo settings**
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under *Build and deployment*, set Source to **GitHub Actions**
   - Click **Save**

3. **Set your site URL in `astro.config.mjs`**
   - If deploying to `https://YOUR_USERNAME.github.io/YOUR_REPO/`, set:
     ```js
     export default defineConfig({
       site: 'https://YOUR_USERNAME.github.io',
       base: '/YOUR_REPO',
       integrations: [tailwind()],
     });
     ```
   - If using a custom domain (e.g. `https://joshualandis.com`), set:
     ```js
     export default defineConfig({
       site: 'https://joshualandis.com',
       integrations: [tailwind()],
     });
     ```

4. **Push any change to `main`** — the Actions workflow runs automatically, and your site will be live within a minute or two at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

### Custom domain (optional)

1. Add a file called `CNAME` inside the `public/` folder containing just your domain:
   ```
   joshualandis.com
   ```
2. Point your domain's DNS to GitHub Pages — add these A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. In GitHub → Settings → Pages, enter your custom domain and enable **Enforce HTTPS**.

## Customising the design

Design tokens (colors, fonts) are in `tailwind.config.mjs`. The core palette:

| Token | Value | Used for |
|---|---|---|
| `accent-purple` | `#7c6fff` | Primary glow, headings |
| `accent-teal` | `#4fd1c5` | Secondary accent, hover |
| `accent-pink` | `#f0a3ff` | Tertiary accent |
| `bg-primary` | `#0a0a0f` | Page background |
| `bg-surface` | `#111118` | Card backgrounds |
