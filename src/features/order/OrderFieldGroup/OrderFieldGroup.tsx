import React, { ReactNode } from 'react';

import { GroupTitle, FieldSet, FieldList } from './OrderFieldGroup.styles';

interface OrderFieldGroupProps {
  title: string;
  children?: ReactNode;
}

const OrderFieldGroup = ({ title, children }: OrderFieldGroupProps) => {
  return (
    <FieldSet>
      <GroupTitle>{title}</GroupTitle>
      <FieldList>{children}</FieldList>
    </FieldSet>
  );
};

export default React.memo(OrderFieldGroup);
