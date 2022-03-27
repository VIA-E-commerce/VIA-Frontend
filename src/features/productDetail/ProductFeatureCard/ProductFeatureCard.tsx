import React from 'react';
import { MdShare } from 'react-icons/md';

import {
  GridSection,
  LabelField,
  PriceLabel,
  SquareButton,
  TransparentButton,
} from '@/components';
import { BUSINESS, QUERY } from '@/constants';
import { useToggleWishlistMutation, WishlistButton } from '@/features/wishlist';
import { ProductDetailResponse } from '@/types';
import {
  calcIntegerPercentage,
  calcRoundedPercentage,
  formatPrice,
} from '@/utils';

import { ControlPanel } from './ControlPanel';
import {
  Wrapper,
  ProductImages,
  TopButtonGroup,
  ProductDetailInfo,
  InfoBody,
  ProductName,
  InfoFooter,
} from './ProductFeatureCard.styles';
import { useQueryClient } from 'react-query';

interface ProductFeatureCardProps {
  product: ProductDetailResponse;
}

const ProductFeatureCard = ({ product }: ProductFeatureCardProps) => {
  const queryClient = useQueryClient();
  const wishlistButtoncallback = () => {
    queryClient.fetchQuery([QUERY.PRODUCT.DETAIL, product.id]);
  };

  const pointEarningRate = calcRoundedPercentage(BUSINESS.POINT_EARNING_RATE);
  const point = calcIntegerPercentage(product.sellingPrice, pointEarningRate);
  const { onToggleWishlist } = useToggleWishlistMutation(
    wishlistButtoncallback,
  );

  return (
    <GridSection cols={1} rowGap={8}>
      <TopButtonGroup>
        <TransparentButton>
          <MdShare />
        </TransparentButton>
        <WishlistButton
          wished={product.wished}
          onClick={() => onToggleWishlist(product.id, product.wished)}
        />
      </TopButtonGroup>
      <Wrapper>
        <ProductImages>
          <img src={product.images[0]} alt="상품 대표 이미지" />
        </ProductImages>

        <ProductDetailInfo>
          <InfoBody>
            <section>
              <ProductName>{product.name}</ProductName>
              <PriceLabel
                size="large"
                sellingPrice={product.sellingPrice}
                retailPrice={product.retailPrice}
              />
            </section>

            <section>
              <LabelField label="포인트">
                {point}
                <span style={{ marginLeft: '0.4rem', color: 'gray' }}>
                  ({pointEarningRate * 100}% 적립)
                </span>
              </LabelField>
              <LabelField label="배송 정보">
                {formatPrice(BUSINESS.FREE_DELIVERY)}원 이상 구매 시 무료배송
              </LabelField>
            </section>

            <ControlPanel product={product} />
          </InfoBody>

          <InfoFooter>
            <SquareButton variant="outline" wide>
              상품 입고 알림 신청
            </SquareButton>
          </InfoFooter>
        </ProductDetailInfo>
      </Wrapper>
    </GridSection>
  );
};

export default ProductFeatureCard;
