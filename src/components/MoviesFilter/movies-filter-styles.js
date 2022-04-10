import styled from 'styled-components';

export const PopularMovies = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 6.25rem;

  @media (min-width: 37.5rem) {
    flex: 2;
    margin-top: -1.9rem;
  }

  @media (min-width: 43.75rem) {
    flex: 2;
  }

  @media (min-width: 56.25rem) {
    flex: 1.7;
  }

  @media (min-width: 81.25rem) {
    flex: 0.8;
  }
`;

export const Title = styled.h1`
  font-size: 1.5625rem;
`;

export const EnabledButton = styled.button`
  background: #1e90ff;
  border-radius: 1.25rem;
  border: #f0f0f0;
  color: white;
  font-size: 1.2rem;
  outline: none;
  padding: 0.6rem 0rem 0.6rem 0rem;

  &:hover {
    background: #032541;
  }
`;

export const DisabledButton = styled.button`
  background: #f0f0f0;
  border-radius: 1.25rem;
  border: #f0f0f0;
  color: #0000007f;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  padding: 0.6rem 0rem 0.6rem 0rem;
`;

export const FilterList = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.0625rem solid #e3e3e3;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
  padding: 0.9375rem 0.2rem 0.9375rem 0.6rem;
`;

export const WhereToWatch = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.0625rem solid #e3e3e3;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
  padding: 0.9375rem 0.2rem 0.9375rem 0.6rem;
`;

export const Image = styled.img`
  width: 0.9375rem;
`;

export const Menu = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`;
