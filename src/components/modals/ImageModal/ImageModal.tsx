import React from 'react';
import { useRecoilState } from 'recoil';

import { imageModalState as ImageModalStateAtom } from '@/state';

import { Modal } from '../Modal';
import { ImageCard } from './ImageModal.styles';

const ImageModal = () => {
  const [{ show, imageUrl }, setImageModalState] =
    useRecoilState(ImageModalStateAtom);

  const handleMouseDown = () =>
    setImageModalState((prev) => ({ ...prev, show: false }));

  return (
    <Modal show={show} onMouseDown={handleMouseDown}>
      <ImageCard>
        <img src={imageUrl} onMouseDown={(event) => event.stopPropagation()} />
      </ImageCard>
    </Modal>
  );
};

export default ImageModal;
