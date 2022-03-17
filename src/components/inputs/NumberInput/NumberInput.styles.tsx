import styled from '@emotion/styled';

import { styles } from '@/styles';

const inputHeight = 4;
export const Wrapper = styled.div`
  height: ${inputHeight}rem;

  display: flex;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
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

  width: 5.6rem;

  border-color: ${({ theme }) => theme.color.gray};
  border-style: solid;
  border-width: ${styles.border.level1}rem 0;

  font-weight: ${styles.fontWeight.bold};
  text-align: center;
`;

export const PlusMinusButton = styled.button`
  background: ${({ theme }) => theme.color.fontReverse};
  outline: none;

  width: ${inputHeight}rem;

  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};

  font-size: ${styles.fontSize.h4}rem;

  cursor: pointer;

  &:hover:not([disabled]) {
    background: ${({ theme }) => theme.color.font};
    color: ${({ theme }) => theme.color.fontReverse};
  }
`;
