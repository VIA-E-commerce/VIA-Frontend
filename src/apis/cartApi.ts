import { client } from '@/apis';
import { URLS } from '@/constants';
import { CartItemResponse, ResponseEntity } from '@/types';

export const fetchMyCart = async () => {
  const response = await client.get<ResponseEntity<CartItemResponse[]>>(
    URLS.API.CART.ME,
  );
  return response.data;
};
