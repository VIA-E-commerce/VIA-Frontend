import {
  GetErrorField,
  GetCheckBoxErrorField,
  ValidationRules,
  ValidationRuleValue,
} from '../types';
import {
  getValidateOptionValue,
  isCheckBoxElement,
  getMatchRuleRegExp,
} from '../utils';

import { validationRegExps } from '../validationRegExps';

const getCheckBoxErrorField: GetCheckBoxErrorField = ({
  target,
  validationRules,
}) => {
  const { name, checked } = target;

  const requiredOption = validationRules.required;
  const isRequired = getValidateOptionValue(requiredOption);

  const invalid = !!isRequired && !checked;

  return {
    name,
    errorOption: invalid ? requiredOption : undefined,
  };
};

export const getErrorField: GetErrorField = ({ target, fields }) => {
  const { name, value } = target;
  const { validationRules } = fields[name];

  if (!validationRules) return { name };

  // 특수 타입 Field의 유효성 검사
  if (isCheckBoxElement(target)) {
    return getCheckBoxErrorField({
      target,
      validationRules,
    });
  }

  // 설정된 유효성 규칙에 따라 Field 검사
  const ruleTypes = Object.keys(validationRules) as (keyof ValidationRules)[];

  const errorRuleType = ruleTypes.find((ruleType) => {
    let rule: RegExp;

    if (!validationRegExps[ruleType]) return false;

    if (ruleType === 'match') {
      const matchRegExp = getMatchRuleRegExp(validationRules, fields);
      if (!matchRegExp) return false;
      rule = matchRegExp;
    } else {
      const validationOption = validationRules[ruleType];
      const optionValue =
        getValidateOptionValue<ValidationRuleValue>(validationOption);

      if (!optionValue) return;

      rule = validationRegExps[ruleType](optionValue);
    }

    return !rule.test(value);
  });

  return {
    name,
    errorOption: errorRuleType && validationRules[errorRuleType],
  };
};
