import styled from 'styled-components';

export const StyledMovie = styled.div`
  background-color: white;
  border: .063rem solid #e3e3e3;
  border-radius: .5rem;
  box-shadow: 0 .125rem .5rem rgb(0 0 0 / 10%);
  display: flex;
  position: relative;
  height: 10.625rem;
  justify-content: space-between;
  padding-top: 0rem;
  width: 100%;

  @media (min-width: 37.5rem) {
    flex-direction: column;
    height: 22.5rem;
    justify-content: space-between;
    width: 100%;
  }
`;

export const StyledInformation = styled.div`
  background-color: white;
  left: -6.25rem;
  width: -6.25rem;

  @media (min-width: 37.5rem) {
    width: 100%;
  }
`;

export const StyledUpperText = styled.div`
  color: black;
  font-size: .938rem;
  padding-top: 1.25rem;

  @media (min-width: 37.5rem) {
    padding: .625rem .625rem .625rem .625rem;
  }
`;

export const StyledLowerText = styled.p`
  color: black;
  margin-top: 1.25rem;
  overflow: hidden;
  @media (min-width: 37.5rem) {
    display: none;
  }
`;
export const StyledPageSection = styled.div`
  bottom: 0rem;
  left: 0rem;
  position: fixed;
  right: 0rem;
  top: 0rem;
  z-index: 125;
`;

export const StyledEllipseMenu = styled.img`
  display: none;

  @media (min-width: 37.5rem) {
    border-radius: 100%;
    cursor: pointer;
    display: block;
    filter: invert(90);
    height: 1.5rem;
    opacity: 0.8;
    position: absolute;
    right: 0.625rem;
    top: 0.625rem;
    width: 1.8rem;

    &:hover {
      filter: invert(0.5) sepia(2) hue-rotate(120deg);
      opacity: 1
    }
  }
`;

export const StyledDropDownList = styled.div`
  align-items: space-between;
  background-color: white;
  background-color: white;
  border-radius: 0.5rem;
  border-radius: .5rem;
  border: .063rem solid #e3e3e3;
  box-shadow: 0 .125rem .5rem rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  height: 8.125rem;
  justify-content: space-evenly;
  left: 1.25rem;
  position: absolute;
  top: 2.1875rem;
  width: 17rem;
  z-index: 150;
`;

export const StyledDate = styled.div`
  color: gray;
  margin-top: 0.3125rem;
`;

export const StyledTitle = styled.h2``;
export const StyledMenuContent = styled.h1`
  font-size: 0.9rem;
  font-weight: normal;
  padding: 0rem 1rem 0.5rem 1rem;
`;
export const StyledBorderedTitle = styled.h1`
  border-bottom: 0.0625rem solid #e3e3e3;
  font-size: 0.9rem;
  font-weight: normal;
  padding: 0rem 1rem 0.5rem 1rem;
`;
export const StyledMenuTitle = styled.h1`
  font-size: 0.9rem;
  padding: 0rem 1rem 0.5rem 1rem;
`;
export const StyledEmptyDiv = styled.div`
  backdrop-filter: blur(20px);
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 100;
`;

export const StyledLoginArrow = styled.div`
position: absolute;
width: 15px;

`;
