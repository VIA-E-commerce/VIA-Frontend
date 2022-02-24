import {
  FocusEvent,
  FormEvent,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';

import {
  Field,
  Validation,
  ValidationRule,
  ValidationRuleWithMessage,
} from '@/types';
import { UseMutateFunction } from 'react-query';
import { AxiosResponse } from 'axios';

interface FieldInfo {
  ref: RefObject<HTMLInputElement>;
  value: any;
  valid?: boolean;
  validation?: Validation;
}

interface FormInfo {
  [x: string]: FieldInfo;
}

export interface FormErrors {
  [x: string]: string | null;
}

export const useForm = <SubmitForm extends object>(
  initForm: SubmitForm,
  submitApi: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    SubmitForm,
    unknown
  >,
) => {
  const form: FormInfo = {};
  const [errors, setErrors] = useState<FormErrors>({});

  const onBlur = useCallback((event: FocusEvent<HTMLInputElement, Element>) => {
    const { name } = event.target;

    const validationRules = form[name].validation;
    if (!validationRules) return;

    validate(event.target, validationRules);
  }, []);

  const register = useCallback(
    (field: Field) => {
      const { name, type, placeholder, validation } = field;

      const ref = useRef<HTMLInputElement>(null);

      form[name] = {
        ...form[name],
        ref,
        validation,
      };

      return {
        ref,
        name,
        type,
        placeholder,
        onBlur,
      };
    },
    [form, onBlur],
  );

  const hasMessage = useCallback(
    <T>(rule: ValidationRule<T>): rule is ValidationRuleWithMessage<T> => {
      return (rule as ValidationRuleWithMessage<T>).value !== undefined;
    },
    [],
  );

  const validate = useCallback(
    (target: EventTarget & HTMLInputElement, rules?: Validation) => {
      const { name, value, type } = target;

      if (type === 'checkbox') return;

      if (!rules) return;

      const patterns = {
        required: () => /.+/,
        minLength: (ruleValue: any) => new RegExp(`^.{${ruleValue},}$`),
        maxLength: (ruleValue: any) => new RegExp(`^.{0,${ruleValue}}$`),
        pattern: (ruleValue: any) => ruleValue,
        match: (ruleValue: any) => {
          const matchingValue = form[ruleValue]?.ref.current?.value;

          if (!matchingValue)
            throw new Error('일치하는 필드를 찾을 수 없습니다.');

          return new RegExp(`^${matchingValue}$`);
        },
      };

      const ruleTypes = Object.keys(rules) as (keyof Validation)[];

      const errorRuleType = ruleTypes.find((ruleType) => {
        const rule = rules[ruleType];

        const condition = patterns[ruleType](
          hasMessage(rule) ? rule.value : rule,
        );
        return !condition.test(value);
      });

      const errorRule = errorRuleType && rules[errorRuleType];

      let errorMessage: any = null;
      if (errorRule !== undefined) {
        errorMessage = typeof errorRule === 'string' ? errorRule : '';
        errorMessage = hasMessage(errorRule) ? errorRule.message : errorMessage;
      }

      setErrors((prev) => ({
        ...prev,
        [name]: errorMessage,
      }));

      return errorMessage;
    },
    [hasMessage],
  );

  const getInputValue = useCallback(
    (target: EventTarget & HTMLInputElement) => {
      const { type, value, checked } = target;

      if (type === 'checkbox') {
        return checked;
      }

      return value;
    },
    [],
  );

  const check = useCallback((fieldInfo: FieldInfo) => {
    const target = fieldInfo.ref.current;
    if (!!!target) return false;

    const { name, type } = target;

    if (type === 'checkbox') {
      const required = form[name].validation?.required;

      // 필수 체크 checkbox를 체크하지 않은 경우 경고 메시지 출력
      if (!!required && !target.checked) {
        alert(
          typeof required === 'string'
            ? required
            : '체크되지 않은 항목이 있습니다.',
        );
        return false;
      }
    } else {
      const errorMessage = validate(target, fieldInfo.validation);

      if (errorMessage) {
        alert(errorMessage);
        return false;
      }
    }

    return true;
  }, []);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      for (const key in form) {
        if (!check(form[key])) return;
      }

      const submitForm: SubmitForm = initForm;

      for (const key in initForm) {
        const target = form[key].ref.current;
        if (!!!target) {
          alert('폼 전송 중 오류가 발생했습니다.');
          return;
        }

        const value = getInputValue(target) as any;
        submitForm[key] = value;
      }

      submitApi(submitForm);
    },
    [form, validate, getInputValue],
  );

  return { register, onSubmit, errors };
};
