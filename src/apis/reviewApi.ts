import { client } from '@/apis/client';
import { URLS } from '@/constants';
import { CreateReviewRequest, EditReviewRequest } from '@/types';

interface EditReviewProps extends EditReviewRequest {
  reviewId: number;
}

export const writeReview = async (request: CreateReviewRequest) =>
  client.post<void>(URLS.API.REVIEW.CRUD, request);

export const editReview = async ({ reviewId, ...request }: EditReviewProps) =>
  client.patch<void>(`${URLS.API.REVIEW.CRUD}/${reviewId}`, request);

export const removeReview = async (reviewId: number) =>
  client.delete<void>(`${URLS.API.REVIEW.CRUD}/${reviewId}`);
