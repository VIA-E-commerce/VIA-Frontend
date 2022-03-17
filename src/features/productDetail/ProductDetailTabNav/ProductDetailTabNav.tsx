import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import cx from 'classnames';

import { headerBorderState, headerHideState } from '@/state';
import { ProductDetailTabItem } from '@/types';

import { Wrapper, TabMenu, TabButton } from './ProductDetailTabNav.styles';

interface ProductDetailTabNavProps {
  tabs: ProductDetailTabItem[];
}

const ProductDetailTabNav = ({ tabs }: ProductDetailTabNavProps) => {
  const headerHide = useRecoilValue(headerHideState);
  const setHeaderBorder = useSetRecoilState(headerBorderState);
  const [activeId, setActiveId] = useState<string | null | undefined>();

  const sticky = activeId !== undefined;

  useEffect(() => {
    setHeaderBorder(!sticky);
    return () => setHeaderBorder(true);
  }, [sticky]);

  return (
    <Wrapper className={cx({ ['header-hide']: headerHide, sticky })}>
      <TabMenu className={cx({ sticky })}>
        {tabs.map((tab, index) => {
          const inactive = index === 0 ? undefined : null;

          return (
            <TabButton key={tab.id} active={activeId === tab.id}>
              <Link
                to={tab.id}
                spy={true}
                offset={-56}
                onSetActive={() => setActiveId(tab.id)}
                onSetInactive={() => setActiveId(inactive)}
              >
                {tab.label}
              </Link>
            </TabButton>
          );
        })}
      </TabMenu>
    </Wrapper>
  );
};

export default memo(ProductDetailTabNav);
