import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <header className="bg-secondary text-light p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <nav className="flex space-x-4">
                    <a href="#configuracion" className="hover:underline focus:bg-primary active:bg-primary text-light p-2 rounded">Configuración</a>
                    <a href="#clientes" className="hover:underline focus:bg-primary active:bg-primary text-light p-2 rounded">Clientes</a>
                    <a href="#oportunidades" className="hover:underline focus:bg-primary active:bg-primary text-light p-2 rounded">Oportunidades</a>
                    <a href="#seguimiento" className="hover:underline focus:bg-primary active:bg-primary text-light p-2 rounded">Seguimiento</a>
                    <a href="#dashboard" className="hover:underline focus:bg-primary active:bg-primary text-light p-2 rounded">Dashboard</a>
                </nav>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <img src="/src/assets/logo.png" alt="Logo" className="h-14 w-auto" />
                
            </div>
            <div className="flex items-center">
                <span className="mr-2">Usuario: FakeUser</span>
                <FontAwesomeIcon icon={faUser} className="h-8 w-8 text-light" />
            </div>
        </header>
    );
}