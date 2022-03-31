import { ChangeEvent, FormEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { QueryKey } from 'react-query';

import { questionEditorState, questionModalState } from '@/state';

import { useAddQuestionMutation } from '../useAddQuestionMutation';
import { useEditQuestionMutation } from '../useEditQuestionMutation';

interface Props {
  queryKey: QueryKey;
}

export const useQuestionForm = ({ queryKey }: Props) => {
  const [{ show }, setQuestionModal] = useRecoilState(questionModalState);
  const [
    { title, content, isPrivate, mode, questionId, productId, productName },
    setQuestionForm,
  ] = useRecoilState(questionEditorState);

  const { mutate: addNewQuestion } = useAddQuestionMutation();
  const { mutate: editQuestion } = useEditQuestionMutation(queryKey);

  // 재사용될 함수
  const resetQuestionForm = useCallback(() => {
    setQuestionForm((prev) => ({
      ...prev,
      title: '',
      content: '',
      isPrivate: false,
      mode: 'add',
    }));
  }, []);

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

      if (!productId) {
        alert('상품을 찾을 수 없습니다.');
        return;
      }

      if (mode === 'add') {
        addNewQuestion({
          title,
          content,
          isPrivate,
          productId,
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
    [title, content, isPrivate, mode, questionId, productId],
  );

  return {
    show,
    title,
    content,
    isPrivate,
    productName,
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
