import React from 'react';
import { BsStarFill } from 'react-icons/bs';

import { Wrapper } from './StarIcon.styles';

interface Props {
  rating: number;
  value: number;
  readOnly?: boolean;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StarIcon = ({
  rating,
  value,
  readOnly,
  onMouseOver,
  onMouseOut,
  onChange,
}: Props) => {
  const active = rating >= value;

  return (
    <Wrapper active={active} readOnly={readOnly}>
      <label
        onMouseOver={readOnly ? undefined : onMouseOver}
        onMouseOut={readOnly ? undefined : onMouseOut}
      >
        <BsStarFill />
        <input
          type="radio"
          name="rating"
          value={value}
          onChange={readOnly ? undefined : onChange}
        />
      </label>
    </Wrapper>
  );
};

export default React.memo(StarIcon);
