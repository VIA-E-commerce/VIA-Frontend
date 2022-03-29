import { client } from './client';

import { URLS } from '@/constants';
import { CreateQuestionRequest } from '@/types';

export const addQuestion = async (request: CreateQuestionRequest) => {
  const response = await client.post(URLS.API.QUESTION.CRUD, request);

  return response.data;
};
