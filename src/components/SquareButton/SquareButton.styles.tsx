import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';

import {
  SquareButtonStyleProps,
  ButtonVariant,
  ButtonGrid,
} from './SquareButton';

export const StyledButton = styled.button<SquareButtonStyleProps>`
  ${({ theme, variant, disabled }) => setButtonStyle(theme, variant, disabled)}

  ${({ grid }) => grid && setButtonGrid(grid)}

  ${({ size }) => setButtonSize(size)}
  ${({ wide }) => wide && 'width: 100%'};

  cursor: pointer;
`;

interface ButtonStyle {
  [x: string]: {
    background: string;
    fontColor: string;
    borderColor: string;
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
      fontColor: theme.color.reverseFont,
      borderColor: theme.color.font,
    },
    outline: {
      background: theme.color.reverseFont,
      fontColor: theme.color.font,
      borderColor: theme.color.darkGray,
    },
    disabled: {
      background: theme.color.gray,
      fontColor: theme.color.white,
      borderColor: theme.color.gray,
    },
  };

  const currentStyle = disabled ? buttonStyle.disabled : buttonStyle[variant];

  const hover =
    variant === 'outline' &&
    css`
      &:hover {
        border-color: ${currentStyle.fontColor};
      }
    `;

  return css`
    background: ${currentStyle.background};
    color: ${currentStyle.fontColor};
    border: ${styles.border.level1}rem solid ${currentStyle.borderColor};

    ${hover}
  `;
};

function setButtonGrid(grid: ButtonGrid) {
  return css`
    grid-column: ${grid.colNum} / span ${grid.span};
  `;
}

type ButtonSize = 'small' | 'normal';

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
