import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { PriceLabel } from '@/components';
import { URLS } from '@/constants';
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
      <Link to={`${URLS.CLIENT.PRODUCT}/${card.id}`}>
        <header>
          <CardImage src={card.thumbnail || '/images/empty-product.png'} />
        </header>
        <CardBody>
          <CardTitle>{card.name}</CardTitle>
          <PriceLabel
            sellingPrice={card.sellingPrice}
            retailPrice={card.retailPrice}
          />
        </CardBody>
        <CardFooter></CardFooter>
      </Link>
    </CardWrapper>
  );
};

export default memo(ProductCard);
