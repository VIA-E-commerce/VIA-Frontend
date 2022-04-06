import React, { useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import { throttle } from 'lodash';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { IoIosPause, IoIosPlay } from 'react-icons/io';

import { getNumberInRange } from '@/utils';

import {
  Wrapper,
  ImageList,
  ArrowButton,
  ImageCounter,
  SliderPage,
  PauseButton,
} from './Slider.styles';

const [LEFT_TO_RIGHT, RIGHT_TO_LEFT] = ['leftToRight', 'rightToLeft'];

const BUTTON_WAIT = 500;

interface Props {
  images: string[];
  interval?: number;
}

const Slider = ({ images, interval = 8000 }: Props) => {
  const [{ prev, active, next }, setSlideState] = useState({
    prev: 0,
    active: 0,
    next: 0,
  });
  const [direction, setDirection] = useState(LEFT_TO_RIGHT);
  const [play, setPlay] = useState(true);

  const getValidIndex = useCallback(
    (n: number) => getNumberInRange(n, 0, images.length - 1),
    [images.length],
  );

  const moveLeft = useCallback(
    throttle(
      () => {
        setSlideState(({ prev, active, next }) => {
          return {
            prev: getValidIndex(prev - 1),
            active: getValidIndex(active - 1),
            next: getValidIndex(next - 1),
          };
        });
        setDirection(RIGHT_TO_LEFT);
      },
      BUTTON_WAIT,
      { trailing: false },
    ),
    [],
  );

  const moveRight = useCallback(
    throttle(
      () => {
        setSlideState(({ prev, active, next }) => {
          return {
            prev: getValidIndex(prev + 1),
            active: getValidIndex(active + 1),
            next: getValidIndex(next + 1),
          };
        });
        setDirection(LEFT_TO_RIGHT);
      },
      BUTTON_WAIT,
      {
        trailing: false,
      },
    ),
    [],
  );

  const handleClickPause = useCallback(() => {
    setPlay((prev) => !prev);
  }, []);

  useEffect(() => {
    const initPrev = Math.max(0, images.length - 1);

    setSlideState({
      prev: initPrev,
      active: 0,
      next: Math.min(1, initPrev),
    });
  }, [images.length]);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (play) {
      timer = setInterval(moveRight, interval);
    }
    return () => clearInterval(timer);
  }, [play]);

  return (
    <Wrapper>
      <ImageList
        className={cx({
          'right-to-left': direction === RIGHT_TO_LEFT,
        })}
      >
        {images.map((image, idx) => {
          const className = cx({
            prev: prev === idx,
            active: active === idx,
            next: next === idx,
          });
          return (
            <li key={idx} className={className}>
              <img src={image} alt="이미지 슬라이더" />
            </li>
          );
        })}
        <ArrowButton onClick={moveLeft}>
          <BsChevronCompactLeft />
        </ArrowButton>
        <ArrowButton className="right" onClick={moveRight}>
          <BsChevronCompactRight />
        </ArrowButton>
      </ImageList>

      <ImageCounter>
        <SliderPage>
          {active + 1} / {images.length}
        </SliderPage>
        <PauseButton onClick={handleClickPause}>
          {play ? <IoIosPause /> : <IoIosPlay />}
        </PauseButton>
      </ImageCounter>
    </Wrapper>
  );
};

export default React.memo(Slider);
