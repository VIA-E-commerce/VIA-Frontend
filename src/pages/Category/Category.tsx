import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import { URLS } from '@/constants';
import { GridSection, Pagination } from '@/components';
import {
  CategoryTitle,
  ProductSortBox,
  ProductCard,
  useProductList,
} from '@/features/productList';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    if (!pagination) return;

    //
    if (page > pagination.totalPages) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(URLS.PARAM.PAGE, pagination.totalPages.toString());

      navigate({
        pathname: location.pathname,
        search: newSearchParams.toString(),
      });
    }
  }, [location, pagination, page]);

  if (!pagination) return <GridSection>로딩 중</GridSection>;

  const { list: productList } = pagination;

  return (
    <>
      <GridSection cols={1}>
        <CategoryTitle title={category} />
      </GridSection>
      <GridSection cols={1}>
        <ProductSortBox />
      </GridSection>
      <GridSection cols={PRODUCT_GRID_COLUMNS}>
        {productList.map((card) => (
          <Link key={card.id} to={`${URLS.CLIENT.PRODUCT}/${card.id}`}>
            <ProductCard card={card} />
          </Link>
        ))}
      </GridSection>
      <GridSection cols={1}>
        <Pagination currentPage={page} totalPages={pagination.totalPages} />
      </GridSection>
    </>
  );
};

export default Category;
