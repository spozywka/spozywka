import React from 'react';
import styled from 'styled-components';
import { darkGrey, lightGrey } from '../../../styles';

const Wrapper = styled.div`
  margin: 0 0 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 0;
  color: ${darkGrey};
`;

const Category = styled.span`
  font-size: 20px;
  color: ${lightGrey};
`;

const OfferId = styled.span`
  text-align: right;
  font-size: 16px;
  color: ${darkGrey};
`;

interface Props {
  offerId?: number;
  title?: string;
  category?: string;
}

export function OfferName({ offerId, title, category }: Props) {
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </div>

      <OfferId>Offer ID: {offerId}</OfferId>
    </Wrapper>
  );
}
