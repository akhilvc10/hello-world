import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import HelloWorld from '../src/components/HelloWorld';

afterAll(() => {
  cleanup();
});

jest.mock('axios');
test('should upload the file', () => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  render(<HelloWorld />);
  axios.post.mockResolvedValue({
    status: 'success'
  });
  const input = screen.getByTestId('element');
  userEvent.upload(input, file);
  axios.put.mockResolvedValue({
    status: 200
  });
  expect(input.files[0]).toEqual(file);
  expect(input.files).toHaveLength(1);
  expect(screen.getByText(/hello\.png/)).toBeInTheDocument();
});
