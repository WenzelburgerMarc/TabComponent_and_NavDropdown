<template>
    <div class="TheTabCard bg-white p-5 rounded-xl shadow-sm">
        <selection-header v-on:tabChanged="filterArray" />
        <transition name="fade" mode="out-in">
            <tab-card-list-view :items="arr" :key="activeTypeForAnimation" class="mt-5" />
        </transition>

    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SelectionHeader from './SelectionHeader.vue';
import TabCardListView from './TabCardListView.vue';
import { UserItem, FileItem } from './Types/types.ts';

const arrUserItems = [
    {
        name: 'Marc Cramer',
        joinedAt: 'Joined 1 minute ago.',
        avatarURL: 'src/assets/avatar.png',
        isOnline: true,
        type: 'user'

    },
    {
        name: 'John Doe',
        joinedAt: 'Joined 30 minutes ago.',
        isOnline: false,
        avatarURL: '',
        type: 'user'
    }
] as UserItem[];

const arrFileItems = [
    {
        fileName: 'file1.txt',
        iconClass: 'bxs-file-txt',
        infoText: 'Created 1 hour ago.',
        type: 'file'
    },
    {
        fileName: 'file2.pdf',
        iconClass: 'bxs-file-pdf',
        infoText: 'Created 2 hours ago.',
        type: 'file'
    }
] as FileItem[];

const arr = ref([...arrUserItems, ...arrFileItems]);


onMounted(() => {

    const tabCard = document.querySelector('.TheTabCard') as HTMLDivElement;
    tabCard.style.height = `${tabCard.offsetHeight}px`;
    tabCard.style.width = `${tabCard.offsetWidth}px`;
});

let activeTypeForAnimation = ref('all');

function filterArray(activeType: string) {

    // TODO: could be improved via general type check
    if (activeType === 'all') {
        arr.value = [...arrUserItems, ...arrFileItems];
        activeTypeForAnimation.value = 'all';
    } else if (activeType === 'user') {
        arr.value = [...arrUserItems];
        activeTypeForAnimation.value = 'user';
    } else if (activeType === 'file') {
        arr.value = [...arrFileItems];
        activeTypeForAnimation.value = 'file';
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>