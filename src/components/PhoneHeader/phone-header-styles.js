import styled from 'styled-components';

const StyledPhoneHeader = styled.nav`
  background: #032541;
  display: none;
  height: 4.0625rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  align-items: center;
  display: block;
  display: flex;
  justify-content: space-between;

  & svg {
    color: white;
    font-size: 1.25rem;
    padding: 1.25rem;
  }
  @media (min-width: 37.5rem) {
    display: none;
  }
`;

export const StyledLeftSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 13.75rem;
`;

export const StyledRightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.25rem;
  right: 5;
  width: 5.625rem;
`;

export const StyledAvatarImage = styled.img`
  filter: invert(100%);
  padding: .625rem;
  width: 1.5625rem;
`;

export const StyledSearchIcon = styled.img`
  width: 1.5625rem;
`;

export const StyledLogo = styled.img`
  width: 3.5625rem;
`;
export default StyledPhoneHeader;