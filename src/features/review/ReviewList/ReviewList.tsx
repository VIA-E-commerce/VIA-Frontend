import React from 'react';

import { ReviewResponse } from '@/types';

import { ReviewItem } from '../ReviewItem';
import { EmptyList } from './ReviewList.styles';

interface ReviewListProps {
  reviews?: ReviewResponse[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  if (!reviews?.length) return <EmptyList>상품 후기를 남겨주세요</EmptyList>;

  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default React.memo(ReviewList);
