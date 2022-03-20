import { useQuery } from 'react-query';

import { fetchMyCart } from '@/apis';
import { QUERY } from '@/constants';

export const useCartItemList = () => {
  const { data, ...rest } = useQuery(QUERY.CART.MINE, fetchMyCart, {
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
