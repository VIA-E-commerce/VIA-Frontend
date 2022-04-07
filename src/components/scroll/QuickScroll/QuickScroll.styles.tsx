import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';
import { hexToRGB } from '@/utils';

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 200;
  bottom: ${styles.component.footer.height + 3.2}rem;
  right: 4rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  visibility: hidden;
  opacity: 0;

  &.show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s 0s, opacity 0.3s linear;
  }

  transition: visibility 0s 0.3s, opacity 0.3s linear;
`;

const getBackgroundStyle = (theme: Theme) =>
  hexToRGB(theme.color.background, 0.7);
const buttonSize = 4.8;

export const ScrollButton = styled.button`
  outline: none;

  background: ${({ theme }) => getBackgroundStyle(theme)};
  color: ${({ theme }) => theme.color.darkGray};
  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};

  width: ${buttonSize}rem;
  height: ${buttonSize}rem;

  font-size: ${styles.fontSize.h3}rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
