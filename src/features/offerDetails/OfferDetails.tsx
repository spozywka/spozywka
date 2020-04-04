import React from 'react';
import styled from 'styled-components';
import { Section } from '../../common/components/Section';
import { Navbar } from '../../common/components/Navbar';
import { PersonDetails } from './components/PersonDetails';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  flex: none;
`;

export function OfferDetails() {
  return (
    <Section>
      <Navbar />

      <Wrapper>
        <Content>Content</Content>

        <Side>
          <PersonDetails city="Bangadesh" />
        </Side>
      </Wrapper>
    </Section>
  );
}
