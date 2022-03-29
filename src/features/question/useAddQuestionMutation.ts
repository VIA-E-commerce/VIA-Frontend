import { useMutation, useQueryClient } from 'react-query';

import { addQuestion } from '@/apis';
import { QUERY } from '@/constants';

export const useAddQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(addQuestion, {
    onSuccess: () => {
      queryClient.refetchQueries(QUERY.PRODUCT.QUESTIONS);
    },
  });
};
