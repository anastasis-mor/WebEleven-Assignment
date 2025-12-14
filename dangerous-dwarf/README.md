# Portfolio Website – Anastasis

Personal portfolio website built as part of a web development assignment, using modern frontend technologies.  
The project focuses on clean UI/UX, responsiveness, multilingual support, SEO best practices, and scroll-based animations.


## 🛠️ Technologies Used

- **Astro** – Static site generation & layout structure  
- **TailwindCSS** – Utility-first styling & responsive design  
- **Svelte** – Interactive components (Projects, Contact Form, About Cards)  
- **Custom i18n** – English / Greek language support  
- **svelte-inview** – Scroll-based animations using Intersection Observer  
- **Astro API Routes** – Backend-like API for About section data  

---

## 📁 Project Structure

src/
├── components/
│ ├── astro/
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ ├── HeroSection.astro
│ │ └── AboutSection.astro
│ └── svelte/
│ ├── AboutCards.svelte
│ ├── ProjectsGrid.svelte
│ ├── ProjectCard.svelte
│ └── ContactForm.svelte
│
├── layouts/
│ └── BaseLayout.astro
│
├── pages/
│ ├── en/
│ │ └── index.astro
│ ├── el/
│ │ └── index.astro
│ └── index.astro
│
├── api/
│ └── about.ts
│
├── helpers/
│ └── api.ts
│
├── locales/
│ ├── en.json
│ └── el.json
│
├── styles/
│ └── global.css


---

## 🌍 Multilingual Support (i18n)

- English (`/en`)
- Greek (`/el`)

Language content is stored in JSON files and passed through components.
The About section content is served dynamically via an Astro API route.

---

## 🧩 Sections Overview

### 1️⃣ Hero Section
- Title & tagline
- Call-to-action buttons
- Tech stack badge
- Smooth scroll navigation

### 2️⃣ About Section
- Three animated cards:
  - Who I Am
  - Career Goals (5 Years)
  - Interview Experience
- Data fetched from custom Astro API

### 3️⃣ Projects Section
- Interactive project cards
- Hover effects
- Scroll-based animations
- Lazy-loaded images

### 4️⃣ Contact Section
- UI-only contact form
- Animated on scroll
- Responsive layout

### Footer
- Copyright
- Social links with hover effects

---

## 🎨 UI / UX Features

- Fully responsive (mobile, tablet, desktop)
- Fixed navigation bar with mobile menu
- Smooth scrolling
- Subtle hover & transition effects
- Consistent dark theme with accent color

---

## 🎞️ Animations

Scroll-based animations implemented using **svelte-inview**:
- Components animate when entering the viewport
- Animations trigger only once for better UX
- Smooth transitions without layout shifts

---

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta title & description
- Open Graph meta tags
- Language attributes
- Lazy-loaded images

---

## 📡 Extra Features

- **Astro API Route** serving About section data
- Smooth scroll navigation
- Client-side hydration only where needed

---

## ▶️ Getting Started

### Instructions
```bash
Step 1 to install all the dependencies:

npm install

Step 2 run development server :

npm run dev

Step 3 :

Open the browser into localhost:4321

📌 Notes
Only the Home page is fully implemented, as required.

/ About / Projects / Contact pages are included only as navigation links.

The contact form is UI-only and does not submit data.

👤 Author
Anastasis
Full Stack Web Developer

GitHub: https://github.com/anastasis-mor

LinkedIn: https://www.linkedin.com/in/anastasis-moraitis-b60216327/

Email: anastasismora@gmail.com