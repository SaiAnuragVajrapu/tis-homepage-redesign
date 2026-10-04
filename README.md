# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** [Insert Vercel Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (CSS variables for theming)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Scroll Progress Bar:** A spring-smoothed gold bar fixed to the top, driven by `useScroll` and `useSpring`.
2. **Animated Dark/Light Theme Switcher:** Accessible switch (`role="switch"`) with a sliding sun/moon thumb. The choice is saved in `localStorage` and falls back to the system preference.
3. **Scroll-Triggered Reveals:** A reusable `Reveal` component using `whileInView` with `once: true`, staggered by delay, with 0.5s durations.
4. **Extras:** Count-up statistics (`useCountUp` hook) and `prefers-reduced-motion` support through `MotionConfig`.

## 📦 Getting Started Locally

1. **Clone the repository:**
```bash
   git clone https://github.com/YOUR-USERNAME/tis-homepage-redesign.git
   cd tis-homepage-redesign
```
2. **Install dependencies:**
```bash
   npm install
```
3. **Run the development server:**
```bash
   npm run dev
```
4. Open http://localhost:5173 in your browser.
5. **Production build:**
```bash
   npm run build
```

## Component Architecture Overview
- `src/components/ui/` - Atomic UI components (Button, SectionHeading)
- `src/components/layout/` - Navbar (with mobile menu) and Footer
- `src/components/sections/` - Hero, About, Stats, Sports, Rankings, Personalities, Reviews, Contact
- `src/components/animation/` - ScrollProgress, ThemeToggle, Reveal
- `src/hooks/` - `useTheme`, `useCountUp`
- `src/data/` - All static content in `siteData.js`

## Brand Identity Retained
- Copy, statistics, rankings, sports list, parent reviews and contact details from tis.edu.in
- Navy and gold palette inspired by the school's yellow accent