import React, { useCallback, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import { QUERY, URLS } from '@/constants';
import {
  DocumentTitle,
  GridSection,
  Loading,
  PageTemplate,
  Pagination,
} from '@/components';
import {
  CategoryTitle,
  ProductSortBox,
  ProductCard,
  useProductList,
} from '@/features/productList';

const PRODUCT_GRID_COLUMNS = 4;
const PAGE_SIZE = PRODUCT_GRID_COLUMNS * 4;

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const category = searchParams.get(URLS.PARAM.CATEGORY) || '';
  const page = parseInt(searchParams.get(URLS.PARAM.PAGE) || '1');
  const sortParam = searchParams.get(URLS.PARAM.SORT) || '';

  const { data: pagination } = useProductList({
    pageNum: page,
    sort: sortParam,
    pageSize: PAGE_SIZE,
    category,
  });

  const handleClickPageButton = useCallback(
    (nextPage: number) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(URLS.PARAM.PAGE, nextPage.toString());

      navigate({ search: newSearchParams.toString() });
    },
    [searchParams],
  );

  useEffect(() => {
    if (!pagination) return;

    //
    if (page > pagination.totalPages) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(URLS.PARAM.PAGE, pagination.totalPages.toString());

      navigate(
        {
          pathname: location.pathname,
          search: newSearchParams.toString(),
        },
        { replace: true },
      );
    }
  }, [location, pagination, page]);

  if (!pagination) return <Loading />;

  const { list: productList } = pagination;

  return (
    <PageTemplate>
      <DocumentTitle title={category} />

      <GridSection cols={1}>
        <CategoryTitle title={category} />
      </GridSection>
      <GridSection cols={1}>
        <ProductSortBox />
      </GridSection>
      <GridSection cols={PRODUCT_GRID_COLUMNS}>
        {productList.map((card) => (
          <ProductCard
            key={card.id}
            card={card}
            queryKey={[QUERY.PRODUCT.LIST]}
          />
        ))}
      </GridSection>
      <GridSection cols={1}>
        <Pagination
          currentPage={page}
          totalPages={pagination.totalPages}
          onClickPageButton={handleClickPageButton}
        />
      </GridSection>
    </PageTemplate>
  );
};

export default Category;
