import { useQuery } from 'react-query';

import { fetchMyWishlist } from '@/apis';
import { QUERY } from '@/constants';
import {
  ResponseEntity,
  PaginationResponse,
  ProductCardResponse,
  PagingQuery,
} from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useMyWishlist = (props: PagingQuery) => {
  const { pageNum, pageSize } = getValidPagingQuery(props);

  const { data, ...rest } = useQuery<
    ResponseEntity<PaginationResponse<ProductCardResponse>>
  >(
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
