import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../common/components/Card';
import { darkGrey, lightGrey } from '../../../styles';

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px;
  transition: transform 0.2s ease-in;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    z-index: 1;
  }
`;

const Image = styled.img`
  background: ${lightGrey};
  width: 150px;
  height: 100px;
  margin-right: 10px;
`;

const Description = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

const Title = styled.h3`
  font-size: 20px;
  color: ${darkGrey};
`;

const Number = styled.span`
  font-size: 14px;
  color: ${lightGrey};
`;

export interface OrderTabProps {
  name?: string;
  orderId?: number;
  photoUrl?: string;
  onClick(): void;
}

export function OrderTab({ name, orderId, photoUrl, onClick }: OrderTabProps) {
  return (
    <Wrapper onClick={() => onClick()}>
      <Image src={photoUrl} />

      <Description>
        <Title>{name}</Title>
        &nbsp;
        <Number>Order Id: {orderId}</Number>
      </Description>
    </Wrapper>
  );
}
