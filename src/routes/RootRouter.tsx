import React from 'react';
import { Route, Routes } from 'react-router';

import {
  Home,
  Join,
  Login,
  Category,
  ProductDetail,
  Cart,
  Order,
} from '@/pages';
import { URLS } from '@/constants';

import OAuthRedirect from './OAuthRedirect';
import ProtectedRoute from './ProtectedRoute';

const RootRouter = () => {
  return (
    <Routes>
      <Route path={URLS.CLIENT.HOME} element={<Home />} />
      <Route path={URLS.CLIENT.JOIN} element={<Join />} />
      <Route path={URLS.CLIENT.LOGIN} element={<Login />} />
      <Route path={URLS.CLIENT.OAUTH} element={<OAuthRedirect />} />
      <Route path={URLS.CLIENT.CATEGORY} element={<Category />} />
      <Route
        path={`${URLS.CLIENT.PRODUCT}/:productId`}
        element={<ProductDetail />}
      />
      <Route
        path={URLS.CLIENT.CART}
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path={URLS.CLIENT.ORDER}
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RootRouter;
