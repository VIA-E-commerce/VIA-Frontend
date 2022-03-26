import React from 'react';

import { CartItemResponse } from '@/types';

import { OrderItem } from './OrderItem';
import { Table } from './OrderItemInfoTable.styles';

interface Props {
  cartItems: CartItemResponse[];
}

const OrderItemInfoTable = ({ cartItems }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>상품</th>
          <th>상품명</th>
          <th>상품 가격</th>
          <th>할인</th>
          <th>판매가</th>
          <th>수량</th>
          <th>합계</th>
        </tr>
      </thead>
      <tbody>
        {cartItems?.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderItemInfoTable;
