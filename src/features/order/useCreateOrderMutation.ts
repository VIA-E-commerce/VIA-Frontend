import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { createOrder } from '@/apis';
import { URLS } from '@/constants';
import { useRefundMutation } from '@/features/payment';
import { impRequestPay, RequestPayParams, RequestPayResponse } from '@/lib';
import { CartItemResponse, CreateOrderRequest, RawOrderForm } from '@/types';

interface Props {
  cartItems?: CartItemResponse[];
}

export const useCreateOrderMutation = ({ cartItems }: Props) => {
  const navigate = useNavigate();
  const { mutate: refundMutate } = useRefundMutation();

  const { mutate } = useMutation(createOrder, {
    onSuccess: ({ data: orderId }) => {
      navigate({
        pathname: URLS.CLIENT.PAYMENT,
        search: `${URLS.PARAM.ORDER}=${orderId}`,
      });
    },
    onError: (error, data) => {
      alert('결제 도중 오류가 발생했습니다.');
      // 결제 중 서버 오류 발생 시 전액 환불
      refundMutate({
        impUID: data.impUID,
        reason: '서버 결제 오류',
      });
    },
  });

  const onSubmit = async (form: RawOrderForm) => {
    if (!cartItems) return;

    const request = getCreateOrderRequest(form);

    let orderName = cartItems[0]?.productName;
    if (cartItems.length > 1) {
      orderName += ` 외 ${cartItems.length - 1}건`;
    }

    const data: RequestPayParams = {
      pg: 'nice',
      merchant_uid: `mid_${new Date().getTime()}`,
      name: orderName,
      amount: 100, // form.totalPrice,
      buyer_email: request.purchaserEmail,
      buyer_name: request.purchaser,
      buyer_tel: request.purchaserPhone,
    };

    const callback = async (response: RequestPayResponse) => {
      if (response.success) {
        const { imp_uid } = response;

        mutate({
          ...request,
          impUID: imp_uid as string,
          cartItemIds: cartItems.map(({ id }) => id),
        });
      } else {
        alert('결제가 취소되었습니다.');
      }
    };

    impRequestPay(data, callback);
  };

  return {
    onSubmit,
  };
};

function getCreateOrderRequest(form: RawOrderForm): CreateOrderRequest {
  const {
    purchaser,
    purchaserEmail,
    purchaserPhone1,
    purchaserPhone2,

    recipient,
    recipientAddressPostalCode,
    recipientAddress,
    recipientAddressDetail,
    recipientPhone1,
    recipientPhone2,

    message,
    impUID,
    cartItemIds,
  } = form;

  const shippingAddress = `${recipientAddress} ${recipientAddressDetail}`;
  const purchaserPhone = purchaserPhone1 + purchaserPhone2;
  const recipientPhone = recipientPhone1 + recipientPhone2;

  return {
    purchaser,
    purchaserEmail,
    purchaserPhone,
    recipientPhone,
    recipient,
    postalCode: recipientAddressPostalCode,
    shippingAddress,
    message,
    impUID,
    cartItemIds,
  };
}
