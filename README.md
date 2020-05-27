# Developer Documentation

## Local Setup
This project requires at least Node.js 12. When having installed Node.js via NVM, you can install multiple versions and switch between them using `nvm use <version>`.

Then install the dependencies using `npm install`.

## Usage
* `npm run dev`: Starts a development server.
* `npm run build`: Builds the server for production.
* `npm start`: Runs the server for production. Run `npm run build` before.
* `npm run lint`: Lint the code,
* `npm run lintfix`: Lint the code and auto-fix issues.
* `npm run deploy`: Deploys the app on the server. You need to be on the server for this.
* When testing in the browser, it makes sense to use the dev tools to limit the viewport to a mobile display, since this prototype is intended to be used on smartphones only.

## Cloud Server setup
* `apt-get install git`
* `apt-get install build-essential` (Some NPM packages use compilers to build themselves)
* `apt-get install ufw` (Firewall)
* `ufw enable`
* `ufw allow 22` (Very important! Otherwise you can't log back into the server via SSH)
* Intall [NVM](https://github.com/nvm-sh/nvm)
* `nvm install 12`
* `npm install -g pm2` ([PM2](https://pm2.keymetrics.io/) is a process manager for production)