import styled from '@emotion/styled';
import { mixins, styles } from '@/styles';

export const StyledFooter = styled.footer`
  border-top: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.font};
`;

const verticalPadding = 2.4;
export const FooterInner = styled.div`
  ${mixins.innerWrapper()}
  height: 8rem;

  padding-top: ${verticalPadding}rem;
  padding-bottom: ${verticalPadding}rem;

  font-size: ${styles.fontSize.small}rem;
`;
