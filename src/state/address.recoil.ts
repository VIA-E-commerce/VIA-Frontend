import { atom } from 'recoil';

export const addressModalState = atom({
  key: 'addressModalState',
  default: {
    show: false,
  },
});

export interface AddressInputState {
  postalCode: string;
  address: string;
  addressDetail?: string;
}
export const addressInputState = atom({
  key: 'addressInputState',
  default: {
    postalCode: '',
    address: '',
    addressDetail: '',
  } as AddressInputState,
});
