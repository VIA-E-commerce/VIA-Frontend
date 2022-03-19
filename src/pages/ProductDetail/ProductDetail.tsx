import React, { useMemo } from 'react';
import { useParams } from 'react-router';

import { GridSection } from '@/components';
import {
  ProductDetailTab,
  ProductDetailTabNav,
  ProductFeatureCard,
  useProductDetail,
} from '@/features/productDetail';
import {
  ProductReviewViewer,
  ReviewModal,
  useProductReviews,
} from '@/features/review';
import { ProductDetailTabItem } from '@/types';

import { ContentsSection } from './ProductDetail.styles';

const getTabNavMenu = (reviewCount?: number) => [
  {
    id: 'product-info',
    label: '상품 정보',
  },
  {
    id: 'reviews',
    label: `상품 후기${reviewCount ? ` (${reviewCount})` : ''}`,
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

const REVIEW_PAGE_SIZE = 5;

type ProductDetailParams = {
  productId: string;
};

const ProductDetail = () => {
  const productId = Number(useParams<ProductDetailParams>().productId);
  const { data: product } = useProductDetail(productId);

  const {
    data: reviewPagination,
    reviewPageNum,
    setReviewPageNum,
    reviewSort,
    setReviewSort,
  } = useProductReviews({
    productId,
    pageSize: REVIEW_PAGE_SIZE,
  });

  const tabs: ProductDetailTabItem[] = useMemo(
    () => getTabNavMenu(reviewPagination?.totalElements),
    [reviewPagination?.totalElements],
  );

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

          <ProductDetailTab tab={reviewTab}>
            <ProductReviewViewer
              data={reviewPagination}
              tabId={reviewTab.id}
              pageNum={reviewPageNum}
              setPageNum={setReviewPageNum}
              sort={reviewSort}
              setSort={setReviewSort}
            />
          </ProductDetailTab>

          <ProductDetailTab tab={qnaTab}>{qnaTab.label}</ProductDetailTab>

          <ProductDetailTab tab={deliveryTab}>
            {deliveryTab.label}
          </ProductDetailTab>

          <ProductDetailTab tab={exchangeTab}>
            {exchangeTab.label}
          </ProductDetailTab>
        </GridSection>
      </ContentsSection>

      <ReviewModal />
    </>
  );
};

export default ProductDetail;
