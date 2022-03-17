import React from 'react';
import { useParams } from 'react-router';

import { GridSection } from '@/components';
import {
  ProductDetailTab,
  ProductDetailTabNav,
  ProductFeatureCard,
  useProductDetail,
} from '@/features/productDetail';
import { ProductDetailTabItem } from '@/types';

import { ContentsSection } from './ProductDetail.styles';

type ProductDetailParams = {
  productId: string;
};

const tabs: ProductDetailTabItem[] = [
  {
    id: 'product-info',
    label: '상품 정보',
  },
  {
    id: 'reviews',
    label: '상품 후기',
  },
  {
    id: 'qna',
    label: 'Q&A',
  },
  {
    id: 'delivery',
    label: '배송 안내',
  },
  {
    id: 'exchange',
    label: '교환 및 반품 안내',
  },
];

const ProductDetail = () => {
  const productId = Number(useParams<ProductDetailParams>().productId);
  const { data: product } = useProductDetail(productId);

  const [productInfoTab, reviewTab, qnaTab, deliveryTab, exchangeTab] = tabs;

  if (!product) return <GridSection cols={1}>로딩 중</GridSection>;

  return (
    <>
      <ProductFeatureCard product={product} />
      <ContentsSection>
        <ProductDetailTabNav tabs={tabs} />
        <GridSection cols={1} rowGap={0}>
          <ProductDetailTab tab={productInfoTab} noTitle>
            {productInfoTab.label}
          </ProductDetailTab>
          <ProductDetailTab tab={reviewTab}>{reviewTab.label}</ProductDetailTab>
          <ProductDetailTab tab={qnaTab}>{qnaTab.label}</ProductDetailTab>
          <ProductDetailTab tab={deliveryTab}>
            {deliveryTab.label}
          </ProductDetailTab>
          <ProductDetailTab tab={exchangeTab}>
            {exchangeTab.label}
          </ProductDetailTab>
        </GridSection>
      </ContentsSection>
    </>
  );
};

export default ProductDetail;
