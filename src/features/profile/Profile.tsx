import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../common/components/Card';
import { LoadWrapper } from '../../common/components/LoadWrapper';
import { Navbar } from '../../common/components/Navbar';
import { useRequest } from '../../common/hooks/useRequest';
import { loggedInUserId } from '../../constants';
import { orderService } from '../../data/order.service';
import { desktopBreakpoint } from '../../styles';
import { OrderDetails } from './components/OrderDetails';
import { OrderList } from './components/OrderList';

const NavbarWrapper = styled.div`
  padding: 10px 10px 0 10px;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 20px 20px 0 20px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;

  @media (min-width: ${desktopBreakpoint}) {
    height: calc(100vh - 60px);
    grid-template-columns: 400px 1fr;
    grid-gap: 20px;
    padding: 20px;
  }
`;

const ListCard = styled(Card)<{ hasOrder: boolean }>`
  padding: 10px;
  display: ${(props) => (props.hasOrder ? 'none' : 'block')};

  @media (min-width: ${desktopBreakpoint}) {
    padding: 20px;
    display: block;
  }
`;

const DetailsCard = styled(Card)<{ hasOrder: boolean }>`
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
    <>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>

      <LoadWrapper pending={pending} failure={failure}>
        <Wrapper>
          <ListCard hasOrder={!!currentOrder}>
            <OrderList
              orders={data.map((o) => ({
                name: o.offer?.title,
                orderId: o.id,
                photoUrl: o.offer?.photo_url,
                onClick() {
                  history.push(`/profile/${o.id}`);
                },
              }))}
            />
          </ListCard>

          <DetailsCard hasOrder={!!currentOrder}>
            <OrderDetails />
          </DetailsCard>
        </Wrapper>
      </LoadWrapper>
    </>
  );
}
