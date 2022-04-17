import React from 'react';

import { GridSection } from '@/components';
import { QUERY } from '@/constants';
import { useToggleWishlistMutation, WishlistButton } from '@/features/wishlist';
import { ProductDetailResponse } from '@/types';

import { ProductOrderForm } from '../ProductOrderForm';
import { SnsShareButton } from '../SnsShareButton';
import {
  Wrapper,
  ProductImages,
  TopButtonGroup,
} from './ProductOrderMenu.styles';

interface ProductOrderMenuProps {
  product: ProductDetailResponse;
}

const ProductOrderMenu = ({ product }: ProductOrderMenuProps) => {
  const { onToggleWishlist } = useToggleWishlistMutation(QUERY.PRODUCT.DETAIL);

  return (
    <GridSection cols={1} rowGap={8}>
      <TopButtonGroup>
        <SnsShareButton thumbnail={product.images[0]} />
        <WishlistButton
          wished={product.wished}
          onClick={() => onToggleWishlist(product.id, product.wished)}
        />
      </TopButtonGroup>
      <Wrapper>
        <ProductImages>
          <img
            src={product.images[0] || '/images/empty-product.png'}
            alt="상품 대표 이미지"
          />
        </ProductImages>

        <ProductOrderForm product={product} />
      </Wrapper>
    </GridSection>
  );
};

export default ProductOrderMenu;
