import React, { useState, useEffect } from 'react';
import { ClientList } from '../components/ClientList';
import { Link } from 'react-router-dom';
import { Main } from '../layout/Main';
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

    const noClientsMessage = "No hay clientes registrados";
    const errorMessage = "No se ha podido cargar la información";

    return (
        <Main>
            <div className="p-4">
                <div className="flex justify-between my-8 pl-4">
                    <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">Lista de Clientes</h2>
                    <Link
                        to="/crear-cliente"
                        className="bg-[#4A5FD9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
                    >
                        Crear Cliente
                    </Link>
                </div>
            </div>
            {loading ? (
                <div aria-label="loading">Cargando...</div>
            ) : error ? (
                <div>{errorMessage}</div>
            ) : clientes.length === 0 ? (
                <div>{noClientsMessage}</div>
            ) : (
                <ClientList clientes={clientes} loading={loading} error={error} />
            )}
        </Main>
    );
}
