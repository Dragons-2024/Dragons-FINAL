import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cliente } from '../pages/Client';

// Mock de ClientList
jest.mock('../components/ClientList', () => ({
  ClientList: () => <div data-testid="client-list">Mocked ClientList</div>,
}));

describe("Cliente Component", () => {
  const queryClient = new QueryClient();

  test('renders Lista de Clientes text', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Cliente />
        </BrowserRouter>
      </QueryClientProvider>
    );
    const headingElement = screen.getByText(/Lista de Clientes/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Crear Cliente link', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Cliente />
        </BrowserRouter>
      </QueryClientProvider>
    );
    const linkElement = screen.getByText(/Crear Cliente/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders ClientList component', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Cliente />
        </BrowserRouter>
      </QueryClientProvider>
    );
    const clientListElement = screen.getByTestId('client-list');
    expect(clientListElement).toBeInTheDocument();
  });
});