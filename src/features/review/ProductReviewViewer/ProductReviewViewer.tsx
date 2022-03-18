import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { scroller } from 'react-scroll';

import { GridSection, Pagination } from '@/components';
import { ReviewItem } from '@/features/review/ReviewItem';
import { headerHideState } from '@/state';
import { styles } from '@/styles';
import { ReviewSortMethod } from '@/types';

import {
  Wrapper,
  ReivewSortMenu,
  ReviewList,
} from './ProductReviewViewer.styles';
import { useProductReviews } from '../useProductReviews';

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

const REVIEW_PAGE_SIZE = 5;
const REVIEW_PAGE_RANGE = 5;

interface ProductReviewViewerProps {
  productId: number;
}

const ProductReviewViewer = ({ productId }: ProductReviewViewerProps) => {
  const [pageNum, setPageNum] = useState(1);
  const [sort, setSort] = useState(reviewSortMethods[0].method);
  const setHeaderHide = useSetRecoilState(headerHideState);
  const { data: pagination } = useProductReviews({
    productId,
    pageNum: pageNum,
    pageSize: REVIEW_PAGE_SIZE,
    sort: sort,
  });
  const reviews = pagination?.list;

  const handleClickPageButton = (
    nextPage: number,
    event?: React.MouseEvent,
  ) => {
    event?.preventDefault();
    event?.stopPropagation();

    setPageNum(nextPage);
    scroller.scrollTo('reviews', {
      offset:
        styles.component.productDetail.tab.navHeight * -1 * styles.remToPx + 40,
    });
    setHeaderHide(true);
  };

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
      <ReviewList>
        {reviews?.length ? (
          reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))
        ) : (
          <GridSection cols={1}>상품 후기를 작성해주세요</GridSection>
        )}
      </ReviewList>
      <Pagination
        currentPage={pageNum}
        totalPages={pagination?.totalPages || 1}
        pageRange={REVIEW_PAGE_RANGE}
        onClickPageButton={handleClickPageButton}
      />
    </Wrapper>
  );
};

export default ProductReviewViewer;
