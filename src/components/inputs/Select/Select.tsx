import React, { forwardRef, ReactNode } from 'react';

import { StyledSelect } from './Select.styles';

interface SelectProps {
  name?: string;
  defaultValue?: string | number | readonly string[];
  children?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, children, ...rest }, ref) => {
    return (
      <StyledSelect ref={ref} name={name} {...rest}>
        {children}
      </StyledSelect>
    );
  },
);

Select.displayName = 'Select';

export default Select;
