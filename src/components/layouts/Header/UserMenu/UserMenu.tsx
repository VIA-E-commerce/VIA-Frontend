import React, { memo } from 'react';
import { MdPerson, MdSearch, MdShoppingCart } from 'react-icons/md';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { currentUserState } from '@/state';
import { URLS } from '@/constants';
import { styles } from '@/styles';
import { parseLocationToRedirect } from '@/utils';

import { DropDown, TransparentButton } from '../../../buttons';
import { Menu, MenuItem } from './UserMenu.styles';

interface Props {
  onClickLogout: () => void;
}

const UserMenu = ({ onClickLogout }: Props) => {
  const location = useLocation();
  const redirect = parseLocationToRedirect(location);
  const user = useRecoilValue(currentUserState);

  return (
    <Menu>
      <MenuItem>
        <TransparentButton>
          <MdSearch />
        </TransparentButton>
      </MenuItem>

      {user ? (
        <>
          <MenuItem>
            <TransparentButton onClick={onClickLogout}>
              LOGOUT
            </TransparentButton>
          </MenuItem>
          <MenuItem>
            <DropDown
              button={
                <Link to={URLS.CLIENT.MY_PAGE.INDEX}>
                  <MdPerson />
                </Link>
              }
              style={{
                transform: `translate(-3.2rem, -${styles.border.level1}rem)`,
              }}
            >
              <li>
                <Link to={URLS.CLIENT.MY_PAGE.INDEX}>마이페이지</Link>
              </li>
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
