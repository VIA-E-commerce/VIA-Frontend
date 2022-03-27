import { client } from '@/apis';
import { URLS } from '@/constants';
import { CreateOrderRequest, ResponseEntity } from '@/types';

export const createOrder = async (request: CreateOrderRequest) => {
  const response = await client.post<ResponseEntity<number>>(
    URLS.API.ORDER.CRUD,
    request,
  );
  return response.data;
};
