import { styles } from '@/styles';
import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 0.8rem 1.6rem;

  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.lightGray};

  font-size: ${styles.fontSize.normal}rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;
