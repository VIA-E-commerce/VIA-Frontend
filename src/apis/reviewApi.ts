import { client } from '@/apis/client';
import { URLS } from '@/constants';
import { EditReviewRequest } from '@/types';

interface EditReviewProps extends EditReviewRequest {
  reviewId: number;
}

export const editReview = async ({ reviewId, ...request }: EditReviewProps) => {
  const response = await client.patch(
    `${URLS.API.REVIEW.CRUD}/${reviewId}`,
    request,
  );
  return response.data;
};

export const removeReview = async (reviewId: number) => {
  const response = await client.delete(`${URLS.API.REVIEW.CRUD}/${reviewId}`);
  return response.data;
};
