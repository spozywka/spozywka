import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { LoadWrapper } from '../../common/components/LoadWrapper';
import { Section } from '../../common/components/Section';
import { useRequest } from '../../common/hooks/useRequest';
import { loggedInUserId } from '../../constants';
import { orderService } from '../../data/order.service';
import { OrderList } from './components/OrderList';
import { Card } from '../../common/components/Card';
import styled from 'styled-components';
import { desktopBreakpoint } from '../../styles';

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
`;

const DetailsCard = styled.div<{ hasOrder: boolean }>`
  display: ${(props) => (props.hasOrder ? 'block' : 'none')};

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export function Profile() {
  const history = useHistory();
  const { orderId } = useParams();

  const { data, failure, pending } = useRequest(() => orderService.getOrders(loggedInUserId), []);

  const currentOrder = data?.find((o) => !!orderId && o.id === +orderId);

  return (
    <Section>
      <LoadWrapper pending={pending} failure={failure}>
        <Wrapper>
          <Card>
            <OrderList
              orders={data.map((o) => ({
                name: o.name,
                orderId: o.id,
                photoUrl: o.photo_url,
                onClick() {
                  history.push(`/profile/${o.id}`);
                },
              }))}
            />
          </Card>

          <DetailsCard hasOrder={!!currentOrder}></DetailsCard>
        </Wrapper>
      </LoadWrapper>
    </Section>
  );
}
