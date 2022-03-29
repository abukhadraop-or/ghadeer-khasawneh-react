import styled from "styled-components";

export const StyledMoviesCards = styled.div`
  display: flex;
  flex: 3;

  flex-direction: column;

  row-gap: 25px;
  column-gap: 10px;
  padding-top: 55px;

  justify-items: center;

  @media (max-width: 600px) {
    row-gap: 15px;
    padding-top: 1px;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
