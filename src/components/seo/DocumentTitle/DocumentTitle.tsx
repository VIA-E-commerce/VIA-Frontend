import React from 'react';
import { Helmet } from 'react-helmet';

import { APP } from '@/constants';

interface Props {
  title: string;
  description?: string;
  thumbnail?: string;
}

const DocumentTitle = ({ title, description = '', thumbnail = '' }: Props) => {
  const fullTitle = `${title} | ${APP.SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta property="og:site_name" content={APP.SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
};

export default DocumentTitle;
