import React, { useCallback, useState } from 'react';

import { StarIcon } from './StarIcon';
import { Wrapper, RatingRadioButtons, Score } from './StarRating.styles';

interface StarRatingInputProps {
  rating: number;
  readOnly?: boolean;
}

const ratingArray = [1, 2, 3, 4, 5];

const StarRating = ({ rating, readOnly }: StarRatingInputProps) => {
  const [selectedScore, setSelectedScore] = useState(rating);
  const [displayScore, setDisplayScore] = useState(rating);

  const handleMouseEvent = useCallback((score: number) => {
    setDisplayScore(score);
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSelectedScore(Number(value));
    },
    [],
  );

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
            onMouseOut={() => handleMouseEvent(selectedScore)}
            onChange={handleChange}
          />
        ))}
      </RatingRadioButtons>
      <Score>{displayScore}점</Score>
    </Wrapper>
  );
};

export default React.memo(StarRating);
