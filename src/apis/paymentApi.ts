import { URLS } from '@/constants';

import { ImpRefundRequest } from '@/types';

import { client } from './client';

export const refund = async (requestBody: ImpRefundRequest) =>
  client.post(URLS.API.PAYMENT.REFUND, requestBody);
