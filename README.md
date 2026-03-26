# 🖥️ My 3D Resume

An interactive 3D portfolio experience built with Three.js — explore a fully rendered room and discover my work, skills, and contact info by clicking on objects.

> **Live Demo:** [_My 3D Resume_](https://my-3d-resume-one.vercel.app/)

---

## Preview

![3D Resume Preview](preview-day.png)
![3D Resume Preview](preview-night.png)

---

## What It Is

Instead of a flat page, this portfolio renders a 3D room you can orbit, zoom, and interact with. Each object in the room is a portal to a section of my resume:

| Object | Section |
|---|---|
| 💻 Laptop | Projects |
| 📚 Bookshelf | Skills |
| 🖼️ Wall Frame | About Me |
| 🧑‍💻 Character | Contact |

The room lighting and wall painting also change based on the time of day — visit at night for a different look.

---

## Controls

| Action | Result |
|---|---|
| Click & drag | Orbit the camera |
| Scroll | Zoom in / out |
| Click an object | Fly to it and open detail panel |
| `ESC` | Close panel and reset view |
| Side dots | Jump to a specific object |

---

## Tech Stack

- **[Three.js](https://threejs.org/)** — 3D scene, geometry, materials, lighting, raycasting
- **[GSAP](https://gsap.com/)** — Smooth camera fly-to animations
- **Vanilla JS (ES Modules)** — No build step, no framework
- **HTML + CSS** — Glass-morphism UI panels, responsive layout

---

## Project Structure

```
my-3d-resume/
├── index.html    # Scene setup, 3D geometry, interaction logic
├── style.css     # UI styling — panels, animations, responsive layout
└── config.js     # Your portfolio data (name, projects, skills, contact)
```

---

## Customization

All personal content lives in **`config.js`**. Edit it to make this your own:

```js
window.portfolioData = {
  about: {
    name: "Your Name",
    role: "Your Title",
    bio:  "Your bio...",
    // ...
  },
  projects: [ /* your projects */ ],
  skills:   { frontend: [], backend: [], tools: [] },
  contact:  { email: "", github: "", linkedin: "" },
};
```

No rebuild required — just save and refresh.

---

## Running Locally

Since the project uses ES modules, you need a local server (browsers block `file://` imports):

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Use the Live Server extension
```

Then open `http://localhost:8080`.

---

## Deploying

The project is three static files — deploy anywhere:

- **GitHub Pages** — push to a `gh-pages` branch or enable Pages on `main`
- **Vercel / Netlify** — drag and drop the folder
- **Any static host** — upload `index.html`, `style.css`, `config.js`

---

## Performance Notes

- Shadows are disabled on mobile to maintain smooth frame rates
- Pixel ratio is capped on high-DPI displays
- All 3D geometry is generated in JavaScript — no external model files needed

---

## License

MIT — feel free to fork, customize, and use as your own portfolio.
