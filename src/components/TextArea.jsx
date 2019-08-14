import styled, { css } from 'styled-components';

export const TextArea = styled.textarea`
  border: 1px solid orange;
  border-radius: 3px;
  color: gray;
  font-family: "Arial", "Helvetica Neue", "Helvetica", "sans-serif";
  font-size: 1rem;
  min-height: 15rem;
  margin: 0 auto;
  max-width: 100%;
  min-width: 100%;
  padding: 0.5rem;

  ${props => props.comment && css`
    border: 1px solid rgb(46,139,87);
    min-height: 10rem;
    margin-left: 2rem;
    max-width: 80%;
    min-width: 80%;
  `}
`;

export default TextArea;
