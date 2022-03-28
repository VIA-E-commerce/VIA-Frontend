import { useQuery } from 'react-query';

import { fetchProducts, FetchProductsProps } from '@/apis';
import { QUERY } from '@/constants';
import {
  ResponseEntity,
  PaginationResponse,
  ProductCardResponse,
} from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useProductList = (props: FetchProductsProps) => {
  const { pageNum, pageSize } = getValidPagingQuery({
    pageNum: props.pageNum,
    pageSize: props.pageSize,
  });

  const { data, ...rest } = useQuery<
    ResponseEntity<PaginationResponse<ProductCardResponse>>
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
