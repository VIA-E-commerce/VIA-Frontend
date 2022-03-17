import React from 'react';

import { LabelField, SquareButton, NumberInput } from '@/components';
import { ProductDetailResponse } from '@/types';
import { formatPrice } from '@/utils';

import { ColorSelector } from '../ColorSelector';
import { SizeSelector } from '../SizeSelector';
import { useProductControlPanel } from '../../useProductControlPanel';
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
        <LabelField label="수량">
          <NumberInput name="quantity" value={quantity} {...numberInputProps} />
        </LabelField>
      </section>

      <section>
        <LabelField label="총 합계" size="large">
          <TotalPrice>{formatPrice(totalPrice)}원</TotalPrice>
        </LabelField>
        <BuyButtonGroup cols={2} gap={8}>
          <SquareButton variant="outline">장바구니</SquareButton>
          <SquareButton>바로구매</SquareButton>
        </BuyButtonGroup>
      </section>
    </>
  );
};

export default ControlPanel;
