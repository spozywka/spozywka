import React from 'react';
import styled from 'styled-components';
import { OfferCard } from './OfferCard';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OFFERS = [
  {
    title: 'Best homemade bread!',
    category: 'Food',
    distance: '0.7km from you',
    city: 'Wroclaw, Psie Pole',
    date: '17.04',
  },
];

interface Props {}

export function List(props: Props) {
  return (
    <Wrapper>
      {OFFERS.map((offer) => (
        <OfferCard key={offer.title} {...offer} />
      ))}
    </Wrapper>
  );
}
