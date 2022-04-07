import React, { useCallback, useEffect, useState } from 'react';
import { throttle } from 'lodash';
import cx from 'classnames';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import { Wrapper, ScrollButton } from './QuickScroll.styles';

const HEIGHT_TO_APEAR = 960;

const QuickScroll = () => {
  const [show, setShow] = useState(false);
  const className = cx({ show });

  const scrollTo = (top: number) => {
    window.scroll({ top });
  };

  const handleScroll = useCallback(
    throttle(() => {
      const { scrollY, innerHeight } = window;
      setShow(scrollY + innerHeight > HEIGHT_TO_APEAR);
    }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper className={className}>
      <ScrollButton onClick={() => scrollTo(0)}>
        <MdExpandLess />
      </ScrollButton>
      <ScrollButton onClick={() => scrollTo(document.body.scrollHeight)}>
        <MdExpandMore />
      </ScrollButton>
    </Wrapper>
  );
};

export default QuickScroll;
