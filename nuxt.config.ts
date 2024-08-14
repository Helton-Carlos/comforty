// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {path: '~/shared/icons', prefix: 'Icon'}, '~/components'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'pt' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
})
