import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { URLS } from '@/constants';
import { TabItem } from '@/types';

import { Wrapper, TabMenu, TabButton } from './TabNav.styles';

interface Props {
  tabs: TabItem[];
}

const TabNav = ({ tabs }: Props) => {
  return (
    <Wrapper>
      <TabMenu>
        {tabs.map((tab) => (
          <TabButton key={tab.id}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to={`${URLS.CLIENT.MY_PAGE.INDEX}/${tab.id}`}
            >
              {tab.label}
            </NavLink>
          </TabButton>
        ))}
      </TabMenu>
    </Wrapper>
  );
};

export default memo(TabNav);
