import React from 'react';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';
import { CartItemResponse } from '@/types';
import { formatPrice } from '@/utils';

import { Tr, Thumbnail } from './OrderItem.styles';

interface Props {
  item: CartItemResponse;
}

const OrderItem = ({ item }: Props) => {
  const {
    thumbnail,
    productName,
    quantity,
    sellingPrice,
    retailPrice,
    color,
    size,
  } = item;

  const productUrl = `${URLS.CLIENT.PRODUCT}/${item.productId}`;

  const discount = retailPrice - sellingPrice;
  const pricePerItem = retailPrice - discount;

  return (
    <Tr>
      <Thumbnail>
        <Link to={productUrl}>
          <img src={thumbnail} />
        </Link>
      </Thumbnail>
      <td className="product-name">
        <div>
          <Link to={productUrl}>{productName}</Link>
        </div>
        <div className="option">
          {color.label} / {size.label}
        </div>
      </td>
      <td className="retail-price">
        <b>{formatPrice(retailPrice)}</b>원
      </td>
      <td className="discount">{formatPrice(discount * -1)}원</td>
      <td className="selling-price">
        <b>{formatPrice(pricePerItem)}</b>원
      </td>
      <td className="quantity">
        <b>{quantity}</b>개
      </td>
      <td className="total">
        <b>{formatPrice(pricePerItem * quantity)}</b>원
      </td>
    </Tr>
  );
};

export default React.memo(OrderItem);
