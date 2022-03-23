import { ValidationRules } from '@/lib';
import { Dictionary } from '@/types';

export const REGEXP = {
  NUMBER: /^[0-9]+$/,
  EMAIL: /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/i,
};

export const VALIDATION = {
  EMAIL: {
    MAX_LENGTH: 255,
    PATTERN: REGEXP.EMAIL,
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 17,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 255,
  },
  PHONE: {
    MIN_LENGTH: 7,
    MAX_LENGTH: 8,
  },
  ADDRESS: {
    MAX_LENGTH: 255,
  },
  ORDER: {
    DELIVERY_MESSAGE: {
      MAX_LENGTH: 50,
    },
  },
};

export const INPUT_OPTIONS: Dictionary<ValidationRules> = {
  EMAIL: {
    required: '이메일을 입력해주세요.',
    maxLength: {
      value: VALIDATION.EMAIL.MAX_LENGTH,
      message: '이메일이 너무 깁니다.',
    },
    pattern: {
      value: REGEXP.EMAIL,
      message: '이메일 형식에 맞게 입력해주세요.',
    },
  },
  NAME: {
    required: '이름을 입력해주세요.',
    minLength: {
      value: VALIDATION.NAME.MIN_LENGTH,
      message: `이름은 최소 ${VALIDATION.NAME.MIN_LENGTH}글자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.NAME.MAX_LENGTH,
      message: `이름은 ${VALIDATION.NAME.MAX_LENGTH}글자 이하여야 합니다.`,
    },
    pattern: {
      value: /^[A-Za-z가-힣]+$/,
      message: '이름에는 한글, 알파벳 외의 문자를 사용할 수 없습니다.',
    },
  },
  PASSWORD: {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: VALIDATION.PASSWORD.MIN_LENGTH,
      message: `비밀번호는 최소 ${VALIDATION.PASSWORD.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.PASSWORD.MAX_LENGTH,
      message: `비밀번호는 ${VALIDATION.PASSWORD.MAX_LENGTH}자 이하여야 합니다.`,
    },
  },
};
