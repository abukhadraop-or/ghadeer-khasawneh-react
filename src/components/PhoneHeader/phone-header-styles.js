import styled from 'styled-components';
import {
  smallScreen,
} from 'styles/break-points';

const PagePhoneHeader = styled.nav`
  align-items: center;
  background: #032541;
  display: block;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  & svg {
    color: white;
    font-size: 3rem;
    padding-left: 1.5rem;
  }

  @media (min-width: ${smallScreen}) {
    display: none;
  }
`;

export const LeftSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.25rem 0.2rem 0rem;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem 1.25rem 0.2rem 0rem;
`;

export const AvatarImage = styled.img`
  filter: invert(100%);
  padding: 0.625rem;
  width: 3rem;
`;

export const HeaderSearchIcon = styled.img`
  width: 1.5625rem;
`;

export const HeaderLogo = styled.img`
  width: 15.5rem;
  padding-left: 11rem;
`;

export default PagePhoneHeader;
