import React from 'react';
import { useSetRecoilState } from 'recoil';

import { SquareButton, StarRating, TransparentButton } from '@/components';
import { imageModalState } from '@/state';
import { ReviewResponse } from '@/types';
import { formatDate } from '@/utils';

import {
  Wrapper,
  ReviewHeader,
  ReviewBody,
  ReviewImage,
  ReviewContent,
  ReviewFooter,
} from './ReviewItem.styles';

interface ReviewItemProps {
  review: ReviewResponse;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const setImageModalShow = useSetRecoilState(imageModalState);

  return (
    <Wrapper>
      <ReviewHeader>
        <div>
          <StarRating rating={review.rating} />
        </div>
        <div>{formatDate(review.createdAt)}</div>
        <div>{review.author}</div>
      </ReviewHeader>
      <ReviewBody>
        <ReviewContent>{review.content}</ReviewContent>
        <ReviewImage>
          {review.imageUrl && (
            <TransparentButton>
              <img
                src={review.imageUrl}
                alt="후기 이미지"
                onClick={() =>
                  setImageModalShow({
                    show: true,
                    imageUrl: review.imageUrl,
                  })
                }
              />
            </TransparentButton>
          )}
        </ReviewImage>
      </ReviewBody>
      <ReviewFooter>
        이 후기가 도움이 되셨나요?
        <SquareButton variant="outline">네</SquareButton>
      </ReviewFooter>
    </Wrapper>
  );
};

export default React.memo(ReviewItem);
