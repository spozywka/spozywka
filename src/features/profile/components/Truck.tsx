import React from 'react';
import styled from 'styled-components';

const Image = styled.div<{ top: number; left: number }>`
  position: absolute;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: url('/images/truck.png');
  background-size: cover;

  ${(props) => `
    left: ${props.left}px;
    top: ${props.top}px;
  `}
`;

export function Truck() {
  return <Image top={Math.floor(Math.random() * 900)} left={Math.floor(Math.random() * 600)} />;
}
