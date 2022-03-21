import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router';

import { URLS } from '@/constants';
import { useMe } from '@/features/auth';
import { parseLocationToRedirect } from '@/utils';

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const { data: userData, isFetching, status } = useMe();

  if (isFetching) return null;

  if (!userData) {
    // 로그아웃 성공으로 들어온 경우 HOME으로, 인증 (useMe) 실패로 들어온 경우 LOGIN으로 Redirect 합니다.
    const pathname =
      status === 'success' ? URLS.CLIENT.HOME : URLS.CLIENT.LOGIN;

    return (
      <Navigate
        to={pathname}
        state={{ redirect: parseLocationToRedirect(location) }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
