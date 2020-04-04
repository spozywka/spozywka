import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paths } from '../../../constants';
import { Offer } from '../../../types/api/offer';
import { OfferCard } from './OfferCard';

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
        <Link to={`${paths.offerList}/${offer.id}`}>
          <OfferCard
            key={offer.title}
            category={offer.category}
            city={offer.city}
            date={offer.delivery_date}
            distance={offer.distance}
            title={offer.title}
            photoUrl={offer.photo_url}
          />
        </Link>
      ))}
    </Wrapper>
  );
}
