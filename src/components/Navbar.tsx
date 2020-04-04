import styled from 'styled-components';
import React from 'react';
import { Button } from 'antd';

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
      <Logo>Spozywka</Logo>

      <Button size="large">
        <Text>Sign in / Register</Text>
      </Button>
    </Wrapper>
  );
}
