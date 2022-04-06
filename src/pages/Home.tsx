import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { PageTemplate } from '@/components';
import { URLS } from '@/constants';
import { ProductSection, useProductList } from '@/features/productList';
import { FeatureCard, Slider, WideBanner } from '@/features/home';

import { Wrapper } from './Home.styles';

const slideBannerImages = [
  '/images/home/slider01.png',
  '/images/home/slider02.png',
  '/images/home/slider03.png',
];

const SALE_PRODUCT_COLS = 4;
const BEST_PRODUCT_COLS = 5;
const NEW_PRODUCT_COLS = 3;

const SALE_PRODUCT_PAGE_SIZE = SALE_PRODUCT_COLS * 2;
const BEST_PRODUCT_PAGE_SIZE = BEST_PRODUCT_COLS * 2;

const Home = () => {
  const navigate = useNavigate();

  const { data: saleProductPagination } = useProductList({
    pageNum: 1,
    pageSize: SALE_PRODUCT_PAGE_SIZE,
    category: 'sale',
  });

  const { data: bestProductPagination } = useProductList({
    pageNum: 1,
    pageSize: BEST_PRODUCT_PAGE_SIZE,
    sort: 'best-selling',
  });

  const { data: newProductPagination } = useProductList({
    pageNum: 1,
    pageSize: NEW_PRODUCT_COLS,
  });

  // 이벤트 핸들러
  const handleClickMoreSale = useCallback(() => {
    const searchParams = new URLSearchParams();
    searchParams.set(URLS.PARAM.CATEGORY, 'sale');

    navigate({
      pathname: URLS.CLIENT.CATEGORY,
      search: searchParams.toString(),
    });
  }, []);

  const handleClickMoreNew = useCallback(() => {
    const searchParams = new URLSearchParams();
    searchParams.set(URLS.PARAM.CATEGORY, 'new');

    navigate({
      pathname: URLS.CLIENT.CATEGORY,
      search: searchParams.toString(),
    });
  }, []);

  return (
    <PageTemplate style={{ marginTop: 0 }}>
      <Wrapper>
        <Slider images={slideBannerImages} />

        <ProductSection
          title="Sale"
          cols={SALE_PRODUCT_COLS}
          productPagination={saleProductPagination}
          onClickMoreButton={handleClickMoreSale}
        />

        <ProductSection
          title="Best"
          cols={BEST_PRODUCT_COLS}
          productPagination={bestProductPagination}
        />

        <WideBanner
          background="#929299"
          to={`${URLS.CLIENT.PRODUCT}/${10}`}
          imageUrl="/images/home/wide-banner.png"
        />

        <ProductSection
          title="New"
          cols={NEW_PRODUCT_COLS}
          productPagination={newProductPagination}
          onClickMoreButton={handleClickMoreNew}
        />

        <ProductSection title="Feature" cols={1}>
          <FeatureCard
            imageUrl="/images/home/feature-card.png"
            title="우수한 핏감의 데일리 아이템"
            description="라 트라비아타’ 2022 S/S 시즌 컬렉션"
            to={`${URLS.CLIENT.PRODUCT}/${7}`}
          />
        </ProductSection>
      </Wrapper>
    </PageTemplate>
  );
};

export default Home;
