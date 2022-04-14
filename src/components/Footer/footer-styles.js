import styled from 'styled-components';
import {smallScreen, } from 'styles/break-points';

const PageFooter = styled.div`
  padding-top: 1.25rem;

  @media (min-width: ${smallScreen}) {
    background: #032541;
    color: #ffffff;
    font-size: 1.08rem;
    font-weight: 400;
    padding-top: 0rem;
  }
`;

export const Container = styled.div`
  align-items: space-between;
  background: #032541;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem;

  @media (min-width: ${smallScreen}) {
    align-items: flex-start;
    flex-direction: row;
    font-size: 1.25rem;
    font-weight: normal;
    gap: 1.5625rem;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 5rem 2.5rem 5rem 2.5rem;
    width: fit-content;
  }
`;

export const UserSection = styled.div`
  background-color: white;
  border-bottom-style: solid;
  border-radius: 0.313rem;
  color: rgb(1, 180, 228);
  cursor: pointer;
  font-size: 1.17rem;
  font-weight: 700;
  padding: 0.9rem 0.313rem 0.9rem 0.313rem;
`;

export const Image = styled.img`
  display: none;

  @media (min-width: 36rem) {
    display: block;
    padding-bottom: 1.2rem;
    padding-left: 6.25rem;
    width: 13rem;
  }
`;

export const Title = styled.div`
  font-size: 1.26rem;
  font-weight: 700;
  padding-bottom: 0.625rem;
`;

export const Element = styled.h1`
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.1875rem;
`;

export default PageFooter;
