# template-express-react-ts
A template project with express, react, typescript, styled-components, storybook, prettier, eslint, jest

### Start
- `start` : use `per-env` to call either `start:development` or `start:production` depending on the variable `NODE_ENV`. By default
this variable is set to `development`. This script will start the express app that serve the front-end.
- `start:development`: start the express in app with hot reload and serve the front-end also with hot reload.
- `start:production`: build the app and start it in production mode.
- `start-front`: use `per-env` to call either `start-front:development` or `start-front:production` depending on the variable `NODE_ENV`. By default
  this variable is set to `development`. This script start the front-end using `webpack` server.
- `start-front:development`: start the front with `webpack` with hot-realod
- `start-front:production`: build and start the front with `webpack`, no hot-realod

### Build
- `build`: build the app : backend with `tsc` and frontend with `webpack`
- `build:front`: build only the frontend with `webpack`
- `build:server`: build only the backend with `tsc`

### Test

[TODO]

### Lint & prettier

- `lint` : use `eslint` to check linting
- `lint:fix`: use `eslint` to fix linting issues
- `prettier:fix` : use `prettier` to beautify code

### Storybook

- `storybook` : start `storybook`
- `storybook:build` : build `storybook` static assets
