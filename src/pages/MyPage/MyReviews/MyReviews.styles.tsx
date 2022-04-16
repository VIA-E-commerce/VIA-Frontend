import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme, styles } from '@/styles';

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  nav {
    margin-bottom: ${styles.space.level9}rem;
  }
`;

const getActiveStyle = (theme: Theme) => css`
  &::after {
    content: '';
    background: ${theme.color.primary};

    width: 100%;
    height: 0.3rem;

    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const ReviewTabNav = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    gap: ${styles.space.level4}rem;

    li {
      height: 4.8rem;

      position: relative;

      a {
        color: ${({ theme }) => theme.color.darkGray};

        width: 100%;
        height: 100%;

        padding: 0 0.8rem;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: color 0.2s ease-out;

        &.active {
          ${({ theme }) => getActiveStyle(theme)}
        }

        &:hover,
        &.active {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
`;
