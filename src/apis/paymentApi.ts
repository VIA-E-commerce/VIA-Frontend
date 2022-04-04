import { URLS } from '@/constants';

import { ImpRefundRequest } from '@/types';

import { client } from './client';

export const refund = async (requestBody: ImpRefundRequest) => {
  const response = await client.post(URLS.API.PAYMENT.REFUND, requestBody);
  return response.data;
};
