const color = {
  black: '#000000',
  white: '#ffffff',
  dark: '#333',
  darkGray: '#767676',
  gray: '#AAAAAA',
  lightGray: '#BDBDBD',
  dimGray: '#EDEDEF',
  red: '#ff0000',
};

export const theme = {
  color: {
    font: color.black,
    fontReverse: color.white,
    error: color.red,

    buttonActive: color.dark,
    buttonActiveReverse: color.dimGray,

    black: color.black,
    dark: color.dark,
    darkGray: color.darkGray,
    gray: color.gray,
    lightGray: color.lightGray,
    white: color.white,
  },
};

export type Theme = typeof theme;
