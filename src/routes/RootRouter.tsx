import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

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
  MyInfo,
  MyOrders,
  MyReviews,
  MyQuestions,
  MyPage,
  Payment,
  NotFound,
  MyReviewListPage,
  MyReviewToWrite,
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
        path={URLS.CLIENT.MY_PAGE.INDEX}
        element={
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Navigate to={URLS.CLIENT.MY_PAGE.PROFILE_TAB} replace />}
        />
        <Route path={URLS.CLIENT.MY_PAGE.TABS.PROFILE} element={<MyInfo />} />
        <Route path={URLS.CLIENT.MY_PAGE.TABS.ORDERS} element={<MyOrders />} />
        <Route path={URLS.CLIENT.MY_PAGE.TABS.REVIEWS} element={<MyReviews />}>
          <Route
            index
            element={
              <Navigate to={URLS.CLIENT.MY_PAGE.REVIEW_TABS.LIST} replace />
            }
          />
          <Route
            path={URLS.CLIENT.MY_PAGE.REVIEW_TABS.LIST}
            element={<MyReviewListPage />}
          />
          <Route
            path={URLS.CLIENT.MY_PAGE.REVIEW_TABS.WRITE}
            element={<MyReviewToWrite />}
          />
        </Route>
        <Route
          path={URLS.CLIENT.MY_PAGE.TABS.QUESTIONS}
          element={<MyQuestions />}
        />
      </Route>

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
