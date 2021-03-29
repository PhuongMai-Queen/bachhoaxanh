module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "bachhoaxanh",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "e-commerce theme" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "@/assets/css/header.css",
    "@/assets/css/footer.css",
    "@/assets/css/menu.css",
    "@/assets/css/home.css",
    "@/assets/css/cart.css",
    "@/assets/css/product.css",
    "@/assets/css/products_cate.css"
  ],
  plugins: [
    '~/plugins/main.js'
  ],

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  buildModules: ["@nuxtjs/device"],
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          },
          {
            set: "@fortawesome/free-regular-svg-icons",
            icons: ["far"]
          }
        ]
      }
    ],
    ["bootstrap-vue/nuxt"]
  ],
  device: {
    defaultUserAgent:
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36"
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
