import React from 'react';

import { GridSection, SquareButton } from '@/components';
import { CartBill, CartItemList, useCartItemList } from '@/features/cart';

import { CartItemSection, CartAside } from './Cart.styles';

const Cart = () => {
  const { data: cartItems } = useCartItemList();

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
