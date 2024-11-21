// src/__tests__/Cliente.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import {Cliente} from '../pages/Client';

test('renders Lista de Clientes text', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Cliente />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(/Lista de Clientes/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Crear Cliente link', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Cliente />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Crear Cliente/i);
  expect(linkElement).toBeInTheDocument();
});