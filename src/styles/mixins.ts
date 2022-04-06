import { css } from '@emotion/react';
import { styles } from '@/styles';

export const innerWrapper = (colGap = styles.grid.gutter) => css`
  width: ${styles.maxWidth}rem;
  padding: 0 ${colGap / 2}rem;
  margin: 0 auto;
`;

export const grid = (
  cols = styles.grid.column,
  rowGap = styles.grid.rowGap,
  colGap = styles.grid.gutter,
) => css`
  ${innerWrapper(colGap)};

  display: grid;
  grid-template-columns: repeat(${cols}, minmax(0, 1fr));
  row-gap: ${rowGap}rem;
  column-gap: ${colGap}rem;
`;

export const limitVwLowerBound = (vw: number) => {
  const rem = (styles.maxWidth * vw) / 100;

  return `max(${rem}rem, ${vw}vw)`;
};
