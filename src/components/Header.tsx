import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <header className="bg-secondary text-light text-sm p-2 flex justify-between items-center font-poppins">
            <div className="flex items-center space-x-4">
                <nav className="flex space-x-4">
                    <a href="#configuracion" className=" focus:bg-primary active:bg-primary text-light p-2 rounded">Configuración</a>
                    <a href="#clientes" className=" focus:bg-primary active:bg-primary text-light p-2 rounded">Clientes</a>
                    <a href="#oportunidades" className=" focus:bg-primary active:bg-primary text-light p-2 rounded">Oportunidades</a>
                    <a href="#seguimiento" className=" focus:bg-primary active:bg-primary text-light p-2 rounded">Seguimiento</a>
                    <a href="#dashboard" className=" focus:bg-primary active:bg-primary text-light p-2 rounded">Dashboard</a>
                </nav>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <img src="/src/assets/logodragons.png" alt="Logo" className="h-20 w-auto" />
                
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-light" />
            <span className="ml-2 pr-2 font-bold">Dragon24</span>
            </div>
        </header>
    );
}