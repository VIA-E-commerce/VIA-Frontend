import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchProductReviews, FetchProductReviewsProps } from '@/apis';
import { QUERY } from '@/constants';
import { ReviewSortMethod } from '@/types';

export const useProductReviews = ({
  productId,
  pageSize,
}: FetchProductReviewsProps) => {
  const [pageNum, setPageNum] = useState(1);
  const [sort, setSort] = useState<ReviewSortMethod>('');

  const { data, ...rest } = useQuery(
    [QUERY.PRODUCT.REVIEWS, { productId, pageNum, sort }],
    () => fetchProductReviews({ productId, pageSize, pageNum, sort }),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data: data?.data,
    reviewPageNum: pageNum,
    setReviewPageNum: setPageNum,
    reviewSort: sort,
    setReviewSort: setSort,
    ...rest,
  };
};
