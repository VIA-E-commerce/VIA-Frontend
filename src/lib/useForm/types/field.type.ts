import { RefTarget, FieldRef } from './ref.type';
import { ValidationRules } from './validation.type';

export interface FieldInfo {
  ref: FieldRef;
  value: any;
  valid?: boolean;
  validationRules?: ValidationRules;
}

export type Fields = Record<string, FieldInfo>;

export type FieldErrors = Record<keyof Fields, any>;

// register
export interface RegisterOptions {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  validationRules?: ValidationRules;
}

export type FieldRegister = <TElement extends RefTarget>(
  options: RegisterOptions,
) => {
  ref: FieldRef<TElement>;
  name: string;
  placeholder?: string;
  onBlur: React.FocusEventHandler;
};

// Event Handler
export type UseFormOnBlur = (event: { target: any; type?: any }) => void;
