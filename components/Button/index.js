import styled, { css } from 'styled-components';

const Button = styled.button`
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  border-radius: 100px;
  background-color: #1da1f2;
  border: 1px solid #1da1f2;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: #c9c9c9;
      border: 1px solid #c9c9c9;
    `}
`;

export default Button;
