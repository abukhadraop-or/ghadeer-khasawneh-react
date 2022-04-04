import styled from 'styled-components';

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  justify-content: space-between;
  padding: 0rem 5vw 0rem 5vw;

  @media (min-width: 37.5rem) {
    flex-direction: row;
    padding: 5.625rem 15vw 0rem 15vw;
    width: auto;
  }
`;
export default StyledMainContent;
