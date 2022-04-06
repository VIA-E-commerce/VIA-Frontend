import { useQuery } from 'react-query';

import { fetchMyOrders } from '@/apis';
import { QUERY } from '@/constants';
import { PagingQuery } from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useMyOrders = (props: PagingQuery) => {
  const { pageNum, pageSize } = getValidPagingQuery(props);

  const { data } = useQuery(
    [
      QUERY.ORDER.MINE,
      {
        pageNum,
        pageSize,
      },
    ],
    () => fetchMyOrders({ pageNum, pageSize }),
  );

  return { data: data?.data };
};
