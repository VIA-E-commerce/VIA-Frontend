import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { login, setBearerToken } from '@/apis';
import { LoginResponse, ErrorResponse, LoginForm } from '@/types';
import { getRedirect } from '@/utils';

import { useMe } from './useMe';

export const useLogin = () => {
  const navigate = useNavigate();
  const { refetch } = useMe();

  const { mutate } = useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError<ErrorResponse>,
    LoginForm
  >(login, {
    onSuccess: (response) => {
      const { accessToken } = response.data;
      setBearerToken(accessToken);
      refetch();

      alert('로그인 되었습니다!');

      const redirect = getRedirect();
      navigate(redirect, { replace: true });
    },
    onError: (error) => {
      const message = error.response?.data.message;
      alert(message || '로그인 중 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
