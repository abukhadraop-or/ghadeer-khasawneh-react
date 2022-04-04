import styled from 'styled-components';

export const StyledSort = styled.div`
  background-color: white;

  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  font-size: 1.125rem;
  font-weight: bold;
  height: ${(props) => (props.listIsShown ? '6.875rem' : '1.25rem')};
  padding: 0.9375rem;
  width: 88%;
  margin-left: 0.875rem;
  @media (min-width: 37.5rem) {
    margin-left: 0.125rem;
    width: 87%;
  }
`;

export const FilterList = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const WhereToWatch = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const StyledForm = styled.form`
  border-top: 0.0625rem solid #e3e3e3;
  margin-top: 0.9375rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: black;
  font-size: 0.9375rem;
  font-weight: normal;
  margin-top: 3.125rem;
  padding-top: 0.5rem;
`;

export const StyledSelectionList = styled.select`
  background: #e0e0e0;
  border: 0.3125rem solid #e0e0e0;
  border-radius: 0.3125rem;
  font-size: 0.9375rem;
  font-weight: 300;
  margin-top: 0.625rem;
  padding-top: 0.3125rem;
  text-align: center;
  height: 2.75rem;
  width: 100%;
`;
export const StyledImage = styled.img`
  position: absolute;
  right: 1.375rem;
  top: 1.1875rem;
  width: 0.9375rem;
  @media (min-width: 37.5rem) {
    right: 0.5625rem;
    top: 1.1875rem;
  }
`;

export const StyledOptions = styled.option`
  background-color: white;
`;
export const StyledSortAndArrow = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledArrowImage = styled.img`
  position: absolute;
  right: -0.625rem;
  top: 0.25rem;
  width: 0.9375rem;
  transform: ${(props) =>
    props.listIsShown ? 'rotate(90deg)' : 'rotate(0deg)'};
`;
