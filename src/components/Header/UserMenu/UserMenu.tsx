import React, { memo } from 'react';
import { MdPerson, MdSearch, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';
import { UserSummary } from '@/types';

import { Menu, MenuItem } from './UserMenu.styles';

interface Props {
  user?: UserSummary;
  onClickLogout: () => void;
}

const UserMenu = ({ user, onClickLogout }: Props) => {
  return (
    <Menu>
      <MenuItem>
        <MdSearch />
      </MenuItem>

      {user ? (
        <>
          <MenuItem onClick={onClickLogout}>LOGOUT</MenuItem>
          <MenuItem>
            <MdPerson />
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem>
            <Link to={URLS.CLIENT.LOGIN}>LOGIN</Link>
          </MenuItem>
          <MenuItem>
            <Link to={URLS.CLIENT.JOIN}>JOIN</Link>
          </MenuItem>
        </>
      )}

      <MenuItem>
        <MdShoppingCart />
      </MenuItem>
    </Menu>
  );
};

export default memo(UserMenu);
