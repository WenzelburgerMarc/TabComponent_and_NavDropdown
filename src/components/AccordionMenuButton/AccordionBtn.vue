<template>
    <div class="w-full m-0 p-0 pointer-events-none overflow-hidden">
        <div class="main-container pointer-events-auto bg-gray-300 dark:bg-gray-500 p-3 rounded-xl flex justify-start items-center hover:cursor-pointer overflow-hidden"
            @click="isOpen = !isOpen">
            <i class="bx icon text-3xl"
                :class="[isOpen ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-300', iconClass]"></i>
            <div class="title text-lg ml-3 truncate"
                :class="isOpen ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-300'">Payments</div>
            <i class="bx bx-chevron-right icon chevron text-3xl ml-auto"
                :class="isOpen ? 'open text-black dark:text-white' : 'text-gray-400 dark:text-gray-300'"></i>
        </div>
        <ul class="h-auto w-auto z-0 overflow-hidden">
            <AccordionItem v-for="item in itemArray" :title="item.title" :actionEvent="item.actionEvent"
                :isLastElement="item.isLastElement" :isOpen="isOpen" />
        </ul>
    </div>
</template>
<script lang="ts">
import AccordionItem from './AccordionItem.vue';
import { AccordionBtnItemList } from './AccordionBtnItemListType.ts';
export default {
    name: 'AccordionBtn',
    components: {
        AccordionItem
    },
    data() {
        return {
            isOpen: false
        }
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        iconClass: {
            type: String,
            default: 'bx-test-tube'
        },
        itemArray: {
            type: Array as () => AccordionBtnItemList[],
            default: () => []
        }
    },

}
</script>
<style scoped>
.icon,
.title {
    transition: all 0.25s ease-in-out;
}

.chevron.open {
    transform: rotate(-90deg);
}

.main-container:hover .icon,
.main-container:hover .title {
    color: black;
}

.dark .main-container:hover .icon,
.dark .main-container:hover .title {
    color: white;
}
</style>./AccordionBtnItemListType.ts