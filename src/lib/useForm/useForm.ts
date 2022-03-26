import { useCallback, useRef, useState } from 'react';

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
  const formRef = useRef<{ fields: Fields }>({ fields: {} });
  const fields: Fields = formRef.current.fields;
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateField = useCallback(
    wrappedValidateField(fields, setErrors),
    [],
  );

  const onBlur = useCallback(wrappedOnBlur(fields, validateField), [
    validateField,
  ]);

  const register = useCallback(wrappedRegister(fields, onBlur), [onBlur]);

  const handleSubmit = useCallback(
    wrappedHandleSubmit<SubmitForm>(fields, validateField),
    [],
  );

  return {
    register,
    handleSubmit,
    errors,
  };
};
