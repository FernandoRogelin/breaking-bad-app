import React from 'react';
import { render, wait, fireEvent } from 'react-testing-library';
import { Router } from '#/server/routes';

Router.pushRoute = jest.fn();

import { getQuotes } from '#/services/breakingBadService';
import Quotes from '..';

jest.mock('#/services/breakingBadService');

describe('Quotes container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Quotes snapshot', () => {
    const { container } = render(<Quotes />);

    expect(container).toMatchSnapshot();
  });

  test('Inicial flow', async () => {
    render(<Quotes />);

    await wait(() => expect(getQuotes).toHaveBeenCalledTimes(1));
  });

  test('Handle character page', () => {
    const { getByTestId } = render(<Quotes />);

    fireEvent.click(getByTestId('handle-characters-page'));
  });
});
