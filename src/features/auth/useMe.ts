import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { fetchMe } from '@/apis';
import { QUERY } from '@/constants';
import { currentUserState } from '@/state';
import { UserSummary } from '@/types';

export const useMe = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const setMe = (userSummary?: UserSummary) => {
    setCurrentUser(userSummary);
  };

  const { data, refetch, ...rest } = useQuery(QUERY.AUTH.ME, fetchMe, {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: (response) => {
      setMe(response.data);
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
