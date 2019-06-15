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

export const Top = styled.div`
  display: flex;
  padding: 8px 114px 8px 30px;
  justify-content: space-between;
  border-bottom: 1px solid #919191;
`;

export const Itens = styled.div`
  margin: 0 15px;
  padding: 6px 15px;

  &:not(:last-child) {
    border-bottom: solid 1px #ddd;
  }

  @media only screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

export const Name = styled.p`
  margin: 0;
  color: #313944;
  font-size: 20px;
`;

export const Content = styled(ContentComponent)``;

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

export const Quote = styled.p`
  color: #8c9aa3;
  margin: 0 0 0 30px;

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
  font-size: 12px;
  padding: 5px 10px;

  ${({ top }) =>
    top &&
    css`
      left: -80px;
      padding: 1px 6px;
      position: absolute;
    `}
`;
