import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { logout, setBearerToken } from '@/apis';
import { QUERY } from '@/constants';
import { currentUserState } from '@/state';
import { useCallback } from 'react';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const resetUserAuthInfo = useCallback(() => {
    setBearerToken('');
    queryClient.setQueryData(QUERY.AUTH.ME, null);
    setCurrentUser(undefined);
  }, []);

  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      resetUserAuthInfo();
    },
  });

  function handleClickLogout() {
    if (confirm('로그아웃하시겠습니까?')) {
      mutate();
    }
  }

  return { mutate, resetUserAuthInfo, handleClickLogout };
};
