import styled from 'styled-components';
import { smallScreen } from 'styles/break-points';

export const PageHeader = styled.nav`
  display: none;

  @media (min-width: ${smallScreen}) {
    background: #032541;
    display: flex;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
`;

export const List = styled.h1`
  align-items: center;
  background: #032541;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const Image = styled.img`
  padding: 1.875rem;
  width: 13rem;
`;

export const Item = styled.h1`
  color: #f1f1f1;
  cursor: pointer;
  padding-right: 1.25rem;
`;

export const Icons = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const LanguageSymbol = styled.div`
  align-content: center;
  align-items: center;
  border-radius: 0.188rem;
  border: 0.063rem solid #fff;
  color: #fff;
  display: flex;
  font-size: 0.9rem;
  height: 1.625rem;
  justify-content: center;
  transition: linear 0.1s;
  width: 1.563rem;
`;

export const PlusSign = styled.img`
  padding-right: 1.8rem;
  width: 3.2rem;
`;

export const HeaderSearchIcon = styled.img`
  padding-left: 2rem;
  width: 3.8rem;
`;

export const LoginText = styled.h1`
  padding-left: 1.8rem;
  padding-right: 1.8rem;
`;
