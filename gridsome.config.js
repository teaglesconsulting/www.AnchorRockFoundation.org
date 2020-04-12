// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Anchor Rock Foundation",
  plugins: [
    "gridsome-plugin-pug",
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "site.config.json",
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "ContentPage",
        baseDir: "./content/pages",
        template: "./src/templates/ContentPage.vue",
        remark: {
          slug: false
          // remark options
        }
      },
    },
  ],
  chainWebpack: config => {
    config.resolve.alias.set('media', '~/../content/media')
  },
}
