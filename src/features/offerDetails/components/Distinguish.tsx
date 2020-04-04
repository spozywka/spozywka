import React from 'react';
import styled from 'styled-components';
import { darkGrey, lightGrey, orange } from '../../../styles';

const Title = styled.h3`
  font-size: 24px;
  color: ${darkGrey};
  text-align: center;
`;

const Column = styled.h3`
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px 10px;
`;

const Image = styled.div<{ photoUrl: string }>`
  background: url(${(props) => props.photoUrl});
  background-size: cover;
  background-attachment: center center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

const Description = styled.div`
  color: ${lightGrey};
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const Orange = styled.span`
  color: ${orange};
`;

export function Distinguish() {
  return (
    <div>
      <Title>What distinguishes this vendor?</Title>

      <Column>
        <Image photoUrl="/images/1-card.png" />
        <Description>
          <span>
            This vendor accepts <Orange>card payments</Orange>
          </span>
        </Description>

        <Image photoUrl="/images/2-truck.png" />
        <Description>
          <span>
            Delivery <Orange>always on time</Orange>
          </span>
        </Description>

        <Image photoUrl="/images/3-discount.png" />
        <Description>
          <span>
            <Orange>Big discounts</Orange> for returning clients
          </span>
        </Description>

        <Image photoUrl="/images/4-quality.png" />
        <Description>
          <span>
            One of the highest <Orange>quality</Orange> on the market
          </span>
        </Description>
      </Column>
    </div>
  );
}
