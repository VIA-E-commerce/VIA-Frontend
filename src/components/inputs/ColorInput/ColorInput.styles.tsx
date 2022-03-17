import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles, Theme } from '@/styles';
import { hexToRGB } from '@/utils';

export interface LabelStyleProps {
  hexCode: string;
  disabled?: boolean;
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
  .sold-out {
    opacity: ${({ disabled }) => (disabled ? 1 : 0)};
    background: ${({ theme }) => hexToRGB(theme.color.darkGray, 0.5)};
    color: ${({ theme }) => theme.color.fontReverse};

    display: flex;
    justify-content: center;
    align-items: center;
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
