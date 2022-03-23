import { Fields, FieldRegister, FieldErrors } from './field.type';

export type Form = Record<keyof Fields, any>;

export type SubmitHandler<T> = (form: T) => Promise<void>;

export type UseFormHandleSubmit<T> = (
  onValid: SubmitHandler<T>,
) => (event?: React.BaseSyntheticEvent) => Promise<void>;

export interface UseFormReturn<T extends Form = Form> {
  register: FieldRegister;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors;
}
