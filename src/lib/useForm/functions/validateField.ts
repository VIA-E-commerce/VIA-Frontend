import React from 'react';

import { FieldErrors, Fields, ValidateField } from '../types';
import { getErrorOptionMessage } from '../utils';

import { getErrorField } from './getErrorField';

export const validateField =
  (
    fields: Fields,
    setErrors: React.Dispatch<React.SetStateAction<FieldErrors>>,
  ): ValidateField =>
  (target, validationRules) => {
    const errorField = getErrorField({
      target,
      fields,
      validationRules,
    });

    const { name: fieldName, errorOption } = errorField;

    if (errorOption) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: getErrorOptionMessage(errorOption),
      }));

      target.valid = false;
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });

      target.valid = true;
    }

    return errorField;
  };
