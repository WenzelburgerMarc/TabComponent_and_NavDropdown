<template>
    <div class="selection-item flex items-center justify-around hover:cursor-pointer group px-4 pb-1"
        :class="isActive ? 'activated' : ''">
        <i :class="[props.iconClass, isActiveWatcher ? 'text-gray-600' : '']"
            class="bx mr-1 text-xl text-gray-400 group-hover:text-gray-600"></i>
        <span class="text-base text-gray-400 group-hover:text-black" :class="isActiveWatcher ? 'text-gray-600' : ''">{{
            props.text
        }}</span>
    </div>
</template>
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
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

let isActiveWatcher = ref(props.isActive);
watch(() => props.isActive, (newValue) => {
    isActiveWatcher.value = newValue;

});

onMounted(() => {

});

</script>
<style scoped>
.selection-item,
i,
span {
    transition: all 0.3s ease-in-out;
}
</style>