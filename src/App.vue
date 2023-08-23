<script setup lang="ts">
import TheNavbar from './components/Navbar/TheNavbar.vue';
import TheTabCard from './components/TabCard/TheTabCard.vue';


</script>

<template>
  <div class="bg-slate-500">
    <the-navbar />

    <div class="container flex justify-center items-center mx-auto h-full w-full max-w-[400px] min-h-screen">
      <the-tab-card class="w-full shadow-lg" />
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