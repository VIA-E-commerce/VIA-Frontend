import React, { useCallback, useState } from 'react';

import { Empty, Loading, Pagination, Tab } from '@/components';
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

  if (!pagination || !orders) {
    return <Loading />;
  }

  return (
    <Tab>
      <MyOrderList>
        {orders.length === 0 ? (
          <Empty text="주문 내역이 없습니다" />
        ) : (
          orders.map((order) => <MyOrderItem key={order.id} order={order} />)
        )}
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
