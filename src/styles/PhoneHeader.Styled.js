import styled from "styled-components";

export const StyledPhoneHeader = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background: rgb(3, 37, 65);
  z-index: 1000;

  & svg {
    color: white;
    font-size: 20px;

    padding: 20px;
  }
  & section {
    display: flex;
    justify-content: flex-end;
    width: 90px;
    padding: 20px;
    right: 5;
  }
  & section .searchImage {
    padding: 10px;
    filter: invert(100%);
  }

  & article {
    display: flex;
    justify-content: space-between;
    width: 220px;
    align-items: center;
  }

  @media (max-width: 694px) {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
