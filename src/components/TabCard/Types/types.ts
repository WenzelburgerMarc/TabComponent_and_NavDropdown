export interface UserItem {
    avatarURL?: string;
    isOnline: boolean;
    name: string;
    joinedAt: string;
    type: string;
}

export interface FileItem {
    iconClass: string;
    fileName: string;
    infoText: string;
    type: string;
}