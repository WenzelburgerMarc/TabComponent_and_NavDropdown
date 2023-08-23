<template>
    <div @click="props.actionEvent"
        class="flex items-center hover:cursor-pointer hover:bg-slate-800 h-12 p-3 rounded-md nav-item">
        <h1 :class="isActive ? 'font-semibold' : 'font-light'" class="text-container text-white text-base ">
            {{ text }}
        </h1>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false,
        required: false
    },
    actionEvent: {
        type: Function,
        default: () => { },
        required: false
    },
    text: {
        type: String,
        default: "NavItem",
        required: false
    }
});
</script>
<style scoped>
.nav-item {
    transition: all 0.2s ease-in-out;
}
</style>