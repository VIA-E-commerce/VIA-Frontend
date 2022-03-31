const color = {
  black: '#000000',
  white: '#ffffff',
  dark: '#333',
  darkGray: '#767676',
  gray: '#AAAAAA',
  lightGray: '#BDBDBD',
  dimGray: '#EDEDEF',
  dimBeige: '#F9F9F7',
  red: '#ff0000',
  green: '#1C9C6C',
  blue: '#2FA4FF',
};

export const theme = {
  color: {
    font: color.black,
    fontReverse: color.white,
    success: color.green,
    error: color.red,
    background: color.white,
    surface: color.dimBeige,

    highlight: color.blue,
    buttonActive: color.dark,
    buttonActiveReverse: color.dimGray,

    black: color.black,
    dark: color.dark,
    darkGray: color.darkGray,
    gray: color.gray,
    lightGray: color.lightGray,
    white: color.white,

    cartBorder: color.gray,
    inputBorder: color.lightGray,
  },
};

export type Theme = typeof theme;
