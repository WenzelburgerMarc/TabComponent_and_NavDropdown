<template>
    <div @mouseenter="isActive = true" @mouseleave="isActive = false"
        class="relative flex flex-col items-center hover:cursor-pointer h-12 dropdown">

        <div class="header flex flex-col items-center  h-12  ">
            <div class="container w-full h-full flex bg-slate-800 p-3 rounded-md">
                <i class="bx bx-cog text-white text-xl font-light mr-2 toFront"></i>

                <h1 class="text-container text-white text-base font-light toFront">
                    Settings
                </h1>

                <i :class="isActive ? 'rotate-180' : ''"
                    class="bx bx-chevron-down icon text-white text-xl font-light ml-2 toFront"></i>
            </div>

            <div :class="isActive ? 'w-11/12' : 'w-0'" class="divider toFront h-0.5 bg-white mt-1 opacity-50 "></div>


        </div>



        <div class="behindHeaderBeforeBG absolute pointer-events-none top-0 w-full expandable pt-[3rem]  flex flex-col justify-center items-start rounded-md pb-3 "
            :class="isActive ? 'open' : ''">

            <drop-down-item class="pointer-events-auto mt-0.5" />
            <drop-down-item class="pointer-events-auto" />
            <drop-down-item class="pointer-events-auto" />
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DropDownItem from './Dropdown/DropDownItem.vue';

let isActive = ref(false);


</script>
<style scoped>
.icon,
.divider {

    transition: all 0.2s ease-in-out;
}

.expandable {
    transition: all 0.25s ease-in-out;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    background: linear-gradient(#ea8d8d, #a890fe);
}

.expandable.open {
    opacity: 1;
    transform: scale(1);
}

.toFront {
    z-index: 1000;
}

.behindHeaderBeforeBG {
    z-index: 999;
}
</style>