import React from 'react';
import styled from 'styled-components';
import { darkGrey, lightGrey } from '../../../styles';

const Wrapper = styled.div`
  width: 100%;
  display: 'flex';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${darkGrey};
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: ${lightGrey};
  text-align: center;
`;


export function Hero() {
  return (
    <Wrapper>
      <Title>Explore your neighbourhood</Title>
      <SubTitle>and help your local business</SubTitle>
    </Wrapper>
  );
}
