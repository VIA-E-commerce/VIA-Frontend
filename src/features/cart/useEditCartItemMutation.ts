import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { editCartItem } from '@/apis';
import { QUERY } from '@/constants';
import { selectedCartItemsState } from '@/state';

export const useEditCartItemMutation = () => {
  const queryClient = useQueryClient();
  const setSelectedCartItems = useSetRecoilState(selectedCartItemsState);

  return useMutation(editCartItem, {
    onSuccess: (data, variables) => {
      queryClient.fetchQuery(QUERY.CART.MINE);
      setSelectedCartItems((prev) => {
        const { cartItemId, quantity } = {
          cartItemId: variables.cartItemId,
          quantity: variables.request.quantity,
        };

        const newMap = new Map(prev);

        // 선택된 장바구니 항목 중 방금 업데이트된 것이 있으면 정보를 최신화해줍니다.
        const updatedCartItem = prev.get(cartItemId);
        if (updatedCartItem) {
          updatedCartItem.quantity = quantity;
          newMap.set(cartItemId, updatedCartItem);
        }

        return newMap;
      });
    },
  });
};
