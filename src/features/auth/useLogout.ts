import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { logout, setBearerToken } from '@/apis';
import { QUERY } from '@/constants';
import { currentUserState } from '@/state';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      setBearerToken('');
      queryClient.removeQueries(QUERY.AUTH.ME);
      setCurrentUser(undefined);
    },
  });

  function handleClickLogout() {
    if (confirm('로그아웃하시겠습니까?')) {
      mutate();
    }
  }

  return { handleClickLogout };
};
