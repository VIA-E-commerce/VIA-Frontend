import { useQuery } from 'react-query';

import { fetchProductReviews, FetchProductReviewsProps } from '@/apis';
import { QUERY } from '@/constants';

export const useProductReviews = ({
  productId,
  pageNum,
  pageSize,
  sort,
}: FetchProductReviewsProps) => {
  const { data, ...rest } = useQuery(
    [QUERY.PRODUCT.REVIEWS, { productId, pageNum, sort }],
    () => fetchProductReviews({ productId, pageSize, pageNum, sort }),
  );

  return {
    data: data?.data,
    ...rest,
  };
};
