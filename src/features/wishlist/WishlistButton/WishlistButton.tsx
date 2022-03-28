import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { TransparentButton } from '@/components';
import { useProtectedFunction } from '@/hooks';

interface Props {
  wished?: boolean;
  onClick: React.MouseEventHandler;
}

export const WishlistButton = ({ wished, onClick }: Props) => {
  const protectedFunction = useProtectedFunction();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    protectedFunction(() => onClick(event));
  };

  return (
    <TransparentButton onClick={handleClick}>
      {wished ? <MdFavorite /> : <MdFavoriteBorder />}
    </TransparentButton>
  );
};

export default React.memo(WishlistButton);
