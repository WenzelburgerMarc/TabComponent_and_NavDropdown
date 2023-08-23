export interface UserItem {
    avatarURL?: string;
    isOnline: boolean;
    name: string;
    joinedAt: string;
    type: string;
}

export interface NormalItem {
    iconClass: string;
    fileName: string;
    infoText: string;
    type: string;
}



import {Ref} from 'vue';
export interface HeaderSelectionItem {
    text: string;
    iconClass?: string;
    isActive: Ref<boolean>;
    type: string;
}
