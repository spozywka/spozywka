import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

interface Props {
  photoUrl: string;
}

export function Gallery(props: Props) {
  return <Wrapper></Wrapper>;
}
