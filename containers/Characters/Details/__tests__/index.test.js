import React from 'react';
import { render, wait } from 'react-testing-library';

import { getCharacterDetails } from '#/services/breakingBadService';
import CharacterDetails from '..';

jest.mock('#/services/breakingBadService');

const props = {
  id: 31,
  setStateDetailsPage: jest.fn(),
};

describe('Details container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Details snapshot', async () => {
    const { container } = render(<CharacterDetails {...props} />);

    await wait(() =>
      expect(getCharacterDetails).toHaveBeenCalledWith(props.id)
    );

    expect(container).toMatchSnapshot();
  });
});
