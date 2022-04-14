import styled from 'styled-components';
import {
  smallScreen,
  mediumScreen,
  largeScreen,
  extraLargeScreen,
} from 'styles/break-points';

const PageMainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 1.6rem 0rem 1.6rem;

  @media (min-width: ${smallScreen}) {
    column-gap: 3rem;
    flex-direction: row;
    padding: 6rem 2rem 5rem 5rem;
    row-gap: 15rem;
  }

  @media (min-width: ${mediumScreen}) {
    padding: 6rem 2rem 5rem 5rem;
  }

  @media (min-width: ${largeScreen}) {
    padding: 6rem 2rem 5rem 5rem;
  }

  @media (min-width: ${extraLargeScreen}) {
    padding: 9rem 16rem 5rem 16rem;
  }
`;

export default PageMainContent;
