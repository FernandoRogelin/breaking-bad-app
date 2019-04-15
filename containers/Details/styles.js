import styled from 'styled-components';

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

export const Info = styled.p`
  color: #8c9aa3;
  margin: 0 0 0 30px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  margin-bottom: 26px;
  align-items: center;
`;

export const Button = styled(ButtonComponent)`
  left: -80px;
  padding: 1px 6px;
  position: absolute;

  @media only screen and (max-width: 440px) {
    left: -60px;
  }
`;
