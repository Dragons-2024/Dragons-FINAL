// src/__tests__/App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders Detalles del Cliente text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Detalles del Cliente/i);
  expect(headingElement).toBeInTheDocument();
});