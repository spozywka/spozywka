import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 48px;
  height: 220px;
  width: 100%;
  background: url('/images/houses.svg');
  background-repeat: repeat-x;
`;

export function Houses() {
  return <Wrapper />;
}
