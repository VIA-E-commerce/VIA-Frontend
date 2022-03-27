import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchProductQuestions, FetchProductQuestionsProps } from '@/apis';
import { QUERY } from '@/constants';

export const useQuestionList = ({
  productId,
  pageSize,
}: FetchProductQuestionsProps) => {
  const [pageNum, setPageNum] = useState(1);

  const { data, ...rest } = useQuery(
    [
      QUERY.PRODUCT.QUESTIONS,
      {
        pageNum,
        pageSize,
      },
    ],
    () => fetchProductQuestions({ productId, pageNum, pageSize }),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data: data?.data,
    questionPageNum: pageNum,
    setQuestionPageNum: setPageNum,
    ...rest,
  };
};
