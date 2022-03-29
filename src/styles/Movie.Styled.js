import styled from "styled-components";

export const StyledMovie = styled.div`
  display: flex;

  background-color: white;

  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  @media (min-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    height: 170px;
    width: 100%;

    padding-top: 0px;
    justify-content: space-between;

    border: 1px solid #e3e3e3;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  }
`;

export const Information = styled.div`
  background-color: white;
  @media (max-width: 600px) {
    width: 600px;
    left: -100px;
  }
`;

export const UpperText = styled.div`
  color: black;
  padding-top: 20px;
  font-weight: 600;
  font-size: 15px;
  font-family: "Source Sans Pro", sans-serif;

  @media (min-width: 600px) {
    padding: 10px 10px 10px 10px;
  }

  & h3 {
    color: gray;
    margin-top: 5px;
  }
`;

export const LowerText = styled.p`
  margin-top: 20px;

  color: black;
  font-family: "Source Sans Pro", sans-serif;

  overflow: hidden;

  @media (min-width: 600px) {
    display: none;
  }
`;
