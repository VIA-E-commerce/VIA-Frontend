import { client } from '@/apis';
import { URLS } from '@/constants';
import { AddCartItemRequest, CartItemResponse, ResponseEntity } from '@/types';

export const fetchMyCart = async () => {
  const response = await client.get<ResponseEntity<CartItemResponse[]>>(
    URLS.API.CART.ME,
  );
  return response.data;
};

export const addCartItem = async (request: AddCartItemRequest) => {
  const response = await client.post(URLS.API.CART.ITEM, request);
  return response.data;
};
