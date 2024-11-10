// src/pages/ClientDetail.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Client } from "../core/interface/client"; // Asegúrate de importar 'Client'
import { DetailClientTable } from "../components/DetailClientTable";

const ClientDetail: React.FC = () => {
  const location = useLocation();
  const cliente = location.state as Client;

  if (!cliente) {
    return <div>No se encontraron detalles del cliente.</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">Detalles del Cliente</h1>
      <DetailClientTable cliente={cliente} />
    </div>
  );
};

export default ClientDetail;