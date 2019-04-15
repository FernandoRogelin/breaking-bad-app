import styled, { css } from 'styled-components';

import ContentComponent from '#/components/Content';

export const Section = styled.section`
  width: auto;
  display: flex;
  justify-content: center;
  padding: 36px 14px 15px;
`;

export const Content = styled(ContentComponent)`
  width: 835px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: auto;
  margin: 0 auto;
  max-width: 585px;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  margin: 20px 0 25px;
`;

export const Input = styled.input`
  width: 97%;
  outline: none;
  padding: 4px;
  font-size: 14px;
  max-width: 280px;
  line-height: 20px;
  border-radius: 3px;
  margin-bottom: 15px;
  background-color: #fff;
  border: 1px solid #e6ecf0;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
    `}

  &::placeholder {
    color: #8899a6;
  }
`;
