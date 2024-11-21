import React, { useState, useEffect } from 'react';
import { ClientList } from '../components/ClientList';
import { Link } from 'react-router-dom';
import { Main } from '../layout/Main';
import { Client } from '../core/interface/client';

export function Cliente() {
    const [clientes, setClientes] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // Simula una llamada a la API para obtener los clientes
        setTimeout(() => {
            try {
                const fetchedClientes: Client[] = [
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
                setClientes(fetchedClientes);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        }, 1000);
    }, []);

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
            <ClientList clientes={clientes} loading={loading} error={error} />
        </Main>
    );
}