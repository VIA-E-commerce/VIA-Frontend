import { useMutation } from 'react-query';
import { refund } from '@/apis/paymentApi';

export const useRefundMutation = () => {
  return useMutation(refund);
};
