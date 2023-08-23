<template>
    <div @click="props.actionEvent" class="flex items-center justify-around hover:cursor-pointer">

        <img :src="props.imgURL" alt="Bild von logturnal auf Freepik" class="aspect-auto h-20" />

        <h1 class="text-container text-white text-base font-semibold">
            {{ props.text }}
        </h1>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    imgURL: {
        type: String,
        default: '/src/assets/logo.svg',
        required: false
    },
    actionEvent: {
        type: Function,
        default: () => { },
        required: false
    },
    text: {
        type: String,
        default: "Brand",
        required: false
    }
});
</script>
<style scoped></style>