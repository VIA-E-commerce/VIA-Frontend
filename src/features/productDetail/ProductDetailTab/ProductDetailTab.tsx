import React, { memo, ReactNode } from 'react';

import { TabItem } from '@/types';

import { Wrapper, Title } from './ProductDetailTab.styles';

interface ProductDetailTabProps {
  tab: TabItem;
  children: ReactNode;
  noTitle?: boolean;
}

const ProductDetailTab = ({
  tab,
  children,
  noTitle,
}: ProductDetailTabProps) => {
  return (
    <Wrapper id={tab.id}>
      {!noTitle && <Title>{tab.label}</Title>}
      {children}
    </Wrapper>
  );
};

export default memo(ProductDetailTab);
