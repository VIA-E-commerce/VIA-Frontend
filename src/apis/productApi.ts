import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  ProductCardResponse,
  ResponseEntity,
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
}: FetchProductsProps): Promise<
  ResponseEntity<PaginationResponse<ProductCardResponse>>
> => {
  const response = await client.get(URLS.API.PRODUCT.CRUD, {
    params: {
      pageNum,
      pageSize,
      category,
      sort,
    },
  });

  return response.data;
};

export const fetchProduct = async (
  productId: number,
): Promise<ResponseEntity<ProductDetailResponse>> => {
  const response = await client.get<ResponseEntity<ProductDetailResponse>>(
    `${URLS.API.PRODUCT.CRUD}/${productId}`,
  );

  return response.data;
};

export interface FetchProductReviewsProps extends PagingQuery {
  productId: number;
  sort?: string;
}
export const fetchProductReviews = async ({
  productId,
  pageSize,
  pageNum,
  sort,
}: FetchProductReviewsProps): Promise<
  ResponseEntity<PaginationResponse<ReviewResponse>>
> => {
  const path = URLS.API.PRODUCT.REVIEWS.replace(
    ':productId',
    productId.toString(),
  );
  const response = await client.get<
    ResponseEntity<PaginationResponse<ReviewResponse>>
  >(path, {
    params: {
      pageNum,
      pageSize,
      sort,
    },
  });

  return response.data;
};

export interface FetchProductQuestionsProps extends PagingQuery {
  productId: number;
}
export const fetchProductQuestions = async ({
  productId,
  pageSize,
  pageNum,
}: FetchProductQuestionsProps): Promise<
  ResponseEntity<PaginationResponse<QuestionResponse>>
> => {
  const path = URLS.API.PRODUCT.QUESTIONS.replace(
    ':productId',
    productId.toString(),
  );
  const response = await client.get<
    ResponseEntity<PaginationResponse<QuestionResponse>>
  >(path, {
    params: {
      pageNum,
      pageSize,
    },
  });

  return response.data;
};

export const addToWishlist = async (productId: number) => {
  const path = URLS.API.PRODUCT.WISHLIST.replace(
    ':productId',
    productId.toString(),
  );
  await client.post(path);
};

export const removeFromWishlist = async (productId: number) => {
  const path = URLS.API.PRODUCT.WISHLIST.replace(
    ':productId',
    productId.toString(),
  );
  await client.delete(path);
};
