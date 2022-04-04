import styled from 'styled-components';

const StyledImage = styled.img`
  border-radius: .625rem;
  margin-right: .625rem;
  width: 25%;
  @media (min-width: 37.5rem) {
    border-top-left-radius: .625rem;
    border-top-right-radius: .625rem;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
    width: 100%;
  }
`;
export default StyledImage;