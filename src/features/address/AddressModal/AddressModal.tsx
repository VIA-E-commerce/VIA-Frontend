import React from 'react';
import { useRecoilState } from 'recoil';

import { Modal } from '@/components';
import { PostCode } from '@/lib';
import { addressModalState } from '@/state';

import { Wrapper } from './AddressModal.styles';

const AddressModal = () => {
  const [{ show }, setAddressModalState] = useRecoilState(addressModalState);
  const handleMouseDown = () =>
    setAddressModalState((prev) => ({ ...prev, show: false }));

  return (
    <Modal show={show} onMouseDown={handleMouseDown}>
      <Wrapper onClick={(event) => event.stopPropagation()}>
        {show && <PostCode />}
      </Wrapper>
    </Modal>
  );
};

export default AddressModal;
