# Northstar Commerce Dashboard

A responsive store operations dashboard built for the Algoryx frontend internship, Week 1 task. It uses React, Vite, Lucide icons, reusable components, and a compact CSS design system.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Production output can be checked with:

```bash
npm run lint
npm run build
npm run preview
```

## Dashboard features

- Responsive sidebar with workspace navigation and mobile drawer behavior.
- Top navigation with live order search and an interactive notifications popover.
- Four performance cards, a revenue trend chart, store health summary, and recent activity.
- Searchable recent-orders table with status labels and responsive horizontal scrolling.
- CSV export for the sample order report.
- Reduced-motion support and keyboard-visible focus states.

The dashboard currently uses local sample data in `src/data/dashboard.js`; connect that module to a real API before production use.

## Screenshots

![Desktop dashboard](screenshots/northstar-desktop.png)

![Mobile dashboard](screenshots/northstar-mobile.png)

## Project structure

```text
src/
  components/       Reusable dashboard UI
  data/             Sample metrics, orders, and activity
  App.jsx           Dashboard composition and interactions
  App.css           Responsive dashboard styles
```

## Portfolio submission checklist

- Source repository: [RohanSiripurapu/Algoryx-frontend](https://github.com/RohanSiripurapu/Algoryx-frontend).
- GitHub Pages deploys automatically from `main` using `.github/workflows/deploy-pages.yml`.
- Desktop and mobile screenshots are included in `screenshots/`.
- Publish a LinkedIn post with the live URL, repository link, screenshots, and a short summary of the React, responsive design, and reusable-component work.

### Deployment

GitHub Pages is configured to deploy through Actions. The workflow builds with the `/Algoryx-frontend/` base path required by this project repository.

Live site: [Northstar Commerce](https://rohansiripurapu.github.io/Algoryx-frontend/)

### LinkedIn draft

>Week 1 of my Algoryx Frontend Internship: I built Northstar Commerce, a responsive React admin dashboard with reusable components, performance metrics, sales visualization, searchable orders, notifications, and CSV export. I used Vite, React, Lucide, and custom responsive CSS. Excited to keep building throughout the internship.
>
 > Live demo: [Northstar Commerce](https://rohansiripurapu.github.io/Algoryx-frontend/) · Source: [Algoryx-frontend](https://github.com/RohanSiripurapu/Algoryx-frontend)
>
 > Screenshots are included in the repository.
