import styled from "styled-components";

export const NewComp = styled.div`
  background-color: white;

  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  padding: 15px;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  width: 88%;
  height: ${(props) => (props.listIsShown ? "110px" : "20px")};
  @media (max-width: 600px) {
    width: 87%;
    margin-left: 14px;
  }
  & form {
    border-top: 1px solid #e3e3e3;
    width: 100%;
    margin-top: 15px;
  }
  & form label {
    padding-top: 8px;
    margin-top: 50px;
    font-size: 15px;
    font-weight: normal;
    color: black;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  & form select {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    border-radius: 5px;
    background: #e0e0e0;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    height: 44px;
    padding-top: 5px;
    height: 35px;
  }
`;
export const DropDownList = styled.div``;

export const FilterList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & img {
    position: absolute;

    right: 9px;
    top: 19px;
    @media (max-width: 600px) {
      right: 22px;
      top: 19px;
    }
  }
`;
export const WhereToWatch = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & img {
    position: absolute;

    right: 9px;
    top: 19px;
    @media (max-width: 600px) {
      right: 22px;
      top: 19px;
    }
  }
`;
