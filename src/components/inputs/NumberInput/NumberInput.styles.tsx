import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles } from '@/styles';

export type NumberInputSizeType = 'normal' | 'small';

interface WrapperProps {
  size: NumberInputSizeType;
}

const getNumberInputSize = (size: NumberInputSizeType) => {
  let width = 5.6;
  let height = 4;
  let fontSize = styles.fontSize.normal;
  let borderWidth = styles.border.level2;

  if (size === 'small') {
    width = 4;
    height = 2.8;
    fontSize = styles.fontSize.xsmall;
    borderWidth = styles.border.level1;
  }

  return css`
    height: ${height}rem;

    input {
      border-top-width: ${borderWidth}rem;
      border-bottom-width: ${borderWidth}rem;
    }

    button {
      border-width: ${borderWidth}rem;
    }

    input {
      width: ${width}rem;
      font-size: ${fontSize}rem;
    }
  `;
};
export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => getNumberInputSize(size)}

  display: flex;
`;

export const StyledInput = styled.input`
  margin: 0;
  border-width: 0;
  outline: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  -moz-appearance: none;
  appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  border-color: ${({ theme }) => theme.color.lightGray};
  border-style: solid;

  font-weight: ${styles.fontWeight.bold};
  text-align: center;
`;

export const PlusMinusButton = styled.button`
  background: ${({ theme }) => theme.color.fontReverse};
  outline: none;
  padding: 0;

  height: 100%;
  aspect-ratio: 1;

  border-style: solid;
  border-color: ${({ theme }) => theme.color.lightGray};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${styles.fontSize.h4}rem;

  cursor: pointer;

  &:hover:not([disabled]) {
    background: ${({ theme }) => theme.color.font};
    color: ${({ theme }) => theme.color.fontReverse};
  }
`;
