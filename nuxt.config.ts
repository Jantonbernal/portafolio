// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Lista de composables de Vuetify que quieras autoimportar
const vuetifyComposables = [
  'useDisplay',
  'useTheme',
]

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  app: {
    head: {
      title: 'Juan Manuel Antón Bernal',
      htmlAttrs: {
        lang: 'es',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        {
          name: 'description',
          content: 'Portafolio de Juan Manuel Antón Bernal, desarrollador FullStack especializado en Laravel, Vue.js y Nuxt. Experiencia en migraciones, liderazgo técnico y UI/UX.'
        },
        {
          property: 'og:title',
          content: 'Juan Manuel Antón Bernal | FullStack Developer'
        },
        {
          property: 'og:description',
          content: 'Explora mi portafolio como desarrollador FullStack con experiencia en Laravel, Vue.js y Nuxt. Enfoque en UI/UX, migraciones desde Angular y liderazgo técnico.'
        },
        {
          property: 'og:image',
          content: 'https://jantonbernal.github.io/portfolio/preview.jpg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  imports: {
    imports: vuetifyComposables.map(name => ({
      name,
      from: 'vuetify'
    }))
  },
  css: ['~/assets/css/style.css']
})