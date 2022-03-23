import { Fields } from './field.type';
import { RefTarget } from './ref.type';

export type ValidationRuleValue = boolean | string | number | RegExp;

export interface ValidationRules {
  required?: string | ValidationRule<boolean>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
  match?: ValidationRule<string>;
}

export type ValidationRule<
  T extends ValidationRuleValue = ValidationRuleValue,
> = T | ValidationRuleWithMessage<T>;

export type ValidationRuleWithMessage<T> = {
  value: T;
  message: string;
};

export interface ErrorField {
  name: string;
  errorOption?: string | ValidationRule;
}

// 유효성 검사 관련 함수
export type ValidateField = (
  target: RefTarget,
  validationRules?: ValidationRules,
) => ErrorField;

export type GetErrorField = (props: {
  target: RefTarget;
  fields: Fields;
  validationRules?: ValidationRules;
}) => ErrorField;

export type GetCheckBoxErrorField = (props: {
  target: HTMLInputElement;
  validationRules: ValidationRules;
}) => ErrorField;
