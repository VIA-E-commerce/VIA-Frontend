import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles, Theme } from '@/styles';
import { hexToRGB } from '@/utils';

export interface LabelStyleProps {
  hexCode: string;
}

const getLabelActiveStyle = (theme: Theme) => css`
  border-color: ${theme.color.white};
  box-shadow: 0 0 0 0.2rem ${hexToRGB(theme.color.black)};
`;
export const Label = styled.label<LabelStyleProps>`
  outline: none;
  padding: 0;

  background: #${({ hexCode }) => hexCode};

  width: 100%;
  aspect-ratio: 1;

  border: ${styles.border.level2}rem solid
    ${({ theme }) => theme.color.lightGray};

  cursor: pointer;

  ${styles.transition.button}

  &:hover {
    ${({ theme }) => getLabelActiveStyle(theme)}
  }
`;

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;

  position: absolute;

  &:checked + label {
    ${({ theme }) => getLabelActiveStyle(theme)}
  }
`;
