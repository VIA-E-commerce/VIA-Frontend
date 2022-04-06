import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .button {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 0;

    width: 10rem;
    border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.font};

    position: absolute;
    display: none;

    &,
    li {
      background: ${({ theme }) => theme.color.background};
    }

    &:hover,
    li:hover {
      background: ${({ theme }) => theme.color.font};
    }

    li {
      text-align: center;
      padding: ${styles.space.level2}rem ${styles.space.level1}rem;

      &:hover {
        color: ${({ theme }) => theme.color.fontReverse};

        a {
          color: inherit;
        }
      }

      transition: background 0.2s linear;
    }
  }

  &:hover ul {
    display: block;
  }
`;
