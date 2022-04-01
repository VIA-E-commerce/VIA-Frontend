import { useCallback } from 'react';
import { QueryKey, useMutation, useQueryClient } from 'react-query';

import { removeReview } from '@/apis';

export const useRemoveReviewMutation = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(removeReview, {
    onSuccess: () => {
      queryClient.refetchQueries(queryKey);
    },
    onError: () => {
      alert('상품 후기 삭제 중 오류가 발생했습니다.');
    },
  });

  const onClickRemove = useCallback((reviewId: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutate(reviewId);
    }
  }, []);

  return {
    onClickRemove,
  };
};
