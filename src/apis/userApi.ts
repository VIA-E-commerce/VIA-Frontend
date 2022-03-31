import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  PagingQuery,
  PaginationResponse,
  ProductCardResponse,
  MyQuestionResponse,
  ResponseEntity,
  EditUserRequest,
  MyReviewResponse,
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

export const editMyInfo = async (request: EditUserRequest) => {
  const response = await client.patch(URLS.API.USER.ME, request);
  return response.data;
};

export const fetchMyQuestions = async ({ pageNum, pageSize }: PagingQuery) => {
  const response = await client.get<
    ResponseEntity<PaginationResponse<MyQuestionResponse>>
  >(URLS.API.USER.MY_QUESTIONS, {
    params: {
      pageNum,
      pageSize,
    },
  });
  return response.data;
};

export const fetchMyReviews = async ({ pageNum, pageSize }: PagingQuery) => {
  const response = await client.get<
    ResponseEntity<PaginationResponse<MyReviewResponse>>
  >(URLS.API.USER.MY_REVIEWS, {
    params: {
      pageNum,
      pageSize,
    },
  });
  return response.data;
};
