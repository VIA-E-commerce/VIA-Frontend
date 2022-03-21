import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { setBearerToken } from '@/apis';
import { getRedirect } from '@/utils';

const OAuthRedirect = () => {
  const [query] = useSearchParams();
  const accessToken = query.get('token');
  const redirect = getRedirect();

  useEffect(() => {
    if (accessToken) {
      setBearerToken(accessToken);
    }
  }, [accessToken]);

  if (accessToken) return <Navigate to={redirect} replace />;

  return null;
};

export default OAuthRedirect;
