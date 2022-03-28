import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  PagingQuery,
  PaginationResponse,
  ProductCardResponse,
  ResponseEntity,
} from '@/types';

export const fetchMe = async () => {
  const response = await client.get(URLS.API.USER.ME);
  return response.data;
};

export const fetchMyWishlist = async ({ pageNum, pageSize }: PagingQuery) => {
  const response = await client.get<
    ResponseEntity<PaginationResponse<ProductCardResponse>>
  >(URLS.API.USER.MY_WISHLIST, {
    params: {
      pageNum,
      pageSize,
    },
  });
  return response.data;
};
