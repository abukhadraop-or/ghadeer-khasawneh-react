import styled from 'styled-components';

const StyledFooter = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
    height: 18.75rem;
    margin-top: 6.25rem;
    background: #032541;
    color: #ffffff;
    font-size: 1.08rem;
    font-weight: 400;
  }
`;
export const StyledContainer = styled.div`
  @media (min-width: 600px) {
    align-items: flex-start;
    display: flex;
    font-size: 1.25rem;
    justify-content: space-evenly;
    margin-left: 500px;
    padding-top: 100px;
    width: 50%;
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
  width: 9.375rem;
`;

export const StyledImage = styled.img`
  margin-top: -2.188rem;
  padding-right: 0rem;
  width: 7.5rem;
`;
export const StyledTitle = styled.div`
  font-size: 1.26rem;
  font-weight: 700;
  padding-bottom: 0.625rem;
`;
export default StyledFooter;
