import React from 'react';

import { ObjectFitType } from '@/styles';

import { Wrapper, EmptyImage } from './ImageViewer.styles';

interface Props {
  url?: string;
  objectFit?: ObjectFitType;
}

const ImageViewer = ({ url, objectFit = 'cover' }: Props) => {
  return (
    <Wrapper objectFit={objectFit}>
      {url ? (
        <img src={url} alt="이미지" />
      ) : (
        <EmptyImage>사진을 추가해주세요</EmptyImage>
      )}
    </Wrapper>
  );
};

export default React.memo(ImageViewer);
