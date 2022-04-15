import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { addCartItem } from '@/apis';
import { QUERY, URLS } from '@/constants';

export const useAddCartItemMutation = (productId: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(addCartItem, {
    retry: false,

    onSuccess: (response) => {
      let message = response.data.message || '';

      if (message) message += ' ';

      message += '장바구니로 이동하시겠습니까?';

      if (confirm(message)) {
        navigate(URLS.CLIENT.CART);
      }

      queryClient.refetchQueries(QUERY.CART.COUNT);
    },

    onError: () => {
      alert('장바구니에 상품을 담을 수 없습니다.');
      queryClient.refetchQueries([QUERY.PRODUCT.DETAIL, productId]);
    },
  });
};
