import { PagingQuery } from '@/types';

export function getValidPagingQuery(props: PagingQuery) {
  const pageNum = Math.max(1, props.pageNum || 1);
  const pageSize = Math.max(1, props.pageSize || 1);

  return { pageNum, pageSize };
}
