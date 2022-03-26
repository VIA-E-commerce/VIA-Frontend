import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  AddCartItemRequest,
  CartItemResponse,
  EditCartItemRequest,
  ResponseEntity,
} from '@/types';

export const fetchCartItems = async (cartItems?: number[]) => {
  const response = await client.get<ResponseEntity<CartItemResponse[]>>(
    URLS.API.CART.ITEM,
    {
      params: {
        id: cartItems?.join(','),
      },
    },
  );
  return response.data;
};

export const addCartItem = async (request: AddCartItemRequest) => {
  const response = await client.post(URLS.API.CART.ITEM, request);
  return response.data;
};

interface EditCartItemProps {
  cartItemId: number;
  request: EditCartItemRequest;
}
export const editCartItem = async ({
  cartItemId,
  request,
}: EditCartItemProps) => {
  const response = await client.patch(
    `${URLS.API.CART.ITEM}/${cartItemId}`,
    request,
  );

  return response.data;
};

export const removeCartItem = async (cartItemId: number) => {
  await client.delete(`${URLS.API.CART.ITEM}/${cartItemId}`);
};
