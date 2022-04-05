import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { URLS } from '@/constants';

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
    label: '후기 많은 순',
    sort: 'review-desc',
  },
];

interface SortButtonProps {
  label: string;
  sortMethod?: string;
  active: boolean;
}

const SortButton = function SortButton({
  label,
  sortMethod = '',
  active,
}: SortButtonProps) {
  const [searchParams] = useSearchParams();

  if (sortMethod) {
    searchParams.set(URLS.PARAM.SORT, sortMethod);
  } else {
    searchParams.delete(URLS.PARAM.SORT);
  }

  return (
    <SortMenuItem active={active}>
      <Link to={{ search: searchParams.toString() }}>{label}</Link>
    </SortMenuItem>
  );
};

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
          />
        ))}
      </SortMenu>
    </Wrapper>
  );
};

export default ProductSortBox;
