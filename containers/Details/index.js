import React, { useState, useEffect } from 'react';

import { Router } from '#/server/routes';
import { getDetailsDragon } from '#/services/dragonsService';

import { Wrapper, Title, Content, Text, Info, Header, Button } from './styles';

export default function Details() {
  const [details, setDetails] = useState();
  const [called, setCalled] = useState(false);

  async function handleDragon() {
    try {
      const { data } = await getDetailsDragon(Router.query.id);
      setDetails(data);
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
        <Title>Detalhes do dragão</Title>
      </Header>
      {details && (
        <Content>
          <Text>Nome:</Text>
          {details && <Info>{details.name}</Info>}
          <Text>Tipo:</Text>
          {details && <Info>{details.type}</Info>}
          <Text>Dia de criação:</Text>
          {details && <Info>{details.createdAt}</Info>}
        </Content>
      )}
    </Wrapper>
  );
}
