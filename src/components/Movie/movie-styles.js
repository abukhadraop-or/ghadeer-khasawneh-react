import styled from 'styled-components';

export const StyledMovie = styled.div`
  background-color: white;
  border: 1.008px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  display: flex;
  position: relative;
  height: 170px;
  justify-content: space-between;
  padding-top: 0px;
  width: 100%;

  @media (min-width: 37.5rem) {
    flex-direction: column;
    height: 360px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const StyledInformation = styled.div`
  background-color: white;
  left: -100px;
  width: -100px;

  @media (min-width: 37.5rem) {
    width: 100%;
  }
`;

export const StyledUpperText = styled.div`
  color: black;
  font-size: 15.008px;
  padding-top: 20px;

  @media (min-width: 37.5rem) {
    padding: 10px 10px 10px 10px;
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
  z-index: 10;
`;

export const StyledEllipseMenu = styled.img`
  display: none;

  @media (min-width: 37.5rem) {
    display: block;
    background-color: white;
    border-color: white;
    border-radius: 100%;
    height: 1.25rem;
    opacity: 0.5;
    position: absolute;
    right: 0.625rem;
    top: 0.625rem;
    width: 1.25rem;

    &:hover {
      background-color: #1e90ff;
    }
  }
`;

export const StyledDropDownList = styled.div`
  align-items: space-between;
  background-color: white;
  background-color: white;
  border-radius: 0.5rem;
  border-radius: 8px;
  border: 1.008px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  height: 8.125rem;
  justify-content: space-evenly;
  left: 1.25rem;
  position: absolute;
  top: 2.1875rem;
  width: 17rem;
  z-index: 1000;

  /* ${StyledMovie}:hover & {
    filter: blur(1.5rem);
  } ; */
`;

export const StyledDate = styled.div`
  color: gray;
  margin-top: 0.3125rem;
`;

export const StyledTitle = styled.h2``;
export const StyledMenuContent = styled.h1`
  font-size: .9rem;
  font-weight: normal;
  padding: 0rem 1rem 0.5rem 1rem;
`;
export const StyledBorderedTitle = styled.h1`
  border-bottom: 0.0625rem solid #e3e3e3;
  font-size: .9rem;
  font-weight: normal;
  padding: 0rem 1rem 0.5rem 1rem;
`;
export const StyledMenuTitle = styled.h1`
  font-size: .9rem;
  padding: 0rem 1rem 0.5rem 1rem;
`;
