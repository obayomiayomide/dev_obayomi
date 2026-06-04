# DevObayomi — Portfolio Website

A modern, animated portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🔧 Customization Checklist

### 1. Personal Info — `src/data/index.ts`

Update all fields marked with `// 🔧 UPDATE THIS`:

- [ ] Your email address
- [ ] Your phone number
- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] Twitter profile URL
- [ ] Fiverr profile URL

### 2. Projects — `src/data/index.ts`

For each project, update:

- [ ] `title` — Your actual project name
- [ ] `description` — What the project does
- [ ] `liveUrl` — Your deployed project link
- [ ] `githubUrl` — Your GitHub repository link
- [ ] `tags` — Technologies used
- [ ] `category` — One of: Web App, Landing Page, Portfolio, Business

### 3. Project Screenshots

- [ ] Add screenshots to `/public/projects/` folder:
  - `project1.png`, `project2.png`, etc.
- Then in `Projects.tsx`, uncomment the `<Image>` tag and remove the placeholder div

### 4. Profile Photo

- [ ] Add your photo as `/public/profile.jpg`
- In `About.tsx`, uncomment the `<Image>` component and remove the placeholder div

### 5. Experience — `src/data/index.ts`

- [ ] Update your actual work experience
- [ ] Update education/certifications in `Experience.tsx`

### 6. Testimonials — `src/data/index.ts`

- [ ] Add real client testimonials as you receive them

### 7. Contact Form

To make the contact form actually send emails, integrate **EmailJS**:

1. Create account at https://emailjs.com
2. Create a service and template
3. In `Contact.tsx`, replace the simulated timeout with:

```tsx
import emailjs from "@emailjs/browser";
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form,
  "YOUR_PUBLIC_KEY",
);
```

### 8. CV/Resume

- [ ] Add your resume as `/public/resume.pdf`
- The "Download CV" button in About will link to it automatically

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Home page (assembles all sections)
│   └── globals.css      # Global styles & CSS variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation bar
│   │   └── Footer.tsx   # Footer
│   ├── sections/
│   │   ├── Hero.tsx        # Landing hero
│   │   ├── About.tsx       # About me + stats
│   │   ├── Services.tsx    # Services offered
│   │   ├── Skills.tsx      # Skills & progress bars
│   │   ├── Projects.tsx    # Portfolio projects
│   │   ├── Experience.tsx  # Work timeline
│   │   ├── Testimonials.tsx # Client reviews
│   │   └── Contact.tsx     # Contact form
│   └── ui/
│       ├── CustomCursor.tsx  # Custom cursor effect
│       ├── FadeIn.tsx        # Scroll animation wrapper
│       └── SectionHeader.tsx # Reusable section title
├── data/
│   └── index.ts         # ← ALL YOUR CONTENT LIVES HERE
└── lib/
    └── utils.ts         # Utility functions
```

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at https://vercel.com for automatic deployments.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify, or connect GitHub
```

## 🎨 Design System

Colors (edit in `globals.css`):

- `--accent`: `#38bdf8` (Sky Blue — primary)
- `--accent-2`: `#818cf8` (Indigo — secondary)
- `--accent-3`: `#34d399` (Emerald — tertiary)
- `--bg`: `#080c14` (Dark background)

Fonts:

- Display: **Syne** (headings)
- Body: **DM Sans** (body text)
- Mono: **JetBrains Mono** (code/labels)

## 📦 Dependencies

| Package                       | Purpose             |
| ----------------------------- | ------------------- |
| `next`                        | React framework     |
| `framer-motion`               | Animations          |
| `tailwindcss`                 | Styling             |
| `lucide-react`                | Icons               |
| `react-type-animation`        | Typewriter effect   |
| `react-intersection-observer` | Scroll detection    |
| `@emailjs/browser`            | Contact form emails |
| `clsx` + `tailwind-merge`     | Class utilities     |
