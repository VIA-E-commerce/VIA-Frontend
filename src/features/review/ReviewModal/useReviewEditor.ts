import React, { useCallback } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { QueryKey } from 'react-query';

import { useCreateReviewMutation } from '@/features/review';
import { reviewEditorState, reviewModalState } from '@/state';

import { useEditReviewMutation } from '../useEditReviewMutation';

export const useReviewEditor = (queryKey: QueryKey) => {
  const [{ show }, setReviewModal] = useRecoilState(reviewModalState);

  const [
    { reviewId, rating, content, imageUrl, productId, productName, mode },
    setReviewEditor,
  ] = useRecoilState(reviewEditorState);

  const { mutate: createMutate } = useCreateReviewMutation();
  const { mutate: editMutate } = useEditReviewMutation(queryKey);
  const resetReviewForm = useResetRecoilState(reviewEditorState);

  // 로컬 함수
  const closeModal = useCallback(() => {
    if (confirm('작성을 취소하시겠습니까? 작성 중인 내용은 사라지게 됩니다.')) {
      setReviewModal((prev) => ({ ...prev, show: false }));
      resetReviewForm();
    }
  }, []);

  // 이벤트 핸들러
  const onMouseDown = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const onChangeRating = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      const { value } = event.target;
      setReviewEditor((prev) => ({
        ...prev,
        rating: Number(value),
      }));
    },
    [],
  );

  const onChangeContent = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      event.preventDefault();

      const { value } = event.target;
      setReviewEditor((prev) => ({
        ...prev,
        content: value,
      }));
    },
    [],
  );

  const onClickUrlButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, newUrl?: string) => {
      event.preventDefault();

      setReviewEditor((prev) => ({
        ...prev,
        imageUrl: newUrl,
      }));
    },
    [],
  );

  const onSubmit = () => {
    if (!content) {
      alert('후기 내용을 입력해주세요.');
      return;
    }

    if (!productId) {
      alert('상품 정보가 존재하지 않습니다.');
      return;
    }

    if (mode === 'add') {
      createMutate({
        rating,
        content,
        imageUrl,
        productId,
      });
    } else if (reviewId) {
      editMutate({
        reviewId,
        rating,
        content,
        imageUrl,
      });
    }
  };

  return {
    show,
    onMouseDown,

    rating,
    content,
    imageUrl,
    productName,
    onChangeRating,
    onChangeContent,
    onClickUrlButton,
    onSubmit,

    mode,
  };
};
