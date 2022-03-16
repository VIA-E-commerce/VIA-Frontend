import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles } from '@/styles';

export interface ButtonGroupStyleProps {
  buttonWidth?: number;
  cols?: number;
  rowGap: number;
  colGap: number;
}
const getGridStyle = ({
  buttonWidth,
  cols,
  rowGap,
  colGap,
}: ButtonGroupStyleProps) => {
  const repeat: number | 'auto-fill' = cols || 'auto-fill';
  const width = buttonWidth
    ? `${buttonWidth * styles.pxToRem}rem`
    : 'minmax(0, 1fr)';
  const calcedRowGap = rowGap * styles.pxToRem;
  const calcedColGap = colGap * styles.pxToRem;

  return css`
    grid-template-columns: repeat(${repeat}, ${width});
    row-gap: ${calcedRowGap}rem;
    column-gap: ${calcedColGap}rem;
  `;
};
export const Wrapper = styled.div<ButtonGroupStyleProps>`
  width: 100%;

  display: grid;
  ${({ buttonWidth, cols, rowGap, colGap }) =>
    getGridStyle({ buttonWidth, cols, rowGap, colGap })}
`;
