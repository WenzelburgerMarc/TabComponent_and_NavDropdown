<template>
    <div class="TheTabCard bg-white p-5 rounded-xl shadow-sm">
        <selection-header v-on:tabChanged="filterArray" :items="arrSelectionHeaderItems" />
        <transition name="fade" mode="out-in">
            <tab-card-list-view :items="arr" :key="activeTypeForAnimation" class="mt-5" />
        </transition>

    </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeMount, ref, PropType } from 'vue';
import SelectionHeader from './SelectionHeader.vue';
import TabCardListView from './TabCardListView.vue';
import { HeaderSelectionItem, UserItem, NormalItem } from './Types/types.ts';


const props = defineProps({
    arrItems: {
        type: Array as any,
        required: true,
    },
    arrSelectionHeaderItems: {
        type: Array as PropType<(HeaderSelectionItem)[]>,
        required: true,
    },
});


let arr = [] as any;
let backupArr = [] as any;


onBeforeMount(() => {
    arr = ref([...props.arrItems]);
    backupArr = arr.value;

});




onMounted(() => {

    const tabCard = document.querySelector('.TheTabCard') as HTMLDivElement;
    tabCard.style.height = `${tabCard.offsetHeight}px`;
    tabCard.style.width = `${tabCard.offsetWidth}px`;
});

let activeTypeForAnimation = ref('all');

function filterArray(activeType: string) {
    arr = backupArr;

    console.log(activeType)

    const allTypes = props.arrSelectionHeaderItems.map((item) => item.type);

    console.log(allTypes)

    if (!allTypes.includes(activeType)) {
        throw new Error('Invalid type');
    }

    if (activeType === activeTypeForAnimation.value) return;


    if (activeType != 'all')
        arr = arr.filter((item: (NormalItem | UserItem)) => item.type === activeType);

    activeTypeForAnimation.value = activeType;
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