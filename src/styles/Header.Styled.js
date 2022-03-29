import styled from "styled-components";

export const StyledHeader = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 63px;
  background: rgb(3, 37, 65);
  display: flex;
  justify-content: space-around;
  z-index: 1000;

  @media (max-width: 694px) {
    display: none;
  }
`;
export const Styledlist = styled.ul`
  list-style-type: none;
  background: rgb(3, 37, 65);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: -7px;

  & img {
    padding: 30px;
    width: 154px;
  }
`;

export const StyledItem = styled.li`
  margin-right: 20px;
  font-size: 20px;
  color: #f1f1f1;
  cursor: pointer;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const StyledIcons = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 330px;
  right: 10px;

  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;

  & section {
    width: 25px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 3px 5px;
    transition: linear 0.1s;
    color: #fff;
    font-weight: 600;
    font-size: 0.9em;
    text-transform: uppercase;
  }
`;
