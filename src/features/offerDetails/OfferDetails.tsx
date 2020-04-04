import { Button } from 'antd';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../../common/components/Footer';
import { LoadWrapper } from '../../common/components/LoadWrapper';
import { Navbar } from '../../common/components/Navbar';
import { PersonDetailsContainer } from '../../common/containers/PersonDetailsContainer';
import { Section } from '../../common/components/Section';
import { TwoSideGrid } from '../../common/components/TwoSideGrid';
import { useRequest } from '../../common/hooks/useRequest';
import { offerService } from '../../data/offer.service';
import { desktopBreakpoint } from '../../styles';
import { Description } from './components/Description';
import { Distinguish } from './components/Distinguish';
import { Gallery } from './components/Gallery';
import { OfferName } from './components/OfferName';

const ContentSection = styled(Section)`
  min-height: calc(100vh - 100px);
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
            <TwoSideGrid>
              <Gallery photoUrl={offer.photo_url} />

              <VendorWrapper>
                <PersonDetailsContainer userId={offer.user_id} city={offer.city} />

                <Link to={`${id}/checkout`}>
                  <OrderButton type="primary" size="large">
                    Order
                  </OrderButton>
                </Link>
              </VendorWrapper>

              <DescriptionWrapper>
                <OfferName category={offer.category} offerId={offer.id} title={offer.title} />

                <Description
                  description={`All our food is 100% real food, as defined by the Real Superfoods Campaign; that is, it is made only from organic flour, water, salt, with or without added yeast, slowly-fermented to allow for full flavour and nutrition. We make mainly genuine sourdough, and yeasted bread to order.  
                  
                  Has been baking bread the way it ought to be from the beginning, and we still believe in our phenomenal bread-making process. We still believe in using pure, simple ingredients.  We still bake everything from scratch.  And we still fresh mill our 100% whole grain flour every day.  Baking from scratch was the norm for our parents, grandparents, great-grandparents, and so forth. They were concerned about food tasting great and nourishing their family’s bodies.
                `}
                />
              </DescriptionWrapper>

              <DistinguishWrapper>
                <Distinguish />
              </DistinguishWrapper>
            </TwoSideGrid>
          ) : null}
        </LoadWrapper>
      </ContentSection>

      <Footer />
    </>
  );
}
