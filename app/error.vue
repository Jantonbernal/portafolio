<script setup>
const props = defineProps({
    error: Object
})

const back = () => {
    clearError({ redirect: '/' })
};
</script>

<template>
    <v-empty-state :headline="'Whoops, ' + error?.statusCode" title="Página no encontrada"
        text="La página que esta buscando no se pudo encontrar."
        image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg" action-text="VOLVER"
        class="mx-auto h-100 w-100" @click:action="back">
    </v-empty-state>
</template>