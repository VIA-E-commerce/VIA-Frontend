import { Fields } from './types';

export const validationRegExps = {
  required: () => /.+/,
  minLength: (minLength: number) => new RegExp(`^.{${minLength},}$`),
  maxLength: (naxLength: number) => new RegExp(`^.{0,${naxLength}}$`),
  pattern: (pattern: RegExp) => pattern,
  match: (fields: Fields) => (matchField: string) => {
    const matchingValue = fields[matchField]?.ref.current?.value;

    if (!matchingValue) throw new Error('일치하는 필드를 찾을 수 없습니다.');

    return new RegExp(`^${matchingValue}$`);
  },
};
