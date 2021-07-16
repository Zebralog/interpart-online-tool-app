# Developer Documentation

## Quickstart
This project requires at least Node.js 12. When having installed Node.js via NVM, you can install multiple versions and switch between them using `nvm use <version>`.

**Before installing dependencies**:

  - copy and setup the general `.env` file from the example: `cp .env.example .env`
  - copy and setup your local environment inside your config folder:
    ` cp config/[YOUR-CONFIG-FOLDER]/local.env.js.template config/[YOUR-CONFIG-FOLDER]/local.env.js
  - set the desired configuration up by symlinking the specific folder under `config/` to `config/live`;
    eg, `ln -s $(readlink -f config/moabit) config/live`

    in general,

    `ln -s [selected configuration folder path] config/live`

    It is also possible to use the script in `package.json` to install the example configuration provided:

    `npm run setup-example-config` 


Then install the dependencies using `npm install`.

## Usage
* `npm run setup-example-config`: Activates the provided example configuration.
* `npm run dev`: Starts a development server.
* `npm run build`: Builds the server for production.
* `npm start`: Runs the server for production. Run `npm run build` before.
* `npm run lint`: Lint the code,
* `npm run lintfix`: Lint the code and auto-fix issues.
* `npm run deploy`: Deploys the app on the server. You need to be on the server for this.
* When testing in the browser, it makes sense to use the dev tools to limit the viewport to a mobile display, since this prototype is intended to be used on smartphones only.

## Deploying changes to the prototype
To deploy changes:

* `cd /path/to/webroot/`
* `git pull` (adjust to the needed branch / specific commit)
* `npm run deploy`

## Setup APIs connection

The application stores the API endpoints, login data and collateral info in the specific `index.js` config file.
To setup the API connection, copy the local configuration template to a local.env.js
```
cp config/live/local.env.js.template config/live/local.env.js
```
and change the relevant data accordingly.

A repository containing the backend code (for local development) can be found [here](https://github.com/Zebralog/interpart-online-tool-database).
