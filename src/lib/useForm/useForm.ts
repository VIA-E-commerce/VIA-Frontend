import { useState } from 'react';

import {
  validateField as wrappedValidateField,
  handleSubmit as wrappedHandleSubmit,
  onBlur as wrappedOnBlur,
  register as wrappedRegister,
} from './functions';
import { Form, UseFormReturn, Fields, FieldErrors } from './types';

export const useForm = <
  SubmitForm extends Form,
>(): UseFormReturn<SubmitForm> => {
  const fields: Fields = {};
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateField = wrappedValidateField(fields, setErrors);

  const onBlur = wrappedOnBlur(fields, validateField);

  const register = wrappedRegister(fields, onBlur);

  const handleSubmit = wrappedHandleSubmit<SubmitForm>(fields, validateField);

  return {
    register,
    handleSubmit,
    errors,
  };
};
