import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { login, setBearerToken } from '@/apis';
import { ResponseEntity, LoginResponse } from '@/types';
import { getRedirect } from '@/utils';

import { useMe } from './useMe';

export const useLogin = () => {
  const navigate = useNavigate();
  const { refetch } = useMe();

  const { mutate } = useMutation(login, {
    onSuccess: (response: AxiosResponse<ResponseEntity<LoginResponse>>) => {
      const { accessToken } = response.data.data;
      setBearerToken(accessToken);
      refetch();

      alert('로그인 되었습니다!');

      const redirect = getRedirect();
      navigate(redirect, { replace: true });
    },
    onError: () => {
      alert('로그인 중 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
