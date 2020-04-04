import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../common/components/Card';
import { DateFormat } from '../../../common/components/DateFormat';
import { darkGrey, lightGrey } from '../../../styles';

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px;
  transition: transform 0.2s ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
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

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface Props {
  title?: string;
  category?: string;
  distance?: string;
  city?: string;
  date?: string;
  photoUrl?: string;
}

export function OfferCard({ title, category, distance, city, date, photoUrl }: Props) {
  return (
    <Wrapper>
      <Image src={photoUrl} />

      <Description>
        <Title>{title}</Title>

        <Category>{category}</Category>

        <Label>{distance}</Label>

        <Row>
          <Label>{city}</Label>

          <Label>
            <DateFormat date={date} />
          </Label>
        </Row>
      </Description>
    </Wrapper>
  );
}
