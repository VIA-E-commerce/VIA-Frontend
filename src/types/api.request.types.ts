// 회원가입 & 로그인
export interface JoinForm {
  email: string;
  name: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface PagingQuery {
  pageNum?: number;
  pageSize?: number;
}

// 리뷰
export type ReviewSortMethod = '' | 'rating-desc' | 'rating-asc';

// 장바구니
export interface AddCartItemRequest {
  variantId: number;
  quantity: number;
}

export interface EditCartItemRequest {
  quantity: number;
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

// 마이 페이지
export interface EditUserRequest {
  name: string;
  phone: string;
}

// 문의
export interface CreateQuestionRequest {
  title: string;
  content: string;
  isPrivate?: boolean;
  productId: number;
}

export interface EditQuestionRequest {
  title: string;
  content: string;
  isPrivate?: boolean;
}
