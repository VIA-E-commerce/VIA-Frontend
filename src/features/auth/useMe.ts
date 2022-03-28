import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { fetchMe } from '@/apis';
import { QUERY } from '@/constants';
import { currentUserState } from '@/state';
import { ResponseEntity, UserSummary } from '@/types';
export const useMe = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const { data, ...rest } = useQuery<ResponseEntity<UserSummary>>(
    QUERY.AUTH.ME,
    fetchMe,
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  );

  useEffect(() => {
    if (data) {
      const userSummary = data.data;
      setCurrentUser(userSummary);
    } else {
      setCurrentUser(undefined);
    }
  }, [data]);

  return {
    data: data?.data,
    ...rest,
  };
};
