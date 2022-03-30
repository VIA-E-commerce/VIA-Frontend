import { useMutation, useQueryClient } from 'react-query';

import { editQuestion } from '@/apis';
import { QUERY } from '@/constants';

export const useEditQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(editQuestion, {
    onSuccess: () => {
      queryClient.refetchQueries(QUERY.PRODUCT.QUESTIONS);
      alert('문의 내용이 수정되었습니다.');
    },
    onError: () => {
      alert('수정 중 오류가 발생했습니다.');
    },
  });
};
