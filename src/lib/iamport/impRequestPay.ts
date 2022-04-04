import { BUSINESS } from '@/constants';
import { RequestPayParams, RequestPayResponseCallback } from './types';

type IMPRequestPay = (
  data: RequestPayParams,
  callback: RequestPayResponseCallback,
) => void;

export const impRequestPay: IMPRequestPay = (data, callback) => {
  const { IMP } = window;
  const userCode = BUSINESS.IMP_MERCHANT_ID;

  if (!userCode) throw Error('가맹점 코드가 유효하지 않습니다.');

  IMP.init(userCode);

  // IMP.request_pay(param, callback) 결제창 호출
  IMP.request_pay(data, callback);
};
