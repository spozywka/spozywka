import React from 'react';
import { List } from 'antd';
import { OrderTab, OrderTabProps } from './OrderTab';

interface Props {
  orders: OrderTabProps[];
}

export function OrderList(props: Props) {
  return (
    <List
      dataSource={props.orders}
      renderItem={(item, i) => <OrderTab key={item.orderId || i} {...item} />}
    />
  );
}
