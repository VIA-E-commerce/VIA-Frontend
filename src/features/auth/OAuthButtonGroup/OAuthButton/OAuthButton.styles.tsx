import { styles } from '@/styles';
import styled from '@emotion/styled';

const BUTTON_HEIGHT = 4.8;
const ICON_HEIGHT = 2.4;

export const StyledButton = styled.button<{ fontColor: string }>`
  border: none;

  width: 100%;
  height: ${BUTTON_HEIGHT}rem;
  background: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};

  position: relative;

  font-size: ${styles.fontSize.normal}rem;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const IconWrapper = styled.span`
  width: ${BUTTON_HEIGHT}rem;
  height: ${BUTTON_HEIGHT}rem;

  position: absolute;
  top: 0;
  left: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${ICON_HEIGHT}rem;
    height: ${ICON_HEIGHT}rem;
  }
`;
