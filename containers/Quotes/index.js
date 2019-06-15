import React, { useState, useEffect } from 'react';

import { Router } from '#/server/routes';
import { getQuotes } from '#/services/breakingBadService';

import {
  Top,
  Name,
  Text,
  Title,
  Itens,
  Quote,
  Header,
  Button,
  Wrapper,
  Content,
} from './styles';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function handleQuotesList() {
    try {
      const { data } = await getQuotes();

      setFetched(true);
      setQuotes(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!fetched) {
      handleQuotesList();
    }
  }, [fetched]);

  return (
    <Wrapper>
      <Header>
        <Button
          top
          data-testid="handle-characters-page"
          onClick={() => Router.pushRoute('characters')}
        >
          Return
        </Button>
        <Title>Quotes List</Title>
      </Header>
      {quotes && (
        <Content data-testid="quotes-list">
          <Top>
            <Text>Quotes</Text>
          </Top>
          {quotes
            .sort((a, b) =>
              a.author < b.author ? -1 : a.author > b.author ? 1 : 0
            )
            .map(({ author, quote, quote_id }) => (
              <Itens key={quote_id}>
                <Name>{author}</Name>
                <Quote>{quote}</Quote>
              </Itens>
            ))}
        </Content>
      )}
    </Wrapper>
  );
}
