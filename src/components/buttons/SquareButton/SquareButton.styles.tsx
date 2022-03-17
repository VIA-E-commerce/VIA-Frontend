import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';

type ButtonVariant = 'primary' | 'outline';
export type ButtonSize = 'small' | 'normal';
type ButtonGrid = {
  colNum: number;
  span: number;
};

export interface SquareStyleProps {
  wide?: boolean;
  variant: ButtonVariant;
  disabled?: boolean;
  active?: boolean;
  grid?: ButtonGrid;
  size: ButtonSize;
}

interface ButtonStyle {
  [x: string]: {
    background: string;
    fontColor: string;
    borderColor: string;
    activeColor?: string;
  };
}

const setButtonStyle = (
  theme: Theme,
  variant: ButtonVariant,
  disabled = false,
) => {
  const buttonStyle: ButtonStyle = {
    primary: {
      background: theme.color.font,
      fontColor: theme.color.fontReverse,
      borderColor: theme.color.font,
      activeColor: theme.color.buttonActive,
    },
    outline: {
      background: theme.color.fontReverse,
      fontColor: theme.color.font,
      borderColor: theme.color.lightGray,
      activeColor: theme.color.buttonActiveReverse,
    },
    disabled: {
      background: theme.color.lightGray,
      fontColor: theme.color.white,
      borderColor: theme.color.lightGray,
    },
  };

  const currentStyle = disabled ? buttonStyle.disabled : buttonStyle[variant];

  const activeStyle =
    variant === 'outline' &&
    css`
      cursor: pointer;

      &:hover {
        border-color: ${currentStyle.fontColor};
      }

      &:active {
        background: ${currentStyle.activeColor};
        border-color: ${currentStyle.borderColor};
      }
    `;

  return css`
    background: ${currentStyle.background};
    color: ${currentStyle.fontColor};
    border: ${styles.border.level2}rem solid ${currentStyle.borderColor};

    ${!disabled && activeStyle}
  `;
};

function setButtonGrid(grid: ButtonGrid) {
  return css`
    grid-column: ${grid.colNum} / span ${grid.span};
  `;
}

function setButtonSize(size: ButtonSize) {
  const buttonSize = {
    normal: {
      height: 4.8,
      fontSize: styles.fontSize.normal,
    },
    small: {
      height: 4,
      fontSize: styles.fontSize.small,
    },
  };

  const currentSize = buttonSize[size];

  return css`
    height: ${currentSize.height}rem;
    font-size: ${currentSize.fontSize}rem;
  `;
}

export const setButtonActiveStyle = (theme: Theme, variant: ButtonVariant) => {
  if (variant === 'primary') {
    return setButtonStyle(theme, 'outline');
  }
  return setButtonStyle(theme, 'primary');
};
export const StyledButton = styled.button<SquareStyleProps>`
  ${({ theme, variant, disabled, active }) =>
    active
      ? setButtonActiveStyle(theme, variant)
      : setButtonStyle(theme, variant, disabled)}

  ${({ grid }) => grid && setButtonGrid(grid)}

  ${({ size }) => setButtonSize(size)}
  ${({ wide }) => wide && 'width: 100%'};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${styles.transition.button}
`;
