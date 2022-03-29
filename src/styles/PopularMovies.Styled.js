import styled from "styled-components";

export const StyledPopularMovies = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 263px;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-top: 90px;
  }
  & h1 {
    font-weight: 600;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 25px;

    margin-top: 1px;
  }
  & button {
    text-align: center;
    border-radius: 20px;
    background: #1e90ff;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 19.2px;
    font-weight: 600;
    height: 44px;
    color: white;

    outline: none;

    border: #f0f0f0;
  }

  & .enabledButton:hover {
    background: rgb(3, 37, 65);
  }
  & .disabledButton {
    background-color: #f0f0f0;
    color: gray;
  }
`;

export const StyledMenu = styled.div`
  background-color: white;

  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  width: 87%;

  height: 20px;

  padding: 15px;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;

  & h1 {
    font-weight: bold;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
  }
`;
