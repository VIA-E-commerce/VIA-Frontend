import styled from '@emotion/styled';
import { styles } from '@/styles';

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  grid-column: 10 / span 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;

  font-size: ${styles.fontSize.xsmall}rem;
`;

export const MenuItem = styled.li`
  flex-shrink: 0;
  cursor: pointer;

  &,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  text-transform: uppercase;

  svg {
    font-size: 2.4rem;
  }
`;
