import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { QueryKey } from 'react-query';

import { questionEditorState, questionModalState } from '@/state';
import { QuestionResponse } from '@/types';

import { useRemoveQuestionMutation } from '../useRemoveQuestionMutation';

interface Props {
  question: QuestionResponse;
  queryKey: QueryKey;
}

export const useQuestionItem = ({ question, queryKey }: Props) => {
  const setQuestionForm = useSetRecoilState(questionEditorState);
  const setQuestionModal = useSetRecoilState(questionModalState);

  const { mutate } = useRemoveQuestionMutation(queryKey);

  const handleClickEdit = useCallback(() => {
    setQuestionForm({
      title: question.title,
      content: question.content,
      isPrivate: question.isPrivate,
      mode: 'edit',
      questionId: question.id,
      productId: question.productId,
      productName: question.productName,
    });
    setQuestionModal({ show: true });
  }, [question]);

  const handleClickRemove = useCallback(() => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutate(question.id);
    }
  }, [question.id]);

  return {
    handleClickEdit,
    handleClickRemove,
  };
};
