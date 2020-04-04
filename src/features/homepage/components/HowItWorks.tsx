import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Section } from '../../../common/components/Section';
import { darkGrey, desktopBreakpoint, lightGrey } from '../../../styles';

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  color: ${lightGrey};
  margin-bottom: 48px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    flex: none;
    display: flex;
    flex-direction: column;
  }
`;

const SubTitle = styled.h3`
  font-size: 24px;
  color: ${darkGrey};
`;

const Video = styled.div`
  background: url('/images/video.png');
  width: 658px;
  height: 441px;
  background-size: cover;
`;

const Opinion = styled.div`
  color: ${lightGrey};
  font-size: 18px;
  padding: 0 20px 0 40px;
  margin: 20px 0 40px 0;
`;

const LearnMore = styled(Button)`
  width: 100%;

  @media (min-width: ${desktopBreakpoint}) {
    width: 200px;
  }
`;

export function HowItWorks() {
  return (
    <Wrapper>
      <Title>How our system can work for you?</Title>

      <Content>
        <Left>
          <SubTitle>Partnership for Long-term success</SubTitle>

          <Opinion>
            "He has become a much more quiet, more mature and thoughtful individual during his
            imprisonment… and does not contemplate acting against existing authority."
          </Opinion>

          <LearnMore type="primary" size="large">
            Learn more
          </LearnMore>
        </Left>

        <Right>
          <Video />
        </Right>
      </Content>
    </Wrapper>
  );
}
