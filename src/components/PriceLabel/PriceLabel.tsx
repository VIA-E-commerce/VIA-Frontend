import React from 'react';

import { formatPrice } from '@/utils';

import { Wrapper, PriceLabelSizeType } from './PriceLabel.styles';

interface PriceLabelProps {
  sellingPrice: number;
  retailPrice?: number;
  size: PriceLabelSizeType;
}

const PriceLabel = ({ sellingPrice, retailPrice, size }: PriceLabelProps) => {
  return (
    <Wrapper size={size}>
      <span className="selling-price">{formatPrice(sellingPrice)}원</span>
      {retailPrice && (
        <span className="retail-price">{formatPrice(retailPrice)}</span>
      )}
    </Wrapper>
  );
};

PriceLabel.defaultProps = {
  size: 'normal',
};

export default React.memo(PriceLabel);
