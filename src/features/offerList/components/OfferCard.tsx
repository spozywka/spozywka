import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/Card';
import { lightGrey, darkGrey } from '../../../styles';

const Wrapper = styled(Card)`
  display: flex;
  padding: 10px;
`;

const Image = styled.div`
  background: ${lightGrey};
  width: 150px;
  height: 100px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  color: ${darkGrey};
`;

const Category = styled.span`
  font-size: 14px;
  color: ${lightGrey};
`;

const Label = styled.span`
  font-size: 14px;
  color: ${darkGrey};
`;

interface Props {
  title?: string;
  category?: string;
  distance?: string;
  city?: string;
  date?: string;
}

export function OfferCard({ title, category, distance, city, date }: Props) {
  return (
    <Wrapper>
      <Image />

      <Description>
        <Title>{title}</Title>

        <Category>{category}</Category>

        <Label>{distance}</Label>

        <Label>{city}</Label>

        <Label>{date}</Label>
      </Description>
    </Wrapper>
  );
}
