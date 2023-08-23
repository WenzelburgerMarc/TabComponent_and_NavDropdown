<script setup lang="ts">
import { ref } from 'vue';
import TheNavbar from './components/Navbar/TheNavbar.vue';
import TheTabCard from './components/TabCard/TheTabCard.vue';
import { arrUserItems, arrFileItems, selectionHeaderArr } from './components/TabCard/data/data.ts';

const arr = ref([...arrUserItems, ...arrFileItems]);

</script>

<template>
  <div class="bg-slate-500">
    <the-navbar />

    <div class="container flex justify-center items-center mx-auto h-full w-full min-w-[400px] min-h-screen">
      <the-tab-card class="w-full shadow-lg" :arr-selection-header-items="selectionHeaderArr" :arr-items="arr" />
    </div>
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {

  * {
    transition: none !important;
  }
}
</style>