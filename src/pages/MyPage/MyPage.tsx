import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router';

import { GridSection, TabNav } from '@/components';
import { URLS } from '@/constants';
import { CategoryTitle } from '@/features/productList';
import { TabItem } from '@/types';

import { MyInfo } from './MyInfo';
import { MyOrders } from './MyOrders';
import { MyReviews } from './MyReviews';
import { MyQuestions } from './MyQuestions';

const tabs: TabItem[] = [
  { id: URLS.CLIENT.MY_PAGE.TABS.PROFILE, label: '내 정보' },
  { id: URLS.CLIENT.MY_PAGE.TABS.ORDERS, label: '주문 목록' },
  { id: URLS.CLIENT.MY_PAGE.TABS.REVIEWS, label: '리뷰 조회' },
  { id: URLS.CLIENT.MY_PAGE.TABS.QUESTIONS, label: '문의 조회' },
];

const MyPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const activeTabId = params['*'] || URLS.CLIENT.MY_PAGE.TABS.PROFILE;

  const handleClickTabButton = (tab: TabItem) => {
    navigate({ pathname: tab.id });
  };

  return (
    <>
      <GridSection cols={1}>
        <CategoryTitle title="My Page" />
      </GridSection>
      <GridSection cols={1}>
        <TabNav
          tabs={tabs}
          activeTabId={activeTabId}
          onClickTabButton={handleClickTabButton}
        />
        <Routes>
          <Route index element={<MyInfo />} />
          <Route path={URLS.CLIENT.MY_PAGE.TABS.PROFILE} element={<MyInfo />} />
          <Route
            path={URLS.CLIENT.MY_PAGE.TABS.ORDERS}
            element={<MyOrders />}
          />
          <Route
            path={URLS.CLIENT.MY_PAGE.TABS.REVIEWS}
            element={<MyReviews />}
          />
          <Route
            path={URLS.CLIENT.MY_PAGE.TABS.QUESTIONS}
            element={<MyQuestions />}
          />
        </Routes>
      </GridSection>
    </>
  );
};

export default MyPage;
