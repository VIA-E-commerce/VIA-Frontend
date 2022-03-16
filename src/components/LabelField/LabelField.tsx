import React, { memo, ReactNode } from 'react';
import { Wrapper, LabelFieldStyleProps } from './LabelField.styles';

interface LabelFieldProps extends LabelFieldStyleProps {
  label: string;
  children?: ReactNode;
}

const LabelField = ({ label, size, children }: LabelFieldProps) => {
  return (
    <Wrapper size={size}>
      <div className="label">{label}</div>
      <div className="content">{children}</div>
    </Wrapper>
  );
};
LabelField.defaultProps = {
  size: 'normal',
};

export default memo(LabelField);
