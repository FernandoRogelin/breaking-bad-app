import styled from 'styled-components';

import ButtonComponent from '#/components/Button';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Itens = styled.div`
  display: flex;
  margin: 0 15px;
  padding: 6px 15px;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: solid 1px #ddd;
  }

  @media only screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

export const Name = styled.p`
  margin: 0;
  color: #8c9aa3;
  font-size: 20px;
`;

export const Button = styled(ButtonComponent)`
  padding: 2px 6px;
  font-size: 12px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Actions = styled.div``;

export const Top = styled.div`
  display: flex;
  padding: 8px 114px 8px 30px;
  justify-content: space-between;
  border-bottom: 1px solid #919191;
`;

export const Header = styled.header`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.p`
  margin: 0;

  @media only screen and (max-width: 440px) {
    &:last-child {
      display: none;
    }
  }
`;
