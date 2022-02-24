import React from 'react';
import { Route, Routes } from 'react-router';

import { Home, Join } from '@/pages';
import { URLS } from '@/constants';

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={URLS.CLIENT.HOME} element={<Home />} />
      <Route path={URLS.CLIENT.JOIN} element={<Join />} />
    </Routes>
  );
};
