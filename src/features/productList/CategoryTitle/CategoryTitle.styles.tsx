import { styles } from '@/styles';
import styled from '@emotion/styled';

export const CategoryTitleWrapper = styled.div`
  height: 24rem;

  display: flex;
  align-items: center;

  h2 {
    flex: 1;

    font-family: ${styles.fontFamily.eng};
    text-transform: uppercase;
    text-align: center;

    span {
      border-bottom: ${styles.border.level1}rem solid
        ${({ theme }) => theme.color.font};
    }
  }
`;
