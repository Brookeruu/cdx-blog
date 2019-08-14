import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  overflow: scroll;
  padding: 0 0 2rem;
  margin: 1rem auto 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: sans-serif;
  width: 85%;
  height: fit-content;

  ${props => props.comment && css`
    box-shadow: none;
    height: fit-content;
    margin-bottom: 0px;
    margin-top: -1rem;
  `}
`;

export const CardHeader = styled.header`
  padding: 2rem;
`;

export const CardHeading = styled.h1`
  font-family: 'Pompiere', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: lowercase;

  ${props => props.comment && css `
    font-size: 1.25rem;
    margin-bottom: -0.5rem;
    text-transformm: capitalize;
  `}
`;

export const CardSubheading = styled.h5`
  color: gray;
  font-family: 'Pompiere', cursive;
  font-size: 1rem;
  text-transform: uppercase;

  ${props => props.comment && css`
   margin-bottom: 0;
  `}
`;

export const CardBody = styled.div`
  color: black;
  padding: 2rem;
  padding-top: 0rem;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: light;
  letter-spacing: 2px;
  line-height: 1.5rem;
  margin-top: -2rem;
  word-spacing: 3px;

    ${props => props.comment && css `
      color: gray;
      letter-spacing: 1px;
      margin-left: -2rem;
      margin-top: 0.5rem;
    `}
`;

export const CardInput = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1rem;
  padding: 0.5rem;
  width: 100%;
  word-spacing: 5px;

  ${'' /* &:focus {
    border: 1px solid black;
  } */}
`;
