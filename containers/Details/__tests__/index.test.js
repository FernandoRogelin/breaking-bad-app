import React from 'react';
import { render, wait } from 'react-testing-library';
import { Router } from '#/server/routes';

import { getDetailsDragon } from '#/services/dragonsService';
import Details from '..';

Router.pushRoute = jest.fn();

const mockedRouter = { query: { id: () => {} } };
Router.router = mockedRouter;

jest.mock('#/services/dragonsService');

describe('Details container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Details snapshot', async () => {
    const { container } = render(<Details />);

    await wait(() =>
      expect(getDetailsDragon).toHaveBeenCalledWith(mockedRouter.query.id)
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
