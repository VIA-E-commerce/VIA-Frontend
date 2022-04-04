import React, { memo, ReactNode } from 'react';

import { Wrapper, LabelFieldStyleProps, AlignType } from './LabelField.styles';

interface LabelFieldProps extends LabelFieldStyleProps {
  label: string;
  labelAlign: AlignType;
  contentAlign: AlignType;
  bold?: boolean;
  vertical?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
  className?: string;
}

const LabelField = ({
  label,
  size,
  labelAlign,
  contentAlign,
  required,
  bold,
  vertical,
  children,
  ...rest
}: LabelFieldProps) => {
  return (
    <Wrapper
      size={size}
      labelAlign={labelAlign}
      contentAlign={contentAlign}
      required={required}
      bold={bold}
      vertical={vertical}
      {...rest}
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
  labelAlign: 'left',
  contentAlign: 'left',
};

export default memo(LabelField);
