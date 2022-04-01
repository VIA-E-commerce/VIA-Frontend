import { atom } from 'recoil';

export const imageModalState = atom({
  key: 'imageModalState',
  default: {
    show: false,
    imageUrl: undefined as string | undefined,
  },
});

export const questionModalState = atom({
  key: 'questioModalState',
  default: {
    show: false,
  },
});
