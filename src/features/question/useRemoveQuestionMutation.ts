import { QueryKey, useMutation, useQueryClient } from 'react-query';

import { removeQuestion } from '@/apis';

export const useRemoveQuestionMutation = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();

  return useMutation(removeQuestion, {
    onSuccess: () => {
      queryClient.refetchQueries(queryKey);
      alert('상품 문의가 삭제되었습니다.');
    },
    onError: () => {
      alert('삭제 중 오류가 발생했습니다.');
    },
  });
};
