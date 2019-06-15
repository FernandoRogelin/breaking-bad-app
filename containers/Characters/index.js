import React, { useState, useEffect } from 'react';

import { Link } from '#/server/routes';
import { getCharacters } from '#/services/breakingBadService';
import Content from '#/components/Content';
import Details from './Details';

import {
  Top,
  Name,
  Text,
  Itens,
  Image,
  Title,
  Header,
  Button,
  Section,
} from './styles';

export default function Characters() {
  const [characters, setCharacters] = useState();
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [id, setId] = useState('');
  const [fetched, setFetched] = useState(false);

  async function handleCharactersList() {
    try {
      const { data } = await getCharacters();

      setFetched(true);
      setCharacters(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!fetched) {
      handleCharactersList();
    }
  }, [fetched]);

  function handleDetailsPage(id) {
    setId(id);
    setIsShowDetails(!isShowDetails);
  }

  return (
    <div>
      {isShowDetails ? (
        <Details id={id} setStateDetailsPage={handleDetailsPage} />
      ) : (
        <Section>
          <Title>Characters List</Title>
          <Header>
            <Link route="episodes">
              <Button data-testid="all-episodes-button">All episodes</Button>
            </Link>
            <Link route="quotes">
              <Button data-testid="quotes-button">Quotes</Button>
            </Link>
          </Header>
          {characters && (
            <Content data-testid="character-items">
              <Top>
                <Text>Name</Text>
                <Text>Actions</Text>
              </Top>
              {characters
                .sort((a, b) =>
                  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                )
                .map(({ name, char_id, img }) => (
                  <Itens key={char_id}>
                    <div>
                      <Image background={img} />
                      <Name>{name}</Name>
                    </div>
                    <Button
                      onClick={() => handleDetailsPage(char_id)}
                      data-testid="details-character-button"
                    >
                      Character details
                    </Button>
                  </Itens>
                ))}
            </Content>
          )}
        </Section>
      )}
    </div>
  );
}
