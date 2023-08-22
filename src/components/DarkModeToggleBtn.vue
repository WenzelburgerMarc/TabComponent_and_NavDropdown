<template>
    <div>
        <button @click="toggleDarkMode()"
            class="text-black dark:text-white bg-gray-200 dark:bg-gray-500 p-3 rounded-xl">Toggle
            Dark
            Mode</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'DarkModeToggleBtn',
    methods: {
        toggleDarkMode() {

            const elements = document.querySelectorAll('*') as NodeListOf<HTMLElement>;
            for (const element of elements) {
                element.style.transition = 'none';
            }

            document.documentElement.classList.toggle('dark');

            requestAnimationFrame(() => {
                for (const element of elements) {
                    element.style.transition = '';
                }
            });
        }

    }

}
</script>
<style scoped></style>