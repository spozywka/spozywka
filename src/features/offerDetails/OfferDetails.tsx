import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../../common/components/Footer';
import { LoadWrapper } from '../../common/components/LoadWrapper';
import { Navbar } from '../../common/components/Navbar';
import { Section } from '../../common/components/Section';
import { useRequest } from '../../common/hooks/useRequest';
import { offerService } from '../../data/offer.service';
import { Description } from './components/Description';
import { Distinguish } from './components/Distinguish';
import { Gallery } from './components/Gallery';
import { OfferName } from './components/OfferName';
import { PersonDetails } from './components/PersonDetails';
import { Button } from 'antd';
import { desktopBreakpoint } from '../../styles';

const ContentSection = styled(Section)`
  min-height: calc(100vh - 40px);
`;

const Content = styled.div`
  width: 100%;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 1fr 300px;
  }
`;

const OrderButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  height: 60px;
`;

const DescriptionWrapper = styled.div`
  order: 1;

  @media (min-width: ${desktopBreakpoint}) {
    order: 0;
  }
`;

const VendorWrapper = styled.div`
  order: 2;

  @media (min-width: ${desktopBreakpoint}) {
    order: 0;
  }
`;

const DistinguishWrapper = styled.div`
  order: 3;

  @media (min-width: ${desktopBreakpoint}) {
    order: 0;
  }
`;

export function OfferDetails() {
  const { id } = useParams<{ id?: string }>();
  const { data: offer, pending, failure } = useRequest(() => {
    if (!id || isNaN(+id)) {
      return Promise.reject(null);
    }

    return offerService.getById(+id);
  }, null);

  return (
    <>
      <ContentSection>
        <Navbar />
        <LoadWrapper pending={pending} failure={failure}>
          {!!offer ? (
            <Content>
              <Gallery photoUrl={offer.photo_url} />

              <VendorWrapper>
                <PersonDetails city={offer.city} />

                <OrderButton type="primary" size="large">
                  Order
                </OrderButton>
              </VendorWrapper>

              <DescriptionWrapper>
                <OfferName category={offer.category} offerId={offer.id} title={offer.title} />

                <Description description={offer.description} />
              </DescriptionWrapper>

              <DistinguishWrapper>
                <Distinguish />
              </DistinguishWrapper>
            </Content>
          ) : null}
        </LoadWrapper>
      </ContentSection>

      <Footer />
    </>
  );
}
