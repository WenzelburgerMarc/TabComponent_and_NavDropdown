<template>
    <div class="navbar fixed top-0 left-0 w-screen h-20 bg-slate-700 flex justify-between items-center "
        :class="isLoaded ? 'fade-down' : ''">
        <nav-brand-item class="mr-auto relative" />

        <mobile-toggle-btn v-if="isMobile" @click="toggleMobile" class="fixed right-3" />


        <div :class="[isMobileActive ? 'active' : 'pointer-events-none', isMobile ? 'translate-y-[calc(-20px+5rem)]' : 'desktopNav']"
            class="item-container flex flex-col items-center sm:flex-row bg-slate-700 p-1 rounded-b-md mt-auto sm:mt-0 opacity-0 ">

            <nav-item :is-active="true" text="Home" class="sm:mr-5 mb-1 sm:mb-0" />
            <nav-item text="About Me" class="sm:mr-5 mb-1 sm:mb-0" />
            <nav-item text="Contact" class="sm:mr-5 mb-1 sm:mb-0" />
            <nav-dropdown-item text="Settings" :drop-down-items="arrDropDownItems" />

        </div>


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


window.onresize = function () {
    var doLater;
    setAllTransitions(false);
    clearTimeout(doLater);
    doLater = setTimeout(() => setAllTransitions(true), 100);

    checkIsMobile();
};

function setAllTransitions(val: boolean) {
    const elements = document.querySelectorAll('*') as NodeListOf<HTMLElement>;
    if (val) {

        for (const element of elements) {
            element.style.transition = '';
        }
    } else {

        for (const element of elements) {
            element.style.transition = 'none';
        }
    }
}


onMounted(() => {
    checkIsMobile();
});


function toggleMobile() {
    isMobileActive.value = !isMobileActive.value;
}

const arrDropDownItems = [
    {
        text: "Premium",
        iconClass: "bx-star",
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
.item-container {
    transition: all 0.25s ease-in-out;
}

.active {
    opacity: 1;
    transform: translateY(5rem);
}

.navbar {
    z-index: 10000 !important;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.25s ease-in-out;
}

.desktopNav {
    opacity: 1;
    transform: translateY(0);
}

.fade-down {

    opacity: 1;
    transform: translateY(0);
}
</style>