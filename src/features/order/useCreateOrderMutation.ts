import { useMutation } from 'react-query';

import { createOrder } from '@/apis';
import { RawOrderForm } from '@/types';

export const useCreateOrderMutation = () => {
  const { mutate } = useMutation(createOrder);

  const onSubmit = async (form: RawOrderForm) => {
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
    mutate({
      ...rest,
      postalCode: recipientAddressPostalCode,
      shippingAddress: `${recipientAddress} ${recipientAddressDetail}`,
      purchaserPhone: `${purchaserPhone1}${purchaserPhone2}`,
      recipientPhone: `${recipientPhone1}${recipientPhone2}`,
    });
  };

  return {
    onSubmit,
  };
};
