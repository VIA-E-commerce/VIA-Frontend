import React, { useEffect, useState } from 'react';

import { Input } from '../../Input';
import { Wrapper, URLButton } from './ImagePicker.styles';

interface Props {
  defaultValue?: string;
  onClickUrlButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    newUrl?: string,
  ) => void;
}

const ImagePicker = ({ defaultValue, onClickUrlButton }: Props) => {
  const [url, setUrl] = useState<string | undefined>('');

  useEffect(() => {
    setUrl(defaultValue);
  }, [defaultValue]);

  return (
    <Wrapper>
      <Input
        size="small"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <URLButton onClick={(event) => onClickUrlButton(event, url)}>
        URL 등록
      </URLButton>
    </Wrapper>
  );
};

export default React.memo(ImagePicker);
