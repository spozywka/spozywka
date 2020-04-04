import { parse } from 'qs';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../../components/Navbar';
import { OfferListSearchParams } from '../../types/offerList';
import { List } from './components/List';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

const ListWrapper = styled.div`
  width: 50%;
  height: 100%;
  max-width: 800px;
  padding: 0 20px 20px 20px;
`;

const Map = styled.div`
  flex: 1 auto;
  height: 100%;
  background: url('/images/map.png');
  background-size: cover;
`;

export function OfferList() {
  const location = useLocation();
  const params = parse(location.search, { ignoreQueryPrefix: true }) as OfferListSearchParams;

  return (
    <Wrapper>
      <ListWrapper>
        <Navbar />

        <List />
      </ListWrapper>

      <Map />
    </Wrapper>
  );
}
