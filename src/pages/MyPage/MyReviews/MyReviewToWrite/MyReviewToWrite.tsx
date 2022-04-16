import React, { useCallback, useState } from 'react';

import { Empty, GridSection, Loading, Pagination } from '@/components';
import { useReviewableProducts } from '@/features/productList';
import { ReviewableProductCard } from '@/features/review';

const PAGE_SIZE = 8;
const PAGE_RANGE = 5;

const MyReviewToWrite = () => {
  const [pageNum, setPageNum] = useState(1);

  const { data: pagination } = useReviewableProducts({
    pageNum,
    pageSize: PAGE_SIZE,
    filter: 'reviewable',
  });

  const products = pagination?.list;

  const onClickPageButton = useCallback((pageNum: number) => {
    setPageNum(pageNum);
  }, []);

  if (!products) return <Loading />;

  return (
    <div>
      {products.length === 0 ? (
        <Empty text="작성 가능한 후기가 없습니다" />
      ) : (
        <GridSection cols={4}>
          {products.map((product) => (
            <ReviewableProductCard key={product.id} product={product} />
          ))}
        </GridSection>
      )}
      <Pagination
        currentPage={pageNum}
        pageRange={PAGE_RANGE}
        totalPages={pagination?.totalPages}
        onClickPageButton={onClickPageButton}
      />
    </div>
  );
};

export default MyReviewToWrite;
