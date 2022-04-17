import React, { memo, useEffect, useRef, useState } from 'react';
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
import SoldOut from '@/components/SoldOut/SoldOut';

interface ProductCardProps {
  card: ProductCardResponse;
  queryKey: QueryKey;
}

const ProductCard = ({ card, queryKey }: ProductCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);

  const { onToggleWishlist } = useToggleWishlistMutation(queryKey);

  const handleClickWish = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onToggleWishlist(card.id, card.wished);
  };

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
    }
  }, [cardRef.current]);

  return (
    <CardWrapper ref={cardRef}>
      <CardHeader>
        <Link to={`${URLS.CLIENT.PRODUCT}/${card.id}`}>
          <CardImage src={card.thumbnail || '/images/empty-product.png'} />
          {card.isSoldOut && <SoldOut width={width} />}
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
