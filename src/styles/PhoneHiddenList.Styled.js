import styled from "styled-components";

export const HiddenList = styled.ul`
  display: flex;
  background-color: rgb(3, 37, 65);
  display: ${(props) => (props.isShown ? "block" : "none")};
  position: fixed;

  z-index: 999;
  margin-top: 60px;
  opacity: 0.9;
  width: 350px;
  height: 1000px;
  color: white;
`;
