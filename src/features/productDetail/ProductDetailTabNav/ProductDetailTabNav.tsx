import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useRecoilState, useSetRecoilState } from 'recoil';
import cx from 'classnames';

import { headerBorderState, headerHideState } from '@/state';
import { styles } from '@/styles';
import { ProductDetailTabItem } from '@/types';

import { Wrapper, TabMenu, TabButton } from './ProductDetailTabNav.styles';

interface ProductDetailTabNavProps {
  tabs: ProductDetailTabItem[];
}

const scrollOffset =
  styles.component.productDetail.tab.navHeight * -1 * styles.remToPx + 1;

const ProductDetailTabNav = ({ tabs }: ProductDetailTabNavProps) => {
  const [headerHide, setHeaderHide] = useRecoilState(headerHideState);
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
                offset={scrollOffset}
                onSetActive={() => {
                  setActiveId(tab.id);
                  setHeaderHide(true);
                }}
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
