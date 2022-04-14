import styled from 'styled-components';
import {
  smallScreen,
  mediumScreen,
  largeScreen,
  extraLargeScreen,
} from 'styles/break-points';

const MoviesCards = styled.div`
  column-gap: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0.9rem 0rem 0rem 0rem;
  row-gap: 0.9rem;

  @media (min-width: ${smallScreen}) {
    display: grid;
    flex: 2;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0.0625rem 0rem 0rem 0rem;
    row-gap: 5rem;
  }

  @media (min-width: ${mediumScreen}) {
    flex: 2;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${largeScreen}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    flex: 2.3;
  }

  @media (min-width: ${extraLargeScreen}) {
    flex: 3.2;
    row-gap: 1.3rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export default MoviesCards;
