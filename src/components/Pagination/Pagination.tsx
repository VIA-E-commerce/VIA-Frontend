import React, { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    <PageButton to={{ search: searchParams.toString() }} disabled={!hasPrev}>
      <BsCaretLeftFill />
    </PageButton>
  );

  searchParams.set(URLS.PARAM.PAGE, (end + 1).toString());
  const nextButton = (
    <PageButton to={{ search: searchParams.toString() }} disabled={!hasNext}>
      <BsCaretRightFill />
    </PageButton>
  );

  // 페이지 버튼 생성
  const pageButtons: JSX.Element[] = [];
  for (let page = start; page <= end; page++) {
    const active = currentPage === page;
    searchParams.set(URLS.PARAM.PAGE, page.toString());

    pageButtons.push(
      <li>
        <PageButton
          key={page}
          to={{ search: searchParams.toString() }}
          active={active}
        >
          {page}
        </PageButton>
      </li>,
    );
  }

  return (
    <PaginationMenu>
      <li>{prevButton}</li>
      {pageButtons}
      <li>{nextButton}</li>
    </PaginationMenu>
  );
};

Pagination.defaultProps = {
  totalPages: 1,
  pageRange: 10,
};

export default memo(Pagination);
