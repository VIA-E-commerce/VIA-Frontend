import React from 'react';

import { ImagePicker } from './ImagePicker';
import { ImageViewer } from './ImageViewer';
import { Wrapper } from './ImageInput.styles';

interface Props {
  url?: string;
  onClickUrlButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    newUrl?: string,
  ) => void;
}

const ImageInput = ({ url, onClickUrlButton }: Props) => {
  return (
    <Wrapper>
      <ImagePicker defaultValue={url} onClickUrlButton={onClickUrlButton} />
      <ImageViewer url={url} />
    </Wrapper>
  );
};

export default React.memo(ImageInput);
