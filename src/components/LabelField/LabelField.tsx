import React, { memo, ReactNode } from 'react';

import {
  Wrapper,
  LabelFieldStyleProps,
  ContentAlignType,
} from './LabelField.styles';

interface LabelFieldProps extends LabelFieldStyleProps {
  label: string;
  contentAlign: ContentAlignType;
  bold?: boolean;
  vertical?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const LabelField = ({
  label,
  size,
  contentAlign,
  required,
  bold,
  vertical,
  style,
  children,
}: LabelFieldProps) => {
  return (
    <Wrapper
      size={size}
      contentAlign={contentAlign}
      required={required}
      bold={bold}
      vertical={vertical}
      style={style}
    >
      <div className="label">
        {label}
        {required && <span className="required">*</span>}
      </div>
      <div className="content">{children}</div>
    </Wrapper>
  );
};
LabelField.defaultProps = {
  size: 'normal',
  contentAlign: 'left',
};

export default memo(LabelField);
