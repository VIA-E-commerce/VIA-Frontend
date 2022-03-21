import React, { memo, ReactNode } from 'react';

import {
  Wrapper,
  LabelFieldStyleProps,
  ContentAlignType,
} from './LabelField.styles';

interface LabelFieldProps extends LabelFieldStyleProps {
  label: string;
  contentAlign: ContentAlignType;
  children?: ReactNode;
}

const LabelField = ({
  label,
  size,
  contentAlign,
  children,
}: LabelFieldProps) => {
  return (
    <Wrapper size={size} contentAlign={contentAlign}>
      <div className="label">{label}</div>
      <div className="content">{children}</div>
    </Wrapper>
  );
};
LabelField.defaultProps = {
  size: 'normal',
  contentAlign: 'left',
};

export default memo(LabelField);
