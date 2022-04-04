import styled from 'styled-components';

const HiddenList = styled.ul`
  background-color: #032541;
  color: white;
  display: flex;
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  height: 62.5rem;
  margin-top: 3.75rem;
  opacity: 0.9;
  position: fixed;
  width: 21.875rem;
  z-index: 999;
`;
export const StyledItem = styled.li``;
export default HiddenList;
