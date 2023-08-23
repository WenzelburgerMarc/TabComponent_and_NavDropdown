<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheNavbar from './components/Navbar/TheNavbar.vue';

let isLoaded = ref(false);
onMounted(() => {

  isLoaded.value = true;

});

</script>

<template>
  <div class="bg-slate-500 w-screen min-h-screen ">
    <transition name="fade-down" mode="out-in">

      <the-navbar :key="isLoaded.toString()" />
    </transition>



  </div>
</template>

<style scoped>
.fade-down-enter-active {
  animation: fadeDownEnter 0.5s ease-in-out;
}

.fade-down-leave-active {
  animation: fadeDownLeave 0.5s ease-in-out;
}

@keyframes fadeDownEnter {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@media (prefers-reduced-motion: reduce) {

  * {
    transition: none !important;
  }
}
</style>