import styled from 'styled-components';

export const StyledPopularMovies = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 6.25rem;
  width: 100%;
  @media (min-width: 37.5rem) {
    margin-top: 1.25rem;
    width: 16.4375rem;
  }
`;

export const StyledMenu = styled.div`
  background-color: white;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  font-weight: bold;
  font-size: 1.125rem;
  height: 1.25rem;
  padding: 0.9375rem;
  width: 87%;
`;
export const StyledTitle = styled.h1`
  font-size: 1.5625rem;
  margin-top: 0.0625rem;
`;
export const StyledEnabledButton = styled.button`
  background: #1e90ff;
  border: #f0f0f0;
  border-radius: 1.25rem;
  color: white;
  font-size: 1.2rem;
  height: 2.75rem;
  outline: none;
  text-align: center;
  &:hover {
    background: rgb(3, 37, 65);
  }
`;
export const StyledDisabledButton = styled.button`
  background: #f0f0f0;
  border-radius: 1.25rem;
  border: #f0f0f0;
  color: #0000007f;
  font-size: 1.2rem;
  font-weight:bold;
  height: 2.75rem;
  outline: none;
  text-align: center;
`;
