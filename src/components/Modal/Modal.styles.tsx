import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface OverlayStyleProps {
  show: boolean;
}
const getShowStyle = (show: boolean) => {
  if (show) {
    return css`
      visibility: none;
      opacity: 1;

      & > * {
        transform: translate(0, 0);
      }
    `;
  }

  return css`
    visibility: hidden;
    opacity: 0;

    & > * {
      transform: translate(0, -25%);
    }
  `;
};
export const Overlay = styled.div<OverlayStyleProps>`
  background: rgba(0, 0, 0, 0.7);

  ${({ show }) => getShowStyle(show)};

  z-index: 900;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: visibility 0.2s linear, opacity 0.2s linear;

  & > * {
    transition: transform 0.3s ease;
  }
`;
