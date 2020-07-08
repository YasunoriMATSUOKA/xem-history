export default {
  mode: 'spa',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],
  modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  axios: {},
  content: {},
  build: {},
}
