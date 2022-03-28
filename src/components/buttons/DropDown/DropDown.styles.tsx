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
    padding: ${styles.space.level2}rem;
    list-style: none;

    background: ${({ theme }) => theme.color.background};
    width: 8rem;
    border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.font};

    position: absolute;

    display: none;

    li {
      text-align: center;
    }
  }

  &:hover ul {
    display: block;
  }
`;
