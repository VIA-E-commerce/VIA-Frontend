import React, { useEffect } from 'react';

import { GridSection, SquareButton } from '@/components';
import { CartBill, CartItemList, useCartItemList } from '@/features/cart';

import { CartItemSection, CartAside } from './Cart.styles';

const Cart = () => {
  const { data: cartItems, remove: removeCartItems } = useCartItemList();

  useEffect(() => {
    return () => removeCartItems();
  }, []);

  return (
    <GridSection>
      <CartItemSection>
        <CartItemList cartItems={cartItems} />
      </CartItemSection>
      <CartAside>
        <CartBill />
        <SquareButton wide>주문하기</SquareButton>
      </CartAside>
    </GridSection>
  );
};

export default Cart;
