import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { mixins, styles, Theme } from '@/styles';

export const Wrapper = styled.nav`
  background: ${({ theme }) => theme.color.background};

  height: ${styles.component.tab.navHeight}rem;

  display: flex;
  justify-content: center;
`;

export const TabMenu = styled.ul`
  ${mixins.innerWrapper()}
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  flex-shrink: 0;

  li {
    border-bottom: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.font};
  }
`;

interface TabButtonStyleProps {
  active: boolean;
}
const activeStyle = (theme: Theme) => css`
  background: ${theme.color.font};
  color: ${theme.color.fontReverse};
`;
export const TabButton = styled.li<TabButtonStyleProps>`
  flex: 1 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover,
  &.active {
    ${({ theme }) => activeStyle(theme)}
  }

  ${({ active, theme }) => active && activeStyle(theme)}

  ${styles.transition.button}
`;
