# React Router Vague Error react 19 Repro

## Requrements

NodeJS - 20.9+

## Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/GabenGar/repros.git
   ```

2. Switch to the repro:

   ```sh
   cd ./repros/react-router/vague-error-react-19
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

2. Visit `http://localhost:8001`

3. Observe the error in the logs which looks like this:

   ```sh
   Error: Objects are not valid as a React child (found: object with keys {$$typeof, type, key, ref, props, _owner, _store}). If you meant to render a collection of children, use an array instead.
   ```

   Followed by nondescript logs.
