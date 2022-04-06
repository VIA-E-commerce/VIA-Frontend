import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  CreateOrderRequest,
  OrderResponse,
  PaginationResponse,
  PagingQuery,
  ResponseEntity,
} from '@/types';

export const createOrder = async (request: CreateOrderRequest) => {
  const response = await client.post<ResponseEntity<number>>(
    URLS.API.ORDER.CRUD,
    request,
  );
  return response.data;
};

export const fetchOrder = async (orderId: number) => {
  const response = await client.get<ResponseEntity<OrderResponse>>(
    `${URLS.API.ORDER.CRUD}/${orderId}`,
  );
  return response.data;
};

export const fetchMyOrders = async ({ pageNum, pageSize }: PagingQuery) => {
  const response = await client.get<
    ResponseEntity<PaginationResponse<OrderResponse>>
  >(`${URLS.API.ORDER.ME}`, {
    params: {
      pageNum,
      pageSize,
    },
  });
  return response.data;
};
