import React, { memo } from 'react';
import { MdSearch, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';

import { Menu, MenuItem } from './UserMenu.styles';

const UserMenu = () => {
  return (
    <Menu>
      <MenuItem>
        <MdSearch />
      </MenuItem>
      <MenuItem>
        <MdShoppingCart />
      </MenuItem>
      <MenuItem>
        <Link to={URLS.CLIENT.LOGIN}>로그인</Link>
      </MenuItem>
      <MenuItem>
        <Link to={URLS.CLIENT.JOIN}>회원가입</Link>
      </MenuItem>
    </Menu>
  );
};

export default memo(UserMenu);
