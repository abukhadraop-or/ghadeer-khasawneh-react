import styled from "styled-components";

export const StyledFooter = styled.div`
  background: rgb(3, 37, 65);
  @media (max-width: 600px) {
    display: none;
  }
  color: rgb(255, 255, 255);
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 17.28px;
  font-weight: 400;
  height: 300px;
  margin-top: 50px;
  & .container {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    width: 40%;
    margin-left: 600px;
    align-items: center;
    height: 80%;
    font-size: 20px;
  }
  & img {
    width: 120px;
    margin-top: -80px;
  }
`;
