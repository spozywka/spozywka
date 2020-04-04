import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { desktopBreakpoint } from '../../../styles';

const Overlay = styled.div`
  width: 180px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in;
  opacity: 0;
  border-radius: 4px;
  user-select: none;
`;

const Wrapper = styled.div<{ photoUrl?: string }>`
  width: 100%;
  height: 250px;
  background: url(${(props) => props.photoUrl});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 4px 0 0;
  cursor: pointer;

  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }

  @media (min-width: ${desktopBreakpoint}) {
    height: 450px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

interface Props {
  photoUrl?: string;
}

export function Gallery(props: Props) {
  return (
    <Wrapper photoUrl={props.photoUrl}>
      <Overlay>
        <Text>
          <Icon type="search" />
          <span>Show gallery</span>
        </Text>
      </Overlay>
    </Wrapper>
  );
}
