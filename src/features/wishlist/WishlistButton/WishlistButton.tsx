import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { TransparentButton } from '@/components';

interface Props {
  wished?: boolean;
  onClick: React.MouseEventHandler;
}

export const WishlistButton = ({ wished, onClick }: Props) => {
  return (
    <TransparentButton onClick={onClick}>
      {wished ? <MdFavorite /> : <MdFavoriteBorder />}
    </TransparentButton>
  );
};

export default React.memo(WishlistButton);
