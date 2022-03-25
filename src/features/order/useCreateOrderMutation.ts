import { createOrder } from '@/apis';
import { useMutation } from 'react-query';

export const useCreateOrderMutation = () => {
  return useMutation(createOrder);
};
