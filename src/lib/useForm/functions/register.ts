import React, { useRef } from 'react';

import { FieldRegister, Fields, RefTarget, RegisterOptions } from '../types';
import { getValidateOptionValue, setField } from '../utils';

export const register =
  (fields: Fields, onBlur: React.FocusEventHandler): FieldRegister =>
  <Target extends RefTarget>(options: RegisterOptions) => {
    const { name, defaultValue, placeholder, validationRules } = options;

    const ref = useRef<Target>(null);

    setField(fields, name, ref, validationRules);

    return {
      ref,
      name,
      defaultValue,
      placeholder,
      minLength: getValidateOptionValue(validationRules?.minLength),
      maxLength: getValidateOptionValue(validationRules?.maxLength),
      onBlur,
    };
  };
