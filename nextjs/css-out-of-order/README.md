# CSS out of Order Repro

## Requrements

NodeJS - 20.9+

## Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/GabenGar/repros.git
   ```

2. Switch to the repo:

   ```sh
   cd ./repros/next-js/css-out-of-order
   ```

3. Install all dependencies:

   ```sh
   npm install
   ```

## Test Development

1. Start dev server:

   ```sh
   npm run dev
   ```

2. Open url `http://localhost:3000` in the browser.
3. Click `Tasks`.<br>
   Note a complete lack of colours on category names.
4. Click `All`.
5. Click `Add`.<br>
   Note completely broken styling on inputs.<br>
   Also button styling is off, the rules from [global styles at line 155](./apps/frontend/src/styles/global.scss)
   for some reason go after [button module styles](./apps/frontend/src/components/button/base.module.scss),
   which puts them at higher priority due to the same specificity.
6. Fill out `title` input and press `Add` button.
7. Note the broken styles on the task preview, the `Copy` buttons should be
   to the side of related element and also have broken styles.
8. Click `Details`.
   Note broken buttons again but also the alignment of status buttons as they should be in 2x2 grid.
9. Click `Edit`.
   Everything is still broken.
10. Press `Delete` and you will be redirected back to the tasks list.
11. Click `HomeDev` at the top left of the page.
12. Refresh the page.
13. Click `Tasks`.
    Now the categories are coloured.
14. Click `All`.
15. Click `Add`.
    Form-related styles are back, but the buttons are still broken.
16. Fill out `title` input and press `Add` button.
    The task preview is coloured and aligned now but buttons are still broken.
17. Click `Details`.
    Also aligned and coloured with broken buttons.
18. Click `Edit`.
    Same as previous point.
19. Press `Delete`.

## Test Production

1.  Build the project:
    ```sh
    npm run build
    ```
2.  Start the server:
    ```sh
    npm run start
    ```
3. Open url `http://localhost:3000` in the browser.
4. Click `Tasks`.<br>
5. Click `All`.
6. Click `Add`.<br>
   Button styling is off, the rules from [global styles at line 155](./apps/frontend/src/styles/global.scss)
   for some reason go after [button module styles](./apps/frontend/src/components/button/base.module.scss),
   which puts them at higher priority due to the same specificity.
7. Fill out `title` input and press `Add` button.
8. Click `Details`.
   Note broken buttons again.
9. Click `Edit`.
   Buttons are still broken.
10. Press `Delete` and you will be redirected back to the tasks list.
11. Click `Home` at the top left of the page
