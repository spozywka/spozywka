import styled from 'styled-components';
import { Card } from '../../../common/components/Card';
import React from 'react';
import { Icon } from 'antd';

const Wrapper = styled(Card)`
  width: 100%;
  padding-bottom: 20px;
`;

const Background = styled.div`
  background: url('/images/map.png');
  background-position: center center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const AddressTab = styled(Card)`
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  margin: 20px;
  background: white;
`;

const Avatar = styled.div`
  border: 10px white solid;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: url('/images/seller.png');
  background-size: cover;
  margin-bottom: -50px;
`;

const Name = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

const Phone = styled.div`
  font-size: 24px;
  cursor: pointer;
  text-align: center;
`;

interface Props {
  city?: string;
}

export function PersonDetails(props: Props) {
  return (
    <Wrapper>
      <Background>
        <AddressTab>{props.city}</AddressTab>

        <Avatar />
      </Background>

      <Name>Good Farming</Name>

      <Phone>
        Show Number <Icon type="phone" />
      </Phone>
    </Wrapper>
  );
}
