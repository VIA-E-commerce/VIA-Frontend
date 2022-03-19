import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  ProductCardResponse,
  ResponseEntity,
  PaginationResponse,
  ProductDetailResponse,
  ReviewResponse,
} from '@/types';

export interface FetchProductsProps {
  pageNum: number;
  pageSize?: number;
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

export interface FetchProductReviewsProps {
  productId: number;
  pageSize?: number;
  pageNum?: number;
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
    },
  );

  return response.data;
};
