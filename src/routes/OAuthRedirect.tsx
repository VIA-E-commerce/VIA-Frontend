import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { URLS } from '@/constants';
import { useSearchParams } from 'react-router-dom';
import { setBearerToken } from '@/apis';

export const OAuthRedirect = () => {
  const [query] = useSearchParams();

  useEffect(() => {
    const accessToken = query.get('token');
    if (accessToken) {
      setBearerToken(accessToken);
    }
  }, []);

  return <Navigate to={URLS.CLIENT.HOME} />;
};
