import styled from '@emotion/styled';
import { styles } from '@/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const AuthTitle = styled.h2`
  margin: 0 0 3.2rem 0;
  line-height: 140%;

  text-align: center;
  text-transform: capitalize;
  font-family: ${styles.fontFamily.eng};

  span {
    border-bottom: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.font};
  }
`;
