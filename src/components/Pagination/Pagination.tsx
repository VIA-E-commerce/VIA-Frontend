import React, { memo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

import { URLS } from '@/constants';

import { PageButton, PaginationMenu } from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageRange: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  pageRange,
}: PaginationProps) => {
  const [searchParams] = useSearchParams();

  const start = Math.trunc((currentPage - 1) / pageRange) * pageRange + 1;
  const end = Math.min(start + pageRange - 1, totalPages);
  const hasPrev = start > 1;
  const hasNext = end < totalPages;

  searchParams.set(URLS.PARAM.PAGE, (start - 1).toString());
  const prevButton = (
    <PageButton disabled={!hasPrev}>
      <Link to={{ search: searchParams.toString() }}>
        <BsCaretLeftFill />
      </Link>
    </PageButton>
  );

  searchParams.set(URLS.PARAM.PAGE, (end + 1).toString());
  const nextButton = (
    <PageButton disabled={!hasNext}>
      <Link to={{ search: searchParams.toString() }}>
        <BsCaretRightFill />
      </Link>
    </PageButton>
  );

  // 페이지 버튼 생성
  const pageButtons: JSX.Element[] = [];
  for (let page = start; page <= end; page++) {
    const active = currentPage === page;
    searchParams.set(URLS.PARAM.PAGE, page.toString());

    pageButtons.push(
      <PageButton key={page} active={active}>
        <Link to={{ search: searchParams.toString() }}>{page}</Link>
      </PageButton>,
    );
  }

  return (
    <PaginationMenu>
      {prevButton}
      {pageButtons}
      {nextButton}
    </PaginationMenu>
  );
};

Pagination.defaultProps = {
  totalPages: 1,
  pageRange: 10,
};

export default memo(Pagination);
