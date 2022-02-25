import { useQuery } from 'react-query';

import { fetchMe } from '@/apis';
import { QUERY } from '@/constants';
import { ResponseEntity, UserSummary } from '@/types';

export const useMe = () => {
  const { data, ...rest } = useQuery<ResponseEntity<UserSummary>>(
    QUERY.AUTH.ME,
    fetchMe,
    {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  );

  return {
    data: data?.data,
    ...rest,
  };
};
