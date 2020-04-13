// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const config = require("./content/site.config.json")
module.exports = {
  siteName: config.siteName,
  plugins: [
    "gridsome-plugin-pug",
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
