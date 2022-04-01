import React from 'react';
import { Link } from 'react-router-dom';

import { StarRating, TransparentButton } from '@/components';
import { QUERY, URLS } from '@/constants';
import { useRemoveReviewMutation } from '@/features/review';
import { MyReviewResponse } from '@/types';
import { formatDate } from '@/utils';

import {
  Wrapper,
  Header,
  ButtonGroup,
  Body,
  ContentBox,
  ImageBox,
} from './MyReviewItem.styles';

interface Props {
  review: MyReviewResponse;
}

const MyReviewItem = ({ review }: Props) => {
  const { onClickRemove } = useRemoveReviewMutation(QUERY.USER.MY_REVIEWS);
  const productUrl = `${URLS.CLIENT.PRODUCT}/${review.productId}`;

  return (
    <Wrapper>
      <Header>
        <h5>
          <Link to={productUrl}>{review.productName}</Link>
        </h5>
        <ButtonGroup>
          <TransparentButton className="edit">수정</TransparentButton>
          <TransparentButton
            className="delete"
            onClick={() => onClickRemove(review.id)}
          >
            삭제
          </TransparentButton>
        </ButtonGroup>
      </Header>
      <Body>
        <ContentBox>
          <div className="info">
            <StarRating rating={review.rating} />
            <div className="created-at">{formatDate(review.createdAt)}</div>
          </div>
          <div className="content">{review.content}</div>
        </ContentBox>
        <ImageBox>
          <img src={review.imageUrl} />
        </ImageBox>
      </Body>
    </Wrapper>
  );
};

export default MyReviewItem;
