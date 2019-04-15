import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import { Router } from '#/server/routes';

import Login from '../';

const handleSubmit = jest.fn();
Router.pushRoute = jest.fn();

describe('Login container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Snapshot test', () => {
    const { container } = render(<Login />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Inicial flow', async () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId('button-submit')).toBeDisabled();

    await wait(() => {
      fireEvent.change(getByTestId('input-email'), {
        target: { value: 'teste@hotmail.com' },
      });
    });

    await wait(() => {
      fireEvent.change(getByTestId('input-password'), {
        target: { value: '123456' },
      });
    });

    await wait(() => fireEvent.click(getByTestId('button-submit')));

    await wait(() => expect(handleSubmit).toHaveBeenCalledTimes(0));
  });
});
