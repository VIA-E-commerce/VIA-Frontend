import { addToWishlist, removeFromWishlist } from '@/apis';
import { useMutation } from 'react-query';

export const useToggleWishlistMutation = (callback: () => void) => {
  const { mutate: mutateAdd } = useMutation(addToWishlist, {
    onSuccess: async () => {
      alert('위시리스트에 추가되었습니다.');
      callback();
    },
    onError: () => {
      alert('위시리스트 추가 중 오류가 발생했습니다.');
    },
  });

  const { mutate: mutateRemove } = useMutation(removeFromWishlist, {
    onSuccess: async () => {
      alert('위시리스트에서 제거되었습니다.');
      callback();
    },
    onError: () => {
      alert('위시리스트 제거 중 오류가 발생했습니다.');
    },
  });

  const onToggleWishlist = (productId: number, wished: boolean) => {
    if (!wished) {
      mutateAdd(productId);
    } else {
      mutateRemove(productId);
    }
  };

  return { onToggleWishlist };
};
