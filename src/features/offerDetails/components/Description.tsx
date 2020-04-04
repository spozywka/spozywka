import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../common/components/Card';
import { lightGrey } from '../../../styles';

const Wrapper = styled(Card)`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  white-space: pre-line;
  color: ${lightGrey};
`;

interface Props {
  description?: string;
}

export function Description({ description }: Props) {
  return <Wrapper>{description}</Wrapper>;
}
