import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { mixins, styles, Theme } from '@/styles';

const getBorderStyle = (theme: Theme) => css`
  li {
    border-bottom: ${styles.border.level1}rem solid ${theme.color.font};
  }
`;
export const Wrapper = styled.nav`
  background: ${({ theme }) => theme.color.background};

  height: ${styles.component.tab.navHeight}rem;

  display: flex;
  justify-content: center;
  position: sticky;
  top: ${styles.component.header.height}rem;

  ${styles.component.header.topTransition}

  &.header-hide {
    top: 0;
  }

  &.sticky {
    ${({ theme }) => getBorderStyle(theme)}
  }
`;

export const TabMenu = styled.ul`
  ${mixins.innerWrapper()}
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  flex-shrink: 0;

  &:not(.sticky) {
    ${({ theme }) => getBorderStyle(theme)}
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

  a {
    width: 100%;
    height: 100%;

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
  }
`;
