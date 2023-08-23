<template>
    <div class="flex flex-col">
        <div class="relative item-container flex">
            <selection-item v-for="(item, index) in arrTabs" :key="index" :text="item.text" :icon-class="item.iconClass"
                :is-active="item.isActive.value" @click="makeActive(index)" />
        </div>
        <div class="relative divider h-[2px] w-full bg-slate-300 rounded-full">
            <div class="isActive-border absolute top-0 left-0 w-1/2 h-full bg-black"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SelectionItem from './Items/SelectionItem.vue';
import { nextTick } from 'vue';
const arrTabs = [
    {
        text: 'All',
        isActive: ref(true),
    },
    {
        text: 'Users',
        isActive: ref(false),
        iconClass: 'bx-user',
    },
    {
        text: 'Files',
        isActive: ref(false),
        iconClass: 'bx-file',
    },
];

onMounted(() => {
    makeActive(0);
    animateBorder();
});

function animateBorder() {
    nextTick(() => {
        const activeBorder = document.querySelector('.isActive-border') as HTMLDivElement;
        const selectedItem = document.querySelector('.activated') as HTMLDivElement;
        arrTabs.forEach((item) => {
            if (item.isActive.value) {
                activeBorder.style.left = `${selectedItem.offsetLeft}px`;
                activeBorder.style.width = selectedItem.offsetWidth + 'px';
            }
        });
    });
}

function makeActive(index: number) {
    arrTabs.forEach((item, i) => {
        item.isActive.value = i === index;
    });

    animateBorder();
}
</script>
<style scoped>
.isActive-border {
    transition: all 0.3s ease-in-out;
}
</style>
