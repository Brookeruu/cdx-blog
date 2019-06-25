import styled, { css } from 'styled-components';

export const CardWrapper = styled.div `
  overflow: scroll;
  padding: 0 0 2rem;
  margin: 1rem auto 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: Quicksand, arial, sans-serif;
  width: 35rem;
  height: 15rem;
`;

export const CardHeader = styled.header`
  padding: 3rem;
  padding-top: 4rem;
`;

export const CardHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardBody = styled.div`
  padding: 3rem;
  padding-top: 0rem;
`;



export const CardInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  font-family: inherit;
  border: 1px solid gray;
  border-radius: 5px;

  ${'' /* &:focus {
    border: 1px solid black;
  } */}
`;



