import { parse } from 'qs';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LoadWrapper } from '../../common/components/LoadWrapper';
import { Navbar } from '../../common/components/Navbar';
import { useRequest } from '../../common/hooks/useRequest';
import { offerService } from '../../data/offer.service';
import { OfferListSearchParams } from '../../types/offerList';
import { List } from './components/List';
import { Pins } from './components/Pins';
import { desktopBreakpoint } from '../../styles';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 100%;
  overflow: auto;
  padding: 10px;

  @media (min-width: ${desktopBreakpoint}) {
    width: 50%;
    padding: 20px;
  }
`;

const Map = styled.div`
  flex: 1 1 auto;
  height: 100%;
  background: url('/images/map.png');
  background-size: cover;
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export function OfferList() {
  const location = useLocation();
  const params = parse(location.search, { ignoreQueryPrefix: true }) as OfferListSearchParams;
  const { data: offers, pending, failure } = useRequest(() => offerService.getOffers(params), []);

  return (
    <Wrapper>
      <ListWrapper>
        <Navbar />

        <LoadWrapper pending={pending} failure={failure}>
          <List offers={offers} />
        </LoadWrapper>
      </ListWrapper>

      <Map>
        <Pins count={offers.length} />
      </Map>
    </Wrapper>
  );
}
