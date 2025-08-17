<script setup>
useSeoMeta({
    title: 'Stack & Sistema | Juan Manuel Antón Bernal',
    description: 'Tecnologías y arquitectura: Laravel, Vue 3, Nuxt 3, Pinia, Vuetify, Tailwind, JWT, WebSockets (Reverb), Mercado Pago, CI/CD.',
    ogTitle: 'Stack & Sistema | Juan Manuel Antón Bernal',
    ogDescription: 'Mi stack: Laravel + Vue/Nuxt, prácticas modernas y arquitectura limpia.',
    ogType: 'website',
    ogUrl: 'https://jantonbernal.github.io/portafolio/system',
    ogImage: 'https://jantonbernal.github.io/portafolio/preview.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    keywords: 'stack, arquitectura, laravel, vue, nuxt, pinia, vuetify, jwt, websockets, mercado pago'
})

const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { data: systems } = await useFetch('/api/systems');

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const getImageUrl = (name) => {
    return `${baseURL}images/systems/${name}`
}
</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in systems" :key="index" class="mx-auto mb-5"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" max-width="400" min-height="380"
            :href="item.uri" target="_blank" variant="plain">
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" :alt="item.alt"
                loading="lazy" cover>
            </img>
            <v-card-title class="wrap" v-text="item.title"></v-card-title>
            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                    v-for="(skill, x) in item.skills" :key="x">
                    <v-icon v-if="skill.icon" :icon="skill.icon" :color="skill.color" start></v-icon>
                    <p v-if="skill.name"> {{ skill.name }} </p>
                </v-chip>
            </div>
        </v-card>
    </v-container>
</template>