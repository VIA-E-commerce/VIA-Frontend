import React from 'react';
import { MdShare, MdFavoriteBorder } from 'react-icons/md';

import { GridSection, LabelField, SquareButton } from '@/components';
import { BUSINESS } from '@/constants';
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
  ProductPrice,
  InfoFooter,
} from './ProductFeatureCard.styles';

interface ProductFeatureCardProps {
  product: ProductDetailResponse;
}

const ProductFeatureCard = ({ product }: ProductFeatureCardProps) => {
  const pointEarningRate = calcRoundedPercentage(BUSINESS.POINT_EARNING_RATE);
  const point = calcIntegerPercentage(product.sellingPrice, pointEarningRate);

  return (
    <GridSection cols={1} rowGap={8}>
      <TopButtonGroup>
        <MdShare />
        <MdFavoriteBorder />
      </TopButtonGroup>
      <Wrapper>
        <ProductImages>
          <img src={product.images[0]} alt="상품 대표 이미지" />
        </ProductImages>

        <ProductDetailInfo>
          <InfoBody>
            <section>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                <span className="selling-price">
                  {formatPrice(product.sellingPrice)}원
                </span>
                <span className="retail-price">
                  {formatPrice(product.retailPrice)}
                </span>
              </ProductPrice>
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
