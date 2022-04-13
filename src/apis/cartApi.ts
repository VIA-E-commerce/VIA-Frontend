import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  AddCartItemRequest,
  CartItemResponse,
  EditCartItemRequest,
} from '@/types';

export const fetchCartItems = async (cartItems?: number[]) =>
  client.get<CartItemResponse[]>(URLS.API.CART.ITEM, {
    params: {
      id: cartItems?.join(','),
    },
  });

export const addCartItem = async (request: AddCartItemRequest) =>
  client.post<void>(URLS.API.CART.ITEM, request);

interface EditCartItemProps {
  cartItemId: number;
  request: EditCartItemRequest;
}
export const editCartItem = async ({
  cartItemId,
  request,
}: EditCartItemProps) =>
  client.patch<void>(`${URLS.API.CART.ITEM}/${cartItemId}`, request);

export const removeCartItem = async (cartItemId: number) =>
  client.delete<void>(`${URLS.API.CART.ITEM}/${cartItemId}`);
