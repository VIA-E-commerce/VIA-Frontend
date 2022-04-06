import React, { useCallback, useState } from 'react';

import { Empty, Loading, Pagination, Tab } from '@/components';
import { QUERY } from '@/constants';
import { useMyReviews, ReviewModal } from '@/features/review';
import { MyReviewItem } from '@/features/mypage';

const PAGE_SIZE = 10;
const PAGE_RANGE = 5;

const MyReviews = () => {
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
      <Tab>
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
      </Tab>
      <ReviewModal queryKey={QUERY.USER.MY_REVIEWS} />
    </>
  );
};

export default MyReviews;
