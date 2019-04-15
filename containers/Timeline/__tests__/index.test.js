import React from 'react';
import { render, wait, fireEvent } from 'react-testing-library';

import { getDragons, deleteDragon } from '#/services/dragonsService';
import Timeline from '..';

jest.mock('#/services/dragonsService');

describe('Timeline container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Timeline snapshot', () => {
    const { container } = render(<Timeline />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Inicial flow', async () => {
    const { getByTestId } = render(<Timeline />);

    await wait(() => expect(getDragons).toHaveBeenCalledTimes(1));

    fireEvent.click(getByTestId('delete-button'));

    await wait(() => expect(deleteDragon).toHaveBeenCalledTimes(1));
  });
});
