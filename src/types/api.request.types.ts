export interface JoinForm {
  email: string;
  name: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export type ReviewSortMethod = '' | 'rating-desc' | 'rating-asc';

export interface AddCartItemRequest {
  variantId: number;
  quantity: number;
}

export interface EditCartItemRequest {
  quantity: number;
}

export interface PagingQuery {
  pageNum?: number;
  pageSize?: number;
}

// 주문
export type OrderStatus =
  | 'AWAITING_PAYMENT'
  | 'PAYMENT_ACCEPTED'
  | 'AWAITING_SHIPMENT'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'EXCHANGED'
  | 'REFUNDED';

export type PaymentMethod =
  | 'BACS'
  | 'ACCOUNT_TRANSFER'
  | 'PHONE_BANKING'
  | 'PAYCO'
  | 'SAMSUNG_PAY'
  | 'NAVER_PAY'
  | 'KAKAO_PAY';

export interface CreateOrderRequest {
  totalPrice: number;
  discount: number;

  purchaser: string;
  purchaserPhone: string;
  purchaserEmail: string;

  recipient: string;
  recipientPhone: string;
  postalCode: string;
  shippingAddress: string;
  message: string;

  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paidAt: Date;

  orderDetails: OrderDetailRequest[];
}

export interface OrderDetailRequest {
  price: number;
  quantity: number;
  variantId: number;
}
