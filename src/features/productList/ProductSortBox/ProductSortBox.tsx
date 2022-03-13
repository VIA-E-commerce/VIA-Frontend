import { URLS } from '@/constants';
import React, { memo, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Wrapper, SortMenu, SortMenuItem } from './ProductSortBox.styles';

interface SortMethod {
  label: string;
  sort?: string;
}

const sortMethods: SortMethod[] = [
  {
    label: '신상품',
  },
  {
    label: '판매량순',
    sort: 'best-selling',
  },
  {
    label: '낮은 가격순',
    sort: 'price-asc',
  },
  {
    label: '높은 가격순',
    sort: 'price-desc',
  },
  {
    label: '리뷰 많은 순',
    sort: 'review-desc',
  },
];

interface SortButtonProps {
  label: string;
  sortMethod?: string;
  active: boolean;
  defaultSearchParams: URLSearchParams;
}

const SortButton = memo(function SortButton({
  label,
  sortMethod = '',
  active,
  defaultSearchParams,
}: SortButtonProps) {
  const [search, setSearch] = useState(defaultSearchParams.toString());

  useEffect(() => {
    const searchParams = new URLSearchParams(defaultSearchParams);
    if (sortMethod) {
      searchParams.set(URLS.PARAM.SORT, sortMethod);
    } else {
      searchParams.delete(URLS.PARAM.SORT);
    }
    setSearch(searchParams.toString());
  }, []);

  return (
    <SortMenuItem active={active}>
      <Link to={{ search }}>{label}</Link>
    </SortMenuItem>
  );
});

const ProductSortBox = () => {
  const [searchParams] = useSearchParams();
  const currentSort = searchParams.get(URLS.PARAM.SORT) || undefined;

  return (
    <Wrapper>
      <SortMenu>
        {sortMethods.map((method) => (
          <SortButton
            key={method.label}
            label={method.label}
            sortMethod={method.sort}
            active={currentSort === method.sort}
            defaultSearchParams={searchParams}
          />
        ))}
      </SortMenu>
    </Wrapper>
  );
};

export default ProductSortBox;
