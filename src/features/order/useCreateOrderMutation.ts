import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { createOrder } from '@/apis';
import { URLS } from '@/constants';
import { impRequestPay, RequestPayParams, RequestPayResponse } from '@/lib';
import { CartItemResponse, CreateOrderRequest, RawOrderForm } from '@/types';
import dayjs from 'dayjs';

interface Props {
  cartItems?: CartItemResponse[];
}

export const useCreateOrderMutation = ({ cartItems }: Props) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(createOrder, {
    onSuccess: ({ data: orderId }) => {
      navigate({
        pathname: URLS.CLIENT.PAYMENT,
        search: `${URLS.PARAM.ORDER}=${orderId}`,
      });
    },
    onError: () => {
      alert('결제 도중 오류가 발생했습니다.');
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
      pg: 'html5_inicis',
      merchant_uid: `mid_${new Date().getTime()}`,
      name: orderName,
      amount: 100, // form.totalPrice,
      buyer_email: request.purchaserEmail,
      buyer_name: request.purchaser,
      buyer_tel: request.purchaserPhone,
    };

    const callback = (response: RequestPayResponse) => {
      if (response.success) {
        const { paid_amount, paid_at } = response;

        if (paid_amount) request.totalPrice = paid_amount;
        if (paid_at) request.paidAt = dayjs.unix(paid_at).toDate();

        mutate({
          ...request,
          orderDetails: cartItems.map(
            ({ sellingPrice, quantity, variantId }) => ({
              price: sellingPrice,
              quantity,
              variantId,
            }),
          ),
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
    recipientAddressPostalCode,
    recipientAddress,
    recipientAddressDetail,
    recipientPhone1,
    recipientPhone2,
    purchaserPhone1,
    purchaserPhone2,
    ...rest
  } = form;

  const shippingAddress = `${recipientAddress} ${recipientAddressDetail}`;
  const purchaserPhone = purchaserPhone1 + purchaserPhone2;
  const recipientPhone = recipientPhone1 + recipientPhone2;

  return {
    ...rest,
    purchaserPhone,
    postalCode: recipientAddressPostalCode,
    shippingAddress,
    recipientPhone,
  };
}
