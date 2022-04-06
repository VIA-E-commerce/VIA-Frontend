import styled from '@emotion/styled';

import { mixins, styles } from '@/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${mixins.innerWrapper()}
  height: 7.2rem;

  margin-bottom: 1.6rem;

  font-family: ${styles.fontFamily.eng};

  position: relative;

  span {
    background: ${({ theme }) => theme.color.background};
    height: 100%;
    padding-right: 8rem;
    position: relative;
  }

  &::before {
    content: '';

    margin: 0 ${styles.grid.gutter / 2}rem;

    border-bottom: 1px solid black;

    position: absolute;
    top: 0;
    bottom: 2rem;
    left: 0;
    right: 0;
  }
`;

export const More = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 3.2rem;

  button {
    width: 10.4rem;
    height: 4rem;
    font-size: ${styles.fontSize.small}rem;
  }
`;
