import { FieldErrors } from './field.type';

export type RefTarget = (HTMLInputElement | HTMLSelectElement) & {
  valid?: boolean;
  errors?: FieldErrors;
};

export type FieldRef<Target extends RefTarget = RefTarget> =
  React.RefObject<Target>;
