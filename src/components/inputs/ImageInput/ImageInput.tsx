import React from 'react';

import { ObjectFitType } from '@/styles';

import { ImagePicker } from './ImagePicker';
import { ImageViewer } from './ImageViewer';
import { Wrapper } from './ImageInput.styles';

interface Props {
  url?: string;
  objectFit?: ObjectFitType;
  onClickUrlButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    newUrl?: string,
  ) => void;
}

const ImageInput = ({ url, objectFit, onClickUrlButton }: Props) => {
  return (
    <Wrapper>
      <ImagePicker defaultValue={url} onClickUrlButton={onClickUrlButton} />
      <ImageViewer url={url} objectFit={objectFit} />
    </Wrapper>
  );
};

export default React.memo(ImageInput);
