<script setup>
useSeoMeta({
    title: 'Contacto | Juan Manuel Antón Bernal - FullStack Developer',
    description: '¿Quieres trabajar conmigo? Contáctame para proyectos en Laravel, Vue.js, Nuxt y desarrollo FullStack.',
    ogTitle: 'Contacto | Juan Manuel Antón Bernal',
    ogDescription: 'Ponte en contacto conmigo para proyectos de desarrollo web FullStack.',
    ogImage: 'https://jantonbernal.github.io/portfolio/contact-preview.jpg',
})

const heightStore = useHeightStore()
const { height } = storeToRefs(heightStore)

const socialMedia = ref([])

const loadSocialMedia = () => {
    socialMedia.value.push({
        icon: 'mdi mdi-github',
        link: 'https://github.com/Jantonbernal',
        color: 'info'
    })
    socialMedia.value.push({
        icon: 'mdi mdi-linkedin',
        link: 'https://www.linkedin.com/in/juanmanuelantonbernal/',
        color: 'secondary'
    })
    socialMedia.value.push({
        icon: 'mdi mdi-youtube',
        link: 'https://www.youtube.com/@jantongcode',
        color: 'error'
    })
}

onMounted(() => {
    loadSocialMedia()
})

const whatsappLink = 'https://wa.me/51973939493?text=Hola,%20quiero%20más%20información'

const goToWhatsApp = async () => {
    if (height.value >= 500) {
        await navigateTo(whatsappLink, {
            open: {
                target: '_blank',
            }
        })
    } else {
        window.location.href = whatsappLink;
    }
}
</script>

<template>
    <v-container class="text-center py-16">
        <h2 class="mb-6">Contáctame</h2>

        <!-- Redes sociales -->
        <div class="mb-6">
            <v-btn v-for="(item, index) in socialMedia" :key="index" :href="item.link" target="_blank" icon size="large"
                variant="outlined" class="mx-2" :color="item.color" hover>
                <v-icon :icon="item.icon" size="32"></v-icon>
            </v-btn>
        </div>

        <!-- Botón de WhatsApp -->
        <v-btn @click.prevent="goToWhatsApp" prepend-icon="mdi-whatsapp" color="primary" size="x-large" rounded="lg"
            class="mt-4">
            Escríbeme por WhatsApp
        </v-btn>
    </v-container>
</template>
