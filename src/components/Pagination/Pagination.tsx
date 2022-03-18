import React, { memo } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

import { PageButton, PaginationMenu } from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageRange: number;
  onClickPageButton: (pageNum: number, event?: React.MouseEvent) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  pageRange,
  onClickPageButton,
}: PaginationProps) => {
  const start = Math.trunc((currentPage - 1) / pageRange) * pageRange + 1;
  const end = Math.min(start + pageRange - 1, totalPages);
  const hasPrev = start > 1;
  const hasNext = end < totalPages;

  const prevButton = (
    <PageButton
      disabled={!hasPrev}
      onClick={() => onClickPageButton(start - 1)}
    >
      <BsCaretLeftFill />
    </PageButton>
  );

  const nextButton = (
    <PageButton disabled={!hasNext} onClick={() => onClickPageButton(end + 1)}>
      <BsCaretRightFill />
    </PageButton>
  );

  // 페이지 버튼 생성
  const pageButtons: JSX.Element[] = [];
  for (let page = start; page <= end; page++) {
    const active = currentPage === page;

    pageButtons.push(
      <PageButton
        key={page}
        active={active}
        onClick={(event) => onClickPageButton(page, event)}
      >
        {page}
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
