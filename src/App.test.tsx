import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Clear/i);
  const linkElement1 = screen.getByText(/1/i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
});
