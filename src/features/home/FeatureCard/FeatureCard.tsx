import React, { useCallback } from 'react';
import { To, useNavigate } from 'react-router';

import { SquareButton } from '@/components';

import {
  Figure,
  FigureCaption,
  Title,
  Description,
  ButtonBox,
} from './FeatureCard.styles';

interface Props {
  imageUrl: string;
  to: To;
  title?: string;
  description?: string;
}

const FeatureCard = ({ imageUrl, title, description, to }: Props) => {
  const navigate = useNavigate();

  const handleClickDetail = useCallback(() => {
    navigate(to);
  }, [to]);

  return (
    <Figure>
      <img src={imageUrl} alt="feature card image" />
      <FigureCaption>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        <ButtonBox>
          <SquareButton
            size="small"
            variant="reverse"
            onClick={handleClickDetail}
          >
            자세히 보기
          </SquareButton>
        </ButtonBox>
      </FigureCaption>
    </Figure>
  );
};

export default React.memo(FeatureCard);
