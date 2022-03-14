import { useQuery } from 'react-query';

import { fetchProducts, FetchProductsProps } from '@/apis';
import { QUERY } from '@/constants';
import { ResponseEntity, Pagination, ProductCardResponse } from '@/types';

export const useProductList = (props: FetchProductsProps) => {
  const pageNum = Math.max(1, props.pageNum);
  const pageSize = Math.max(1, props.pageSize || 1);

  const { data, ...rest } = useQuery<
    ResponseEntity<Pagination<ProductCardResponse>>
  >(
    [
      QUERY.PRODUCT.LIST,
      {
        ...props,
      },
    ],
    () => fetchProducts({ ...props, pageNum, pageSize }),
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
