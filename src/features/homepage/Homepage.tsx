import React, { useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../../common/components/Footer';
import { Navbar } from '../../common/components/Navbar';
import { Section } from '../../common/components/Section';
import { defaultOfferListParams } from '../../constants';
import { OfferListSearchParams } from '../../types/offerList';
import { Hero } from './components/Hero';
import { Houses } from './components/Houses';
import { HowItWorks } from './components/HowItWorks';
import { SearchBox } from './components/SearchBox';

const CITITES = ['Warsaw', 'Cracow', 'Wroclaw', 'Lodz', 'Szczecin'];

const CATEGORIES = ['Food', 'Drinks', 'Plants'];

const Background = styled.div`
  background: radial-gradient(
    42.71% 42.71% at 51.17% 60.94%,
    rgba(178, 251, 185, 0.51) 2.85%,
    rgba(238, 255, 245, 0.33) 78.54%
  );
`;

export function Homepage() {
  const [state, setState] = useState<OfferListSearchParams>(defaultOfferListParams);

  return (
    <>
      <Background>
        <Section>
          <Navbar />

          <Hero />

          <SearchBox
            params={state}
            cities={CITITES}
            categories={CATEGORIES}
            onChange={(newState) => setState(newState)}
          />
        </Section>

        <Houses />
      </Background>

      <HowItWorks />

      <Footer />
    </>
  );
}
