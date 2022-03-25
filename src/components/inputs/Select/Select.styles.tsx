import styled from '@emotion/styled';

import { styles } from '@/styles';

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  appearance: none;

  background: url(/images/selector.png) no-repeat
    ${({ theme }) => theme.color.background};
  background-size: 8rem 4rem;

  width: 8rem;
  height: 4rem;
  padding: 0.6rem 1.2rem;

  outline: none;

  font-size: ${styles.fontSize.small}rem;

  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.lightGray};

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }

  &:focus {
    outline: ${styles.border.level1}rem solid ${({ theme }) => theme.color.font};
  }
`;
