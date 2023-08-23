<template>
    <div class="flex items-center justify-around hover:cursor-pointer">
        <i :class="props.iconClass" class="bx mr-1 text-xl text-gray-400 hover:text-black"></i>
        <span class="text-base text-gray-400 hover:text-black" :class="isActive ? 'text-black' : ''">{{ props.text }}</span>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    iconClass: {
        type: String,
        required: false,
        default: ''
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false
    }
});
</script>
<style scoped></style>