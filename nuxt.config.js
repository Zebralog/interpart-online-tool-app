import path from "path"
import fs from "fs"

require("dotenv").config()

let configuration = {
  server: {
    host: process.env.SERVER_HOST || "0.0.0.0",
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            failOnWarning: true,
            fix: true,
          },
        })
      }
    },
  },
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0",
      },
      {
        hid: "description",
        name: "description",
        content: "Interpart mobiler Prototyp",
      },
    ],
  },
  css: [
    "reset-css",
    "typeface-montserrat",
    "assets/style.scss",
    "assets/custom.scss",
  ],
  router: {
    routeNameSplitter: ".",
    linkActiveClass: "is-active",
  },
  modules: ["nuxt-svg-loader", "nuxt-interpolation", "@nuxtjs/dotenv"],
  plugins: ["plugins/v-click-outside", "plugins/v-touch-events"],
}

if (process.env.SSL_FOLDER && process.env.SSL_KEY && process.env.SSL_CERT) {
  configuration.server.https = {
    key: fs.readFileSync(
      path.resolve(process.env.SSL_FOLDER, process.env.SSL_KEY)
    ),
    cert: fs.readFileSync(
      path.resolve(process.env.SSL_FOLDER, process.env.SSL_CERT)
    ),
  }
}

export default configuration
