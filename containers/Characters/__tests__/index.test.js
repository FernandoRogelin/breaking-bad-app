import React from 'react';
import { render, wait, fireEvent } from 'react-testing-library';

import { getCharacters } from '#/services/breakingBadService';
import Characters from '..';

jest.mock('#/services/breakingBadService');

describe('Characters container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Characters snapshot', () => {
    const { container } = render(<Characters />);

    expect(container).toMatchSnapshot();
  });

  test('Inicial flow', async () => {
    const { getByTestId } = render(<Characters />);

    await wait(() => expect(getCharacters).toHaveBeenCalledTimes(1));

    expect(getByTestId('character-items')).toBeVisible();

    expect(getByTestId('details-character-button')).toBeVisible();
  });

  test('Details page', async () => {
    const { getByTestId } = render(<Characters />);

    await wait(() => expect(getCharacters).toHaveBeenCalledTimes(1));

    fireEvent.click(getByTestId('details-character-button'));
  });
});
