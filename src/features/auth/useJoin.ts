import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { join } from '@/apis';
import { URLS } from '@/constants';
import { ResponseEntity } from '@/types';

export const useJoin = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(join, {
    onSuccess: () => {
      alert('회원이 되신 것을 축하드립니다!');
      navigate(URLS.CLIENT.HOME);
    },
    onError: (data: AxiosError<ResponseEntity<any>>) => {
      const errorMessage =
        data.response?.data.data || '회원가입 중 오류가 발생했습니다.';
      alert(errorMessage);
    },
  });

  return { mutate };
};
