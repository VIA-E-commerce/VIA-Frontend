import { QueryKey, useMutation, useQueryClient } from 'react-query';

import { addToWishlist, removeFromWishlist } from '@/apis';
import { useCallback } from 'react';

export const useToggleWishlistMutation = (queryKey?: QueryKey) => {
  const queryClient = useQueryClient();

  const updateProductWished = useCallback(() => {
    if (queryKey) {
      queryClient.refetchQueries(queryKey);
    }
  }, [queryKey]);

  const { mutate: mutateAdd } = useMutation(addToWishlist, {
    onSuccess: async () => {
      alert('위시리스트에 추가되었습니다.');
      updateProductWished();
    },
    onError: () => {
      alert('위시리스트 추가 중 오류가 발생했습니다.');
    },
  });

  const { mutate: mutateRemove } = useMutation(removeFromWishlist, {
    onSuccess: async () => {
      alert('위시리스트에서 제거되었습니다.');
      updateProductWished();
    },
    onError: () => {
      alert('위시리스트 제거 중 오류가 발생했습니다.');
    },
  });

  const onToggleWishlist = (productId: number, wished: boolean) => {
    if (!wished) {
      mutateAdd(productId);
      return;
    }

    if (confirm('위시리스트에서 제거하시겠습니까?')) {
      mutateRemove(productId);
    }
  };

  return { onToggleWishlist };
};
