import React from 'react';

interface Props {
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ ...rest }: Props) => {
  return <input type="checkbox" {...rest} />;
};

export default React.memo(CheckBox);
