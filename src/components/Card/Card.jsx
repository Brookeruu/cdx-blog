import styled from 'styled-components';

export const CardWrapper = styled.div`
  overflow: scroll;
  padding: 0 0 2rem;
  margin: 1rem auto 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: sans-serif;
  width: 85%;
  height: 15rem;
`;

export const CardHeader = styled.header`
  padding: 2rem;
  padding-top: 4rem;
  padding-bottom: 1rem;
`;

export const CardHeading = styled.h1`
  font-family: 'Pompiere', cursive;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardSubheading = styled.h5`
  color: gray;
  font-family: 'Pompiere', cursive;
  font-size: 0.75rem;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

export const CardBody = styled.div`
  padding: 2rem;
  padding-top: 0rem;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1rem;
  font-weight: lighter;
  word-spacing: 5px;
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
