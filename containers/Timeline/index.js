import React, { useState, useEffect } from 'react';

import { Link } from '#/server/routes';

import { getDragons, deleteDragon } from '#/services/dragonsService';
import Content from '#/components/Content';

import {
  Section,
  Title,
  Itens,
  Name,
  Button,
  Actions,
  Header,
  Text,
  Top,
} from './styles';

export default function Timeline() {
  const [dragons, setDragons] = useState();
  const [called, setCalled] = useState(false);

  async function handleDragons() {
    try {
      const { data } = await getDragons();
      setDragons(data);
      setCalled(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteDragon(id);
      location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!called) {
      handleDragons();
    }
  }, [called]);

  return (
    <Section>
      <Title>Lista de dragões</Title>
      <Header>
        <Link route="create">
          <Button>Adicionar</Button>
        </Link>
      </Header>
      {dragons && (
        <Content>
          <Top>
            <Text>Nome</Text>
            <Text>Ações</Text>
          </Top>
          {dragons
            .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
            .map(({ name, id }) => (
              <Itens key={id}>
                <Name>{name}</Name>
                <Actions>
                  <Link route="edit" params={{ id }}>
                    <Button>Editar</Button>
                  </Link>
                  <Button onClick={() => handleDelete(id)}>Remover</Button>
                  <Link route="details" params={{ id }}>
                    <Button>Detalhes</Button>
                  </Link>
                </Actions>
              </Itens>
            ))}
        </Content>
      )}
    </Section>
  );
}
