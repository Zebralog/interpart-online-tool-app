# Developer Documentation

## Local Setup
This project requires at least Node.js 12. When having installed Node.js via NVM, you can install multiple versions and switch between them using `nvm use <version>`.

**Before installing dependencies** set the desired configuration up by symlinking the specific folder under `config/` to `config/live`;
eg, `ln -s $(readlink -f config/moabit) config/live`

in general,

`ln -s [selected configuration folder path] config/live`

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
The prototype is deployed via a Hetzner Cloud Server that Zebralog is currently evaluating. The following are the steps to reproduce a server setup:

* `apt-get install git`
* `apt-get install build-essential` (Some NPM packages use compilers to build themselves)
* `apt-get install ufw` (Firewall)
* `ufw enable`
* `ufw allow 22` (Very important! Otherwise you can't log back into the server via SSH)
* Intall [NVM](https://github.com/nvm-sh/nvm)
* `nvm install 12`
* `npm install -g pm2` ([PM2](https://pm2.keymetrics.io/) is a process manager for production)

To make adjustments to the server, you need an invitation from one of our sys admins. From there, you have to create an account and then you can create servers or add SSH keys to existing servers. Login always takes place via SSH and the server IP.

## Deploying changes to the prototype
To deploy changes:

* `cd /var/www/interpart-mobile-prototype/`
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
