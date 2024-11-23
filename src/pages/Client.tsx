import { useState, useEffect } from 'react';
import { Main } from '../layout/Main';
import { ClientList } from '../components/ClientList';
import { Client } from '../core/interface/client';
import axios from 'axios';

export function Cliente() {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get('https://dragons-final-api.onrender.com/clientes')
      .then(response => {
        setClientes(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <Main>
      <div className="p-4">
        <h2>Lista de Clientes</h2>
        <a href="/crear-cliente">Crear Cliente</a>
      </div>
      <ClientList clientes={clientes} loading={loading} error={error} />
    </Main>
  );
}