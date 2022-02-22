import styled from '@emotion/styled';
import { mixins, styles } from '@/styles';

export const HeaderInner = styled.div`
  ${mixins.grid()}

  height: 5.6rem;
  border-bottom: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;

export const Logo = styled.div`
  grid-column: 1 / span 1;

  &,
  a,
  img {
    height: inherit;
  }
`;
