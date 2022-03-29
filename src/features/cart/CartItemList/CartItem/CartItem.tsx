import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { CheckBox, NumberInput, PriceLabel, SquareButton } from '@/components';
import { URLS } from '@/constants';
import { useNumberInput } from '@/hooks';
import { CartItemResponse } from '@/types';

import { useEditCartItemMutation } from '../../useEditCartItemMutation';
import { useRemoveCartItemMutation } from '../../useRemoveCartItemMutation';
import {
  Wrapper,
  OrderSelector,
  Summary,
  Thumbnail,
  Info,
  Quantity,
  Buttons,
} from './CartItem.styles';

interface CartItemProps {
  item: CartItemResponse;
  checked?: boolean;
  onSelectItem: (cartItem: CartItemResponse) => void;
  onDeselectItem: (cartItemId: number) => void;
}

const CartItem = ({
  item,
  checked,
  onSelectItem,
  onDeselectItem,
}: CartItemProps) => {
  const { value: quantity, ...rest } = useNumberInput({
    defaultValue: item.quantity,
    min: 1,
    max: item.stock,
    handleExcessMax: ({ max }) =>
      alert(`최대 ${max}개까지 구매할 수 있습니다.`),
  });
  const { mutate: mutateEditItem } = useEditCartItemMutation();
  const { mutate: mutateRemove } = useRemoveCartItemMutation();

  const productUrl = `${URLS.CLIENT.PRODUCT}/${item.productId}`;

  const handleClickEditQuantity = (
    cartItem: CartItemResponse,
    newQuantity: number,
  ) => {
    mutateEditItem({
      cartItemId: cartItem.id,
      request: { quantity: newQuantity },
    });
  };

  const handleClickRemove = (cartItemId: number) => {
    if (confirm('상품을 장바구니에서 제거하시겠습니까?')) {
      mutateRemove(cartItemId);
      onDeselectItem(cartItemId);
    }
  };

  const handleChangeItemSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    if (checked) {
      onSelectItem(item);
    } else {
      onDeselectItem(item.id);
    }
  };

  return (
    <Wrapper>
      <OrderSelector>
        <CheckBox checked={checked} onChange={handleChangeItemSelection} />
      </OrderSelector>
      <Thumbnail>
        <Link to={productUrl}>
          <img src={item.thumbnail} />
        </Link>
      </Thumbnail>
      <Summary>
        <Info>
          <Link to={productUrl}>
            <h3 className="product-name">{item.productName}</h3>
          </Link>
          <div className="price">
            <PriceLabel
              sellingPrice={item.sellingPrice * item.quantity}
              retailPrice={item.retailPrice * item.quantity}
            />
          </div>
          <div className="option">
            <div>
              {item.color.label} / {item.size.label}
            </div>
          </div>
        </Info>
      </Summary>
      <Quantity>
        <NumberInput size="small" name="quantity" value={quantity} {...rest} />
        <SquareButton
          size="xsmall"
          variant="outline"
          onClick={() => handleClickEditQuantity(item, quantity)}
        >
          수량 변경
        </SquareButton>
      </Quantity>
      <Buttons>
        <SquareButton size="xsmall" wide>
          바로 구매
        </SquareButton>
        <SquareButton
          size="xsmall"
          variant="outline"
          wide
          onClick={() => handleClickRemove(item.id)}
        >
          삭제
        </SquareButton>
      </Buttons>
    </Wrapper>
  );
};

export default React.memo(CartItem);
