import React from 'react';
import styled from 'styled-components';
import { orange } from '../../../styles';

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${orange};
`;

export function Footer() {
  return (
    <Wrapper>
      <span>Copyright Ⓡ 2020. All rights reserved</span>
    </Wrapper>
  );
}
