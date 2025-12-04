# Portfolio (React + Vite)

This is a React portfolio site built with Vite.

## Deploying to GitHub Pages

This project is configured to deploy automatically to GitHub Pages from the `main` branch.

- Base path is set in `vite.config.js` to `'/Portfolio/'` to match the repository name.
- A workflow file at `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages.

### One-time setup

1. Push this repository to GitHub under `nibear01/Portfolio`.
2. In GitHub, go to Settings → Pages:
	- Source: "Deploy from a branch" is managed by the workflow.
	- Ensure GitHub Pages is enabled for the repository.

### Deploy

Deploy runs automatically on every push to `main`. To trigger manually:

1. Go to Actions → "Deploy to GitHub Pages" → Run workflow.

### Local development

```pwsh
npm install
npm run dev
```

### Build locally

```pwsh
npm run build
npm run preview
```

