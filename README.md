# EV Charging Station FE

React + Vite + TypeScript + TailwindCSS + Redux Toolkit (pnpm)

## Tech Stack
- React 18, TypeScript, Vite
- TailwindCSS
- Redux Toolkit + React Redux
- pnpm

## Getting Started
```bash
pnpm install
pnpm dev
```
Open http://localhost:5173

## Build & Preview
```bash
pnpm build
pnpm preview
```
Preview at http://localhost:4173

## Project Structure
```
src/
  App.tsx
  main.tsx
  index.css
  store/
    store.ts
    hooks.ts
    slices/
      counterSlice.ts
```

## Tailwind
- Config: `tailwind.config.js`
- PostCSS: `postcss.config.cjs`
- Directives in `src/index.css`

## Scripts
- dev: start Vite dev server
- build: type-check then build
- preview: preview production build

## Troubleshooting
- Module not found './App': ensure `src/App.tsx` exists and has `export default App;`. If your editor still errors, try restarting its TypeScript server and use `import App from './App.tsx';`.
