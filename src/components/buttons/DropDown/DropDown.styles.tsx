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

  &:hover ul {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    left: 50%;

    width: 10rem;
    border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.font};

    position: absolute;
    transform: translateX(-50%);

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
      transition: background 0.2s linear;

      a {
        padding: ${styles.space.level2}rem ${styles.space.level1}rem;
        text-align: center;
      }
    }

    li:hover {
      color: ${({ theme }) => theme.color.fontReverse};

      a {
        color: inherit;
      }
    }
  }
`;
