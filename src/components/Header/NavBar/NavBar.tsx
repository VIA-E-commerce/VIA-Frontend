import React, { memo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { CATEGORY, URLS } from '@/constants';

import { Nav, Menu, MenuItem, MenuItemStyleProps } from './NavBar.styles';
import { NavMenuItem } from '@/types';

interface NavItemProps extends NavMenuItem, MenuItemStyleProps {}

const NavItem = memo(function NavItem({ label, to, active }: NavItemProps) {
  return (
    <Link to={to}>
      <MenuItem active={active}>{label}</MenuItem>
    </Link>
  );
});

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get(URLS.PARAM.CATEGORY) || '';

  return (
    <Nav>
      <Menu>
        {Object.keys(CATEGORY).map((key) => {
          const label = CATEGORY[key];
          const active = category === key;

          const search = new URLSearchParams();
          search.set(URLS.PARAM.CATEGORY, key);

          return (
            <NavItem
              key={key}
              label={label}
              to={{ pathname: URLS.CLIENT.CATEGORY, search: search.toString() }}
              active={active}
            />
          );
        })}
      </Menu>
    </Nav>
  );
};

export default memo(NavBar);
