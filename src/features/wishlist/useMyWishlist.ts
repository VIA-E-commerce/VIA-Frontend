import { useQuery } from 'react-query';

import { fetchMyWishlist } from '@/apis';
import { QUERY } from '@/constants';
import { PagingQuery } from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useMyWishlist = (props: PagingQuery) => {
  const { pageNum, pageSize } = getValidPagingQuery(props);

  const { data, ...rest } = useQuery(
    [
      QUERY.WISHLIST,
      {
        pageNum,
        pageSize,
      },
    ],
    () => fetchMyWishlist({ pageNum, pageSize }),
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
