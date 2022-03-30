import { client } from './client';

import { URLS } from '@/constants';
import { CreateQuestionRequest, EditQuestionRequest } from '@/types';

export const addQuestion = async (request: CreateQuestionRequest) => {
  const response = await client.post(URLS.API.QUESTION.CRUD, request);

  return response.data;
};

interface EditQuestionProps extends EditQuestionRequest {
  questionId: number;
}

export const editQuestion = async ({
  questionId,
  ...request
}: EditQuestionProps) => {
  const response = await client.patch(
    `${URLS.API.QUESTION.CRUD}/${questionId}`,
    request,
  );

  return response.data;
};

export const removeQuestion = async (questionId: number) => {
  const response = await client.delete(
    `${URLS.API.QUESTION.CRUD}/${questionId}`,
  );

  return response.data;
};
