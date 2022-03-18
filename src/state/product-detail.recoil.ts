import { atom } from 'recoil';

export const reviewModalStateAtom = atom({
  key: 'reviewModalState',
  default: {
    show: false,
    imageUrl: undefined as string | undefined,
  },
});
