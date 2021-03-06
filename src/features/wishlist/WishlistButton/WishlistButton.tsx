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
      {wished ? (
        <MdFavorite title="위시리스트에서 제거" />
      ) : (
        <MdFavoriteBorder title="위시리스트에 추가" />
      )}
    </TransparentButton>
  );
};

export default React.memo(WishlistButton);
