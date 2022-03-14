import { HTMLInputTypeAttribute } from 'react';
import { To } from 'react-router';

export interface NavMenuItem {
  label: string;
  to: string | To;
}

export interface Dictionary<T> {
  [x: string]: T;
}

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
