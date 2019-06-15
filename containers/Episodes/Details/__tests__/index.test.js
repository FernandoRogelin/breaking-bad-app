import React from 'react';
import { render, wait, fireEvent } from 'react-testing-library';

import { getEpisodeDetails } from '#/services/breakingBadService';
import EpisodeDetails from '..';

jest.mock('#/services/breakingBadService');

const props = {
  id: 16,
  setStateDetailsPage: jest.fn(),
};

describe('Details container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Details snapshot', async () => {
    const { container } = render(<EpisodeDetails {...props} />);

    await wait(() => expect(getEpisodeDetails).toHaveBeenCalledWith(props.id));

    expect(container).toMatchSnapshot();
  });

  test('Return episodes page', async () => {
    const { getByTestId } = render(<EpisodeDetails {...props} />);

    fireEvent.click(getByTestId('return-episodes-page'));

    expect(props.setStateDetailsPage).toHaveBeenCalled();
  });
});
