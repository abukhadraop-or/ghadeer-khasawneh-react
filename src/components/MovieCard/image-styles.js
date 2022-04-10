import styled from 'styled-components';

const Image = styled.img`
  border-radius: 0.625rem;
  margin-right: 0.625rem;
  width: 25%;

  @media (min-width: 37.5rem) {
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    width: 100%;
  }
`;

export default Image;
