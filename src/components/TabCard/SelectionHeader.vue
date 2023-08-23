<template>
    <div class="flex">
        <selection-item text="All" class="mr-5" />
        <selection-item class=" mr-5" icon-class="bx-user" text="Users" />
        <selection-item icon-class="bx-file" text="Files" />
    </div>
</template>
<script setup lang="ts">
import SelectionItem from './Items/SelectionItem.vue';
</script>
<style scoped></style>