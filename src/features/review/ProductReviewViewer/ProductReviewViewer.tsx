import React from 'react';

import { Pagination } from '@/components';
import { useDetailTabPageButton } from '@/hooks';
import { PaginationResponse, ReviewResponse, ReviewSortMethod } from '@/types';

import { ReviewList } from '../ReviewList';
import { Wrapper, ReivewSortMenu } from './ProductReviewViewer.styles';

interface ReviewSortMethodItem {
  label: string;
  method: ReviewSortMethod;
}
const reviewSortMethods: ReviewSortMethodItem[] = [
  {
    label: '최신순',
    method: '',
  },
  {
    label: '높은 평점순',
    method: 'rating-desc',
  },
  {
    label: '낮은 평점순',
    method: 'rating-asc',
  },
];

const REVIEW_PAGE_RANGE = 5;

interface ProductReviewViewerProps {
  data?: PaginationResponse<ReviewResponse>;
  tabId: string;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  sort: ReviewSortMethod;
  setSort: React.Dispatch<React.SetStateAction<ReviewSortMethod>>;
}

const ProductReviewViewer = ({
  data: reviewPagination,
  tabId,
  pageNum,
  setPageNum,
  sort,
  setSort,
}: ProductReviewViewerProps) => {
  const handleClickPageButton = useDetailTabPageButton({
    to: tabId,
    setPageNum,
    offset: 40,
  });
  const reviews = reviewPagination?.list;

  const handleClickSortButton = (method: ReviewSortMethod) => {
    setSort((prev) => {
      if (prev === method) return prev;

      setPageNum(1); // 후기 정렬 방식 변경 시 → 페이지 번호 초기화
      return method;
    });
  };

  return (
    <Wrapper>
      <ReivewSortMenu>
        {reviewSortMethods.map((sortMethod) => {
          const className = sort === sortMethod.method ? 'active' : '';

          return (
            <li
              key={sortMethod.method}
              className={className}
              onClick={() => handleClickSortButton(sortMethod.method)}
            >
              {sortMethod.label}
            </li>
          );
        })}
      </ReivewSortMenu>
      <ReviewList reviews={reviews} />
      <Pagination
        currentPage={pageNum}
        totalPages={reviewPagination?.totalPages || 1}
        pageRange={REVIEW_PAGE_RANGE}
        onClickPageButton={handleClickPageButton}
      />
    </Wrapper>
  );
};

export default ProductReviewViewer;
