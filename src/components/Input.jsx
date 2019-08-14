import styled, { css } from 'styled-components';

export const Input = styled.input`
  border: 1px solid orange;
  border-radius: 3px;
  color: gray;
  font-family: sans-serif;
  font-size: 14px;
  height: 1.5rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  width: 75%;
  word-spacing: 5px;

  ${props => props.comment && css `
    border: 1px solid rgb(46,139,87);
    margin-top: 1rem;
    margin-left: 2rem;
    width: 40%;
  `}
`;

export default Input;
