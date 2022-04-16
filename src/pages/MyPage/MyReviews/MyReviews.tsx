import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { Tab } from '@/components';
import { QUERY, URLS } from '@/constants';
import { ReviewModal } from '@/features/review';

import { InnerWrapper, ReviewTabNav } from './MyReviews.styles';

const MyReviews = () => {
  return (
    <>
      <Tab>
        <InnerWrapper>
          <ReviewTabNav>
            <ul>
              <li>
                <NavLink to={URLS.CLIENT.MY_PAGE.REVIEW_TABS.LIST}>
                  내가 작성한 후기
                </NavLink>
              </li>
              <li>
                <NavLink to={URLS.CLIENT.MY_PAGE.REVIEW_TABS.WRITE}>
                  후기 작성
                </NavLink>
              </li>
            </ul>
          </ReviewTabNav>
          <Outlet />
        </InnerWrapper>
      </Tab>
      <ReviewModal queryKey={QUERY.USER.MY_REVIEWS} />
    </>
  );
};

export default MyReviews;
