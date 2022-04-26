import React, { useEffect, useRef, useState } from 'react';

import { GridSection, SoldOut } from '@/components';
import { QUERY } from '@/constants';
import { useToggleWishlistMutation, WishlistButton } from '@/features/wishlist';
import { ProductDetailResponse } from '@/types';

import { ProductOrderForm } from '../ProductOrderForm';
import { SnsShareButton } from '../SnsShareButton';
import {
  Wrapper,
  ProductImages,
  LargeImage,
  TopButtonGroup,
} from './ProductOrderMenu.styles';

interface ProductOrderMenuProps {
  product: ProductDetailResponse;
}

const ProductOrderMenu = ({ product }: ProductOrderMenuProps) => {
  const largeImageRef = useRef<HTMLDivElement>(null);
  const [largeImageWidth, setLargeImageWidth] = useState(0);

  const { onToggleWishlist } = useToggleWishlistMutation(QUERY.PRODUCT.DETAIL);

  useEffect(() => {
    if (largeImageRef.current) {
      setLargeImageWidth(largeImageRef.current.offsetWidth);
    }
  }, [largeImageRef.current]);

  return (
    <GridSection cols={1} rowGap={8}>
      <TopButtonGroup>
        <SnsShareButton product={product} />
        <WishlistButton
          wished={product.wished}
          onClick={() => onToggleWishlist(product.id, product.wished)}
        />
      </TopButtonGroup>
      <Wrapper>
        <ProductImages>
          <LargeImage ref={largeImageRef}>
            <img
              src={product.images[0] || '/images/empty-product.png'}
              alt="상품 대표 이미지"
            />
            {product.isSoldOut && <SoldOut width={largeImageWidth} />}
          </LargeImage>
        </ProductImages>

        <ProductOrderForm product={product} />
      </Wrapper>
    </GridSection>
  );
};

export default ProductOrderMenu;
