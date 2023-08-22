<template>
    <div class="navbar fixed top-0 left-o w-screen h-20 bg-slate-700 flex justify-between items-center">
        <nav-brand-item class="mr-auto relative" />

        <mobile-toggle-btn v-if="isMobile" @click="toggleMobile" class="fixed right-3" />

        <transition name="translate-down" mode="out-in">
            <div :key="isMobileActive.toString()"
                :class="[isMobileActive ? '' : 'hidden', isMobile ? 'translate-y-20' : 'translate-y-0']"
                class="item-container flex flex-col items-center sm:flex-row bg-slate-700 p-1 rounded-b-md mt-auto sm:mt-0">

                <nav-item class="mr-5" />
                <nav-item class="mr-5" />
                <nav-item class="mr-5" />
                <nav-dropdown-item />

            </div>
        </transition>

    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavBrandItem from './Items/NavBrandItem.vue';
import NavItem from './Items/NavItem.vue';
import NavDropdownItem from './Items/NavDropdownItem.vue';
import MobileToggleBtn from './Items/MobileToggleBtn.vue';

let isMobileActive = ref(true);
let isMobile = ref(false);

function checkIsMobile() {
    isMobile.value = window.innerWidth < 640;

    if (!isMobile.value) {
        isMobileActive.value = true;
    } else {
        isMobileActive.value = false;
    }

}

window.addEventListener("resize", checkIsMobile);


onMounted(() => {
    checkIsMobile();
});


function toggleMobile() {
    isMobileActive.value = !isMobileActive.value;
}

</script>
<style scoped></style>