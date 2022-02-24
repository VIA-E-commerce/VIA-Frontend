import { HTMLInputTypeAttribute } from 'react';

export interface Provider {
  name: string;
  color: string;
  fontColor: string;
  logo: string;
  url: string;
}

export interface Field {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  validation?: Validation;
}

export type ValidationRuleWithMessage<T> = {
  value: T;
  message: string;
};
export type ValidationRule<T> = T | ValidationRuleWithMessage<T>;
export interface Validation {
  required?: string | ValidationRule<boolean>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
  match?: ValidationRule<string>;
}

export type AuthType = 'join' | 'login';

export interface JoinForm {
  email: string;
  name: string;
  password: string;
}

export interface ResponseEntity {
  success: boolean;
  statusCode: number;
  data: any;
}
