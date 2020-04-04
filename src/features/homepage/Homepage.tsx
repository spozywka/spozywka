import React, { useState } from 'react';
import { Section } from '../../components/Section';
import { defaultOfferListParams } from '../../constants';
import { OfferListSearchParams } from '../../types/offerList';
import { Hero } from './components/Hero';
import { Navbar } from '../../components/Navbar';
import { SearchBox } from './components/SearchBox';

const CITITES = ['Warsaw', 'Cracow', 'Wroclaw', 'Lodz', 'Szczecin'];

const CATEGORIES = ['Food', 'Drinks', 'Plants'];

export function Homepage() {
  const [state, setState] = useState<OfferListSearchParams>(defaultOfferListParams);

  return (
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
  );
}
