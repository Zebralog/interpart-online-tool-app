export default {
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Interpart mobiler Prototyp",
      },
    ],
  },
  css: ["reset-css", "assets/style.scss"],
  router: {
    routeNameSplitter: ".",
    linkActiveClass: "is-active",
  },
}
