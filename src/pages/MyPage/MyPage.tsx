import React from 'react';
import { Outlet } from 'react-router';

import { DocumentTitle, GridSection, PageTemplate, TabNav } from '@/components';
import { URLS } from '@/constants';
import { CategoryTitle } from '@/features/productList';
import { TabItem } from '@/types';

import { TabRoute } from './MyPage.styles';

const tabs: TabItem[] = [
  { id: URLS.CLIENT.MY_PAGE.TABS.PROFILE, label: '내 정보' },
  { id: URLS.CLIENT.MY_PAGE.TABS.ORDERS, label: '주문 목록' },
  { id: URLS.CLIENT.MY_PAGE.TABS.REVIEWS, label: '후기 목록' },
  { id: URLS.CLIENT.MY_PAGE.TABS.QUESTIONS, label: '문의 목록' },
];

const MyPage = () => {
  return (
    <PageTemplate>
      <DocumentTitle title="마이페이지" />

      <GridSection cols={1}>
        <CategoryTitle title="My Page" />
      </GridSection>
      <GridSection cols={1} rowGap={0}>
        <TabNav tabs={tabs} />
        <TabRoute>
          <Outlet />
        </TabRoute>
      </GridSection>
    </PageTemplate>
  );
};

export default MyPage;
