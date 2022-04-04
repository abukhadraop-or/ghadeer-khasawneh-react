import styled from 'styled-components';

export const StyledHeader = styled.nav`
  display: none;

  @media (min-width: 600px) {
    background: #032541;
    display: flex;
    height: 3.938rem;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
`;
export const Styledlist = styled.ul`
  align-items: center;
  background: #032541;
  display: flex;
  height: 100%;
  justify-content: space-between;
  list-style-type: none;
  left: -0.438rem;
  position: relative;
`;
export const StyledImage = styled.img`
  padding: 1.875rem;
  width: 9.625rem;
`;

export const StyledItem = styled.li`
  color: #f1f1f1;
  cursor: pointer;
  margin-right: 1.25rem;
`;

export const StyledIcons = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  right: 0.625rem;
  width: 20.625rem;
`;
export const StyledLanguageSymbol = styled.div`
  align-content: center;
  align-items: center;
  border: 0.063rem solid #fff;
  border-radius: 0.188rem;
  color: #fff;
  display: flex;
  font-size: 0.9em;
  height: 1.625rem;
  justify-content: center;
  padding: 0.188rem 0.313rem;
  text-transform: uppercase;
  transition: linear 0.1s;
  width: 1.563rem;
`;

export const StyledPlusSign = styled.img`
  width: 1.25rem;
`;

export const StyledSerachIcon = styled.img`
  width: 1.875rem;
`;
