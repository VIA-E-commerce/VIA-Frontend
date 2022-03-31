import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles, Theme } from '@/styles';
import { hexToRGB } from '@/utils';

const getBorderStyle = (theme: Theme) => css`
  border-bottom: ${styles.border.level1}rem solid ${theme.color.gray};
`;
export const Header = styled.div`
  height: 8.8rem;

  display: flex;
  position: relative;

  &:hover {
    outline: ${styles.border.level2}rem solid
      ${({ theme }) => theme.color.highlight};
    box-shadow: 0 0 0.6rem ${({ theme }) => hexToRGB(theme.color.highlight)};
  }

  cursor: pointer;

  div,
  .thumbnail a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thumbnail {
    img {
      height: 6.4rem;
      aspect-ratio: 1;
      object-fit: cover;

      &:hover {
        outline: ${styles.border.level2}rem solid
          ${({ theme }) => theme.color.highlight};
      }
    }
  }

  .private {
    svg {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.h4}rem;
    }
  }

  .private,
  .thumbnail,
  .username,
  .is-answered,
  .accordion {
    flex: 1;
  }

  .created-at {
    flex: 2;
  }

  .accordion {
    svg {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.h3}rem;
    }
  }
`;

export const Title = styled.div`
  flex: 6;

  display: flex;
  flex-direction: column;

  .product-name {
    a {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.small}rem;

      &:hover {
        color: ${({ theme }) => theme.color.highlight};
      }
    }
  }
`;

export const Collapse = styled.div`
  background: ${({ theme }) => theme.color.surface};
  height: 0;

  overflow: scroll;

  &.active {
    height: 100%;
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.gray};
  }
`;

export const QuestionButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${styles.space.level5}rem;

  button {
    font-size: ${styles.fontSize.normal}rem;
  }

  .delete {
    color: ${({ theme }) => theme.color.error};
  }
`;

export const Contents = styled.div`
  min-height: 16rem;

  padding: ${styles.space.level9}rem ${styles.space.level6}rem;
  white-space: pre;
`;

export const Wrapper = styled.div`
  ${({ theme }) => getBorderStyle(theme)}
`;
