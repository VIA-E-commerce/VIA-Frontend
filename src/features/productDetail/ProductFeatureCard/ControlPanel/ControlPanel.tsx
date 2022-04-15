import React, { useCallback } from 'react';
import { UseMutateFunction } from 'react-query';
import { AxiosResponse } from 'axios';

import { LabelField, SquareButton, NumberInput } from '@/components';
import {
  AddCartItemRequest,
  AddCartItemResponse,
  ProductDetailResponse,
} from '@/types';
import { formatPrice } from '@/utils';

import { useAddCartItemMutation } from '../../useAddCartItemMutation';
import { useDirectBuyMutation } from '../../useDirectBuyMutation';
import { useProductControlPanel } from '../../useProductControlPanel';
import { ColorSelector } from '../ColorSelector';
import { SizeSelector } from '../SizeSelector';

import { TotalPrice, BuyButtonGroup } from './ControlPanel.styles';

interface ControlPanelProps {
  product: ProductDetailResponse;
}

const ControlPanel = ({ product }: ControlPanelProps) => {
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
    <>
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
          >
            장바구니
          </SquareButton>
          <SquareButton onClick={() => handleClickAddCart(directBuyMutate)}>
            바로구매
          </SquareButton>
        </BuyButtonGroup>
      </section>
    </>
  );
};

export default ControlPanel;
