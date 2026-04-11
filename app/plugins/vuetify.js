import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Translations provided by Vuetify
import { es } from 'vuetify/locale'
import '@fontsource/roboto/300-italic.css'

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
                        background: '#e6e9ef',       // Base
                        surface: '#eceef3',          // Mantle
                        'surface-bright': '#dce0e8', // Crust
                        'surface-light': '#ccd0da',  // Surface 0
                        'surface-variant': '#bcc0cc', // Surface 1
                        'on-surface-variant': '#4c4f69', // Text
                        primary: '#7287fd',          // Lavender
                        'primary-darken-1': '#575268', // Subtext 0
                        secondary: '#179287',        // Teal
                        'secondary-darken-1': '#147d73',
                        error: '#d20f39',            // Red
                        info: '#04a5e5',             // Sky
                        success: '#a6d189',          // Green
                        warning: '#fe640b',          // Peach
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        background: '#292c3c',       // Base
                        surface: '#2f3651',          // Mantle
                        primary: '#8081bb',          // Lavender
                        secondary: '#81c8be',        // Teal
                        error: '#e78284',            // Red
                        info: '#85c1dc',             // Sky
                        success: '#a6d189',          // Green
                        warning: '#ef9f76',          // Peach
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
