import { useQuery } from 'react-query';

import { fetchCartItems } from '@/apis';
import { QUERY } from '@/constants';

export const useOrderCartItems = (cartItemIds?: number[]) => {
  const { data, ...rest } = useQuery(
    [QUERY.ORDER.ITEMS, cartItemIds],
    () => fetchCartItems(cartItemIds),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data: data?.data,
    ...rest,
  };
};
