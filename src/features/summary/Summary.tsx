import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../common/components/Footer';
import { Navbar } from '../../common/components/Navbar';
import { Section } from '../../common/components/Section';
import { darkGrey, lightGrey } from '../../styles';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const ContentSection = styled(Section)`
  min-height: calc(100vh - 100px);
`;

const Cart = styled.div`
  width: 326px;
  height: 300px;
  background: url('/images/cart.svg');
  background-size: cover;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${darkGrey};
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: ${lightGrey};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export function Summary() {
  return (
    <>
      <ContentSection>
        <Navbar />

        <Cart />

        <Title>Great! You have just placed an order.</Title>

        <SubTitle>Thank you for supporting local business.</SubTitle>

        <ButtonWrapper>
          <Link to={paths.homepage}>
            <Button size="large">Go back to homepage</Button>
          </Link>
          &nbsp; or &nbsp;
          <Link to={paths.profile}>
            <Button type="primary" size="large">
              Check your order
            </Button>
          </Link>
        </ButtonWrapper>
      </ContentSection>

      <Footer />
    </>
  );
}
