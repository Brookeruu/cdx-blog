import styled, { css } from 'styled-components';

export const Button = styled.button`
  align-self: center;
  border: 1px solid #8f8f8f;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Pompiere', cursive;
  font-size: 1rem;
  height: 1.75rem;
  margin-right: 2rem;
  min-width: 5rem;
  padding: 0.25rem;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
  }

  ${props => props.delete && css`
      align-self: right;
      color: rgb(178,48,0);
      border: 1px solid rgb(178,48,0);
    :hover {
      background-color: rgba(178,48,0,0.3);
      border: none;
      color: rgb(145, 48,0);
    }
  `}

    ${props => props.edit && css`
      border: 1px solid rgba(255, 179, 71);
      margin-left: 2rem;
    :hover {
      background-color: rgba(255, 179, 71,0.4);
      border: none;
      color: black;
    }
  `}

  ${props => props.comment && css `
    border: 1px solid rgb(46,139,87);
    margin-left: 2rem;
    margin-top: 2rem;
    :hover {
       background-color: rgba(6,139,87,0.4);
    }
  `}
  
`;

export default Button;
