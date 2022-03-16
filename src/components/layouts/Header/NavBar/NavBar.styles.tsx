import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { styles } from '@/styles';

export const Nav = styled.nav`
  grid-column: 4 / span 6;
  height: inherit;

  font-size: ${styles.fontSize.small}rem;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  height: inherit;

  display: flex;
  list-style: none;
`;

export interface MenuItemStyleProps {
  active: boolean;
}

const activeStyle = css`
  font-weight: ${styles.fontWeight.black};
`;

export const MenuItem = styled.li<MenuItemStyleProps>`
  width: 9.6rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${({ active }) => active && activeStyle}

  &:hover {
    ${activeStyle}
  }

  transition: font-weight 0.1s ease-out;
`;
