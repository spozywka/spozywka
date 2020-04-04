import React from 'react';
import styled from 'styled-components';
import { darkGrey } from '../../../styles';

const Title = styled.h2`
  font-size: 24px;
  color: ${darkGrey};
`;

const AddressLine = styled.div`
  font-size: 18px;
  color: ${darkGrey};
`;

export function Address() {
  return (
    <div>
      <Title>Order to:</Title>

      <AddressLine>John Doe</AddressLine>
      <AddressLine>24 Klopp Street Area</AddressLine>
      <AddressLine>67-345</AddressLine>
    </div>
  );
}
