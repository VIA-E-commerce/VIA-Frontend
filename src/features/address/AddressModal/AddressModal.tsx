import React from 'react';
import { useRecoilState } from 'recoil';

import { Modal } from '@/components';
import { PostCode } from '@/lib';
import { addressModalState } from '@/state';

import { Wrapper } from './AddressModal.styles';

const AddressModal = () => {
  const [{ show }, setAddressModalState] = useRecoilState(addressModalState);
  const handleClick = () =>
    setAddressModalState((prev) => ({ ...prev, show: false }));

  return (
    <Modal show={show} onClick={handleClick}>
      <Wrapper onClick={(event) => event.stopPropagation()}>
        {show && <PostCode />}
      </Wrapper>
    </Modal>
  );
};

export default AddressModal;
