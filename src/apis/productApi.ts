import { client } from '@/apis';
import { URLS } from '@/constants';
import {
  ProductCardResponse,
  ResponseEntity,
  Pagination,
  ProductDetailResponse,
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
  ResponseEntity<Pagination<ProductCardResponse>>
> => {
  const response = await client.get(URLS.API.PRODUCT, {
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
    `${URLS.API.PRODUCT}/${productId}`,
  );

  return response.data;
};
