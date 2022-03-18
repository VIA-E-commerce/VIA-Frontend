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
