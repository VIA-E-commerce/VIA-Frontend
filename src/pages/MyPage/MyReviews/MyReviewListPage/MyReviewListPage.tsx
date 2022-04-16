import React, { useCallback, useState } from 'react';

import { Empty, Loading, Pagination } from '@/components';
import { useMyReviews } from '@/features/review';
import { MyReviewItem } from '@/features/mypage';

const PAGE_SIZE = 10;
const PAGE_RANGE = 5;

const MyReviewListPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data: pagination } = useMyReviews({
    pageNum,
    pageSize: PAGE_SIZE,
  });

  const reviews = pagination?.list;

  const onClickPageButton = useCallback((page: number) => {
    setPageNum(page);
  }, []);

  if (!pagination || !reviews) {
    return <Loading />;
  }

  return (
    <>
      <div>
        {reviews.length === 0 ? (
          <Empty text="작성된 후기가 없습니다" />
        ) : (
          reviews.map((review) => (
            <MyReviewItem key={review.id} review={review} />
          ))
        )}
      </div>
      <Pagination
        pageRange={PAGE_RANGE}
        totalPages={pagination.totalPages}
        currentPage={pageNum}
        onClickPageButton={onClickPageButton}
      />
    </>
  );
};

export default MyReviewListPage;
