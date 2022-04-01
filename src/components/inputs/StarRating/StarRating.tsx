import React from 'react';

import { Wrapper, StarIcon, YellowStar, Score } from './StarRating.styles';

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
      <Score>{rating}점</Score>
    </Wrapper>
  );
};

export default React.memo(StarRating);
