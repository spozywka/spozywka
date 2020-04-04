import styled from 'styled-components';
import { desktopBreakpoint } from '../../styles';

export const TwoSideGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 1fr 300px;
  }
`;
