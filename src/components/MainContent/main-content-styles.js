import styled from 'styled-components';

const PageMainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 1.6rem 0rem 1.6rem;

  @media (min-width: 37.5rem) {
    column-gap: 3rem;
    flex-direction: row;
    padding: 6rem 2rem 5rem 5rem;
    row-gap: 15rem;
  }

  @media (min-width: 43.75rem) {
    padding: 6rem 2rem 5rem 5rem;
  }

  @media (min-width: 50rem) {
    padding: 6rem 2rem 5rem 5rem;
  }

  @media (min-width: 56.25rem) {
    padding: 6rem 2rem 5rem 5rem;
  }

  @media (min-width: 81.25rem) {
    padding: 9rem 16rem 5rem 16rem;
  }
`;

export default PageMainContent;
