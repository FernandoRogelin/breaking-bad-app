import styled, { css } from 'styled-components';

import ButtonComponent from '#/components/Button';

export const Top = styled.div`
  display: flex;
  padding: 8px 100px 8px 30px;
  justify-content: space-between;
  border-bottom: 1px solid #919191;
`;

export const Name = styled.p`
  margin: 0;
  color: #8c9aa3;
  font-size: 20px;
`;

export const Text = styled.p`
  margin: 0;

  @media only screen and (max-width: 440px) {
    &:last-child {
      display: none;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  margin: 0 15px;
  padding: 6px 15px;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: solid 1px #ddd;
  }

  @media only screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.background});
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Header = styled.header`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(ButtonComponent)`
  font-size: 12px;
  padding: 5px 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
