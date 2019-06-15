import React, { useState, useEffect } from 'react';

import { Router } from '#/server/routes';
import { getEpisodesList } from '#/services/breakingBadService';
import Details from './Details';

import {
  Top,
  Name,
  Text,
  Title,
  Itens,
  Header,
  Button,
  Wrapper,
  Content,
} from './styles';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [id, setId] = useState('');
  const [isShowDetails, setIsShowDetails] = useState(false);

  async function handleEpisodesList() {
    try {
      const { data } = await getEpisodesList();

      setFetched(true);
      setEpisodes(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!fetched) {
      handleEpisodesList();
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
        <Wrapper>
          <Header>
            <Button
              top
              data-testid="handle-characters-page"
              onClick={() => Router.pushRoute('characters')}
            >
              Return
            </Button>
            <Title>Episodes List</Title>
          </Header>
          {episodes && (
            <Content data-testid="episodes-list">
              <Top>
                <Text>Title</Text>
                <Text>Actions</Text>
              </Top>
              {episodes
                .sort((a, b) =>
                  a.title < b.title ? -1 : a.title > b.title ? 1 : 0
                )
                .map(({ title, episode_id }) => (
                  <Itens key={episode_id}>
                    <Name>{title}</Name>
                    <Button
                      onClick={() => handleDetailsPage(episode_id)}
                      data-testid="episode-details-button"
                    >
                      Episodes details
                    </Button>
                  </Itens>
                ))}
            </Content>
          )}
        </Wrapper>
      )}
    </div>
  );
}
