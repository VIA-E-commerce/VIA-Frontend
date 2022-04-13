import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { join } from '@/apis';
import { URLS } from '@/constants';
import { ErrorResponse, JoinForm } from '@/types';

export const useJoin = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation<
    AxiosResponse<void>,
    AxiosError<ErrorResponse>,
    JoinForm
  >(join, {
    onSuccess: () => {
      alert('회원이 되신 것을 축하드립니다!');
      navigate(URLS.CLIENT.HOME);
    },
    onError: (error) => {
      const message = error.response?.data.message;
      alert(message || '회원가입 중 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
