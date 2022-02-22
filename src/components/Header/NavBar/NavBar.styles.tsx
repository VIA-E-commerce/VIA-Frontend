import styled from '@emotion/styled';
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

export const MenuItem = styled.li`
  width: 9.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
