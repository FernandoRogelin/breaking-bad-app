import React, { useState } from 'react';
import { Router } from '#/server/routes';

import Conta from '#/conta';
import Button from '#/components/Button';

import { Section, Wrapper, Title, Input, Form, Content } from './styles';

export default function Login() {
  const [conta, setConta] = useState({
    user: '',
    password: '',
  });

  function handleChange(e, input) {
    setConta({ ...conta, [input]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Conta.login === conta.user && Conta.senha === conta.password) {
      Router.pushRoute('timeline');
    }
  }

  return (
    <Section>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Entrar no site</Title>
          <Wrapper>
            <Input
              placeholder="Login"
              onChange={e => handleChange(e, 'user')}
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={e => handleChange(e, 'password')}
            />
          </Wrapper>
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Section>
  );
}
