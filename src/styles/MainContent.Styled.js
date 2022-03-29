import styled from "styled-components";

export const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5vw 0px 5vw;

  gap: 2vw;

  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    width: auto;
    padding: 90px 15vw 0px 15vw;
  }
`;
