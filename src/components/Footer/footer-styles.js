import styled from 'styled-components';

const StyledFooter = styled.div`
  padding-top: 1.25rem;
  @media (min-width: 37.5rem) {
    background: #032541;
    color: #ffffff;
    font-size: 1.08rem;
    font-weight: 400;
    height: 18.75rem;
    margin-top: 6.25rem;
    padding-top: 0rem;
  }
`;
export const StyledContainer = styled.div`
  align-items: space-between;
  background: #032541;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem;

  @media (min-width: 37.5rem) {
    align-items: flex-start;
    flex-direction: row;
    font-size: 1.25rem;
    font-weight: normal;
    gap: 1.5625rem;
    justify-content: space-evenly;
    margin: 0 auto;
    padding-top: 4.375rem;
    width: fit-content;
  }
`;

export const StyledUserSection = styled.div`
  background-color: white;
  border-bottom-style: solid;
  border-radius: 0.313rem;
  color: rgb(1, 180, 228);
  cursor: pointer;
  font-size: 1.17rem;
  font-weight: 700;
  height: 2rem;
  margin-top: 1.875rem;
  padding-right: 0.313rem;
  padding-top: 0.75rem;
  text-align: center;
  width: 13rem;
`;

export const StyledImage = styled.img`
  display: none;
  @media (min-width: 37.5rem) {
    display: block;
    margin-top: -2.188rem;
    padding-left: 100px;
    width: 7.5rem;
  }
`;
export const StyledTitle = styled.div`
  font-size: 1.26rem;
  font-weight: 700;
  padding-bottom: 0.625rem;
`;
export const StyledElement = styled.h1`
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  padding: .1875rem;
`;

export default StyledFooter;
