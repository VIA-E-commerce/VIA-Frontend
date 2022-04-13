import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router';

import { URLS } from '@/constants';
import { currentUserState } from '@/state';
import { parseLocationToRedirect } from '@/utils';

export const useProtectedFunction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = parseLocationToRedirect(location);

  const currentUser = useRecoilValue(currentUserState);

  return (callback: () => void) => {
    if (currentUser) {
      callback();
    } else {
      if (confirm('로그인하시겠습니까?')) {
        navigate(
          {
            pathname: URLS.CLIENT.LOGIN,
          },
          {
            state: {
              redirect,
            },
          },
        );
      }
    }
  };
};
