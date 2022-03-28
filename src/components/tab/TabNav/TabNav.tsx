import React, { memo } from 'react';

import { TabItem } from '@/types';

import { Wrapper, TabMenu, TabButton } from './TabNav.styles';

interface Props {
  tabs: TabItem[];
  activeTabId?: string;
  onClickTabButton?: (tab: TabItem) => void;
}

const TabNav = ({ tabs, activeTabId, onClickTabButton }: Props) => {
  return (
    <Wrapper>
      <TabMenu>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTabId === tab.id}
            onClick={() => onClickTabButton && onClickTabButton(tab)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabMenu>
    </Wrapper>
  );
};

export default memo(TabNav);
