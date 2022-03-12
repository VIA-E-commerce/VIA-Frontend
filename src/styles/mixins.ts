import { css } from '@emotion/react';
import { styles } from '@/styles';

export const grid = (
  cols = styles.grid.column,
  rowGap = styles.grid.rowGap,
  colGap = styles.grid.gutter,
) => css`
  width: ${styles.maxWidth}rem;
  padding: 0 ${colGap / 2}rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(${cols}, minmax(0, 1fr));
  row-gap: ${rowGap}rem;
  column-gap: ${colGap}rem;
`;
