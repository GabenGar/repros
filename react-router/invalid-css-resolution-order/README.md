# React Router Incorrect CSS Resolution Order Repro

## Requrements

NodeJS - 20.9+

## Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/GabenGar/repros.git
   ```

2. Switch to the repro:

   ```sh
   cd ./repros/react-router/invalid-css-resolution-order
   ```

3. Install all dependencies:

   ```sh
   npm install
   ```

## Test

1. Start dev server:

   ```sh
   npm run dev
   ```

2. Visit `http://localhost:8002`

3. Note how the list visibly "fixes" its styles.

4. Build the project:
   ```sh
   npm run build
   ```

5. Visit `http://localhost:9002`

6. The list is in the broken state.

7. Look at `<ul>` element with dev tools, and see that the rule from `list-*.css` (the [`ui` package export](./packages/ui/src/lists/list.module.scss)) has a higher priority than `language-select-*.css` (the [route-level css module](./apps/oikia/src/routes/language-select.module.scss)) due to be placed later.
However on the [route file](./apps/oikia/src/routes/language-select.tsx) the import for the css module goes after the related import, which means whatever module resolution algo is used does not resolve modules in the declaration order (which is especially important for css modules).
