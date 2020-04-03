import React, { useState } from 'react';
import { Section } from '../../components/Section';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { SearchBox } from './components/SearchBox';

const CITITES = ['Warsaw', 'Cracow', 'Wroclaw', 'Lodz', 'Szczecin'];

const CATEGORIES = ['Food', 'Drinks', 'Alco', 'Sex'];

export function Homepage() {
  const [state, setState] = useState({
    who: 'consumer' as 'consumer' | 'vendor',
    city: 'Warsaw',
    category: 'Food',
  });

  return (
    <Section>
      <Navbar />

      <Hero />

      <SearchBox
        {...state}
        cities={CITITES}
        categories={CATEGORIES}
        onChange={(who, city, category) => setState({ who, city, category })}
      />
    </Section>
  );
}
