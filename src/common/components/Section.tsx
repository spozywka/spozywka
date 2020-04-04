import styled from 'styled-components';
import { desktopBreakpoint } from '../../styles';

export const Section = styled.section`
  max-width: 1360px;
  padding: 10px;
  margin: 0 auto;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 30px;
  }
`;
