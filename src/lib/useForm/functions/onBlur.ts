import { Fields, ValidateField, UseFormOnBlur } from '../types';

export const onBlur =
  (fields: Fields, validateField: ValidateField): UseFormOnBlur =>
  (event) => {
    const { name } = event.target;

    const validationRules = fields[name].validationRules;
    if (!validationRules) return;

    validateField(event.target, validationRules);
  };
