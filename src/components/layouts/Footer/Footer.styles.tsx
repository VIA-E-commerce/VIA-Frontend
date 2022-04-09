import styled from '@emotion/styled';
import { mixins, styles } from '@/styles';

export const StyledFooter = styled.footer`
  border-top: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.layoutBorderColor};
`;

const verticalPadding = 2.4;

export const FooterInner = styled.div`
  ${mixins.innerWrapper()}
  height: ${styles.component.footer.height}rem;

  padding-top: ${verticalPadding}rem;
  padding-bottom: ${verticalPadding}rem;

  font-size: ${styles.fontSize.small}rem;

  display: flex;

  & > div {
    display: flex;
    align-items: center;
  }
`;

const iconSize = 4;

export const RightMenu = styled.div`
  margin-left: auto;

  svg {
    font-size: ${iconSize}rem;
  }
`;
