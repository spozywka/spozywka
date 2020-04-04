import React from 'react';
import styled from 'styled-components';
import { darkGrey, desktopBreakpoint, lightGrey } from '../../../styles';
import { VendorData } from './VendorData';
import { DateFormat } from '../../../common/components/DateFormat';
import { Pins } from '../../../common/components/Pins';

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 300px 1fr;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${darkGrey};
`;

const IdWrapper = styled.h2`
  font-size: 18px;
  color: ${darkGrey};
`;

const Field = styled.h3`
  font-size: 18px;
  color: ${lightGrey};
`;

const Map = styled.div`
  flex: 1 1 auto;
  height: 100%;
  background: url('/images/map.png');
  background-size: cover;
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

interface Props {
  orderId?: number;
  total?: number;
  orderDate?: string;
  deliveryDate?: string;
  vendorId?: number;
}

export function OrderDetails(props: Props) {
  return (
    <Wrapper>
      <Details>
        <Title>Details</Title>
        <IdWrapper>ID: {props.orderId}</IdWrapper>
        <VendorData key={props.vendorId} userId={props.vendorId} />
        <Field>
          Order date: <DateFormat date={props.orderDate} />
        </Field>
        <Field>
          Delivery date: <DateFormat date={props.deliveryDate} />
        </Field>
      </Details>

      <Map>
        <Pins count={1} />
      </Map>
    </Wrapper>
  );
}
