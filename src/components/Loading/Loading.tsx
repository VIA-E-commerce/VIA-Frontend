import React from 'react';

import { LoadingBox } from './Loading.styles';

interface Props {
  text: string;
}

const Loading = ({ text }: Props) => {
  return <LoadingBox>{text}</LoadingBox>;
};

Loading.defaultProps = {
  text: '로딩 중',
};

export default React.memo(Loading);
