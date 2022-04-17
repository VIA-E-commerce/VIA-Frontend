import React, { useCallback } from 'react';
import { UseMutateFunction } from 'react-query';
import { AxiosResponse } from 'axios';

import {
  LabelField,
  SquareButton,
  NumberInput,
  PriceLabel,
} from '@/components';
import { BUSINESS } from '@/constants';
import { useAddCartItemMutation } from '@/features/cart';
import {
  AddCartItemRequest,
  AddCartItemResponse,
  ProductDetailResponse,
} from '@/types';
import {
  calcIntegerPercentage,
  calcRoundedPercentage,
  formatPrice,
} from '@/utils';

import { useDirectBuyMutation } from '../useDirectBuyMutation';
import { useProductControlPanel } from '../useProductControlPanel';

import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import {
  FormSection,
  Body,
  ProductName,
  TotalPrice,
  BuyButtonGroup,
  Footer,
} from './ProductOrderForm.styles';

interface ProductOrderFormProps {
  product: ProductDetailResponse;
}

const ProductOrderForm = ({ product }: ProductOrderFormProps) => {
  const {
    quantity,
    colorId,
    sizeId,
    variant,
    totalPrice,
    setColorId,
    setSizeId,
    variantsFilteredByColor,
    numberInputProps,
  } = useProductControlPanel({ product });

  const { mutate: addCartItemMutate } = useAddCartItemMutation(product.id);
  const { mutate: directBuyMutate } = useDirectBuyMutation(product.id);

  // 포인트
  const pointEarningRate = calcRoundedPercentage(BUSINESS.POINT_EARNING_RATE);
  const point = calcIntegerPercentage(product.sellingPrice, pointEarningRate);

  const handleClickAddCart = useCallback(
    (
      mutate: UseMutateFunction<
        AxiosResponse<AddCartItemResponse>,
        unknown,
        AddCartItemRequest,
        unknown
      >,
    ) => {
      if (!sizeId) return alert('사이즈를 선택해주세요.');

      if (variant) {
        mutate({ variantId: variant.id, quantity });
      }
    },
    [sizeId, variant, quantity],
  );

  return (
    <FormSection>
      <Body>
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

        <section>
          <ColorSelector
            colors={product.colors}
            colorId={colorId}
            setColorId={setColorId}
            variants={product.variants}
          />
          <SizeSelector
            sizes={product.sizes}
            sizeId={sizeId}
            setSizeId={setSizeId}
            variants={variantsFilteredByColor}
          />
          {variant && (
            <LabelField label="수량">
              <NumberInput
                name="quantity"
                value={quantity}
                {...numberInputProps}
              />
            </LabelField>
          )}
        </section>

        <section>
          <LabelField label="총 합계" size="large">
            <TotalPrice>{formatPrice(totalPrice)}원</TotalPrice>
          </LabelField>
          <BuyButtonGroup cols={2} gap={8}>
            <SquareButton
              variant="outline"
              onClick={() => handleClickAddCart(addCartItemMutate)}
              disabled={product.isSoldOut}
            >
              장바구니
            </SquareButton>
            <SquareButton
              onClick={() => handleClickAddCart(directBuyMutate)}
              disabled={product.isSoldOut}
            >
              바로구매
            </SquareButton>
          </BuyButtonGroup>
        </section>
      </Body>

      <Footer>
        <SquareButton variant="outline" wide>
          상품 입고 알림 신청
        </SquareButton>
      </Footer>
    </FormSection>
  );
};

export default ProductOrderForm;
