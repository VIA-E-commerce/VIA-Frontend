import { client } from '@/apis';
import { URLS } from '@/constants';
import { CreateOrderRequest } from '@/types';

export const createOrder = async (request: CreateOrderRequest) => {
  const response = await client.post(URLS.API.ORDER.CRUD, request);
  return response.data;
};