import { cloneDeep } from 'lodash';

import { Form, ValidationRules, Fields, RefTarget, FieldRef } from '../types';
import { isCheckBoxElement } from './type.utils';

export const getFieldValue = (target: RefTarget) => {
  const { value } = target;

  if (isCheckBoxElement(target)) {
    return target.checked;
  }

  return value;
};

export const getFieldValues = (fields: Fields): Form => {
  const copiedFields: Form = {};

  for (const key in fields) {
    copiedFields[key] = cloneDeep(fields[key].value);
  }

  return copiedFields;
};

export const setField = <K extends keyof Fields>(
  fields: Fields,
  name: K,
  ref: FieldRef,
  validationRules?: ValidationRules,
): void => {
  fields[name] = {
    ...fields[name],
    ref,
    validationRules,
  };
};

export const copyFieldValues = (fields: Fields) => {
  const copiedForm: Form = {};

  for (const key in fields) {
    const target = fields[key].ref?.current;
    if (target) {
      copiedForm[key] = cloneDeep(getFieldValue(target));
    }
  }

  return copiedForm;
};
