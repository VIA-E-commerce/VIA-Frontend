import { editMyInfo } from '@/apis';
import { useMe } from '@/features/auth';
import { useMutation } from 'react-query';

export const useEditMyInfoMutation = () => {
  const { refetch } = useMe();

  return useMutation(editMyInfo, {
    onSuccess: () => {
      alert('회원 정보 수정 성공');
      refetch();
    },
    onError: () => {
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    },
  });
};
