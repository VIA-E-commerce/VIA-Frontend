import { styles, Theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  color: ${theme.color.reverseFont};
  border-color: ${theme.color.font};
`;

const getPageButtonDisabledStyle = (theme: Theme) => css`
  color: ${theme.color.gray};
  pointer-events: none;
`;

export const PageButton = styled(Link)<PageButtonStyleProps>`
  width: 4rem;
  height: 4rem;

  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active, theme }) => active && getPageButtonActiveStyle(theme)}
  ${({ disabled, theme }) => disabled && getPageButtonDisabledStyle(theme)}

  &:hover {
    ${({ theme }) => getPageButtonActiveStyle(theme)}
  }

  transition: all 0.3s ease;
`;
