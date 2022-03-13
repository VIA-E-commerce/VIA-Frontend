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

export interface JoinForm {
  email: string;
  name: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
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
