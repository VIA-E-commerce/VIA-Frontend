import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { fetchCartItemCount } from '@/apis';
import { QUERY } from '@/constants';
import { cartItemCountState } from '@/state';

export const useCartItemCount = () => {
  const { data, ...rest } = useQuery([QUERY.CART.COUNT], fetchCartItemCount, {
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const setCartCount = useSetRecoilState(cartItemCountState);
  const cartItemCount = data?.data;

  useEffect(() => {
    setCartCount(cartItemCount);
  }, [cartItemCount]);

  return {
    data: data?.data,
    ...rest,
  };
};
