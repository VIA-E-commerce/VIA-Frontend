import { useQuery } from 'react-query';

import { fetchMyQuestions } from '@/apis';
import { QUERY } from '@/constants';
import { PagingQuery } from '@/types';
import { getValidPagingQuery } from '@/utils';

export const useMyQuestions = (props: PagingQuery) => {
  const { pageNum, pageSize } = getValidPagingQuery(props);

  const { data } = useQuery(
    [
      QUERY.USER.MY_QUESTIONS,
      {
        pageNum,
        pageSize,
      },
    ],
    () => fetchMyQuestions({ pageNum, pageSize }),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data: data?.data,
  };
};
