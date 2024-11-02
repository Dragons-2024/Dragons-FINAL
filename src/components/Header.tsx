import React from 'react';

export function Header() {
    return (
        <header className="bg-primary text-light p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <nav className="flex space-x-4">
                    <a href="#configuracion" className="hover:underline text-light">Configuración</a>
                    <a href="#clientes" className="hover:underline text-light">Clientes</a>
                    <a href="#oportunidades" className="hover:underline text-light">Oportunidades</a>
                    <a href="#seguimiento" className="hover:underline text-light">Seguimiento</a>
                    <a href="#dashboard" className="hover:underline text-light">Dashboard</a>
                </nav>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
                <h1 className="text-xl font-bold ml-2">Universidad del Norte</h1>
            </div>
            <div className="flex items-center">
                <span className="mr-2">Usuario: FakeUser</span>
                <img src="/path/to/user-avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
            </div>
        </header>
    );
}