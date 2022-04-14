import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import {
  DocumentTitle,
  Empty,
  GridSection,
  Loading,
  Pagination,
} from '@/components';
import { QUERY, URLS } from '@/constants';
import { CategoryTitle, ProductCard } from '@/features/productList';
import { useMyWishlist } from '@/features/wishlist';

const PRODUCT_GRID_COLUMNS = 5;
const PAGE_SIZE = PRODUCT_GRID_COLUMNS * 4;

const Wishlist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get(URLS.PARAM.PAGE) || '1');

  const { data: pagination } = useMyWishlist({
    pageNum: page,
    pageSize: PAGE_SIZE,
  });

  // 페이지네이션
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
    <>
      <DocumentTitle title="위시리스트" />
      <GridSection cols={1}>
        <CategoryTitle title="Wishlist" />
      </GridSection>
      {productList.length === 0 ? (
        <Empty text="관심있는 아이템을 추가해주세요" />
      ) : (
        <GridSection cols={PRODUCT_GRID_COLUMNS}>
          {productList.map((card) => (
            <ProductCard key={card.id} card={card} queryKey={QUERY.WISHLIST} />
          ))}
        </GridSection>
      )}
      <GridSection cols={1}>
        <Pagination
          currentPage={page}
          totalPages={pagination.totalPages}
          onClickPageButton={handleClickPageButton}
        />
      </GridSection>
    </>
  );
};

export default Wishlist;
