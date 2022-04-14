import styled from 'styled-components';

export const Sort = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.0625rem solid #e3e3e3;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.9375rem;
`;

export const SortForm = styled.form`
  border-top: 0.0625rem solid #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0.9375rem;
  padding-top: 0.9rem;
`;

export const SortLabel = styled.label`
  color: black;
  font-size: 0.9375rem;
  font-weight: normal;
  padding-bottom: 0.9rem;
  padding-top: 0.2rem;
`;

export const SelectionList = styled.select`
  background: #e0e0e0;
  border-radius: 0.3125rem;
  border: 0.3125rem solid #e0e0e0;
  font-size: 0.9375rem;
  font-weight: 300;
  padding-top: 0.3125rem;
  text-align: center;
  width: 100%;
`;

export const SortOptions = styled.option`
  background-color: white;
`;

export const SortAndArrow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowImage = styled.img`
  transform: ${(props) =>
    props.listIsShown ? 'rotate(90deg)' : 'rotate(0deg)'};
  width: 0.9375rem;
`;
