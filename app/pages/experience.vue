<script setup>
useSeoMeta({
    title: 'Experiencia | Juan Manuel Antón Bernal - FullStack Developer',
    description: 'Experiencia en desarrollo FullStack con Laravel, Vue.js y Nuxt: liderazgo técnico, migraciones, arquitectura limpia y foco en UI/UX.',
    ogTitle: 'Experiencia | Juan Manuel Antón Bernal',
    ogDescription: 'Trayectoria en Laravel, Vue.js, Nuxt y liderazgo técnico.',
    ogType: 'website',
    ogUrl: 'https://jantonbernal.github.io/portafolio/experience',
    ogImage: 'https://jantonbernal.github.io/portafolio/preview.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    keywords: 'inicio, fullstack, laravel, vue, nuxt, ui ux, jwt, web developer, liderazgo técnico'
})

const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { data: experiences } = await useFetch('/api/experiences');

</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in experiences" :key="index" class="mx-auto mb-15"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" max-width="550" variant="plain">
            <v-card-item>
                <v-card-title>
                    {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                    <span class="me-1">
                        {{ item.company }}
                    </span>
                </v-card-subtitle>
            </v-card-item>

            <v-card-text>
                <div class="text-subtitle-1">
                    {{ item.country }} | {{ item.from }} - {{ item.to }}
                </div>
                <div>
                    {{ item.description }}
                </div>
            </v-card-text>

            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                    v-for="(skill, x) in item.skills" :key="x" :color="!skill.icon ? skill.color : ''">
                    <v-icon v-if="skill.icon" :icon="skill.icon" :color="skill.color"
                        :size="!skill.name ? 'large' : 'default'" start>
                    </v-icon>
                    <p v-if="skill.name"> {{ skill.name }} </p>
                </v-chip>
            </div>
        </v-card>
    </v-container>
</template>