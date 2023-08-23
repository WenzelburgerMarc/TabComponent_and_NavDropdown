<template>
    <div class="item flex justify-start items-center hover:bg-slate-100 hover:cursor-pointer p-3 rounded-xl">
        <div class="relative img-container">
            <img v-if="!imgError && props.avatarURL != ''" @error="onError" :src="props.avatarURL" alt="user avatar"
                class="w-12 h-12 overflow-hidden bg-slate-300 rounded-xl bg-contain" />
            <div v-else class="w-12 h-12 rounded-xl bg-slate-300 flex justify-center items-center">
                <i class="bx bx-user text-2xl text-slate-500"></i>
            </div>

            <div :class="isOnline ? 'bg-green-500' : 'bg-orange-300'"
                class="active-info absolute border-white border-2 right-[-2px] bottom-[-2px] w-3 h-3 rounded-full">
            </div>
        </div>

        <div class="flex flex-col ml-2">
            <span class="text-base text-black font-semibold truncate">{{ props.name }}</span>
            <span class="text-sm text-gray-400 truncate"> {{ props.joinedAt }}
            </span>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    avatarURL: {
        type: String,
        default: '',
        required: false
    },
    isOnline: {
        type: Boolean,
        default: false,
        required: false
    },
    name: {
        type: String,
        default: 'John Doe',
        required: false
    },
    joinedAt: {
        type: String,
        default: 'Joined - ago.',
        required: false
    },
    type: {
        type: String,
        default: 'user',
        required: false
    }
});

let imgError = ref(false);

function onError() {
    imgError.value = true;
}
</script>
<style scoped>
.item {
    transition: all 0.2s ease-in-out;
}
</style>