const color = {
  black: '#000000',
  white: '#ffffff',
  dark: '#333',
  lightDark: '#555',
  darkGray: '#767676',
  gray: '#AAAAAA',
  lightGray: '#BDBDBD',
  dimGray: '#EDEDEF',
  dimBeige: '#F9F9F7',
  red: '#ff0000',
  green: '#1C9C6C',
  blue: '#2FA4FF',
  yellow: '#FFD700',
};

export const theme = {
  color: {
    font: color.black,
    fontReverse: color.white,
    success: color.green,
    error: color.red,
    background: color.white,
    backgroundHover: color.dimGray,
    surface: color.dimBeige,

    highlight: color.blue,
    buttonActive: color.dark,
    buttonActiveReverse: color.dimGray,

    black: color.black,
    dark: color.dark,
    lightDark: color.lightDark,
    darkGray: color.darkGray,
    gray: color.gray,
    lightGray: color.lightGray,
    white: color.white,

    layoutBorderColor: color.gray,
    cartBorder: color.gray,
    inputBorder: color.lightGray,
    star: color.yellow,
  },
};

export type Theme = typeof theme;
