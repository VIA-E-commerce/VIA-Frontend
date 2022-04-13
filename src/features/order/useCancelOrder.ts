import { useMutation, useQueryClient } from 'react-query';

import { cancelOrder } from '@/apis';
import { QUERY } from '@/constants';

export const useCancelOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(cancelOrder, {
    onSuccess: () => {
      alert('주문이 취소되었습니다.');
      queryClient.refetchQueries(QUERY.ORDER.MINE);
    },
    onError: () => {
      alert('주문 취소 중 오류가 발생했습니다.');
    },
  });
};
