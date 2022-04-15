import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { fetchCartCount as fetchCartItemCount, fetchMe } from '@/apis';
import { QUERY } from '@/constants';
import { cartItemCountState, currentUserState } from '@/state';
import { UserSummary } from '@/types';

export const useMe = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setCartCount = useSetRecoilState(cartItemCountState);

  const setMe = (userSummary?: UserSummary) => {
    setCurrentUser(userSummary);
  };

  const { data, refetch, ...rest } = useQuery(QUERY.AUTH.ME, fetchMe, {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: async (response) => {
      setMe(response.data);

      const cartItemCount = (await fetchCartItemCount()).data;
      setCartCount(cartItemCount);
    },
  });

  const handleRefetch = () => {
    refetch()
      .then(({ data: response }) => {
        const userSummary = response?.data;
        setMe(userSummary);
      })
      .catch(() => {
        setCurrentUser(undefined);
      });
  };

  return {
    data: data?.data,
    refetch: handleRefetch,
    ...rest,
  };
};
