import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  CreateOrderRequest,
  OrderResponse,
  PaginationResponse,
  PagingQuery,
} from '@/types';

export const createOrder = async (request: CreateOrderRequest) =>
  client.post<number>(URLS.API.ORDER.CRUD, request);

export const fetchOrder = async (orderId: number) =>
  client.get<OrderResponse>(`${URLS.API.ORDER.CRUD}/${orderId}`);

export const fetchMyOrders = async ({ pageNum, pageSize }: PagingQuery) =>
  client.get<PaginationResponse<OrderResponse>>(`${URLS.API.ORDER.ME}`, {
    params: {
      pageNum,
      pageSize,
    },
  });
