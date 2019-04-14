import React from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from '#/server/routes';
import { createDragon } from '#/services/dragonsService';

import {
  Wrapper,
  Title,
  Content,
  Text,
  Input,
  Header,
  Button,
  ButtonSubmit,
  Actions,
} from './styles';

export default function Edit() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    type: Yup.string().required('Campo obrigatório'),
    createdAt: Yup.string().required('Campo obrigatório'),
  });

  async function handleSubmit(values) {
    try {
      await createDragon(values);

      Router.pushRoute('timeline');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => Router.pushRoute('timeline')}>Voltar</Button>
        <Title>Criar um dragão novo</Title>
      </Header>
      <Content>
        <Formik
          initialValues={{
            name: '',
            type: '',
            createdAt: '',
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
            <form onSubmit={handleSubmit}>
              <Text>Nome:</Text>
              <Input
                id="name"
                name="name"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                error={errors.name && touched.name}
              />
              <Text>Tipo:</Text>
              <Input
                id="type"
                name="type"
                onBlur={handleBlur}
                value={values.type}
                onChange={handleChange}
                error={errors.type && touched.type}
              />
              <Text>Data da criação:</Text>
              <Input
                id="createdAt"
                name="createdAt"
                onBlur={handleBlur}
                value={values.createdAt}
                onChange={handleChange}
                error={errors.createdAt && touched.createdAt}
              />
              <Actions>
                <ButtonSubmit disabled={!isValid || !dirty} type="submit">
                  Enviar
                </ButtonSubmit>
              </Actions>
            </form>
          )}
        </Formik>
      </Content>
    </Wrapper>
  );
}
