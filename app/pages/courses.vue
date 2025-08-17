<script setup>
useSeoMeta({
    title: 'Cursos & Certificaciones | Juan Manuel Antón Bernal',
    description: 'Cursos y certificaciones en Laravel, Vue.js, Nuxt y mejores prácticas de desarrollo web.',
    ogTitle: 'Cursos y Certificaciones | Juan Manuel Antón Bernal',
    ogDescription: 'Formación continua en el ecosistema Laravel + Vue + Nuxt.',
    ogType: 'website',
    ogUrl: 'https://jantonbernal.github.io/portafolio/courses',
    ogImage: 'https://jantonbernal.github.io/portafolio/preview.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    keywords: 'cursos, laravel, vue, nuxt, javascript, formación'
})

const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { data: courses } = await useFetch('/api/courses');

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const getImageUrl = (name) => {
    return `${baseURL}images/courses/${name}`
}
</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in courses" :key="index" class="mx-auto mb-5"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" variant="plain" max-width="400"
            min-height="380" :href="item.uri" target="_blank">
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" :alt="item.alt"
                loading="lazy">
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