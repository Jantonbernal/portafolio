<script setup>
useSeoMeta({
    title: 'Sobre mí | Juan Manuel Antón Bernal - Desarrollador FullStack',
    description: 'Soy Juan Manuel Antón Bernal, desarrollador FullStack especializado en Laravel y Vue.js. Experiencia liderando proyectos, migraciones y enfocándome en UI/UX.',
    ogTitle: 'Sobre mí | Juan Manuel Antón Bernal',
    ogDescription: 'Conoce más sobre mi experiencia como FullStack Developer en Laravel, Vue.js y Nuxt.',
    ogType: 'website',
    ogUrl: 'https://jantonbernal.github.io/portafolio',
    ogImage: 'https://jantonbernal.github.io/portafolio/preview.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    keywords: 'inicio, fullstack, laravel, vue, nuxt, ui ux, jwt, web developer, liderazgo técnico'
})

const heightStore = useHeightStore()
const { height } = storeToRefs(heightStore)

const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const fontClass = ref('text-h1')
const isReady = ref(false)

onMounted(() => {
    fontClass.value = height.value < 500 ? 'text-h4' : 'text-h1'
    isReady.value = true
})
</script>

<template>
    <v-container v-if="isReady">
        <v-row>
            <v-col cols="12" md="6">
                <p class="font-weight-bold" :class="[
                    currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light',
                    fontClass
                ]">
                    Juan Manuel Antón
                </p>
                <code class="text-h5 my-4" :class="currentTheme == 'dark' ? 'bg-code-dark' : 'bg-code-light'">
                    <div>
                        <p class="typingEffect">
                            <span class="text-info font-weight-bold">
                                console
                            </span>
                            <span class="text-indigo font-weight-bold">.log</span>
                            (<span class="text-primary font-weight-bold">"Soy Desarrollador Web"</span> )
                        </p>
                    </div>
                </code>
                <p class="mt-10 description">
                    Soy Desarrollador Web, dedicado al desarrollo y enseñanza de tecnologías web, mayormente
                    Javascript
                    con <span :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'"> VueJS
                    </span> y PHP con
                    <span :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'"> Laravel.
                    </span>
                    Con mas de 7 años de experiencia en desarrollo web profesional y múltiples proyectos web con Laravel
                    y VueJS,
                    estos proyectos los puedes observar en la sección
                    <span :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'">
                        <v-btn variant="plain" size="small" density="compact" :to="{ name: 'project' }">
                            proyectos.
                        </v-btn>
                    </span>
                </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center align-center align-self-center">
                <img class="profile" :width="height <= 400 ? '60%' : '80%'" src="/images/profile-2.png"
                    alt="Foto Perfil" loading="lazy" cover />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
code {
    border-radius: 4px;
    padding: 20px;
    height: 70px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 100%;
}

.bg-code-dark {
    color: rgb(var(--v-theme-on-surface)) !important;
    background-color: rgb(var(--v-theme-surface)) !important;
}

.bg-code-light {
    color: rgb(var(--v-theme-on-surface)) !important;
    background-color: rgb(var(--v-theme-surface)) !important;
}

.profile {
    filter: drop-shadow(11px 12px 11px rgb(var(--v-theme-surface)))
}
</style>