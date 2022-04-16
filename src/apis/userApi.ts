import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  PagingQuery,
  PaginationResponse,
  ProductCardResponse,
  MyQuestionResponse,
  EditUserRequest,
  MyReviewResponse,
  UserSummary,
  PurchasedProductFilter,
  PurchasedProductResponse,
} from '@/types';

export const fetchMe = async () => client.get<UserSummary>(URLS.API.USER.ME);

export const fetchMyWishlist = async ({ pageNum, pageSize }: PagingQuery) =>
  client.get<PaginationResponse<ProductCardResponse>>(
    URLS.API.USER.MY_WISHLIST,
    {
      params: {
        pageNum,
        pageSize,
      },
    },
  );

export const editMyInfo = async (request: EditUserRequest) =>
  client.patch<void>(URLS.API.USER.ME, request);

export const fetchMyQuestions = async ({ pageNum, pageSize }: PagingQuery) =>
  client.get<PaginationResponse<MyQuestionResponse>>(
    URLS.API.USER.MY_QUESTIONS,
    {
      params: {
        pageNum,
        pageSize,
      },
    },
  );

export const fetchMyReviews = async ({ pageNum, pageSize }: PagingQuery) =>
  client.get<PaginationResponse<MyReviewResponse>>(URLS.API.USER.MY_REVIEWS, {
    params: {
      pageNum,
      pageSize,
    },
  });

export interface PurchasedProductsQuery extends PagingQuery {
  filter: PurchasedProductFilter;
}

export const fetchPurchasedProducts = async ({
  pageNum,
  pageSize,
  filter,
}: PurchasedProductsQuery) =>
  client.get<PaginationResponse<PurchasedProductResponse>>(
    URLS.API.USER.PURCHASED_PRODUCTS,
    {
      params: {
        pageNum,
        pageSize,
        filter,
      },
    },
  );
