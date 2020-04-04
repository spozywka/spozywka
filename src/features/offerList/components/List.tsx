import React from 'react';
import styled from 'styled-components';
import { OfferCard } from './OfferCard';
import { Offer } from '../../../types/api/offer';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface Props {
  offers: Offer[];
}

export function List(props: Props) {
  return (
    <Wrapper>
      {props.offers.map((offer) => (
        <OfferCard
          key={offer.title}
          category={offer.category}
          city={offer.city}
          date={offer.delivery_date}
          distance={offer.distance}
          title={offer.title}
          photoUrl={offer.photo_url}
        />
      ))}
    </Wrapper>
  );
}
