import { useMutation, useQueryClient } from 'react-query';

import { addQuestion } from '@/apis';
import { QUERY } from '@/constants';

export const useAddQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(addQuestion, {
    onSuccess: () => {
      queryClient.refetchQueries(QUERY.PRODUCT.QUESTIONS);
      alert('상품 문의가 등록되었습니다.');
    },
    onError: () => {
      alert('상품 문의 등록 중 오류가 발생했습니다.');
    },
  });
};
