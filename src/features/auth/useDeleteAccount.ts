import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { deleteAccount } from '@/apis';
import { URLS } from '@/constants';
import { useLogout } from './useLogout';

export const useDeleteAccount = () => {
  const navigate = useNavigate();
  const { resetUserAuthInfo } = useLogout();

  return useMutation(deleteAccount, {
    onSuccess: () => {
      alert('회원 탈퇴 성공');
      resetUserAuthInfo();
      navigate(URLS.CLIENT.HOME);
    },
    onError: () => {
      alert('회원 탈퇴 중 오류가 발생했습니다.');
    },
  });
};
