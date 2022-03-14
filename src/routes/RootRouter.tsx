import React from 'react';
import { Route, Routes } from 'react-router';

import { Home, Join, Login, Category } from '@/pages';
import { URLS } from '@/constants';
import { OAuthRedirect } from './OAuthRedirect';

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={URLS.CLIENT.HOME} element={<Home />} />
      <Route path={URLS.CLIENT.JOIN} element={<Join />} />
      <Route path={URLS.CLIENT.LOGIN} element={<Login />} />
      <Route path={URLS.CLIENT.OAUTH} element={<OAuthRedirect />} />
      <Route path={URLS.CLIENT.CATEGORY} element={<Category />} />
    </Routes>
  );
};
