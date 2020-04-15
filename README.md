# Developer Documentation

## Setup
This project requires at least Node.js 12. When having installed Node.js via NVM, you can install multiple versions and switch between them using `nvm use <version>`.

Then install the dependencies using `npm install`.

## Usage
* `npm run dev`: Starts a development server.
* `npm run build`: Builds the server for production.
* `npm start`: Runs the server for production. Run `npm run build` before.
* `npm run lint`: Lint the code,
* `npm run lintfix`: Lint the code and auto-fix issues.
* When testing in the browser, it makes sense to use the dev tools to limit the viewport to a mobile display, since this prototype is intended to be used on smartphones only.