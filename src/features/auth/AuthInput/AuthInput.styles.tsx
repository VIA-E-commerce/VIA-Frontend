import { styles } from '@/styles';
import styled from '@emotion/styled';

interface AuthInputStyleProps {
  error: boolean;
}

export const StyledInput = styled.input<AuthInputStyleProps>`
  width: 100%;
  height: 4.8rem;
  padding: 0.8rem 1.6rem;

  border: ${styles.border.level1}rem solid;
  border-color: ${({ theme: { color }, error }) =>
    error ? color.error : color.lightGray};

  font-size: ${styles.fontSize.normal}rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.color.error};
  font-size: ${styles.fontSize.small}rem;
`;
