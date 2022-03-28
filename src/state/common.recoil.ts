import { atom } from 'recoil';

import { UserSummary } from '@/types';

export const headerBorderState = atom({
  key: 'headerBorderState',
  default: true,
});

export const headerHideState = atom({
  key: 'headerHideState',
  default: false,
});

export const currentUserState = atom<UserSummary | undefined>({
  key: 'currentUserState',
  default: undefined,
});
