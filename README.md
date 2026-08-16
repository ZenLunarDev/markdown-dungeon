[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<div align="center">
    <h1>⚔️ Markdown Dungeon ⚔️</h1>
    <i>A dungeon is a place or prison where people are held. Usually, they can be found underground</i>
</div>
<br>

A dungeon crawler where every **room** is a `Markdown` file. Readers pick an option
and jump to the next room via relative `.md` links — the dungeon is written
collaboratively, one room at a time.

This rewrite drops Gatsby in favour of a small, fast stack:

- **yarn** — package manager
- **React** (vanilla JSX, no TypeScript) — UI
- **Vite** — dev server & bundler
- **CSS** — styling (no UI framework)
- **marked** — Markdown → HTML at runtime

## 🚀 Getting started

You need [yarn](https://yarnpkg.com/).

```bash
# install dependencies
yarn

# start the dev server (http://localhost:8000)
yarn dev

# production build
yarn build

# preview the production build
yarn preview
```

## 🗂️ Project structure

```
markdown-dungeon/
├── content/                 # dungeon Markdown, organized by language
│   ├── english/
│   │   ├── covid-19/
│   │   │   ├── begin-journey.md     # entry room shown on the home page
│   │   │   └── 0/0.md               # a normal room
│   │   ├── mines-of-moria/
│   │   ├── normal-dungeon/
│   │   ├── sci-fi-dungeon/
│   │   └── time-travel/
│   ├── chinese/            # great-wall
│   ├── portuguese/        # normal-dungeon
│   └── spanish/           # normal-dungeon
├── public/
│   └── images/            # dungeon cover images + icon.png
├── src/
│   ├── components/        # Header, Footer, RoomCard, RoomView, NotFound
│   ├── data/
│   │   └── dungeon-info.json   # display name + cover image per dungeon
│   ├── hooks/             # (reserved for React hooks)
│   ├── lib/
│   │   ├── content.js     # glob loader + relative .md link resolver
│   │   ├── dungeons.js    # dungeon-info lookup + image URLs
│   │   └── markdown.js    # marked wrapper + excerpt helper
│   ├── pages/
│   │   ├── Home.jsx       # card grid of all dungeons
│   │   └── Room.jsx       # renders one Markdown room
│   ├── styles/            # global.css, home.css
│   ├── App.jsx            # router
│   └── main.jsx           # React entry
├── index.html
├── vite.config.js
└── package.json
```

## 🏰 Dungeon & room format

A **floor** is a folder; each floor holds **rooms**, and every room is a `Markdown`
file. Links between rooms are plain relative `.md` links, e.g.:

```markdown
[🗡️ Search for a weapon](../3/3.md)
[😴 Go back to sleep](0-B.md)
```

At runtime those links are rewritten into client-side routes, so navigation
never triggers a full page reload.

Structure is `language/dungeon-name/floor/room`:

- `language`: `english`, `chinese`, `portuguese`, `spanish`.
- `dungeon-name`: alphanumeric, dash-separated (e.g. `normal-dungeon`).
- `floor`: numeric, no leading zero (`1`, `2`, `3`).
- `room`: numeric, sub-rooms separated by dash (`1`, `3-AF`, `3-01`).
- `begin-journey.md` is the entry room for each dungeon and appears on the home page.

> Only ASCII characters and the dash (`-`) are allowed in folder/file names.

When you add a new dungeon, register it in `src/data/dungeon-info.json`
(name, display label, language, cover image) so it shows up on the home page.

## 📝 License

[MIT](./LICENSE)
