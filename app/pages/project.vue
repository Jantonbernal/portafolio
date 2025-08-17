<script setup>
useSeoMeta({
    title: 'Proyectos | Juan Manuel Antón Bernal - FullStack Developer',
    description: 'Mira mis proyectos desarrollados con Laravel, Vue.js, Nuxt y otras tecnologías modernas.',
    ogTitle: 'Proyectos de Juan Manuel Antón Bernal',
    ogDescription: 'Explora mis proyectos FullStack, incluyendo migraciones desde Angular y desarrollos con Laravel + Vue.js.',
    ogType: 'website',
    ogUrl: 'https://jantonbernal.github.io/portafolio/project',
    ogImage: 'https://jantonbernal.github.io/portafolio/preview.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    keywords: 'inicio, fullstack, laravel, vue, nuxt, ui ux, jwt, web developer, liderazgo técnico'
})

const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { data: projects } = await useFetch('/api/projects');

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const getImageUrl = (name) => {
    return `${baseURL}images/projects/${name}`
}
</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in projects" class="mx-auto mb-7 card"
            :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'" variant="plain"
            max-width="450" min-height="350" :href="item.uri" target="_blank">
            <img :src="getImageUrl(item.image)" class="align-end" width="100%" :alt="item.alt" loading="lazy" cover>
            </img>
            <div class="card__content">
                <v-card-title v-text="item.company"></v-card-title>

                <div class="px-4 mb-2">
                    <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                        v-for="(skill, x) in item.skills" :key="x">
                        <v-icon v-if="skill.icon" :icon="skill.icon" :color="skill.color" start></v-icon>
                        <p v-if="skill.name"> {{ skill.name }} </p>
                    </v-chip>
                </div>
            </div>
        </v-card>
    </v-container>
</template>

<style scoped>
.card {
    position: relative;
    min-height: auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card img {
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    opacity: 1;
    transform: rotateX(0deg);
}

.card:hover {
    transform: scale(1.05);
}

.card:hover img {
    scale: 0;
}
</style>