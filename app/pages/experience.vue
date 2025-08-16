<script setup>
useSeoMeta({
    title: 'Experiencia | Juan Manuel Antón Bernal - FullStack Developer',
    description: 'Experiencia en desarrollo FullStack con Laravel, Vue.js y Nuxt: liderazgo técnico, migraciones, arquitectura limpia y foco en UI/UX.',
    ogTitle: 'Experiencia | Juan Manuel Antón Bernal',
    ogDescription: 'Trayectoria en Laravel, Vue.js, Nuxt y liderazgo técnico.',
    ogType: 'website',
    ogUrl: 'https://jantonbernal.github.io/portfolio/#/experience',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    keywords: 'experiencia, fullstack, laravel, vue, nuxt, ui ux, liderazgo técnico'
})

const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const experiences = ref([])

onMounted(() => {
    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Opentic SAC',
        country: 'Colombia',
        from: '2025 FEB',
        to: 'actual',
        description: 'Actualmente me encuentro a cargo de la migración del sitio web, desarrollado previamente en Angular, hacia Vue.js 3. Durante este proceso, también estoy enfocándome en la mejora de la interfaz y experiencia de usuario (UI/UX). El sistema corresponde a un SGDEA (Sistema de Gestión Documental Electrónica Administrativa), utilizado por diversas entidades del Estado. Este sistema permite la gestión de documentos, incluyendo su creación, edición y eliminación. Además, cuenta con un módulo de firma electrónica que facilita la validación de documentos mediante el uso de certificados digitales.',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Froala Editor', icon: 'mdi mdi-file-edit', color: '#305132' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: null, icon: 'mdi mdi-api', color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'MistersWeb',
        country: 'Perú',
        from: '2024 AGO',
        to: '2024 NOV',
        description: 'Diseñé y desarrollé un sitio web de suscripciones enfocado en la publicación de inmuebles (Tipo adondevivir), complementado con un panel de administración empresarial. Este panel permite la gestión integral del sitio, incluyendo funciones como la personalización del logotipo, la administración de tipos de viviendas, sub tipo, redes sociales etc, y la configuración de planes de suscripción, entre otras herramientas.',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'MercadoPago', icon: 'mdi mdi-credit-card-outline', color: '#4479A1' },
            { name: null, icon: 'mdi mdi-api', color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'MistersWeb',
        country: 'Perú',
        from: '2024 AGO',
        to: '2024 NOV',
        description: 'Diseñé y desarrollé un sitio web de suscripciones enfocado en la publicación de vehículos, complementado con un panel de administración empresarial. Este panel permite la gestión integral del sitio, incluyendo funciones como la personalización del logotipo, la administración de marcas, modelos, años de fabricación, versiones, y la configuración de planes de suscripción, entre otras herramientas.',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'MercadoPago', icon: 'mdi mdi-credit-card-outline', color: '#4479A1' },
            { name: null, icon: 'mdi mdi-api', color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Objetio Virtual',
        country: 'Argentina',
        from: '2024 AGO',
        to: '2024 SEP',
        description: 'Desarrollé un panel de administración empresarial que centraliza y optimiza las operaciones clave de la empresa. Este sistema permite llevar un control detallado de ingresos y egresos, gestionar cotizaciones y proyectos, emitir comprobantes, registrar pagos, y generar reportes completos para la toma de decisiones estratégicas',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Objetio Virtual',
        country: 'Argentina',
        from: '2024 JUN',
        to: '2024 JUL',
        description: 'Desarrollé el sitio web administrable OMBU, diseñado para ofrecer una experiencia dinámica y personalizada a los usuarios. El cliente puede explorar productos y, al iniciar sesión, acceder a información exclusiva y detallada solo disponible para usuarios autenticados. Todo el contenido del sitio, incluidos los productos y las secciones especiales, es completamente administrable a través de un panel de control intuitivo y flexible.',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'PersonalsDates',
        country: 'USA',
        from: '2024 JUN',
        to: '2024 JUL',
        description: 'Desarrollé el sitio web administrable PersonalsDates, una plataforma de citas diseñada para ofrecer una experiencia altamente personalizada. Los usuarios pueden subir imágenes y videos, además de utilizar un editor de texto avanzado para personalizar su biografía con total libertad. Todo el contenido del sitio es administrable, lo que permite gestionar usuarios, medios y configuraciones de manera eficiente desde un panel intuitivo',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'TouchClick',
        country: 'Perú',
        from: '2024 ENE',
        to: '2024 ABRI',
        description: 'Brindé soporte HelpDesk a los usuarios de la aplicación web, resolviendo incidencias relacionadas con fallos y funcionalidades. Además, participé en la validación y desarrollo de nuevas funcionalidades centradas en la reserva de paquetes de hotelería, optimizando la experiencia del usuario y asegurando la calidad del sistema ',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Lustro EIRL',
        country: 'Perú',
        from: '2021 AGO',
        to: '2023 DIC',
        description: 'Desarrollé la aplicación web SGC (Sistema de Gestión Comercial) utilizando Laravel 8 para el backend y Vue.js 2 para el frontend, asegurando una arquitectura moderna y eficiente. Implementé y expuse APIs para integrarlas con la aplicación móvil y el sitio web de Lustro. Además, fui responsable del diseño, desarrollo y mantenimiento continuo de la aplicación web, incluyendo la integración de servicios externos como correo electrónico, facturación electrónica y la implementación de un embudo de ventas mediante Pipedrive',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: null, icon: 'mdi mdi-api', color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Analista Desarrollador',
        company: 'Sociedad Automotores Inka SAC',
        country: 'Perú',
        from: '2018 AGO',
        to: '2020 JUN',
        description: 'Desarrollé una aplicación web para la cotización, compra y venta de vehículos automotores a nivel nacional, abarcando principales ciudades como Chiclayo, Lima y Trujillo. La plataforma fue diseñada como una solución multiempresa y multisucursal, utilizando Laravel para el backend y Vue.js para el frontend. Integré los procesos de la aplicación con el ERP SAP Business ONE - SAP HANA, como sistema de gestión de bases de datos se uso SQL Server 2012. Además, participé activamente en reuniones y presentaciones técnicas para coordinar requerimientos y presentar avances del proyecto',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'SAP BUSINESS ONE', icon: null, color: '#0FAAFF' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Colegio de Estadisticos del Perú',
        country: 'Perú',
        from: '2018 ENE',
        to: '2018 MAR',
        description: 'Desarrollé el sitio web oficial del Colegio de Estadísticos del Perú – Región Lambayeque, proporcionando una plataforma moderna y funcional que representa la identidad institucional. El sitio incluye secciones informativas, recursos para los miembros y herramientas de gestión administrativa, todo diseñado para facilitar la interacción entre la organización y sus afiliados.',
        skills: [
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
        ],
    })
})

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