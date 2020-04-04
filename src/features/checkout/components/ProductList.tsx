import React from 'react';
import { List, InputNumber } from 'antd';
import styled from 'styled-components';
import { desktopBreakpoint } from '../../../styles';

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;

  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const Field = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export interface ProductListItem {
  id?: number;
  name?: string;
  price?: number;
  qty?: number;
}

interface Props {
  items: ProductListItem[];
  onChange(id?: number, qty?: number): void;
}

export function ProductList({ items, onChange }: Props) {
  return (
    <List
      dataSource={items}
      header={
        <Row>
          <Field>Description</Field>
          <Field>Price</Field>
          <Field>Qty.</Field>
          <Field>Total</Field>
        </Row>
      }
      renderItem={(item) => (
        <List.Item>
          <Row>
            <Field>{item.name}</Field>
            <Field>${item.price}</Field>
            <InputNumber
              min={0}
              max={99}
              value={item.qty}
              onChange={(val) => onChange(item.id, val)}
            />
            <Field>{!!item.price && !!item.qty ? `$${item.price * item.qty}` : '-'}</Field>
          </Row>
        </List.Item>
      )}
    />
  );
}
