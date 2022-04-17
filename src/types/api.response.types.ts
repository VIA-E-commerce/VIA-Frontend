export interface ErrorResponse {
  error: string;
  statusCode: number;
  message: string | string[];
}

export interface PaginationResponse<T> {
  totalElements: number;
  totalPages: number;
  pageNum: number;
  pageSize: number;
  isFirst: boolean;
  isLast: boolean;
  list: T[];
}

export interface LoginResponse {
  accessToken: string;
}

export interface UserSummary {
  id: number;
  email: string;
  name: string;
  phone: string;
  role: string;
  provider: SNSProvider;
  snsId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryResponse {
  id: number;
  name: string;
  code: string;
}

// 상품
export interface ProductCardResponse {
  id: number;
  name: string;
  thumbnail: string;

  retailPrice?: number;
  sellingPrice: number;

  salesVolume: number;
  reviewCount: number;
  wishCount: number;

  display: boolean;
  onSale: boolean;
  wished: boolean;
  isSoldOut: boolean;

  createdAt: Date;
  updatedAt: Date;

  category?: CategoryResponse;
}

export interface ColorResponse {
  id: number;
  label: string;
  hexCode: string;
}

export interface SizeValueResponse {
  id: number;
  label: string;
  order: number;
}

export interface VariantResponse {
  id: number;
  quantity: number;
  hide?: boolean;
  colorId: number;
  sizeId: number;
}

export interface ProductDetailResponse {
  id: number;
  name: string;
  description: string;
  images: string[];

  retailPrice: number;
  sellingPrice: number;

  salesVolume: number;
  reviewCount: number;
  wishCount: number;

  display: boolean;
  onSale: boolean;
  wished: boolean;
  isSoldOut: boolean;

  variants: VariantResponse[];
  colors: ColorResponse[];
  sizes: SizeValueResponse[];
}

export interface ReviewResponse {
  id: number;

  content: string;
  imageUrl?: string;
  rating: number;

  createdAt: Date;
  updatedAt: Date;

  authorId: number;
  author: string;
}

export interface QuestionResponse {
  id: number;

  title: string;
  content: string;
  userId: number;
  username: string;

  isPrivate: boolean;

  productId: number;
  productName: string;

  createdAt: Date;
  updatedAt: Date;
}

// 마이페이지
export interface MyReviewResponse extends ReviewResponse {
  productId: number;
  productName: string;
  productThumbnail: string;
}

export interface PurchasedProductResponse {
  id: number;

  name: string;
  thumbnail: string;

  display: boolean;
  onSale: boolean;
}

export interface MyQuestionResponse extends QuestionResponse {
  thumbnail: string;
}

// 장바구니
export interface AddCartItemResponse {
  id: number;
  message?: string;
}

export interface CartItemResponse {
  id: number;
  productName: string;
  thumbnail: string;

  retailPrice: number;
  sellingPrice: number;
  quantity: number;
  stock: number;

  disabled: boolean;

  productId: number;
  variantId: number;

  color: ColorResponse;
  size: SizeValueResponse;
}

export type SNSProvider = 'LOCAL' | 'KAKAO' | 'NAVER';

export interface OrderResponse {
  id: number;

  totalPrice: number;
  paymentReal: number;

  purchaser: string;
  purchaserPhone?: string;
  purchaserEmail?: string;

  recipient: string;
  recipientPhone: string;
  postalCode: string;
  shippingAddress: string;
  message?: string;

  status:
    | '입금 대기'
    | '입금 확인'
    | '배송 준비중'
    | '배송중'
    | '배송 완료'
    | '주문 취소'
    | '교환'
    | '환불'
    | '주문 실패';

  paymentMethod: string;

  arrivedAt?: Date;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
