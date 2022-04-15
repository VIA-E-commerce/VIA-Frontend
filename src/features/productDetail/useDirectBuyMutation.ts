import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { addCartItem } from '@/apis';
import { QUERY, URLS } from '@/constants';

export const useDirectBuyMutation = (productId: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(addCartItem, {
    retry: false,

    onSuccess: (response) => {
      const { id, message } = response.data;

      const params = new URLSearchParams();
      params.append(URLS.PARAM.CART_ITEM_ID, id.toString());

      if (message) {
        alert(message);
      }

      navigate({
        pathname: URLS.CLIENT.ORDER,
        search: params.toString(),
      });
    },

    onError: () => {
      alert('상품을 구매할 수 없습니다.');
      queryClient.refetchQueries([QUERY.PRODUCT.DETAIL, productId]);
    },
  });
};
