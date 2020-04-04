import React from 'react';
import styled from 'styled-components';
import { darkGrey } from '../../../styles';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${darkGrey};
`;

export function OrderDetails() {
  return (
    <Wrapper>
      <Details>
        <Title>Details</Title>
      </Details>
    </Wrapper>
  );
}
