import { useQuery } from 'react-query';

import { fetchOrder } from '@/apis';
import { QUERY, URLS } from '@/constants';
import { useNavigate } from 'react-router';

export const useFetchOrder = (orderId: number) => {
  const navigate = useNavigate();

  const { data, ...rest } = useQuery(
    [QUERY.ORDER.INFO, { orderId }],
    () => fetchOrder(orderId),
    {
      retry: false,
      refetchOnWindowFocus: false,
      onError: () => {
        alert('결제 정보를 찾을 수 없습니다.');
        navigate(URLS.CLIENT.HOME);
      },
    },
  );

  return {
    data: data?.data,
    ...rest,
  };
};
