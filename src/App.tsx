import React from 'react';
import { DetailClientTable } from "./components/DetailClientTable";
import { Client } from "./core/interface/client";

const cliente: Client = {
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
};

function App() {
  return (
    <div className="App">
      <DetailClientTable cliente={cliente} />
    </div>
  );
}

export default App;