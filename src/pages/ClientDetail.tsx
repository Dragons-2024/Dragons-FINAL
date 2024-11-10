// src/pages/ClientDetail.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Client } from "../core/interface/client"; // Asegúrate de importar 'Client'
import { DetailClientTable } from "../components/DetailClientTable";
import { Main } from "../layout/Main";

const ClientDetail: React.FC = () => {
  const location = useLocation();
  const cliente = location.state as Client;

  if (!cliente) {
    return <div>No se encontraron detalles del cliente.</div>;
  }

  return (
    <Main>

    <div className="container mx-auto mt-5">
      <DetailClientTable cliente={cliente} />
    </div>
    </Main>
  );
};

export default ClientDetail;