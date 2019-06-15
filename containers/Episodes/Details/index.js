import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import { getEpisodeDetails } from '#/services/breakingBadService';

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
  const [episodeDetails, setEpisodeDetails] = useState();
  const [fetched, setFetched] = useState(false);

  async function handleCharacterDetails() {
    try {
      const { data } = await getEpisodeDetails(id);

      setFetched(true);
      setEpisodeDetails(data);
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
        <Button
          data-testid="return-episodes-page"
          onClick={setStateDetailsPage}
        >
          Return
        </Button>
        <Title>Episodes Details</Title>
      </Header>
      {episodeDetails && (
        <Content>
          {episodeDetails[0].title && (
            <Items>
              <Text>Title:</Text>
              <Info>{episodeDetails[0].title}</Info>
            </Items>
          )}
          {episodeDetails[0].season && (
            <Items>
              <Text>Season:</Text>
              <Info>{episodeDetails[0].season}</Info>
            </Items>
          )}
          {episodeDetails[0].characters && (
            <Items>
              <Text>Characters:</Text>
              <Info>{episodeDetails[0].characters}</Info>
            </Items>
          )}
          {episodeDetails[0].air_date && (
            <Items>
              <Text>Air Date:</Text>
              <Info>{format(episodeDetails[0].air_date, 'DD/MM/YYYY')}</Info>
            </Items>
          )}
        </Content>
      )}
    </Wrapper>
  );
}
