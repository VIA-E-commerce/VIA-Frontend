import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';

type ButtonVariant = 'primary' | 'reverse' | 'outline';
export type ButtonSize = 'xsmall' | 'small' | 'normal';
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
    activeStyle?: SerializedStyles;
    hoverStyle?: SerializedStyles;
    activeBackground?: string;
    activeBorderColor?: string;
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
      activeStyle: css`
        background: ${theme.color.font};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActive};
        border-color: ${theme.color.buttonActive};
      `,
    },
    reverse: {
      background: theme.color.fontReverse,
      fontColor: theme.color.font,
      borderColor: theme.color.fontReverse,
      activeStyle: css`
        background: ${theme.color.fontReverse};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActiveReverse};
        border-color: ${theme.color.buttonActiveReverse};
      `,
    },
    outline: {
      background: theme.color.fontReverse,
      fontColor: theme.color.font,
      borderColor: theme.color.lightGray,
      activeStyle: css`
        background: ${theme.color.fontReverse};
        border-color: ${theme.color.lightGray};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActiveReverse};
      `,
    },
    disabled: {
      background: theme.color.lightGray,
      fontColor: theme.color.white,
      borderColor: theme.color.lightGray,
    },
  };

  const currentStyle = disabled ? buttonStyle.disabled : buttonStyle[variant];

  const activeStyle = css`
    cursor: pointer;

    &:hover {
      ${currentStyle.hoverStyle}
    }

    &:active {
      ${currentStyle.activeStyle}
    }
  `;

  return css`
    background: ${currentStyle.background};
    color: ${currentStyle.fontColor};

    border-style: solid;
    border-color: ${currentStyle.borderColor};

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
      borderWidth: styles.border.level2,
    },
    small: {
      height: 4,
      fontSize: styles.fontSize.small,
      borderWidth: styles.border.level2,
    },
    xsmall: {
      height: 2.8,
      fontSize: styles.fontSize.xsmall,
      borderWidth: styles.border.level1,
    },
  };

  const currentSize = buttonSize[size];

  return css`
    height: ${currentSize.height}rem;
    font-size: ${currentSize.fontSize}rem;
    border-width: ${currentSize.borderWidth}rem;
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
