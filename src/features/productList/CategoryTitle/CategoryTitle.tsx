import React, { memo } from 'react';
import { CategoryTitleWrapper } from './CategoryTitle.styles';

interface Props {
  title?: string;
}

const CategoryTitle = ({ title }: Props) => {
  return (
    <CategoryTitleWrapper>
      <h2>
        <span>{title}</span>
      </h2>
    </CategoryTitleWrapper>
  );
};

export default memo(CategoryTitle);
