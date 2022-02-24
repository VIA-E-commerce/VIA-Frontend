import React from 'react';
import { Route, Routes } from 'react-router';

import { Home, Join, Login } from '@/pages';
import { URLS } from '@/constants';

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={URLS.CLIENT.HOME} element={<Home />} />
      <Route path={URLS.CLIENT.JOIN} element={<Join />} />
      <Route path={URLS.CLIENT.LOGIN} element={<Login />} />
    </Routes>
  );
};
