import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { selectedCartItemsState } from '@/state';
import { CartItemResponse } from '@/types';

import { CartItem } from './CartItem';
import { List, EmptyList } from './CartItemList.styles';

interface CartItemListProps {
  cartItems?: CartItemResponse[];
}

const CartItemList = ({ cartItems }: CartItemListProps) => {
  const setSelectedCartItems = useSetRecoilState(selectedCartItemsState);

  const handleSelectItem = (cartItem: CartItemResponse) => {
    setSelectedCartItems((prev) => new Map(prev).set(cartItem.id, cartItem));
  };

  const handleDeselectItem = (cartItemId: number) => {
    setSelectedCartItems((prev) => {
      const next = new Map(prev);
      next.delete(cartItemId);

      return next;
    });
  };

  useEffect(() => {
    cartItems?.forEach((item) => handleSelectItem(item));
  }, [cartItems]);

  if (cartItems?.length === 0) {
    return <EmptyList>장바구니에 담긴 상품이 없습니다</EmptyList>;
  }

  return (
    <List>
      {cartItems?.map((item) => (
        <li key={item.id}>
          <CartItem
            item={item}
            onSelectItem={handleSelectItem}
            onDeselectItem={handleDeselectItem}
          />
        </li>
      ))}
    </List>
  );
};

export default CartItemList;
