import { useQuery } from 'react-query';

import { fetchCartItems } from '@/apis';
import { QUERY } from '@/constants';

export const useMyCart = () => {
  const { data, ...rest } = useQuery(
    [QUERY.CART.MINE],
    () => fetchCartItems(),
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
