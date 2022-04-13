import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  ProductCardResponse,
  PaginationResponse,
  ProductDetailResponse,
  ReviewResponse,
  QuestionResponse,
  PagingQuery,
} from '@/types';

export interface FetchProductsProps extends PagingQuery {
  category?: string;
  sort?: string;
}

export const fetchProducts = async ({
  pageNum,
  pageSize,
  category,
  sort,
}: FetchProductsProps) =>
  client.get<PaginationResponse<ProductCardResponse>>(URLS.API.PRODUCT.CRUD, {
    params: {
      pageNum,
      pageSize,
      category,
      sort,
    },
  });

export const fetchProduct = async (productId: number) =>
  client.get<ProductDetailResponse>(`${URLS.API.PRODUCT.CRUD}/${productId}`);

export interface FetchProductReviewsProps extends PagingQuery {
  productId: number;
  sort?: string;
}
export const fetchProductReviews = async ({
  productId,
  pageSize,
  pageNum,
  sort,
}: FetchProductReviewsProps) => {
  const path = URLS.API.PRODUCT.REVIEWS.replace(
    ':productId',
    productId.toString(),
  );

  return client.get<PaginationResponse<ReviewResponse>>(path, {
    params: {
      pageNum,
      pageSize,
      sort,
    },
  });
};

export interface FetchProductQuestionsProps extends PagingQuery {
  productId: number;
}
export const fetchProductQuestions = async ({
  productId,
  pageSize,
  pageNum,
}: FetchProductQuestionsProps) => {
  const path = URLS.API.PRODUCT.QUESTIONS.replace(
    ':productId',
    productId.toString(),
  );

  return client.get<PaginationResponse<QuestionResponse>>(path, {
    params: {
      pageNum,
      pageSize,
    },
  });
};

export const addToWishlist = async (productId: number) => {
  const path = URLS.API.PRODUCT.WISHLIST.replace(
    ':productId',
    productId.toString(),
  );
  return client.post<void>(path);
};

export const removeFromWishlist = async (productId: number) => {
  const path = URLS.API.PRODUCT.WISHLIST.replace(
    ':productId',
    productId.toString(),
  );

  return client.delete<void>(path);
};
