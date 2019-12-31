module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'first_nuxt_project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    "~assets/css/main.less",
    "swiper/dist/css/swiper.css" 
  ],
  plugins: [
    {src:'~/plugins/element-ui'},
    { src: '~/plugins/common.js', ssr: false },
    { src: "~/plugins/swiper.js", ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    babel: {        //配置按需引入规则
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

