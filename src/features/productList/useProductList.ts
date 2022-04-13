import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { fetchProducts, FetchProductsProps } from '@/apis';
import { QUERY } from '@/constants';
import { PaginationResponse, ProductCardResponse } from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useProductList = (props: FetchProductsProps) => {
  const { pageNum, pageSize } = getValidPagingQuery({
    pageNum: props.pageNum,
    pageSize: props.pageSize,
  });

  const { data, ...rest } = useQuery<
    AxiosResponse<PaginationResponse<ProductCardResponse>>
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
