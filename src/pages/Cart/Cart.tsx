import React, { useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';

import { GridSection, SquareButton } from '@/components';
import { URLS } from '@/constants';
import { CartBill, CartItemList, useMyCart } from '@/features/cart';
import { selectedCartItemsState } from '@/state';

import { CartItemSection, CartAside, EmptyCartItemList } from './Cart.styles';

const Cart = () => {
  const navigate = useNavigate();

  const { data: cartItems, remove: removeCartItems } = useMyCart();
  const selectedCartItems = useRecoilValue(selectedCartItemsState);

  const isOrderButtonDisabled = selectedCartItems.size === 0;

  const onClickOrder = useCallback(() => {
    const params = new URLSearchParams();
    selectedCartItems.forEach((item) => {
      params.append(URLS.PARAM.CART_ITEM_ID, item.id.toString());
    });

    navigate({
      pathname: URLS.CLIENT.ORDER,
      search: params.toString(),
    });
  }, [selectedCartItems]);

  useEffect(() => {
    return () => removeCartItems();
  }, []);

  return (
    <GridSection>
      <CartItemSection>
        {!cartItems || cartItems.length === 0 ? (
          <EmptyCartItemList>장바구니에 담긴 상품이 없습니다</EmptyCartItemList>
        ) : (
          <CartItemList cartItems={cartItems} />
        )}
      </CartItemSection>
      <CartAside>
        <CartBill />
        <SquareButton
          wide
          onClick={onClickOrder}
          disabled={isOrderButtonDisabled}
        >
          주문하기
        </SquareButton>
      </CartAside>
    </GridSection>
  );
};

export default Cart;
