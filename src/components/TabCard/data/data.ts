import { UserItem, NormalItem, HeaderSelectionItem } from '../Types/types.ts';

export const arrUserItems = [
  {
    name: 'Marc Cramer',
    joinedAt: 'Joined 1 minute ago.',
    avatarURL: 'src/assets/avatar.png',
    isOnline: true,
    type: 'user'

  },
  {
    name: 'John Doe',
    joinedAt: 'Joined 30 minutes ago.',
    isOnline: false,
    avatarURL: '',
    type: 'user'
  }
] as UserItem[];

export const arrFileItems = [
  {
    fileName: 'file1.txt',
    iconClass: 'bxs-file-txt',
    infoText: 'Created 1 hour ago.',
    type: 'file'
  },
  {
    fileName: 'file2.pdf',
    iconClass: 'bxs-file-pdf',
    infoText: 'Created 2 hours ago.',
    type: 'file'
  },
  {
    fileName: 'file3.pdf',
    iconClass: 'bxs-file-pdf',
    infoText: 'Created 2 hours ago.',
    type: 'link'
  }
] as NormalItem[];

import { ref } from 'vue';
export const selectionHeaderArr = [ // Type All is default
    {
        text: 'All',
        isActive: ref(true),
        type: 'all',
    },
    {
        text: 'Users',
        isActive: ref(false),
        iconClass: 'bx-user',
        type: 'user',
    },
    {
        text: 'Files',
        isActive: ref(false),
        iconClass: 'bx-file',
        type: 'file',
    },
    {
        text: 'Links',
        isActive: ref(false),
        iconClass: 'bx-link',
        type: 'link',
  },
  {
    text: 'Images',
    isActive: ref(false),
    iconClass: 'bx-image',
    type: 'image',
  }
] as HeaderSelectionItem[];