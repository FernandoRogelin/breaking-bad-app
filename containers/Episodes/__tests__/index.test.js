import React from 'react';
import { render, wait, fireEvent } from 'react-testing-library';
import { Router } from '#/server/routes';

Router.pushRoute = jest.fn();

import { getEpisodesList } from '#/services/breakingBadService';
import Episodes from '..';

jest.mock('#/services/breakingBadService');

describe('Episodes container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Episodes snapshot', () => {
    const { container } = render(<Episodes />);

    expect(container).toMatchSnapshot();
  });

  test('Inicial flow', async () => {
    const { getByTestId } = render(<Episodes />);

    await wait(() => expect(getEpisodesList).toHaveBeenCalledTimes(1));

    expect(getByTestId('episodes-list')).toBeVisible();
  });

  test('Handle character page', () => {
    const { getByTestId } = render(<Episodes />);

    fireEvent.click(getByTestId('handle-characters-page'));
  });

  test('Handle episodes details', async () => {
    const { getByTestId } = render(<Episodes />);

    await wait(() => expect(getEpisodesList).toHaveBeenCalledTimes(1));

    expect(getByTestId('episode-details-button')).toBeVisible();

    fireEvent.click(getByTestId('episode-details-button'));
  });
});
