import styled from '@emotion/styled';
import { mixins, styles, Theme } from '@/styles';
import { css } from '@emotion/react';

const borderStyle = (theme: Theme) => css`
  border-bottom: ${styles.border.level1}rem solid ${theme.color.font};
`;
export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.color.background};

  height: ${styles.component.header.height}rem;

  position: sticky;
  top: 0;

  ${styles.component.header.topTransition}

  ${({ theme }) => borderStyle(theme)}

  &:not(.border) {
    box-sizing: content-box;
    padding-bottom: 0.1rem;
  }

  &.hide {
    top: -${styles.component.header.height}rem;
  }
`;

export const HeaderInner = styled.div`
  ${mixins.grid()}

  height: inherit;

  & > a {
    height: inherit;
  }
`;

export const Logo = styled.div`
  grid-column: 1 / span 1;

  & {
    height: inherit;
    display: flex;

    img {
      height: 100%;
    }
  }
`;
