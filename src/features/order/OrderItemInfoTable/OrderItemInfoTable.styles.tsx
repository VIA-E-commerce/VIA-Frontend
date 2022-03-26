import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles, Theme } from '@/styles';

const getBorderStyle = (theme: Theme) =>
  css`
    border-style: solid;
    border-color: ${theme.color.darkGray};
  `;

// 요소
export const Table = styled.table`
  border-collapse: collapse;

  border: 0;
  ${({ theme }) => getBorderStyle(theme)};

  thead {
    height: 4.8rem;
    background: ${({ theme }) => theme.color.surface};

    tr {
      border: 0;
      border-bottom-width: ${styles.border.level1}rem;
      ${({ theme }) => getBorderStyle(theme)};
    }
  }

  tbody {
    tr + tr {
      border-top: ${styles.border.level1}rem solid
        ${({ theme }) => theme.color.lightGray};
    }
  }
`;
