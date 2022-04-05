import styled from 'styled-components';

const StyledMoviesCards = styled.div`
  column-gap: .625rem;
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-items: center;

  padding-top: .0625rem;
  row-gap: .9375rem;

  @media (min-width: 37.5rem) {
    padding-top: 3.4375rem;
    row-gap: 1.5625rem;
  }

  @media (min-width: 37.5rem) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 43.75rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 50rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 53.125rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 56.25rem) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export default StyledMoviesCards;