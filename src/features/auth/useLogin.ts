import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { login, setBearerToken } from '@/apis';
import { URLS } from '@/constants';
import { ResponseEntity, LoginResponse } from '@/types';
import { useMe } from './useMe';

export const useLogin = () => {
  const navigate = useNavigate();
  const meQuery = useMe();

  const { mutate } = useMutation(login, {
    onSuccess: (response: AxiosResponse<ResponseEntity<LoginResponse>>) => {
      const { accessToken } = response.data.data;
      setBearerToken(accessToken);
      meQuery.refetch();

      alert('로그인 되었습니다!');
      navigate(URLS.CLIENT.HOME);
    },
    onError: (data: AxiosError<ResponseEntity<any>>) => {
      console.log(data.response?.data.statusCode);
      const errorMessage =
        data.response?.data.data || '로그인 중 오류가 발생했습니다.';
      alert(errorMessage);
    },
  });

  return { mutate };
};
