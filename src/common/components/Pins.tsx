import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Pin = styled.div<{ top: number; left: number }>`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: url('/images/pin.png');
  background-size: cover;

  ${(props) => `
    left: ${props.left}px;
    top: ${props.top}px;
  `}
`;

interface Props {
  count: number;
}

export function Pins({ count }: Props) {
  return (
    <Wrapper>
      {new Array(count).fill(null).map((_, i) => (
        <Pin key={i} top={Math.floor(Math.random() * 900)} left={Math.floor(Math.random() * 600)} />
      ))}
    </Wrapper>
  );
}
