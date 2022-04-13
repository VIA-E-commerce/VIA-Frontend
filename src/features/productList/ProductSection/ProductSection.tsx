import React from 'react';

import { GridSection, SquareButton } from '@/components';
import { QUERY } from '@/constants';
import { PaginationResponse, ProductCardResponse } from '@/types';

import { Wrapper, Title, More } from './ProductSection.styles';
import { ProductCard } from '../ProductCard';

interface Props {
  title?: string;
  cols?: number;
  rowGap?: number;
  productPagination?: PaginationResponse<ProductCardResponse>;
  children?: React.ReactNode;
  onClickMoreButton?: () => void;
}

const ProductSection = ({
  title,
  cols,
  rowGap,
  productPagination: pagination,
  children,
  onClickMoreButton,
}: Props) => {
  return (
    <Wrapper>
      {title && (
        <Title>
          <span>{title}</span>
        </Title>
      )}
      <GridSection cols={cols} rowGap={rowGap}>
        {pagination
          ? pagination.list?.map((product) => (
              <ProductCard
                key={product.id}
                card={product}
                queryKey={QUERY.PRODUCT.LIST}
              />
            ))
          : children}
      </GridSection>
      {!pagination?.isLast && onClickMoreButton && (
        <More>
          <SquareButton variant="outline" onClick={onClickMoreButton}>
            더보기
          </SquareButton>
        </More>
      )}
    </Wrapper>
  );
};

export default ProductSection;
