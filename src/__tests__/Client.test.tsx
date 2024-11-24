
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cliente } from '../pages/Client';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const mockClientes = [
    {
        id: 1,
        nombre: "Juan Pérez",
        telefono: "123456789",
        direccion: "Calle Falsa 123",
        nit: "1234567890",
        ciudad: "Ciudad Ejemplo",
        pais: "País Ejemplo",
        correoCorporativo: "juan.perez@empresa.com",
        activo: true,
        contactos: [
            {
                nombre: "Carlos",
                apellido: "Gómez",
                correo: "carlos.gomez@empresa.com",
                telefono: "987654321"
            }
        ]
    }
];

mock.onGet('https://dragons-final-api.onrender.com/clientes').reply(200, mockClientes);

describe("Cliente Component", () => {
  const queryClient = new QueryClient();

  test('renders Lista de Clientes text', async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Cliente />
          </BrowserRouter>
        </QueryClientProvider>
      );
    });
    const headingElement = screen.getByText(/Lista de Clientes/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Crear Cliente link', async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Cliente />
          </BrowserRouter>
        </QueryClientProvider>
      );
    });
    const linkElement = screen.getByText(/Crear Cliente/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders ClientList component', async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Cliente />
          </BrowserRouter>
        </QueryClientProvider>
      );
    });
    await waitFor(() => {
      const clientListElement = screen.getByTestId('client-list');
      expect(clientListElement).toBeInTheDocument();
    });
  });

  test('displays no clients message when list is empty', async () => {
    mock.onGet('https://dragons-final-api.onrender.com/clientes').reply(200, []);
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Cliente />
          </BrowserRouter>
        </QueryClientProvider>
      );
    });

    await waitFor(() => {
      const noClientsMessage = screen.getByText(/No hay clientes registrados/i);
      expect(noClientsMessage).toBeInTheDocument();
    });
  });

  test('displays error message when there is an error', async () => {
    mock.onGet('https://dragons-final-api.onrender.com/clientes').reply(500);
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Cliente />
          </BrowserRouter>
        </QueryClientProvider>
      );
    });

    await waitFor(() => {
      const errorMessage = screen.getByText(/No se ha podido cargar la información/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});