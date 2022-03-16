import { fetchProduct } from '@/apis';
import { QUERY } from '@/constants';
import { useQuery } from 'react-query';

export const useProductDetail = (productId: number) => {
  const { data } = useQuery(
    [QUERY.PRODUCT.DETAIL, productId],
    () => fetchProduct(productId),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data: data?.data,
  };
};
