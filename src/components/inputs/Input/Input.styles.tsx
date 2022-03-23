import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';

export interface WrapperStyleProps {
  width?: number;
}

export const Wrapper = styled.div<WrapperStyleProps>`
  width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
`;

export interface InputStyleProps {
  error?: boolean;
}
const getBorderColor = (theme: Theme, defaultColor: string, error?: boolean) =>
  error ? theme.color.error : defaultColor;
export const StyledInput = styled.input<InputStyleProps>`
  width: 100%;
  height: 4rem;
  padding: 0.6rem 1.2rem;

  font-size: ${styles.fontSize.small}rem;

  border: ${styles.border.level1}rem solid
    ${({ theme, error }) => getBorderColor(theme, theme.color.lightGray, error)};

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }

  &:focus {
    outline: ${styles.border.level1}rem solid
      ${({ theme, error }) => getBorderColor(theme, theme.color.font, error)};
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.color.error};
  font-size: ${styles.fontSize.small}rem;
`;
