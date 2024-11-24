// src/pages/ClientDetail.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Client } from "../core/interface/client"; 
import { DetailClientTable } from "../components/DetailClientTable";
import { Main } from "../layout/Main";
import { ClientOportunityList } from "../components/ClientOportunityList";

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
    <ClientOportunityList ClientName={cliente.nombre}/>
 
    </Main>
  );
};

export default ClientDetail;