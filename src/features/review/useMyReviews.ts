import { useQuery } from 'react-query';

import { fetchMyReviews } from '@/apis';
import { QUERY } from '@/constants';
import { PagingQuery } from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useMyReviews = (props: PagingQuery) => {
  const { pageNum, pageSize } = getValidPagingQuery(props);

  const { data, ...rest } = useQuery(
    [
      QUERY.USER.MY_REVIEWS,
      {
        pageNum,
        pageSize,
      },
    ],
    () => fetchMyReviews({ pageNum, pageSize }),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data: data?.data,
    ...rest,
  };
};
