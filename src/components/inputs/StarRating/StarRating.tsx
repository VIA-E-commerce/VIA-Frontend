import React from 'react';

import { Wrapper, StarIcon, YellowStar } from './StarRating.styles';

interface StarRatingInputProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingInputProps) => {
  const width = rating * 10;

  return (
    <Wrapper>
      <StarIcon>
        <YellowStar width={width} />
      </StarIcon>
      <div>{rating}점</div>
    </Wrapper>
  );
};

export default React.memo(StarRating);
