import { JoinForm, CreateOrderRequest } from './api.request.types';

export interface RawJoinForm extends Omit<JoinForm, 'phone'> {
  phone1: string;
  phone2: string;
}

export interface RawOrderForm
  extends Omit<
    CreateOrderRequest,
    'shippingAddress' | 'purchaserPhone' | 'recipientPhone'
  > {
  purchaserPhone1: string;
  purchaserPhone2: string;

  recipientAddress: string;
  recipientAddressDetail: string;
  recipientAddressPostalCode: string;

  recipientPhone1: string;
  recipientPhone2: string;
}

export interface RawMyInfoForm {
  name: string;
  phone1: string;
  phone2: string;
}
