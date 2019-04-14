import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from '#/server/routes';

import { editDragon, getDetailsDragon } from '#/services/dragonsService';

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
  const [dragon, setDragon] = useState();
  const [called, setCalled] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    type: Yup.string().required('Campo obrigatório'),
    createdAt: Yup.string().required('Campo obrigatório'),
  });

  async function handleSubmit(values) {
    try {
      await editDragon(Router.query.id, values);

      Router.pushRoute('timeline');
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDragon() {
    try {
      const { data } = await getDetailsDragon(Router.query.id);
      setDragon(data);
      setCalled(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!called) {
      handleDragon();
    }
  }, [called]);

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => Router.pushRoute('timeline')}>Voltar</Button>
        <Title>Editar o Dragão {dragon && dragon.name}</Title>
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
                placeholder={dragon && dragon.name}
                error={errors.name && touched.name}
              />
              <Text>Tipo:</Text>
              <Input
                id="type"
                name="type"
                onBlur={handleBlur}
                value={values.type}
                onChange={handleChange}
                placeholder={dragon && dragon.type}
                error={errors.type && touched.type}
              />
              <Text>Data da criação:</Text>
              <Input
                id="createdAt"
                name="createdAt"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.createdAt}
                placeholder={dragon && dragon.createdAt}
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
