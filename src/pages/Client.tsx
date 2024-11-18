import { ClientList } from '../components/ClientList';
import { Link } from 'react-router-dom';
import { Main } from '../layout/Main';
export function Cliente() {
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
            <ClientList />
        </Main>
    );
}