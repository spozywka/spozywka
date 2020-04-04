import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paths } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Avatar = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url('/images/user.png');
  background-size: cover;
  border-radius: 50%;
`;

const Text = styled.span`
  font-weight: bold;
  display: flex !important;
  align-items: center;
`;

export function Navbar() {
  return (
    <Wrapper>
      <Link to={paths.homepage}>
        <Logo>Spozywka</Logo>
      </Link>

      <Link to={paths.profile}>
        <Button size="large">
          <Text>
            My Profile&nbsp;
            <Avatar />
          </Text>
        </Button>
      </Link>
    </Wrapper>
  );
}
