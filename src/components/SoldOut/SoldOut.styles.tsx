import styled from '@emotion/styled';

import { styles } from '@/styles';
import { hexToRGB } from '@/utils';

interface SoldOutStyleProps {
  width: number;
}

const SOLD_OUT_FONT_RATIO = 96;

export const Wrapper = styled.div<SoldOutStyleProps>`
  background: ${({ theme }) => hexToRGB(theme.color.black, 0.7)};

  width: 70%;
  height: 70%;

  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: ${({ theme }) => theme.color.white};
  line-height: ${styles.lineHeight.narrow};
  font-family: ${styles.fontFamily.eng};
  font-size: ${({ width }) => width / SOLD_OUT_FONT_RATIO}rem;
  font-weight: ${styles.fontWeight.bold};
`;
