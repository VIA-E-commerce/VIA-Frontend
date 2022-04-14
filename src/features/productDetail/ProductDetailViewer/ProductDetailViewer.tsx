import React from 'react';
import dompurify from 'dompurify';

import { Viewer } from './ProductDetailViewer.styles';

interface Props {
  description: string;
}

const ProductDetailViewer = ({ description }: Props) => {
  const __html = dompurify.sanitize(description);
  return <Viewer dangerouslySetInnerHTML={{ __html }} />;
};

export default React.memo(ProductDetailViewer);
