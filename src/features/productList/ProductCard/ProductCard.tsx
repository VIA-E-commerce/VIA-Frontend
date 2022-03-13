import React, { memo } from 'react';

import { ProductCardResponse } from '@/types';

import {
  CardWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  SellingPrice,
  OriginalPrice,
  CardFooter,
} from './ProductCard.styles';
import { formatPrice } from '@/utils';

interface ProductCardProps {
  card: ProductCardResponse;
}

const ProductCard = ({ card }: ProductCardProps) => {
  return (
    <CardWrapper>
      <header>
        <CardImage src={card.thumbnail} />
      </header>
      <CardBody>
        <CardTitle>{card.name}</CardTitle>
        <CardPrice>
          <SellingPrice>
            <span>{formatPrice(card.sellingPrice)}</span>원
          </SellingPrice>
          {card.retailPrice && (
            <OriginalPrice>{formatPrice(card.retailPrice)}</OriginalPrice>
          )}
        </CardPrice>
      </CardBody>
      <CardFooter></CardFooter>
    </CardWrapper>
  );
};

export default memo(ProductCard);
