import React from 'react';
import { Route, Routes } from 'react-router';

import { URLS } from '@/constants';
import {
  Home,
  Join,
  Login,
  Category,
  ProductDetail,
  Cart,
  Order,
  Wishlist,
  MyPage,
  Payment,
  NotFound,
} from '@/pages';

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
      <Route
        path={URLS.CLIENT.WISHLIST}
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${URLS.CLIENT.MY_PAGE.INDEX}/*`}
        element={
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={URLS.CLIENT.PAYMENT}
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouter;
