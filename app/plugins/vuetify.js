import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Translations provided by Vuetify
import { es } from 'vuetify/locale'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi', // This is already the default value - only for display purposes
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            defaultTheme: 'dark',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        background: '#eceff1',
                        surface: '#ffffff',
                        primary: '#60B478',
                        secondary: '#3281c1',
                        error: '#fb977d',
                        info: '#899dad',
                        success: '#4bd08b',
                        warning: '#f8c076',
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        background: '#24293e',
                        surface: '#2f3651',
                        primary: '#60B478',
                        secondary: '#3281c1',
                        error: '#fb977d',
                        info: '#899dad',
                        success: '#4bd08b',
                        warning: '#f8c076',
                    },
                }
            },
        },
        locale: {
            locale: 'es',
            fallback: 'en',
            messages: { es },
        },
    })
    app.vueApp.use(vuetify)
})
