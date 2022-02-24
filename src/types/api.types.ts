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
