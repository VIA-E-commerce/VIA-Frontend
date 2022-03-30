import { useMutation, useQueryClient } from 'react-query';

import { removeQuestion } from '@/apis';
import { QUERY } from '@/constants';

export const useRemoveQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(removeQuestion, {
    onSuccess: () => {
      queryClient.refetchQueries(QUERY.PRODUCT.QUESTIONS);
      alert('상품 문의가 삭제되었습니다.');
    },
    onError: () => {
      alert('삭제 중 오류가 발생했습니다.');
    },
  });
};
