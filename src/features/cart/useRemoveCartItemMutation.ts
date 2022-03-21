import { useMutation, useQueryClient } from 'react-query';

import { removeCartItem } from '@/apis';
import { QUERY } from '@/constants';

export const useRemoveCartItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(removeCartItem, {
    onSuccess: () => {
      queryClient.refetchQueries(QUERY.CART.MINE);
    },
  });
};
