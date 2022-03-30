import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { questionEditorState, questionModalState } from '@/state';
import { QuestionResponse } from '@/types';

import { useRemoveQuestionMutation } from './useRemoveQuestionMutation';

interface Props {
  question: QuestionResponse;
}

export const useQuestionItem = ({ question }: Props) => {
  const setQuestionForm = useSetRecoilState(questionEditorState);
  const setQUestionModal = useSetRecoilState(questionModalState);

  const { mutate } = useRemoveQuestionMutation();

  const handleClickEdit = useCallback(() => {
    setQuestionForm({
      title: question.title,
      content: question.content,
      isPrivate: question.isPrivate,
      mode: 'edit',
      questionId: question.id,
    });
    setQUestionModal({ show: true });
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
