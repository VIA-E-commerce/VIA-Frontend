import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useAddQuestionMutation } from '@/features/question';
import { questionModalState } from '@/state';
import { ProductDetailResponse } from '@/types';

interface Props {
  product: ProductDetailResponse;
}

export const useQuestionForm = ({ product }: Props) => {
  const [{ show }, setQuestionModal] = useRecoilState(questionModalState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const { mutate: addNewQuestion } = useAddQuestionMutation();

  // 재사용될 함수
  const initForm = useCallback(() => {
    setTitle('');
    setContent('');
    setIsPrivate(false);
  }, []);

  const closeModal = useCallback(() => {
    if (
      (!title && !content) ||
      confirm('작성을 취소하시겠습니까? 작성 중인 내용은 사라지게 됩니다.')
    ) {
      setQuestionModal((prev) => ({ ...prev, show: false }));
      initForm();
    }
  }, [title, content]);

  // Modal 이벤트 핸들러
  const onMouseDownModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const onMouseDownForm = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => event.stopPropagation(),
    [],
  );

  const onClickCancel = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      closeModal();
    },
    [closeModal],
  );

  // Form 이벤트 핸들러
  const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  const onChangeContent = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value);
    },
    [],
  );

  const onClickPrivate = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsPrivate((prev) => !prev);
    },
    [],
  );

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!title) {
        alert('제목을 입력해주세요.');
      } else if (!content) {
        alert('내용을 입력해주세요.');
      } else {
        addNewQuestion({
          title,
          content,
          isPrivate,
          productId: product.id,
        });

        setQuestionModal((prev) => ({ ...prev, show: false }));
        initForm();
      }
    },
    [title, content, isPrivate, product],
  );

  return {
    show,
    title,
    content,
    isPrivate,
    onMouseDownModal,
    onMouseDownForm,
    onClickPrivate,
    onClickCancel,
    onChangeTitle,
    onChangeContent,
    onSubmit,
  };
};
