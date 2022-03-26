import React from 'react';
import { DaumPostcode, Address } from 'react-daum-postcode';
import { useSetRecoilState } from 'recoil';

import { addressInputState, addressModalState } from '@/state';

const PostCode = () => {
  const setAddressModalState = useSetRecoilState(addressModalState);
  const setAddressInputState = useSetRecoilState(addressInputState);

  const handleComplete = (data: Address) => {
    setAddressInputState({
      postalCode: data.zonecode,
      address: data.address,
    });
    setAddressModalState((prev) => ({ ...prev, show: false }));
  };

  return (
    <DaumPostcode
      focusInput={true}
      onComplete={handleComplete}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PostCode;
