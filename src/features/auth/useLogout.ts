import { useMutation, useQueryClient } from 'react-query';
import { logout, setBearerToken } from '@/apis';
import { QUERY } from '@/constants';

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      setBearerToken('');
      queryClient.setQueryData(QUERY.AUTH.ME, null);
    },
  });

  function handleClickLogout() {
    if (confirm('로그아웃하시겠습니까?')) {
      mutate();
    }
  }

  return { handleClickLogout };
};
