import { client } from './client';

import { URLS } from '@/constants';
import { CreateQuestionRequest, EditQuestionRequest } from '@/types';

export const addQuestion = async (request: CreateQuestionRequest) =>
  client.post<void>(URLS.API.QUESTION.CRUD, request);

interface EditQuestionProps extends EditQuestionRequest {
  questionId: number;
}

export const editQuestion = async ({
  questionId,
  ...request
}: EditQuestionProps) =>
  client.patch<void>(`${URLS.API.QUESTION.CRUD}/${questionId}`, request);

export const removeQuestion = async (questionId: number) =>
  client.delete<void>(`${URLS.API.QUESTION.CRUD}/${questionId}`);
