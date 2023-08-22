<template>
    <div class="navbar fixed top-0 left-o w-screen h-20 bg-slate-700 flex justify-between items-center">
        <nav-brand-item class="mr-auto" />
        <nav-item class="mr-5" />
        <nav-item class="mr-5" />
        <nav-item class="mr-5" />
        <nav-dropdown-item class="mr-5" />
    </div>
</template>
<script setup lang="ts">
import NavBrandItem from './Items/NavBrandItem.vue';
import NavItem from './Items/NavItem.vue';
import NavDropdownItem from './Items/NavDropdownItem.vue';
</script>
<style scoped></style>