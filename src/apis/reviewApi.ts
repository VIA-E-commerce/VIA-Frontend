import { client } from '@/apis/client';
import { URLS } from '@/constants';

export const removeReview = async (reviewId: number) => {
  const response = await client.delete(`${URLS.API.REVIEW.CRUD}/${reviewId}`);
  return response.data;
};
