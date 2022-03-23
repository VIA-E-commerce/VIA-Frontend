import {
  ValidationRuleValue,
  ValidationRule,
  ValidationRuleWithMessage,
  ValidationRules,
  Fields,
} from '../types';
import { validationRegExps } from '../validationRegExps';

import { isString } from './type.utils';

export const hasValidationMessage = <T extends ValidationRuleValue>(
  rule: ValidationRule<T>,
): rule is ValidationRuleWithMessage<T> => {
  return rule && (rule as ValidationRuleWithMessage<T>).value !== undefined;
};

export const getValidateOptionValue = <T extends ValidationRuleValue>(
  rule?: ValidationRule<T>,
): any => {
  if (!rule) return;
  return hasValidationMessage(rule) ? rule.value : rule;
};

export const getErrorOptionMessage = (rule: string | ValidationRule) => {
  if (hasValidationMessage(rule)) return rule.message;
  else if (isString(rule)) return rule;

  return '';
};

export const getRuleRegExp = <K extends keyof ValidationRules>(
  validationRules: ValidationRules,
  ruleType: K,
) => {
  const validationOption = validationRules[ruleType];
  const optionValue =
    getValidateOptionValue<ValidationRuleValue>(validationOption);

  if (!optionValue) return;

  return validationRegExps[ruleType](optionValue);
};

export const getMatchRuleRegExp = (
  validationRules: ValidationRules,
  fields: Fields,
): RegExp | undefined => {
  const matchOption = validationRules.match;
  const matchValue = getValidateOptionValue(matchOption);

  if (!matchValue) return;

  return validationRegExps.match(fields)(matchValue);
};
