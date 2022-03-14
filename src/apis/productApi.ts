import { client } from '@/apis';
import { URLS } from '@/constants';
import { ProductCardResponse, ResponseEntity, Pagination } from '@/types';

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
  const response = await client.get(URLS.API.PRODUCT.LIST, {
    params: {
      pageNum,
      pageSize,
      category,
      sort,
    },
  });

  return response.data;
};
