import styled from "styled-components";

export const StyledImageAndMenu = styled.div``;

export const StyledImage = styled.img`
  width: 25%;

  margin-right: 10px;

  border-radius: 10px;

  @media (min-width: 600px) {
    width: 100%;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }
`;
