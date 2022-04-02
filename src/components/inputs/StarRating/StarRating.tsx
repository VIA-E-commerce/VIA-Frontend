import React, { useCallback, useEffect, useState } from 'react';

import { StarIcon } from './StarIcon';
import { Wrapper, RatingRadioButtons, Score } from './StarRating.styles';

interface StarRatingInputProps {
  rating: number;
  onChangeRating?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const ratingArray = [1, 2, 3, 4, 5];

const StarRating = ({
  rating,
  onChangeRating,
  readOnly,
}: StarRatingInputProps) => {
  const [displayScore, setDisplayScore] = useState(rating);

  const handleMouseEvent = useCallback((score: number) => {
    setDisplayScore(score);
  }, []);

  useEffect(() => {
    setDisplayScore(rating);
  }, [rating]);

  return (
    <Wrapper>
      <RatingRadioButtons>
        {ratingArray.map((ratingScore) => (
          <StarIcon
            key={ratingScore}
            rating={displayScore}
            value={ratingScore}
            readOnly={readOnly}
            onMouseOver={() => handleMouseEvent(ratingScore)}
            onMouseOut={() => handleMouseEvent(rating)}
            onChange={onChangeRating}
          />
        ))}
      </RatingRadioButtons>
      <Score>{displayScore}점</Score>
    </Wrapper>
  );
};

export default StarRating;
