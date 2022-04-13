import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';

import { styles, Theme } from '@/styles';

// 버튼 스타일링 Types
type ButtonVariant = 'primary' | 'reverse' | 'outline' | 'error-outline';

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
    normalStyle: SerializedStyles;
    activeStyle?: SerializedStyles;
    hoverStyle?: SerializedStyles;
  };
}

// 버튼 스타일링 함수
const setButtonStyle = (
  theme: Theme,
  variant: ButtonVariant,
  disabled = false,
) => {
  const buttonStyle: ButtonStyle = {
    primary: {
      normalStyle: css`
        background: ${theme.color.font};
        color: ${theme.color.fontReverse};
        border-color: ${theme.color.font};
      `,
      activeStyle: css`
        background: ${theme.color.font};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActive};
        border-color: ${theme.color.buttonActive};
      `,
    },
    reverse: {
      normalStyle: css`
        background: ${theme.color.fontReverse};
        color: ${theme.color.font};
        border-color: ${theme.color.fontReverse};
      `,
      activeStyle: css`
        background: ${theme.color.fontReverse};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActiveReverse};
        border-color: ${theme.color.buttonActiveReverse};
      `,
    },
    outline: {
      normalStyle: css`
        background: ${theme.color.fontReverse};
        color: ${theme.color.font};
        border-color: ${theme.color.lightGray};
      `,
      activeStyle: css`
        background: ${theme.color.fontReverse};
        border-color: ${theme.color.lightGray};
      `,
      hoverStyle: css`
        background: ${theme.color.buttonActiveReverse};
      `,
    },
    ['error-outline']: {
      normalStyle: css`
        background: ${theme.color.white};
        color: ${theme.color.error};
        border-color: ${theme.color.error};

        outline: ${theme.color.error};
      `,
      activeStyle: css`
        background: ${darken(0.05, theme.color.error)};
        color: ${theme.color.white};
        border-color: ${darken(0.05, theme.color.error)};
      `,
      hoverStyle: css`
        background: ${theme.color.error};
        color: ${theme.color.white};
        border-color: ${theme.color.error};
      `,
    },
    disabled: {
      normalStyle: css`
        background: ${theme.color.lightGray};
        color: ${theme.color.white};
        border-color: ${theme.color.lightGray};
      `,
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
    border-style: solid;
    ${currentStyle.normalStyle}

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

// Emotion Styled 컴포넌트
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
