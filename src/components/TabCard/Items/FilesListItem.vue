<template>
    <div class="item flex justify-start items-center hover:bg-slate-100 hover:cursor-pointer p-3 rounded-xl">
        <div class="relative img-container">

            <div class="w-12 h-12 rounded-xl bg-slate-200 flex justify-center items-center">
                <i :class="props.iconClass" class="bx text-2xl text-slate-500"></i>
            </div>


        </div>

        <div class="flex flex-col ml-2">
            <span class="text-base text-black font-semibold truncate">{{ props.fileName }}</span>
            <span class="text-sm text-gray-400 truncate"> {{ props.infoText }}
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    iconClass: {
        type: String,
        default: 'bx-star',
        required: false
    },
    fileName: {
        type: String,
        default: 'Filename',
        required: false
    },
    infoText: {
        type: String,
        default: 'Created One Hour Ago.',
        required: false
    },
    type: {
        type: String,
        default: 'file',
        required: false
    }
});


</script>
<style scoped>
.item {
    transition: all 0.2s ease-in-out;
}
</style>