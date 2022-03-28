import React, { memo } from 'react';
import { MdPerson, MdSearch, MdShoppingCart } from 'react-icons/md';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';
import { styles } from '@/styles';
import { UserSummary } from '@/types';
import { parseLocationToRedirect } from '@/utils';

import { DropDown, TransparentButton } from '../../../buttons';
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
            <DropDown
              button={
                <TransparentButton>
                  <MdPerson />
                </TransparentButton>
              }
              style={{
                transform: `translate(-3.2rem, -${styles.border.level1}rem)`,
              }}
            >
              <li>
                <Link to={URLS.CLIENT.WISHLIST}>위시리스트</Link>
              </li>
            </DropDown>
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
