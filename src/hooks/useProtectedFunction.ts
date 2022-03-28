import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';

import { URLS } from '@/constants';
import { currentUserState } from '@/state';

export const useProtectedFunction = () => {
  const navigate = useNavigate();

  const currentUser = useRecoilValue(currentUserState);

  return (callback: () => void) => {
    if (currentUser) {
      callback();
    } else {
      if (confirm('로그인하시겠습니까?')) {
        navigate(URLS.CLIENT.LOGIN);
      }
    }
  };
};
