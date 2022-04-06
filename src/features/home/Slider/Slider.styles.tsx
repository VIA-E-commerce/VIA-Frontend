import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';
import { limitVwLowerBound } from '@/styles/mixins';
import { hexToRGB } from '@/utils';

const IMAGE_WIDTH = '100vw';

export const Wrapper = styled.div`
  width: ${IMAGE_WIDTH};
  min-width: ${styles.maxWidth}rem;
  aspect-ratio: 2.5;

  position: relative;
  overflow: hidden;

  img {
    width: inherit;
    min-width: inherit;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  &.right-to-left {
    li {
      &.prev {
        z-index: 100;
      }

      &.active {
        z-index: 102;
      }

      &.next {
        z-index: 101;
      }
    }
  }

  li {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &.prev {
      left: -${IMAGE_WIDTH};
      z-index: 101;
    }

    &.active {
      z-index: 102;
    }

    &.next {
      left: ${IMAGE_WIDTH};
      z-index: 100;
    }

    transition: left 0.3s linear;
  }
`;

const arrowButtonShadow = (theme: Theme) =>
  `drop-shadow(0 1px 2px ${hexToRGB(theme.color.font, 0.7)})`;

export const ArrowButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.color.fontReverse};

  border: none;
  outline: none;
  cursor: pointer;

  height: 100%;

  position: absolute;
  z-index: 109;
  top: 50%;
  transform: translatey(-50%);

  filter: ${({ theme }) => arrowButtonShadow(theme)};
  font-size: ${limitVwLowerBound(5)};

  &,
  svg {
    transition: transform 80ms linear;
  }

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }

  &.right {
    right: 0;
  }
`;

const imageCounterHeight = limitVwLowerBound(2.4);

export const ImageCounter = styled.div`
  height: ${imageCounterHeight};

  position: absolute;
  right: ${limitVwLowerBound(2)};
  bottom: ${limitVwLowerBound(1)};
  z-index: 110;
  display: flex;
`;

export const SliderPage = styled.div`
  background: ${({ theme }) => hexToRGB(theme.color.fontReverse, 0.4)};
  color: ${({ theme }) => theme.color.font};

  width: ${limitVwLowerBound(4)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${limitVwLowerBound(1)};
`;

export const PauseButton = styled.button`
  border: none;
  outline: none;

  background: ${({ theme }) => hexToRGB(theme.color.fontReverse, 0.6)};
  width: ${imageCounterHeight};
  height: ${imageCounterHeight};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${limitVwLowerBound(1.4)};

  cursor: pointer;
`;
