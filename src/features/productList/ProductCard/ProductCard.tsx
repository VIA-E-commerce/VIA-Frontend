import React, { memo } from 'react';

import { PriceLabel } from '@/components';
import { ProductCardResponse } from '@/types';

import {
  CardWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardFooter,
} from './ProductCard.styles';

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
        <PriceLabel
          sellingPrice={card.sellingPrice}
          retailPrice={card.retailPrice}
        />
      </CardBody>
      <CardFooter></CardFooter>
    </CardWrapper>
  );
};

export default memo(ProductCard);
