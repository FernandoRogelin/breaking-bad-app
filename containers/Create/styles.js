import styled, { css } from 'styled-components';

import ButtonComponent from '#/components/Button';
import ContentComponent from '#/components/Content';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
`;

export const Content = styled(ContentComponent)`
  padding: 15px 0;
`;

export const Text = styled.p`
  margin: 0 0 0 10px;
`;

export const Info = styled.span`
  color: #8c9aa3;
  margin: 0 0 0 5px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 26px;
`;

export const Button = styled(ButtonComponent)`
  left: -80px;
  padding: 1px 6px;
  position: absolute;

  @media only screen and (max-width: 440px) {
    left: -60px;
  }
`;

export const Input = styled.input`
  outline: none;
  font-size: 14px;
  max-width: 280px;
  line-height: 20px;
  margin-left: 30px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e6ecf0;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
    `}

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &::placeholder {
    color: #8899a6;
  }
`;

export const Actions = styled.div`
  padding-left: 30px;
`;

export const ButtonSubmit = styled(ButtonComponent)`
  margin-right: 30px;
`;
