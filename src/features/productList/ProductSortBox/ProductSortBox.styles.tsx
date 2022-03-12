import { styles, Theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 6.4rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SortMenu = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  gap: ${styles.space.level4}rem;

  font-size: ${styles.fontSize.small}rem;
`;

const itemHoverStyle = ({ color }: Theme) => css`
  color: ${color.font};
  font-weight: ${styles.fontWeight.bold};
`;

export const SortMenuItem = styled.li<{ active: boolean }>`
  a {
    color: ${({ theme: { color } }) => color.gray};

    ${({ theme, active }) => active && itemHoverStyle(theme)}
  }

  a:hover {
    ${({ theme }) => itemHoverStyle(theme)}
  }
`;
