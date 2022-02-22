const color = {
  black: '#000000',
  white: '#ffffff',
  darkGray: '#767676',
  gray: '#AAAAAA',
  lightGray: '#BDBDBD',
  red: '#ff0000',
};

export const theme = {
  color: {
    font: color.black,
    reverseFont: color.white,
    error: color.red,
    darkGray: color.darkGray,
    gray: color.gray,
    lightGray: color.lightGray,
    white: color.white,
  },
};

export type Theme = typeof theme;
