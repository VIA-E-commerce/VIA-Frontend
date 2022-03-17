import styled from '@emotion/styled';
import { styles } from '@/styles';

export const StyledFooter = styled.footer`
  border-top: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;

export const FooterInner = styled.div`
  width: ${styles.maxWidth}rem;
  height: 8rem;
  margin: 0 auto;
  padding: 2.4rem ${styles.grid.gutter / 2}rem;

  font-size: ${styles.fontSize.small}rem;
`;
