import React from 'react';
import { useRecoilState } from 'recoil';

import { Modal } from '@/components';
import { reviewModalStateAtom } from '@/state';

import { ImageCard } from './ReviewModal.styles';

const ReviewModal = () => {
  const [{ show, imageUrl }, setReviewModalState] =
    useRecoilState(reviewModalStateAtom);
  const handleMouseDown = () =>
    setReviewModalState((prev) => ({ ...prev, show: false }));

  return (
    <Modal show={show} onMouseDown={handleMouseDown}>
      <ImageCard onClick={(event) => event.stopPropagation()}>
        <img src={imageUrl} />
      </ImageCard>
    </Modal>
  );
};

export default ReviewModal;
