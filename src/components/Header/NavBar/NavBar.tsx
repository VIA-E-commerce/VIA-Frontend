import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';

import { Nav, Menu, MenuItem } from './NavBar.styles';

interface INavItem {
  label: string;
  path: string;
}

const navItems: INavItem[] = [
  {
    label: 'NEW',
    path: URLS.CLIENT.PRODUCT.NEW,
  },
  {
    label: 'SALE',
    path: URLS.CLIENT.PRODUCT.SALE,
  },
  {
    label: 'OUTER',
    path: URLS.CLIENT.PRODUCT.OUTER,
  },
  {
    label: 'TOP',
    path: URLS.CLIENT.PRODUCT.TOP,
  },
  {
    label: 'BOTTOM',
    path: URLS.CLIENT.PRODUCT.BOTTOM,
  },
  {
    label: 'BAG/ACC',
    path: URLS.CLIENT.PRODUCT.BAG_ACC,
  },
];

const NavItem = ({ label, path }: INavItem) => {
  return (
    <MenuItem>
      <Link to={path}>{label}</Link>
    </MenuItem>
  );
};

const NavBar = () => {
  return (
    <Nav>
      <Menu>
        {navItems.map((item) => (
          <NavItem key={item.path} label={item.label} path={item.path} />
        ))}
      </Menu>
    </Nav>
  );
};

export default memo(NavBar);
