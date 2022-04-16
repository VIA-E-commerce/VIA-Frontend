import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { SquareButton } from '@/components';
import { URLS } from '@/constants';
import { reviewEditorState, reviewModalState } from '@/state';
import { PurchasedProductResponse } from '@/types';

import {
  Wrapper,
  Card,
  Thumbnail,
  Title,
  BodyRightMenu,
} from './ReviewableProductCard.styles';

interface Props {
  product: PurchasedProductResponse;
}

const ReviewableProductCard = ({ product }: Props) => {
  const setReviewModal = useSetRecoilState(reviewModalState);
  const setReivewEditor = useSetRecoilState(reviewEditorState);

  const handleClickWrite = useCallback(() => {
    setReviewModal({ show: true });
    setReivewEditor({
      rating: 5,
      productId: product.id,
      mode: 'add',
    });
  }, [product]);

  return (
    <Wrapper>
      <Link to={`${URLS.CLIENT.PRODUCT}/${product.id}`}>
        <Card>
          <Thumbnail>
            <img src={product.thumbnail} />
          </Thumbnail>
          <Title>{product.name}</Title>
        </Card>
      </Link>
      <BodyRightMenu>
        <SquareButton
          size="small"
          variant="primary-outline"
          wide
          onClick={handleClickWrite}
        >
          후기 작성
        </SquareButton>
      </BodyRightMenu>
    </Wrapper>
  );
};

export default React.memo(ReviewableProductCard);
