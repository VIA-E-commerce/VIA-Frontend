import React, { memo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { CATEGORY, URLS } from '@/constants';
import { parseToPath, PathOptions } from '@/utils';

import { Nav, Menu, MenuItem, MenuItemStyleProps } from './NavBar.styles';
interface INavItem {
  label: string;
  pathOptions: PathOptions;
}

const navItems: INavItem[] = Object.entries(CATEGORY).map(([key, value]) => {
  return {
    label: value,
    pathOptions: {
      pathname: URLS.CLIENT.PRODUCT,
      search: {
        [URLS.PARAM.CATEGORY]: key,
      },
    },
  };
});

interface NavItemProps extends MenuItemStyleProps {
  label: string;
  path: string;
}

const NavItem = memo(function NavItem({ label, path, active }: NavItemProps) {
  return (
    <Link to={path}>
      <MenuItem active={active}>{label}</MenuItem>
    </Link>
  );
});

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const pageCategory = searchParams.get(URLS.PARAM.CATEGORY);

  return (
    <Nav>
      <Menu>
        {navItems.map((item) => {
          const navItemCategory =
            item.pathOptions.search &&
            item.pathOptions.search[URLS.PARAM.CATEGORY];
          const path = parseToPath(item.pathOptions);

          return (
            <NavItem
              key={navItemCategory}
              label={item.label}
              path={path}
              active={pageCategory === navItemCategory}
            />
          );
        })}
      </Menu>
    </Nav>
  );
};

export default memo(NavBar);
