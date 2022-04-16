import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { writeReview } from '@/apis';
import { QUERY } from '@/constants';
import { reviewEditorState, reviewModalState } from '@/state';

export const useCreateReviewMutation = () => {
  const queryClient = useQueryClient();
  const setReviewModal = useSetRecoilState(reviewModalState);
  const resetReviewEditor = useResetRecoilState(reviewEditorState);

  return useMutation(writeReview, {
    onSuccess: () => {
      queryClient.refetchQueries(QUERY.USER.PURCHASED_PRODUCTS);
      alert('상품 후기 등록 완료');

      setReviewModal((prev) => ({ ...prev, show: false }));
      resetReviewEditor();
    },
    onError: () => {
      alert('상품 후기 등록 중 오류가 발생했습니다.');
    },
  });
};
