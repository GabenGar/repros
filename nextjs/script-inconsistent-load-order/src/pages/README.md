# `< Script />` Inconsistent Resolution Order Repro

1. Clone the repo and switch to reproduction:
   ```sh
   git clone https://github.com/GabenGar/repros.git repros
   cd repros/nextjs/script-inconsistent-load-order
   ```
2. Install dependencies and run the dev server:
   ```sh
   npm install
   npm run dev
   ```
3. Open page `http://localhost:5173/trimps-x/` and the dev console.
4. Chances are there is already an error in line of `Uncaught ReferenceError: prettify is not defined` coming from scripts.
5. Refresh several times (possibly with hard refresh) until there are no errors in console.
   This means `<Script defer />` components do not load in a declared order, but that could be a fluke between the dev server and the old pre-module javscript code base.
6. Build the static export:
   ```sh
   npm run build
   ```
7. Serve the static build:
   ```sh
   npm start
   ```
8. Open page `http://localhost:4173/trimps-x/` and observe the same inconsistent behaviour.
