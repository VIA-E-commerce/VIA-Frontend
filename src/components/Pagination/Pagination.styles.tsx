import { styles, Theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PaginationMenu = styled.ul`
  margin: ${styles.space.level8}rem 0;
  padding: 0;

  display: flex;
  justify-content: center;
  gap: ${styles.space.level2}rem;

  list-style: none;
`;

interface PageButtonStyleProps {
  active?: boolean;
  disabled?: boolean;
}

const getPageButtonActiveStyle = (theme: Theme) => css`
  background: ${theme.color.font};
  color: ${theme.color.fontReverse};
  border-color: ${theme.color.font};
`;

const getPageButtonDisabledStyle = (theme: Theme) => css`
  color: ${theme.color.gray};
  pointer-events: none;
`;

export const PageButton = styled.li<PageButtonStyleProps>`
  width: 4rem;
  height: 4rem;

  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};

  transition: all 0.3s ease;
  ${({ active, theme }) => active && getPageButtonActiveStyle(theme)}
  ${({ disabled, theme }) => disabled && getPageButtonDisabledStyle(theme)}

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    ${({ theme }) => getPageButtonActiveStyle(theme)}
  }
`;
