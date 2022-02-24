import React, { memo } from 'react';
import { MdPersonOutline, MdSearch, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';
import { UserSummary } from '@/types';

import { Menu, MenuItem } from './UserMenu.styles';

interface Props {
  user?: UserSummary;
}

const UserMenu = ({ user }: Props) => {
  return (
    <Menu>
      <MenuItem>
        <MdSearch />
      </MenuItem>
      <MenuItem>
        <MdShoppingCart />
      </MenuItem>

      {user ? (
        <MenuItem>
          <MdPersonOutline />
        </MenuItem>
      ) : (
        <>
          <MenuItem>
            <Link to={URLS.CLIENT.LOGIN}>로그인</Link>
          </MenuItem>
          <MenuItem>
            <Link to={URLS.CLIENT.JOIN}>회원가입</Link>
          </MenuItem>
        </>
      )}
    </Menu>
  );
};

export default memo(UserMenu);
