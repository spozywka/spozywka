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

const Text = styled.span`
  font-weight: bold;
`;

export function Navbar() {
  return (
    <Wrapper>
      <Link to={paths.homepage}>
        <Logo>Spozywka</Logo>
      </Link>

      <Button size="large">
        <Text>Sign in / Register</Text>
      </Button>
    </Wrapper>
  );
}
