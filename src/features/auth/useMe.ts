import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { fetchMe } from '@/apis';
import { QUERY } from '@/constants';
import { currentUserState } from '@/state';
import { ResponseEntity, UserSummary } from '@/types';
export const useMe = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const setMe = (response?: ResponseEntity<UserSummary>) => {
    const userSummary = response?.data;

    setCurrentUser(userSummary);
  };

  const { data, refetch, ...rest } = useQuery<ResponseEntity<UserSummary>>(
    QUERY.AUTH.ME,
    fetchMe,
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
      onSuccess: (response) => {
        setMe(response);
      },
    },
  );

  const handleRefetch = () => {
    refetch()
      .then((result) => {
        setMe(result.data);
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
