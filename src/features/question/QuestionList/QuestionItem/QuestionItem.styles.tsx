import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles, Theme } from '@/styles';

const getBorderStyle = (theme: Theme) => css`
  border-bottom: ${styles.border.level1}rem solid ${theme.color.gray};
`;
export const Header = styled.div`
  height: 8.8rem;

  display: grid;
  grid-template-columns: 1fr 6fr 1fr 2fr 1fr 1fr;

  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .private {
    svg {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.h4}rem;
    }
  }

  .accordion {
    svg {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: ${styles.fontSize.h3}rem;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => getBorderStyle(theme)}
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
