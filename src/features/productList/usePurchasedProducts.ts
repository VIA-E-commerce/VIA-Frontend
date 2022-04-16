import { useQuery } from 'react-query';

import { fetchPurchasedProducts, PurchasedProductsQuery } from '@/apis';
import { QUERY } from '@/constants';
import { getValidPagingQuery } from '@/utils';

export const useReviewableProducts = (props: PurchasedProductsQuery) => {
  const { pageNum, pageSize } = getValidPagingQuery(props);

  const { data, ...rest } = useQuery(
    QUERY.USER.PURCHASED_PRODUCTS,
    () => fetchPurchasedProducts({ pageNum, pageSize, filter: props.filter }),
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
