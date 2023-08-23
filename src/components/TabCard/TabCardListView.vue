<template>
    <div class="flex flex-col w-full h-auto">
        <div v-for="item in props.items">
            <UserListItem v-if="isUserItem(item)" :avatar-u-r-l="item.avatarURL" :is-online="item.isOnline"
                :name="item.name" :joined-at="item.joinedAt" />

            <FilesListItem v-else-if="isFileItem(item)" :file-name="item.fileName" :icon-class="item.iconClass"
                :info-text="item.infoText" />
            <ItemDivider />
        </div>
    </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import ItemDivider from './Items/ItemDivider.vue';
import UserListItem from './Items/UserListItem.vue';
import FilesListItem from './Items/FilesListItem.vue';

import { UserItem, FileItem } from "./Types/types.ts";

const props = defineProps({
    items: {
        type: Array as PropType<(UserItem | FileItem)[]>,
        required: true,
    },
});

function isUserItem(item: UserItem | FileItem): item is UserItem {
    return item.type === 'user';
}

function isFileItem(item: UserItem | FileItem): item is FileItem {
    return item.type === 'file';
}
</script>
<style scoped></style>
