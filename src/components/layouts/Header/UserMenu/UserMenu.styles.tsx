import styled from '@emotion/styled';
import { styles } from '@/styles';

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  grid-column: 10 / span 3;
  display: flex;
  justify-content: flex-end;
  align-items: wrap;

  font-size: ${styles.fontSize.xsmall}rem;
`;

export const MenuItem = styled.li`
  min-width: 5.6rem;
  flex-shrink: 0;

  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    button {
      text-decoration: underline;
    }

    svg {
      transform: scale(1.1);
    }
  }

  a,
  button {
    height: 100%;
    padding: 0 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 2.4rem;
    transition: all 0.1s ease-out;
  }
`;

export const CartButtonBox = styled.div`
  height: 100%;

  position: relative;

  .badge {
    position: absolute;
    top: 0.8rem;
    right: 0;
  }
`;
