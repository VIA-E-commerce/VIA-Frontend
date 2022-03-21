import React, { memo } from 'react';
import { MdPerson, MdSearch, MdShoppingCart } from 'react-icons/md';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';
import { UserSummary } from '@/types';
import { parseLocationToRedirect } from '@/utils';

import { Menu, MenuItem } from './UserMenu.styles';

interface Props {
  user?: UserSummary;
  onClickLogout: () => void;
}

const UserMenu = ({ user, onClickLogout }: Props) => {
  const location = useLocation();
  const redirect = parseLocationToRedirect(location);

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
            <Link
              to={URLS.CLIENT.LOGIN}
              state={{
                redirect,
              }}
            >
              LOGIN
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={URLS.CLIENT.JOIN} state={{ redirect }}>
              JOIN
            </Link>
          </MenuItem>
        </>
      )}

      <MenuItem>
        <Link
          to={URLS.CLIENT.CART}
          state={{
            redirect: {
              pathname: URLS.CLIENT.CART,
            },
          }}
        >
          <MdShoppingCart />
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default memo(UserMenu);
