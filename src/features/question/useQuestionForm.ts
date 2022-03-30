import { ChangeEvent, FormEvent, useCallback } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { questionEditorState, questionModalState } from '@/state';
import { ProductDetailResponse } from '@/types';

import { useAddQuestionMutation } from './useAddQuestionMutation';
import { useEditQuestionMutation } from './useEditQuestionMutation';

interface Props {
  product: ProductDetailResponse;
}

export const useQuestionForm = ({ product }: Props) => {
  const [{ show }, setQuestionModal] = useRecoilState(questionModalState);
  const [{ title, content, isPrivate, mode, questionId }, setQuestionForm] =
    useRecoilState(questionEditorState);
  const resetQuestionForm = useResetRecoilState(questionEditorState);

  const { mutate: addNewQuestion } = useAddQuestionMutation();
  const { mutate: editQuestion } = useEditQuestionMutation();

  // 재사용될 함수
  const closeModal = useCallback(() => {
    if (
      (!title && !content) ||
      confirm('작성을 취소하시겠습니까? 작성 중인 내용은 사라지게 됩니다.')
    ) {
      setQuestionModal((prev) => ({ ...prev, show: false }));
      resetQuestionForm();
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
    setQuestionForm((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  }, []);

  const onChangeContent = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setQuestionForm((prev) => ({
        ...prev,
        content: event.target.value,
      }));
    },
    [],
  );

  const onClickPrivate = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setQuestionForm((prev) => ({
        ...prev,
        isPrivate: !prev.isPrivate,
      }));
    },
    [],
  );

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!title) {
        alert('제목을 입력해주세요.');
        return;
      }

      if (!content) {
        alert('내용을 입력해주세요.');
        return;
      }

      if (mode === 'add') {
        addNewQuestion({
          title,
          content,
          isPrivate,
          productId: product.id,
        });
      } else if (questionId) {
        editQuestion({
          questionId,
          title,
          content,
          isPrivate,
        });
      }

      setQuestionModal((prev) => ({ ...prev, show: false }));
      resetQuestionForm();
    },
    [title, content, isPrivate, mode, questionId, product],
  );

  return {
    show,
    title,
    content,
    isPrivate,
    mode,
    onMouseDownModal,
    onMouseDownForm,
    onClickPrivate,
    onClickCancel,
    onChangeTitle,
    onChangeContent,
    onSubmit,
  };
};
