import React from 'react';
import { To } from 'react-router';
import { Link } from 'react-router-dom';

import { Wrapper, InnerWrapper } from './WideBanner.styles';

interface Props {
  background: string;
  to: To;
  imageUrl: string;
}

const WideBanner = ({ background, to, imageUrl }: Props) => {
  return (
    <Wrapper background={background}>
      <Link to={to}>
        <InnerWrapper>
          <img src={imageUrl} alt="와이드 띠 배너" />
        </InnerWrapper>
      </Link>
    </Wrapper>
  );
};

export default React.memo(WideBanner);
