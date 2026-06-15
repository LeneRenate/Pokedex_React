# PokéDex 3.0 — React

A browser-based Pokédex built with React that fetches live data from the [PokéAPI](https://pokeapi.co/) and lets you browse, filter, and inspect all 1025 Pokémon.

## Background

The Pokédex is my go-to project whenever I pick up something new. Building the same familiar product lets me focus on the technology rather than the problem domain — so the differences between versions reflect what I've actually learned.

**v1.0** (HTML & CSS only) — Static markup written with Emmet, locally saved images, Gen I Pokémon only. No JavaScript, no API.

**v2.0** (Vanilla JS) — Rebuilt with vanilla JavaScript ES Modules. Pulls live data from PokéAPI, covers all 1025 Pokémon across 9 generations, and adds filtering, a detail modal, and a loading screen.

**v3.0 _(this repo)_** — Rebuilt with React. Client-side routing, component-based architecture, and a dedicated detail page per Pokémon.

**v4 — Next.js** version is in progress.

> See the [full series](#the-pokédex-series) below.

## Features

- **Browse all Pokémon** — Cards for all 1025 Pokémon (Gen I–IX), each showing the official artwork, Pokédex number, name, and type-based color styling.
- **Filter by Generation** — Toggle one or more generation buttons (Gen I–IX) to show only Pokémon from those generations.
- **Filter by Type** — Click any of the 18 type buttons to narrow the display to a single type. A "Show All" option resets the filter.
- **Combined filters** — Generation and type filters work together simultaneously.
- **Detail Page** — Navigate to a dedicated page per Pokémon with extended info: type(s), abilities, habitat, height, and weight.
- **Progressive loading** — Pokémon are fetched and rendered in batches of 50 so the page populates as data arrives.
- **Search** — _(in progress)_

## Tech Stack

- [React 19](https://react.dev/) with [Vite](https://vitejs.dev/) for the build toolchain
- [React Router DOM v7](https://reactrouter.com/) for client-side routing
- [Axios](https://axios-http.com/) for API requests
- [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling
- [PokéAPI v2](https://pokeapi.co/api/v2) for all Pokémon and species data
- [PokeAPI Sprites](https://github.com/PokeAPI/sprites) for official artwork images
- Deployed via [gh-pages](https://github.com/tschaub/gh-pages)

## Project Structure

```
src/
├── api/
│   ├── axiosPokeAPI.js       # Fetch calls to PokéAPI (pokemon + species)
│   ├── genList.js            # Generation fetch and normalization
│   ├── getEvolution.js       # Evolution chain fetch
│   └── renderPokemons.js     # Batch rendering helpers
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── PokemonCard.jsx       # Card with artwork, ID, name, and type badge(s)
│   ├── TypeFilter.jsx        # 18-type filter buttons
│   ├── GenToggle.jsx         # Gen I–IX toggle buttons
│   └── SearchBar.jsx         # Search input (in progress)
├── pages/
│   ├── HomePage.jsx          # Main browse view with filters
│   ├── PokemonDetailPage.jsx # Per-Pokémon detail view
│   └── SearchResultsPage.jsx # Search results (in progress)
├── router/
│   └── index.jsx             # Route definitions
├── styles/                   # CSS Modules for component-scoped styles
└── utils/
    ├── capitalize.js
    ├── formatID.js
    ├── getSprite.js
    ├── typeStyles.js         # Type → color mappings
    └── typeList.js
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

> **Note:** On first load the app fetches data for all 1025 Pokémon in batches, so the page will populate progressively over a few seconds depending on network speed.

---

## The PokéDex Series

| Version                        | Stack                     | Highlights                                               |
| ------------------------------ | ------------------------- | -------------------------------------------------------- |
| v1.0 — HTML & CSS              | HTML, CSS (Emmet)         | Static, local images, Gen I only                         |
| v2.0 — Vanilla JS              | HTML, CSS, JS ES Modules  | PokéAPI, all 1025 Pokémon, filtering, modal              |
| **v3.0 — React** _(this repo)_ | React, Vite, Tailwind CSS | Component architecture, client-side routing, detail page |
| v4.0 — Next.js                 | Next.js                   | _(in progress)_                                          |
