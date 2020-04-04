import { Button } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../../common/components/Footer';
import { LoadWrapper } from '../../common/components/LoadWrapper';
import { Navbar } from '../../common/components/Navbar';
import { Section } from '../../common/components/Section';
import { TwoSideGrid } from '../../common/components/TwoSideGrid';
import { PersonDetailsContainer } from '../../common/containers/PersonDetailsContainer';
import { useRequest } from '../../common/hooks/useRequest';
import { offerService } from '../../data/offer.service';
import { productService } from '../../data/product.service';
import { desktopBreakpoint, lightGrey } from '../../styles';
import { Address } from './components/Address';
import { ProductList } from './components/ProductList';

const ContentSection = styled(Section)`
  min-height: calc(100vh - 100px);
`;

const Thanks = styled.h4`
  color: ${lightGrey};
  font-size: 14px;
  font-weight: bold;
  text-align: center;

  @media (min-width: ${desktopBreakpoint}) {
    text-align: left;
  }
`;

const OrderButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  height: 60px;
`;

export function Checkout() {
  const { id } = useParams<{ id?: string }>();

  const { data: offer, ...offerMeta } = useRequest(() => {
    if (!id || isNaN(+id)) {
      return Promise.reject(null);
    }

    return offerService.getById(+id);
  }, null);

  const { data: products, ...productsMeta } = useRequest(() => {
    if (!id || isNaN(+id)) {
      return Promise.reject(null);
    }

    return productService.getProducts({ offerId: +id });
  }, null);

  const [qunatities, setQuantities] = useState<Record<number, number>>({});
  const total = Object.entries(qunatities).reduce(
    (acc, [id, qty]) => acc + (products?.find((p) => p.id === +id)?.price || 0) * qty,
    0
  );

  return (
    <>
      <ContentSection>
        <Navbar />

        <LoadWrapper
          pending={offerMeta.pending || productsMeta.pending}
          failure={offerMeta.failure || productsMeta.failure}
        >
          {!!offer && !!products && (
            <TwoSideGrid>
              <div>
                <Address />

                <ProductList
                  items={products.map((p) => ({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    qty: p.id ? qunatities[p.id] || 0 : 0,
                  }))}
                  onChange={(id, qty) => {
                    if (typeof id !== 'number' || typeof qty !== 'number') {
                      return;
                    }

                    setQuantities({
                      ...qunatities,
                      [id]: qty,
                    });
                  }}
                />
              </div>

              <PersonDetailsContainer userId={offer.user_id} city={offer.city} />
              <Thanks>Thank you for supporting local business.</Thanks>

              <OrderButton type="primary" size="large" disabled={total < 1}>
                {total > 0 ? `Confirm and pay $${total}` : 'Please pick an item'}
              </OrderButton>
            </TwoSideGrid>
          )}
        </LoadWrapper>
      </ContentSection>

      <Footer />
    </>
  );
}
