import styled from 'styled-components';

const MoviesCards = styled.div`
  column-gap: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: .9rem 0rem 0rem 0rem;
  row-gap: 0.9rem;

  @media (min-width: 37.5rem) {
    display: grid;
    flex: 2;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0.0625rem 0rem 0rem 0rem;
    row-gap: 5rem;
  }

  @media (min-width: 43.75rem) {
    flex: 2;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 50rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 56.25rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    flex: 2.3;
  }

  @media (min-width: 81.25rem) {
    flex: 3.2;
    row-gap: 1.3rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export default MoviesCards;
