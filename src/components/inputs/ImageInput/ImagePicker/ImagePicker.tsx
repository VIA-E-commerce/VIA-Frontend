import React, { useState } from 'react';

import { Input } from '../../Input';
import { Wrapper, URLButton } from './ImagePicker.styles';

interface Props {
  onClickUrlButton: (newUrl: string) => void;
}

const ImagePicker = ({ onClickUrlButton }: Props) => {
  const [url, setUrl] = useState('');

  return (
    <Wrapper>
      <Input
        size="small"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <URLButton onClick={() => onClickUrlButton(url)}>URL 등록</URLButton>
    </Wrapper>
  );
};

export default React.memo(ImagePicker);
