import styled from 'styled-components';
import {
  smallScreen,
} from 'styles/break-points';

const Image = styled.img`
  border-radius: 0.625rem;
  margin-right: 0.625rem;
  width: 6rem;

  @media (min-width: ${smallScreen}) {
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    width: 100%;
  }
`;

export default Image;
