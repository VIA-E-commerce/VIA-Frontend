export interface ResponseEntity<T> {
  success: boolean;
  statusCode: number;
  data: T;
}

export interface ErrorResponse {
  error: string;
  statusCode: number;
  message: string | string[];
}

export interface Pagination<T> {
  totalElements: number;
  totalPages: number;
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
  role: string;
  provider: string;
  snsId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryResponse {
  id: number;
  name: string;
  code: string;
}

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
  images: string[];

  retailPrice: number;
  sellingPrice: number;

  salesVolume: number;
  reviewCount: number;
  wishCount: number;

  display: boolean;
  onSale: boolean;

  variants: VariantResponse[];
  colors: ColorResponse[];
  sizes: SizeValueResponse[];
}
