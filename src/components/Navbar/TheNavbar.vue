<template>
    <div class="navbar fixed top-0 left-0 w-screen h-20 bg-slate-700 flex justify-between items-center fade-down-enter-start"
        :class="isLoaded ? 'fade-down-enter-end' : ''">
        <nav-brand-item class="mr-auto relative" />

        <mobile-toggle-btn v-if="isMobile" @click="toggleMobile" class="fixed right-3" />

        <transition name="translate-down" mode="out-in">
            <div :key="isMobileActive.toString()"
                :class="[isMobileActive ? '' : 'hidden', isMobile ? 'translate-y-20' : 'translate-y-0']"
                class="item-container flex flex-col items-center sm:flex-row bg-slate-700 p-1 rounded-b-md mt-auto sm:mt-0">

                <nav-item :is-active="true" text="Home" class="sm:mr-5 mb-1 sm:mb-0" />
                <nav-item text="About Me" class="sm:mr-5 mb-1 sm:mb-0" />
                <nav-item text="Contact" class="sm:mr-5 mb-1 sm:mb-0" />
                <nav-dropdown-item text="Settings" :drop-down-items="arrDropDownItems" />

            </div>
        </transition>

    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

import NavBrandItem from './Items/NavBrandItem.vue';
import NavItem from './Items/NavItem.vue';
import NavDropdownItem from './Items/NavDropdownItem.vue';
import MobileToggleBtn from './Items/MobileToggleBtn.vue';

let isMobileActive = ref(false);
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

const arrDropDownItems = [
    {
        text: "Settings",
        iconClass: "bx-cog",
        actionEvent: () => { }
    },
    {
        text: "Profile",
        iconClass: "bx-user",
        actionEvent: () => { }
    },
    {
        text: "Logout",
        iconClass: "bx-log-out",
        actionEvent: () => { }
    }
];


let isLoaded = ref(false);
onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true;
    }, 1000);


});

onBeforeUnmount(() => {
    window.removeEventListener("resize", checkIsMobile);

});


</script>
<style scoped>
.fade-down-enter-start {
    opacity: 0 !important;
    transform: translateY(-100%) !important;
}

.fade-down-enter-end {
    transition: all 0.25s ease-in-out;
    opacity: 1 !important;
    transform: translateY(0) !important;
}
</style>