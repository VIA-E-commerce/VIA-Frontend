import React from 'react';

import { Wrapper, EmptyImage } from './ImageViewer.styles';

interface Props {
  url?: string;
}

const ImageViewer = ({ url }: Props) => {
  return (
    <Wrapper>
      {url ? (
        <img src={url} alt="이미지" />
      ) : (
        <EmptyImage>사진을 추가해주세요</EmptyImage>
      )}
    </Wrapper>
  );
};

export default React.memo(ImageViewer);
