import { QueryKey, useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { editReview } from '@/apis';
import { reviewEditorState, reviewModalState } from '@/state';

export const useEditReviewMutation = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();
  const setReviewModal = useSetRecoilState(reviewModalState);
  const resetReviewEditor = useResetRecoilState(reviewEditorState);

  return useMutation(editReview, {
    onSuccess: () => {
      queryClient.refetchQueries(queryKey);
      alert('상품 후기 수정 완료');

      setReviewModal((prev) => ({ ...prev, show: false }));
      resetReviewEditor();
    },
    onError: () => {
      alert('상품 후기 수정 중 오류가 발생했습니다.');
    },
  });
};
