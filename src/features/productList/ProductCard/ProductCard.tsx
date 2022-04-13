import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdLibraryAdd } from 'react-icons/md';
import { QueryKey } from 'react-query';

import { PriceLabel } from '@/components';
import { URLS } from '@/constants';
import { useToggleWishlistMutation, WishlistButton } from '@/features/wishlist';
import { ProductCardResponse } from '@/types';

import {
  CardWrapper,
  CardHeader,
  CardImage,
  CardHoverMenu,
  CardBody,
  CardTitle,
  CardFooter,
} from './ProductCard.styles';

interface ProductCardProps {
  card: ProductCardResponse;
  queryKey: QueryKey;
}

const ProductCard = ({ card, queryKey }: ProductCardProps) => {
  const { onToggleWishlist } = useToggleWishlistMutation(queryKey);

  const handleClickWish = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onToggleWishlist(card.id, card.wished);
  };

  return (
    <CardWrapper>
      <CardHeader>
        <Link to={`${URLS.CLIENT.PRODUCT}/${card.id}`}>
          <CardImage src={card.thumbnail || '/images/empty-product.png'} />
        </Link>
        <CardHoverMenu
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Link to={`${URLS.CLIENT.PRODUCT}/${card.id}`} target="_blank">
            <MdLibraryAdd title="새 창에서 열기" />
          </Link>
          <WishlistButton wished={card.wished} onClick={handleClickWish} />
        </CardHoverMenu>
      </CardHeader>
      <Link to={`${URLS.CLIENT.PRODUCT}/${card.id}`}>
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
