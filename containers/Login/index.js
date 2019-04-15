import React from 'react';
import { Router } from '#/server/routes';

import * as Yup from 'yup';
import { Formik } from 'formik';
import Conta from '#/conta';
import Button from '#/components/Button';

import { Section, Wrapper, Title, Input, Form, Content } from './styles';

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  function handleSubmit(values) {
    if (Conta.login === values.email && Conta.senha === values.password) {
      Router.pushRoute('timeline');
    }
  }

  return (
    <Section>
      <Content>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => handleSubmit(values)}
          validationSchema={schema}
        >
          {({
            dirty,
            values,
            errors,
            touched,
            isValid,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Entrar no site</Title>
              <Wrapper>
                <Input
                  id="email"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Login"
                  value={values.email}
                  onChange={handleChange}
                  data-testid="input-email"
                  error={errors.email && touched.email}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onBlur={handleBlur}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  data-testid="input-password"
                  error={errors.password && touched.password}
                />
              </Wrapper>
              <Button
                data-testid="button-submit"
                disabled={!isValid || !dirty}
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Section>
  );
}
