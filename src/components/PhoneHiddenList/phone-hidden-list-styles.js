import styled from 'styled-components';

const HiddenList = styled.ul`
  align-items: space-between;
  background-color: #032541;
  color: white;
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  gap: 20px;
  height: 62.5rem;
  margin-top: 3.75rem;
  opacity: 0.9;
  padding: 1.875rem;
  position: fixed;
  width: 21.875rem;
  z-index: 999;
`;
export const StyledItem = styled.li`
  font-size: 1.3rem;
  padding: .9375rem;
`;

export const StyledOpenningText = styled.li`
  font-size: 1.3rem;
  padding: .9375rem;
`;

export const StyledMenu = styled.li`
  font-size: .9375rem;
  padding: .9375rem;

`;
export default HiddenList;
