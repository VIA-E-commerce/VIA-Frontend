// 회원가입 & 로그인
export interface JoinForm {
  email: string;
  name: string;
  password: string;
  phone: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface PagingQuery {
  pageNum?: number;
  pageSize?: number;
}

// 후기
export type ReviewSortMethod = '' | 'rating-desc' | 'rating-asc';

export interface EditReviewRequest {
  content: string;
  imageUrl?: string;
  rating: number;
}

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
  | 'REFUNDED'
  | 'FAILED';

export interface CreateOrderRequest {
  purchaser: string;
  purchaserPhone: string;
  purchaserEmail: string;

  recipient: string;
  recipientPhone: string;
  postalCode: string;
  shippingAddress: string;
  message: string;

  impUID: string;

  cartItemIds: number[];
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

export type PurchasedProductFilter = 'reviewable';

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

// 결제
export interface ImpRefundRequest {
  impUID: string;
  reason?: string;
  amount?: number;
  checksum?: number;
}
