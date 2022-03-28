import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';

import { GridSection, Pagination } from '@/components';
import { URLS } from '@/constants';
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

  if (!pagination) return <GridSection>로딩 중</GridSection>;

  const { list: productList } = pagination;

  return (
    <>
      <GridSection cols={1}>
        <CategoryTitle title="Wishlist" />
      </GridSection>
      <GridSection cols={PRODUCT_GRID_COLUMNS}>
        {productList.map((card) => (
          <Link key={card.id} to={`${URLS.CLIENT.PRODUCT}/${card.id}`}>
            <ProductCard card={card} />
          </Link>
        ))}
      </GridSection>
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
