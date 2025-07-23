# Static Export Page 500 Repro

## Requrements

NodeJS - 20.9+

## Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/GabenGar/repros.git
   ```

2. Switch to the repro:

   ```sh
   cd ./repros/next-js/static-export-500
   ```

3. Install all dependencies:

   ```sh
   npm install
   ```

## Test

1. Build the project:
  ```sh
  npm run build
  ```

2. Notice the error which looks like this:
  ```sh
  > Build error occurred
  > frontend:build: [Error: ENOENT: no such file or directory, rename '{project_path}\apps\frontend\.next\export\500.html' -> '{project_path}\apps\frontend\.next\server\pages\500.html']
  ```

3. Delete `./apps/frontend/src/app/(main)/500` folder and build again.

4. Observe another error looking like this:
  ```sh
  [Error: Minified React error #31;
  Error occurred prerendering page "/500"
  Export encountered an error on /_error: /500, exiting the build.
  ```

5. Rev up dev server:
  ```sh
  npm run dev
  ```

6. Visit `/500` on it.

7. The error looks like this:
  ```sh
  [Error: Page "/(main)/[lang]/page" is missing param "/500" in "generateStaticParams()", which is required with "output: export" config.]
  ```

8. Restore deleted files.

9. Now the page is shown, but it won't build for static export.
