<template>
    <div class="flex flex-col w-full h-auto">
        <div v-for="item in props.items">
            <UserListItem v-if="item.type === 'user'" :avatar-u-r-l="item.avatarURL" :is-online="item.isOnline"
                :name="item.name" :joined-at="item.joinedAt" :type="item.type" />

            <FilesListItem v-else :file-name="item.fileName" :icon-class="item.iconClass" :info-text="item.infoText"
                :type="item.type" />
            <ItemDivider />
        </div>
    </div>
</template>
<script setup lang="ts">

import ItemDivider from './Items/ItemDivider.vue';
import UserListItem from './Items/UserListItem.vue';
import FilesListItem from './Items/FilesListItem.vue';

const props = defineProps({
    items: {
        type: Array as any,
        required: true,
    },
});

</script>
<style scoped></style>
