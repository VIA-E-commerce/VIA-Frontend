import React, { useCallback, useState } from 'react';

import { GridSection, Pagination, Tab } from '@/components';
import { useMyOrders, MyOrderItem } from '@/features/order';

import { MyOrderList } from './MyOrders.styles';

const PAGE_RANGE = 5;
const PAGE_SIZE = 10;

const MyOrders = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data: pagination } = useMyOrders({ pageNum, pageSize: PAGE_SIZE });

  const orders = pagination?.list;

  const onClickPageButton = useCallback((pageNum: number) => {
    setPageNum(pageNum);
  }, []);

  if (!pagination || !orders || orders.length === 0) {
    return <GridSection cols={1}>로딩 중</GridSection>;
  }

  return (
    <Tab>
      <MyOrderList>
        {orders.map((order) => (
          <MyOrderItem key={order.id} order={order} />
        ))}
      </MyOrderList>
      <Pagination
        pageRange={PAGE_RANGE}
        totalPages={pagination.totalPages}
        currentPage={pageNum}
        onClickPageButton={onClickPageButton}
      />
    </Tab>
  );
};

export default MyOrders;
