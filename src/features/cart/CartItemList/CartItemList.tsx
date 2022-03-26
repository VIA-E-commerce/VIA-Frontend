import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { selectedCartItemsState } from '@/state';
import { CartItemResponse } from '@/types';

import { CartItem } from './CartItem';
import { List } from './CartItemList.styles';

interface CartItemListProps {
  cartItems: CartItemResponse[];
}

const CartItemList = ({ cartItems }: CartItemListProps) => {
  const [selectedCartItems, setSelectedCartItems] = useRecoilState(
    selectedCartItemsState,
  );

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

    return () => {
      setSelectedCartItems(new Map());
    };
  }, []);

  return (
    <List>
      {cartItems?.map((item) => (
        <li key={item.id}>
          <CartItem
            item={item}
            checked={selectedCartItems.has(item.id)}
            onSelectItem={handleSelectItem}
            onDeselectItem={handleDeselectItem}
          />
        </li>
      ))}
    </List>
  );
};

export default CartItemList;
