import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { addCartItem } from '@/apis';
import { URLS } from '@/constants';

export const useAddCartItemMutation = () => {
  const navigate = useNavigate();

  return useMutation(addCartItem, {
    retry: false,

    onSuccess: () => {
      if (confirm('장바구니로 이동하시겠습니까?')) {
        navigate(URLS.CLIENT.CART);
      }
    },
  });
};
