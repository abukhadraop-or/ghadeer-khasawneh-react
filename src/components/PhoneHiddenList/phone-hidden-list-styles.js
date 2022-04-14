import styled from 'styled-components';

const HiddenList = styled.ul`
  align-items: space-between;
  background-color: #032541;
  color: white;
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  gap: 1.25rem;
  margin-top: 3.75rem;
  opacity: 0.9;
  padding-bottom: 20rem;
  padding-right: 13rem;
  position: fixed;
  z-index: 999;
`;

export const Item = styled.li`
  font-size: 1.3rem;
  padding: 0.9375rem;
`;

export const OpeningText = styled.li`
  font-size: 1.3rem;
  padding: 0.9375rem;
`;

export const Menu = styled.li`
  font-size: 0.9375rem;
  padding: 0.9375rem;
`;

export default HiddenList;
