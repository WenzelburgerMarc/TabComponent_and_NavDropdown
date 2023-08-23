<template>
    <div @click="props.actionEvent"
        class="flex items-center hover:cursor-pointer hover:bg-[rgba(0,0,0,0.1)] w-full p-1 ddItem">

        <i :class="props.iconClass" class="bx text-white text-xl font-light mr-2 ml-2"></i>

        <h1 class="text-container text-white text-sm font-light">
            {{ props.text }}
        </h1>


    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    actionEvent: {
        type: Function,
        default: () => { },
        required: false
    },
    text: {
        type: String,
        default: "NavItem",
        required: false
    },
    iconClass: {
        type: String,
        default: "bx-star",
        required: false
    },
});
</script>
<style scoped>
.ddItem {
    transition: all 0.2s ease-in-out;
}
</style>