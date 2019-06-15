import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import { getCharacterDetails } from '#/services/breakingBadService';

import {
  Wrapper,
  Title,
  Content,
  Text,
  Info,
  Header,
  Button,
  Items,
} from './styles';

export default function Details({ id, setStateDetailsPage }) {
  const [characterDetails, setCharacterDetails] = useState();
  const [fetched, setFetched] = useState(false);

  async function handleCharacterDetails() {
    try {
      const { data } = await getCharacterDetails(id);

      setFetched(true);
      setCharacterDetails(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!fetched) {
      handleCharacterDetails();
    }
  }, [fetched]);

  return (
    <Wrapper>
      <Header>
        <Button onClick={setStateDetailsPage}>Return</Button>
        <Title>Character Details</Title>
      </Header>
      {characterDetails && (
        <Content>
          {characterDetails[0].name && (
            <Items>
              <Text>Name:</Text>
              <Info>{characterDetails[0].name}</Info>
            </Items>
          )}
          {characterDetails[0].portrayed && (
            <Items>
              <Text>Portrayed:</Text>
              <Info>{characterDetails[0].portrayed}</Info>
            </Items>
          )}
          {characterDetails[0].nickname && (
            <Items>
              <Text>Nickname:</Text>
              <Info>{characterDetails[0].nickname}</Info>
            </Items>
          )}
          {characterDetails[0].birthday && (
            <Items>
              <Text>Birthday:</Text>
              <Info>{format(characterDetails[0].birthday, 'MM/DD/YYYY')}</Info>
            </Items>
          )}
          {characterDetails[0].status && (
            <Items>
              <Text>Status:</Text>
              <Info>{characterDetails[0].status}</Info>
            </Items>
          )}
        </Content>
      )}
    </Wrapper>
  );
}
