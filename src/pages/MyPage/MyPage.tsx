import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';

import { GridSection, TabNav } from '@/components';
import { URLS } from '@/constants';
import { CategoryTitle } from '@/features/productList';
import { currentUserState } from '@/state';
import { TabItem } from '@/types';

import { MyInfo } from './MyInfo';
import { MyOrders } from './MyOrders';
import { MyReviews } from './MyReviews';
import { MyQuestions } from './MyQuestions';

const tabs: TabItem[] = [
  { id: URLS.CLIENT.MY_PAGE.TABS.PROFILE, label: '내 정보' },
  { id: URLS.CLIENT.MY_PAGE.TABS.ORDERS, label: '주문 목록' },
  { id: URLS.CLIENT.MY_PAGE.TABS.REVIEWS, label: '후기 목록' },
  { id: URLS.CLIENT.MY_PAGE.TABS.QUESTIONS, label: '문의 목록' },
];

const MyPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const me = useRecoilValue(currentUserState);

  const activeTabId = params['*'] || URLS.CLIENT.MY_PAGE.TABS.PROFILE;

  const handleClickTabButton = (tab: TabItem) => {
    navigate({ pathname: tab.id });
  };

  if (!me) return <GridSection cols={1}>로딩 중</GridSection>;

  return (
    <>
      <GridSection cols={1}>
        <CategoryTitle title="My Page" />
      </GridSection>
      <GridSection cols={1} rowGap={0}>
        <TabNav
          tabs={tabs}
          activeTabId={activeTabId}
          onClickTabButton={handleClickTabButton}
        />
        <Routes>
          <Route index element={<MyInfo me={me} />} />
          <Route
            path={URLS.CLIENT.MY_PAGE.TABS.PROFILE}
            element={<MyInfo me={me} />}
          />
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
